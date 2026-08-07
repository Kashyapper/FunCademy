// ============================================================
// FunCademy Server
// A tiny backend so accounts, progress, the leaderboard, and feedback
// are shared across every computer that talks to this server —
// instead of being trapped in one browser's local storage (which is
// all the app had before).
//
// ZERO external dependencies — only Node's own built-in modules. That
// means there's no "npm install" step, nothing to download, nothing
// that can fail to compile. Just:
//   node server.js
// It listens on port 3001 by default (set the PORT environment
// variable to change it).
//
// Storage: plain JSON files under ./data. No database server to
// install either.
// ============================================================

const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { URL } = require('url');

const PORT = process.env.PORT || 3001;
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const FEEDBACK_FILE = path.join(DATA_DIR, 'feedback.json');
const SESSIONS_FILE = path.join(DATA_DIR, 'sessions.json');

// Same two accounts the client already treats as admin-only
// (ADMIN_USERNAMES in app.js) — kept in sync manually since this is a
// tiny fixed list, not worth a shared config file.
const ADMIN_USERNAMES = ['akshara', 'kashyapper', 'kash', 'kashyap'];

const SESSION_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

// ---------- tiny JSON-file datastore ----------
function ensureDataFiles() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(USERS_FILE)) fs.writeFileSync(USERS_FILE, '{}');
  if (!fs.existsSync(FEEDBACK_FILE)) fs.writeFileSync(FEEDBACK_FILE, '[]');
  if (!fs.existsSync(SESSIONS_FILE)) fs.writeFileSync(SESSIONS_FILE, '{}');
}

function readJSON(file, fallback) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return fallback;
  }
}

function writeJSON(file, data) {
  // Write to a temp file then rename, so a crash mid-write can never
  // leave a half-written/corrupt JSON file behind.
  const tmp = file + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(data, null, 2));
  fs.renameSync(tmp, file);
}

function getUsers() { return readJSON(USERS_FILE, {}); }
function saveUsers(users) { writeJSON(USERS_FILE, users); }
function getFeedback() { return readJSON(FEEDBACK_FILE, []); }
function saveFeedback(list) { writeJSON(FEEDBACK_FILE, list); }
function getSessions() { return readJSON(SESSIONS_FILE, {}); }
function saveSessions(sessions) { writeJSON(SESSIONS_FILE, sessions); }

// ---------- password hashing (scrypt, salted per-user) ----------
function hashPassword(password, salt) {
  const useSalt = salt || crypto.randomBytes(16).toString('hex');
  const derived = crypto.scryptSync(password, useSalt, 64).toString('hex');
  return { salt: useSalt, hash: derived };
}

function verifyPassword(password, salt, expectedHash) {
  const { hash } = hashPassword(password, salt);
  const a = Buffer.from(hash, 'hex');
  const b = Buffer.from(expectedHash, 'hex');
  if (a.length !== b.length) return false;
  // Constant-time comparison to avoid timing attacks leaking the hash.
  return crypto.timingSafeEqual(a, b);
}

// ---------- session tokens ----------
function createSession(username) {
  const sessions = getSessions();
  const token = crypto.randomBytes(24).toString('hex');
  sessions[token] = { username, createdAt: Date.now(), expiresAt: Date.now() + SESSION_TTL_MS };
  saveSessions(sessions);
  return token;
}

function getUsernameForToken(token) {
  if (!token) return null;
  const sessions = getSessions();
  const session = sessions[token];
  if (!session) return null;
  if (Date.now() > session.expiresAt) {
    delete sessions[token];
    saveSessions(sessions);
    return null;
  }
  return session.username;
}

function destroySession(token) {
  const sessions = getSessions();
  if (sessions[token]) {
    delete sessions[token];
    saveSessions(sessions);
  }
}

// Strips fields that should never leave the server (password hash/salt).
function publicUser(username, record) {
  return {
    username,
    displayName: record.displayName,
    avatarEmoji: record.avatarEmoji,
    createdAt: record.createdAt,
    lastLoginAt: record.lastLoginAt,
    state: record.state || null,
    weeklyData: record.weeklyData || null
  };
}

// ---------- minimal request helpers (no framework) ----------
function sendJSON(res, statusCode, body) {
  const json = JSON.stringify(body);
  res.writeHead(statusCode, {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(json),
    // Permissive CORS: the client can be opened via file://, localhost on
    // any port, or a LAN IP, and none of those know ahead of time which
    // origin they'll be loaded from — so we just allow any origin. This
    // server holds no cookies/browser-ambient credentials, only bearer
    // tokens the client explicitly attaches, so this is a reasonable
    // tradeoff for a small self-hosted app rather than a public SaaS.
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(json);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let chunks = [];
    let size = 0;
    req.on('data', (chunk) => {
      size += chunk.length;
      if (size > 2 * 1024 * 1024) { // 2MB cap — saved progress is a JSON blob but shouldn't ever get near this
        reject(new Error('Request body too large'));
        req.destroy();
        return;
      }
      chunks.push(chunk);
    });
    req.on('end', () => {
      if (chunks.length === 0) return resolve({});
      try {
        resolve(JSON.parse(Buffer.concat(chunks).toString('utf8')));
      } catch (e) {
        resolve({});
      }
    });
    req.on('error', reject);
  });
}

function getBearerToken(req) {
  const header = req.headers['authorization'] || '';
  return header.startsWith('Bearer ') ? header.slice(7) : null;
}

// Returns the authenticated username, or sends a 401 and returns null.
function authenticate(req, res) {
  const token = getBearerToken(req);
  const username = getUsernameForToken(token);
  if (!username) {
    sendJSON(res, 401, { ok: false, error: 'Not logged in. Please sign in again.' });
    return null;
  }
  return { username, token };
}

// ---------- routes ----------
ensureDataFiles();

const routes = [];
function route(method, pattern, handler) {
  routes.push({ method, pattern, handler });
}

route('GET', '/api/health', async (req, res) => {
  sendJSON(res, 200, { ok: true, service: 'funcademy-server' });
});

route('POST', '/api/signup', async (req, res) => {
  const body = await readBody(req);
  const key = String(body.username || '').toLowerCase().trim();
  const displayName = String(body.username || '').trim();
  const password = body.password || '';
  if (!key) return sendJSON(res, 400, { ok: false, error: 'Username cannot be empty.' });
  if (key.length < 3) return sendJSON(res, 400, { ok: false, error: 'Username must be at least 3 characters.' });
  if (!password || password.length < 4) return sendJSON(res, 400, { ok: false, error: 'Password must be at least 4 characters.' });

  const users = getUsers();
  if (users[key]) return sendJSON(res, 409, { ok: false, error: 'That username is already taken. Try another!' });

  const { salt, hash } = hashPassword(password);
  const AVATAR_EMOJIS = ["🐼", "🦊", "🐸", "🐧", "🐰", "🦁", "🐒", "🐨", "🐱", "🐲", "🦄", "🐢", "🐬", "🦉", "🐝"];
  const avatarEmoji = AVATAR_EMOJIS[Object.keys(users).length % AVATAR_EMOJIS.length];

  users[key] = {
    passwordHash: hash,
    passwordSalt: salt,
    displayName,
    avatarEmoji,
    createdAt: Date.now(),
    lastLoginAt: Date.now(),
    loginCount: 1,
    state: null,
    weeklyData: null
  };
  saveUsers(users);

  const token = createSession(key);
  sendJSON(res, 200, { ok: true, token, username: key, displayName, avatarEmoji, state: null });
});

route('POST', '/api/login', async (req, res) => {
  const body = await readBody(req);
  const key = String(body.username || '').toLowerCase().trim();
  const users = getUsers();
  const user = users[key];
  if (!user) return sendJSON(res, 404, { ok: false, error: 'Account not found. Check your username or sign up!' });
  if (!verifyPassword(body.password || '', user.passwordSalt, user.passwordHash)) {
    return sendJSON(res, 401, { ok: false, error: 'Incorrect password. Try again!' });
  }

  user.lastLoginAt = Date.now();
  user.loginCount = (user.loginCount || 0) + 1;
  saveUsers(users);

  const token = createSession(key);
  sendJSON(res, 200, { ok: true, token, username: key, displayName: user.displayName, avatarEmoji: user.avatarEmoji, state: user.state || null });
});

route('GET', '/api/me', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  const users = getUsers();
  const user = users[auth.username];
  if (!user) return sendJSON(res, 404, { ok: false, error: 'Account no longer exists.' });
  sendJSON(res, 200, { ok: true, username: auth.username, displayName: user.displayName, avatarEmoji: user.avatarEmoji, state: user.state || null });
});

route('POST', '/api/logout', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  destroySession(auth.token);
  sendJSON(res, 200, { ok: true });
});

route('POST', '/api/save-state', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  const body = await readBody(req);
  const users = getUsers();
  const user = users[auth.username];
  if (!user) return sendJSON(res, 404, { ok: false, error: 'Account no longer exists.' });
  user.state = body.state !== undefined ? body.state : user.state;
  saveUsers(users);
  sendJSON(res, 200, { ok: true });
});

route('POST', '/api/save-weekly', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  const body = await readBody(req);
  const users = getUsers();
  const user = users[auth.username];
  if (!user) return sendJSON(res, 404, { ok: false, error: 'Account no longer exists.' });
  user.weeklyData = body.weeklyData !== undefined ? body.weeklyData : user.weeklyData;
  saveUsers(users);
  sendJSON(res, 200, { ok: true });
});

// Any logged-in user can see the roster — this is what powers the
// leaderboard (Hall of Fame) as well as the admin dashboard's stats
// table. No password data is ever included (see publicUser()).
route('GET', '/api/users', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  const users = getUsers();
  const list = Object.entries(users).map(([uname, record]) => publicUser(uname, record));
  sendJSON(res, 200, { ok: true, users: list });
});

route('GET', '/api/feedback', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  if (!ADMIN_USERNAMES.includes(auth.username)) return sendJSON(res, 403, { ok: false, error: 'Admins only.' });
  sendJSON(res, 200, { ok: true, feedback: getFeedback() });
});

route('POST', '/api/feedback', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  const body = await readBody(req);
  const message = String(body.message || '').trim().slice(0, 1000);
  if (!message) return sendJSON(res, 400, { ok: false, error: 'Feedback message cannot be empty.' });
  const list = getFeedback();
  list.unshift({
    id: Date.now() + '-' + Math.floor(Math.random() * 100000),
    username: auth.username,
    message,
    timestamp: Date.now()
  });
  saveFeedback(list);
  sendJSON(res, 200, { ok: true });
});

route('DELETE', '/api/feedback', async (req, res) => {
  const auth = authenticate(req, res);
  if (!auth) return;
  if (!ADMIN_USERNAMES.includes(auth.username)) return sendJSON(res, 403, { ok: false, error: 'Admins only.' });
  saveFeedback([]);
  sendJSON(res, 200, { ok: true });
});

const server = http.createServer(async (req, res) => {
  // Preflight CORS requests
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
  const match = routes.find(r => r.method === req.method && r.pattern === parsedUrl.pathname);

  if (!match) {
    return sendJSON(res, 404, { ok: false, error: 'Not found.' });
  }

  try {
    await match.handler(req, res);
  } catch (e) {
    console.error('Request handler error:', e);
    if (!res.headersSent) sendJSON(res, 500, { ok: false, error: 'Server error. Check the server logs.' });
  }
});

server.listen(PORT, () => {
  console.log(`FunCademy server listening on http://localhost:${PORT}`);
  console.log(`Data is stored in: ${DATA_DIR}`);
});

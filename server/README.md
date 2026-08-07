# FunCademy Server

This is the backend that makes accounts, progress, the leaderboard, and
feedback shared across every computer that talks to it — instead of being
trapped in one browser's local storage.

It has **zero external dependencies** (only Node's built-in modules), so
there's nothing to `npm install`.

## Running it on your own computer

```
cd "Math Academy/server"
node server.js
```

You should see:

```
FunCademy server listening on http://localhost:3001
Data is stored in: .../server/data
```

Leave that Terminal window open the whole time you're using the app —
closing it stops the server. Then open `index.html` as usual.

This mode only works when the app and the server are on the *same*
computer — anyone opening the app from a different device (or from a
GitHub Pages link) will have their browser look for a server on *their
own* computer, which isn't there.

## Making it work for anyone, from anywhere

GitHub Pages can only host static files (HTML/CSS/JS) — it cannot run
`server.js`. To make the app truly public, the server needs to run
somewhere with a real, public web address. The easiest free option is
**Render**:

1. Push this whole project (including the `server` folder) to a GitHub
   repository, if you haven't already.
2. Go to [render.com](https://render.com) and sign up (you can sign in
   with your GitHub account).
3. Click **New +** → **Web Service**, and connect your GitHub repo.
4. When asked for settings:
   - **Root Directory**: `server`
   - **Runtime**: Node
   - **Build Command**: leave blank
   - **Start Command**: `node server.js`
   - **Instance Type**: Free
5. Click **Create Web Service**. After a minute or two, Render gives you
   a public URL like `https://funcademy-server.onrender.com`.
6. Open `index.html` in your project (not the server folder) and find
   this line near the bottom, right before `<script src="app.js">`:
   ```html
   window.FUNCADEMY_API_BASE_URL = 'http://localhost:3001';
   ```
   Change it to your Render URL:
   ```html
   window.FUNCADEMY_API_BASE_URL = 'https://funcademy-server.onrender.com';
   ```
7. Push that change to GitHub. Your GitHub Pages site will now talk to
   the live server instead of `localhost`, so it'll work for anyone who
   opens the link, from any device.

**Two things worth knowing about Render's free tier:**
- The free server "falls asleep" after 15 minutes of no traffic, and
  takes 30-60 seconds to wake back up on the next request (the first
  login after a quiet period will feel slow — that's normal, not
  broken).
- The free tier's storage isn't guaranteed to survive every redeploy.
  For a family project this is usually fine, but if account/progress
  data ever needs to be bulletproof, that means adding a paid persistent
  disk on Render (a small monthly cost) or moving to a real hosted
  database later on.

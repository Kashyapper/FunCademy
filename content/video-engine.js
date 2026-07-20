// ============================================================
// VIDEO LESSON ENGINE
// Provides: lively narrated speech synced to on-screen subtitles,
// and topic-matched animated Canvas2D scenes, used by Step 1
// ("Watch & Learn") to turn the reading lesson into a video.
// ============================================================

// ---------- 1. Voice selection ----------
function pickLivelyVoice() {
  const voices = window.speechSynthesis ? window.speechSynthesis.getVoices() : [];
  if (!voices || voices.length === 0) return null;
  const preferredVoiceNames = [
    "Google US English",
    "Samantha",
    "Tessa",
    "Aria",
    "Microsoft Aria Online (Natural)",
    "Microsoft Jenny Online (Natural)",
    "Daniel",
    "Microsoft Guy Online (Natural)"
  ];
  for (const name of preferredVoiceNames) {
    const v = voices.find(v => v.name.includes(name));
    if (v) return v;
  }
  const enVoice = voices.find(v => v.lang && v.lang.startsWith('en') && /female|male/i.test(v.name) === false ? true : false);
  return voices.find(v => v.lang && v.lang.startsWith('en')) || voices[0] || null;
}

// ---------- 2. Sentence splitting ----------
function splitIntoSentences(text) {
  const clean = String(text || "")
    .replace(/<\/?[^>]+(>|$)/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!clean) return [];
  // Split on sentence-ending punctuation while keeping it attached.
  const parts = clean.split(/(?<=[.!?])\s+(?=[A-Z0-9"'“])/);
  return parts.map(s => s.trim()).filter(Boolean);
}

// ---------- 3. Sentence-by-sentence narration with subtitle sync ----------
// Speaks an array of sentences one at a time. Calls onSentence(text, index, total)
// right as each sentence's AUDIO actually begins playing (synced via the
// utterance's onstart event, with a short fallback timer in case a browser's
// speech engine doesn't fire onstart reliably), and onDone() once all
// sentences have finished (or narration is skipped/muted).
// Returns a controller: { cancel, pause, resume, skip, isPaused }.
function speakSentencesWithSubtitles(sentences, opts) {
  opts = opts || {};
  const onSentence = opts.onSentence || function () {};
  const onDone = opts.onDone || function () {};
  const soundOn = (typeof appState !== 'undefined' && appState) ? appState.isSoundOn : true;

  window.speechSynthesis.cancel();

  if (!soundOn || !sentences || sentences.length === 0) {
    // Still walk through subtitles on a timer so the video "plays" even when muted.
    if (!sentences || sentences.length === 0) {
      onDone();
      return { cancel: function(){}, pause: function(){}, resume: function(){}, skip: function(){}, isPaused: function(){ return false; }, hasMore: function(){ return false; } };
    }
    let idx = 0;
    let cancelled = false;
    let paused = false;
    let pendingMs = 0;
    let stepStarted = 0;
    let stepTimer = null;
    const step = () => {
      if (cancelled || paused) return;
      if (idx >= sentences.length) { onDone(); return; }
      onSentence(sentences[idx], idx, sentences.length);
      idx++;
      const words = sentences[idx - 1].split(/\s+/).length;
      pendingMs = Math.max(1200, words * 260);
      stepStarted = Date.now();
      stepTimer = setTimeout(step, pendingMs);
    };
    step();
    return {
      cancel: function () { cancelled = true; if (stepTimer) clearTimeout(stepTimer); },
      pause: function () {
        if (paused || cancelled) return;
        paused = true;
        if (stepTimer) { clearTimeout(stepTimer); stepTimer = null; }
        pendingMs = Math.max(200, pendingMs - (Date.now() - stepStarted));
      },
      resume: function () {
        if (!paused || cancelled) return;
        paused = false;
        stepStarted = Date.now();
        stepTimer = setTimeout(step, pendingMs);
      },
      skip: function () {
        if (cancelled) return;
        if (stepTimer) { clearTimeout(stepTimer); stepTimer = null; }
        paused = false;
        step();
      },
      isPaused: function () { return paused; },
      // Whether there's still narration left to play (used by the UI to
      // decide whether "fast forward" should skip to the next sentence, or
      // — if we're already on the last one — jump to the next page instead,
      // like a YouTube "next" control.
      hasMore: function () { return !cancelled && idx < sentences.length; }
    };
  }

  let idx = 0;
  let cancelled = false;
  let paused = false;
  const voice = pickLivelyVoice();

  // Chrome's speechSynthesis can silently drop an utterance if speak() is
  // called in the same tick as a preceding cancel() (a long-standing browser
  // race condition). A tiny delay before the very first utterance avoids it.
  const FIRST_SPEAK_DELAY_MS = 60;
  // Chrome also auto-pauses the speech queue after ~15s of continuous speech;
  // a periodic resume() nudge keeps long narration from silently stalling.
  // (Only kicks in when NOT intentionally paused by the user.)
  let resumeHeartbeat = null;
  function startResumeHeartbeat() {
    stopResumeHeartbeat();
    resumeHeartbeat = setInterval(() => {
      if (paused) return;
      if (window.speechSynthesis.speaking && !window.speechSynthesis.paused) return;
      if (window.speechSynthesis.paused) window.speechSynthesis.resume();
    }, 8000);
  }
  function stopResumeHeartbeat() {
    if (resumeHeartbeat) { clearInterval(resumeHeartbeat); resumeHeartbeat = null; }
  }

  // Tracks the "advance to the next sentence" step for the utterance currently
  // in flight, so skip() can trigger it directly (bypassing whatever onend/
  // onerror callback speechSynthesis.cancel() may or may not fire).
  let currentAdvance = null;
  // Set right before an explicit speechSynthesis.cancel() (e.g. by skip()) so
  // the next speakNext() knows to wait out the cancel-then-speak race instead
  // of calling speak() in the same tick.
  let forceNextDelay = false;

  function speakNext(isFirst) {
    if (cancelled) return;
    if (idx >= sentences.length) { stopResumeHeartbeat(); currentAdvance = null; onDone(); return; }
    const sentence = sentences[idx];

    const utt = new SpeechSynthesisUtterance(sentence);
    if (voice) utt.voice = voice;
    utt.volume = 1.0;
    // Lively but clear: slightly brisk rate, a touch of pitch lift, with gentle
    // per-sentence variation so it doesn't sound flat/monotonous.
    const wobble = (idx % 3 === 0) ? 0.03 : (idx % 3 === 1) ? -0.02 : 0.0;
    utt.rate = 1.0 + wobble;
    utt.pitch = 1.08 + (idx % 2 === 0 ? 0.03 : -0.02);

    // Sync the subtitle to the moment audio actually starts, not the moment
    // we queued it. Guard against onstart never firing (some engines omit
    // it) with a short fallback so the subtitle never gets stuck blank.
    let subtitleShown = false;
    const showSubtitle = () => {
      if (subtitleShown || cancelled) return;
      subtitleShown = true;
      onSentence(sentence, idx, sentences.length);
    };
    const fallbackTimer = setTimeout(showSubtitle, 250);

    let settled = false;
    const advance = () => {
      if (settled || cancelled) return;
      settled = true;
      currentAdvance = null;
      clearTimeout(fallbackTimer);
      idx++;
      speakNext(false);
    };
    currentAdvance = advance;

    utt.onstart = () => { clearTimeout(fallbackTimer); showSubtitle(); };
    utt.onend = advance;
    utt.onerror = advance;

    const doSpeak = () => { if (!cancelled) window.speechSynthesis.speak(utt); };
    if (isFirst || forceNextDelay) {
      forceNextDelay = false;
      setTimeout(doSpeak, FIRST_SPEAK_DELAY_MS);
    } else {
      doSpeak();
    }
  }

  startResumeHeartbeat();
  speakNext(true);
  return {
    cancel: function () {
      cancelled = true;
      currentAdvance = null;
      stopResumeHeartbeat();
      window.speechSynthesis.cancel();
    },
    pause: function () {
      if (cancelled || paused) return;
      paused = true;
      window.speechSynthesis.pause();
    },
    resume: function () {
      if (cancelled || !paused) return;
      paused = false;
      window.speechSynthesis.resume();
    },
    // Skips the sentence currently playing and jumps straight to the next one.
    skip: function () {
      if (cancelled || !currentAdvance) return;
      const fn = currentAdvance;
      currentAdvance = null;
      paused = false;
      forceNextDelay = true;
      window.speechSynthesis.cancel();
      fn();
    },
    isPaused: function () { return paused; },
    // Whether there's still narration left to play (used by the UI to
    // decide whether "fast forward" should skip to the next sentence, or
    // — if we're already on the last one — jump to the next page instead,
    // like a YouTube "next" control.
    hasMore: function () { return !cancelled && idx < sentences.length; }
  };
}

// ============================================================
// 4. ANIMATED SCENE SYSTEM
// Picks a category based on subject + lesson title/theme keywords,
// then runs a looping Canvas2D animation appropriate to that category.
// ============================================================

const VIDEO_SCENE_KEYWORDS = {
  // history
  ship: ["sail", "ship", "voyage", "explor", "colon", "boat", "river crossing", "delaware", "columbus", "mayflower"],
  flag_civics: ["president", "vote", "election", "government", "constitution", "law", "congress", "civics", "independence", "flag", "revolution", "war", "battle", "army", "soldier"],
  landmark: ["monument", "building", "capitol", "statue", "landmark", "city", "settlement", "colony"],
  timeline: ["ancient", "history", "past", "timeline", "era", "century", "civilization", "empire"],
  // science
  atom: ["atom", "molecule", "matter", "chemical", "element", "energy", "force", "electricity", "magnet"],
  space: ["space", "planet", "star", "moon", "sun", "solar", "galaxy", "astronaut", "orbit"],
  plant: ["plant", "seed", "leaf", "photosynthesis", "grow", "tree", "flower"],
  animal: ["animal", "habitat", "mammal", "insect", "bird", "fish", "ecosystem", "ocean life"],
  water: ["water", "cloud", "rain", "weather", "cycle", "climate", "ocean", "river", "evaporat"],
  // geography
  globe: ["map", "globe", "continent", "country", "compass", "coordinate", "hemisphere", "equator"],
  landform: ["mountain", "desert", "forest", "grassland", "valley", "canyon", "volcano", "landform"],
  // math
  numberline: ["number line", "counting", "add", "subtract", "skip count"],
  counters: ["count", "group", "objects", "ten frame"],
  clock: ["time", "clock", "hour", "minute", "a.m.", "p.m."],
  coins: ["money", "coin", "penny", "nickel", "dime", "quarter", "dollar"],
  shapes: ["shape", "triangle", "square", "rectangle", "circle", "polygon", "hexagon", "geometry", "angle", "symmetry", "3d", "cube", "sphere", "cone", "cylinder"],
  fraction: ["fraction", "half", "third", "fourth", "quarter of", "equal share"],
  graph: ["graph", "chart", "tally", "data", "plot"],
  place_value: ["place value", "tens", "ones", "hundred", "digit", "decimal", "round"],
  // ela
  book: ["read", "story", "passage", "character", "plot", "theme", "author"],
  letters: ["letter", "sound", "phonics", "vowel", "consonant", "spelling", "word"],
  grammar: ["noun", "verb", "adjective", "pronoun", "sentence", "grammar", "punctuation", "comma"],
  // art
  palette: ["color", "paint", "palette", "hue"],
  brush: ["draw", "sketch", "art", "sculpt", "texture", "pattern", "design"]
};

function pickSceneCategory(subject, themeText) {
  const text = String(themeText || "").toLowerCase();
  for (const cat in VIDEO_SCENE_KEYWORDS) {
    const words = VIDEO_SCENE_KEYWORDS[cat];
    for (let i = 0; i < words.length; i++) {
      if (text.indexOf(words[i]) !== -1) return cat;
    }
  }
  // Subject fallback defaults
  if (subject === 'history') return 'timeline';
  if (subject === 'science') return 'atom';
  if (subject === 'geography') return 'globe';
  if (subject === 'art') return 'palette';
  if (subject === 'ela') return 'book';
  return 'numberline';
}

// Each scene function draws one animation frame at time t (ms) into ctx sized w x h.
// Scenes are intentionally simple, readable shapes with smooth motion rather than
// static clip-art, so they read as genuinely animated on a phone-sized canvas.
const VIDEO_SCENES = {
  ship: function (ctx, w, h, t) {
    // Sky + water gradient
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#1e3a5f"); sky.addColorStop(1, "#0c4a6e");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h * 0.65);
    const water = ctx.createLinearGradient(0, h * 0.6, 0, h);
    water.addColorStop(0, "#0369a1"); water.addColorStop(1, "#082f49");
    ctx.fillStyle = water; ctx.fillRect(0, h * 0.6, w, h * 0.4);

    // Waves
    ctx.strokeStyle = "rgba(255,255,255,0.25)"; ctx.lineWidth = 2;
    for (let i = 0; i < 4; i++) {
      const yy = h * 0.68 + i * 14;
      ctx.beginPath();
      for (let x = 0; x <= w; x += 8) {
        const y = yy + Math.sin((x + t / 200 + i * 40) / 30) * 4;
        if (x === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    // Moon/sun glow
    ctx.fillStyle = "rgba(251,191,36,0.85)";
    ctx.beginPath(); ctx.arc(w * 0.82, h * 0.18, 22, 0, 7); ctx.fill();

    // Ship bobbing
    const bob = Math.sin(t / 500) * 6;
    const sx = w * 0.42, sy = h * 0.58 + bob;
    ctx.save(); ctx.translate(sx, sy);
    ctx.fillStyle = "#7c3f1d";
    ctx.beginPath(); ctx.moveTo(-70, 20); ctx.lineTo(70, 20); ctx.lineTo(50, 40); ctx.lineTo(-50, 40); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = "#4b2410"; ctx.lineWidth = 2; ctx.stroke();
    ctx.strokeStyle = "#e2c9a0"; ctx.lineWidth = 4;
    ctx.beginPath(); ctx.moveTo(0, 20); ctx.lineTo(0, -55); ctx.stroke();
    const sail = Math.sin(t / 700) * 5;
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath();
    ctx.moveTo(0, -50); ctx.quadraticCurveTo(38 + sail, -25, 0, 0); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = "#cbd5e1"; ctx.lineWidth = 1.5; ctx.stroke();
    // Tiny crew figures
    ctx.fillStyle = "#1f2937";
    for (let i = 0; i < 3; i++) {
      const px = -30 + i * 28;
      ctx.beginPath(); ctx.arc(px, 14, 4, 0, 7); ctx.fill();
      ctx.fillRect(px - 2, 16, 4, 8);
    }
    ctx.restore();
  },

  flag_civics: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e293b"; ctx.fillRect(0, 0, w, h);
    // Waving flag
    const fx = w * 0.28, fy = h * 0.25, fw = w * 0.42, fh = h * 0.32;
    ctx.save();
    ctx.strokeStyle = "#94a3b8"; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(fx, fy - 10); ctx.lineTo(fx, fy + fh + 30); ctx.stroke();
    const stripes = 7;
    for (let i = 0; i < stripes; i++) {
      ctx.fillStyle = i % 2 === 0 ? "#dc2626" : "#f8fafc";
      ctx.beginPath();
      const sh = fh / stripes;
      for (let x = 0; x <= fw; x += 6) {
        const wave = Math.sin((x + t / 150) / 22) * 6;
        const yTop = fy + i * sh + wave;
        ctx.lineTo(fx + x, yTop);
      }
      for (let x = fw; x >= 0; x -= 6) {
        const wave = Math.sin((x + t / 150) / 22) * 6;
        const yBot = fy + (i + 1) * sh + wave;
        ctx.lineTo(fx + x, yBot);
      }
      ctx.closePath(); ctx.fill();
    }
    ctx.fillStyle = "#1e3a8a";
    ctx.fillRect(fx, fy, fw * 0.4, fh * 0.45);
    ctx.fillStyle = "#facc15";
    for (let r = 0; r < 3; r++) for (let c = 0; c < 4; c++) {
      ctx.beginPath(); ctx.arc(fx + 10 + c * (fw * 0.4 - 20) / 3, fy + 10 + r * (fh * 0.45 - 20) / 2, 2.5, 0, 7); ctx.fill();
    }
    ctx.restore();

    // Marching silhouettes at bottom
    ctx.fillStyle = "#0f172a";
    ctx.fillRect(0, h - 30, w, 30);
    for (let i = 0; i < 6; i++) {
      const legSwing = Math.sin(t / 200 + i) * 6;
      const px = ((t / 15 + i * 60) % (w + 60)) - 30;
      ctx.fillStyle = "#334155";
      ctx.beginPath(); ctx.arc(px, h - 44, 5, 0, 7); ctx.fill();
      ctx.fillRect(px - 3, h - 40, 6, 12);
      ctx.beginPath(); ctx.moveTo(px, h - 28); ctx.lineTo(px + legSwing, h - 16); ctx.stroke();
    }
  },

  landmark: function (ctx, w, h, t) {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#0ea5e9"); sky.addColorStop(1, "#e0f2fe");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    // Sun
    ctx.fillStyle = "rgba(253,224,71,0.9)"; ctx.beginPath(); ctx.arc(w * 0.85, h * 0.2, 26, 0, 7); ctx.fill();
    // Clouds drifting
    ctx.fillStyle = "rgba(255,255,255,0.85)";
    for (let i = 0; i < 3; i++) {
      const cx = ((t / 40 + i * 220) % (w + 120)) - 60;
      const cy = h * (0.15 + i * 0.08);
      ctx.beginPath(); ctx.arc(cx, cy, 16, 0, 7); ctx.arc(cx + 18, cy + 4, 12, 0, 7); ctx.arc(cx - 16, cy + 4, 12, 0, 7); ctx.fill();
    }
    // Ground
    ctx.fillStyle = "#a3a3a3"; ctx.fillRect(0, h * 0.78, w, h * 0.22);
    // Building (columned monument)
    const bx = w * 0.5, by = h * 0.78;
    ctx.fillStyle = "#f1f5f9";
    ctx.fillRect(bx - 90, by - 90, 180, 90);
    ctx.fillStyle = "#e2e8f0";
    ctx.beginPath(); ctx.moveTo(bx - 100, by - 90); ctx.lineTo(bx, by - 130); ctx.lineTo(bx + 100, by - 90); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#cbd5e1";
    for (let i = 0; i < 6; i++) {
      ctx.fillRect(bx - 80 + i * 30, by - 85, 14, 85);
    }
    // flag on top, gently waving
    const wave = Math.sin(t / 300) * 4;
    ctx.strokeStyle = "#64748b"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(bx, by - 130); ctx.lineTo(bx, by - 160); ctx.stroke();
    ctx.fillStyle = "#ef4444";
    ctx.beginPath(); ctx.moveTo(bx, by - 160); ctx.lineTo(bx + 26 + wave, by - 153); ctx.lineTo(bx, by - 146); ctx.closePath(); ctx.fill();
  },

  timeline: function (ctx, w, h, t) {
    ctx.fillStyle = "#292524"; ctx.fillRect(0, 0, w, h);
    // Parchment texture strip
    ctx.fillStyle = "#44403c"; ctx.fillRect(0, h * 0.45, w, 8);
    const n = 5;
    for (let i = 0; i < n; i++) {
      const cx = (w / (n + 1)) * (i + 1);
      const pulse = 1 + Math.sin(t / 400 + i) * 0.15;
      ctx.fillStyle = i === Math.floor((t / 900) % n) ? "#fbbf24" : "#a8a29e";
      ctx.beginPath(); ctx.arc(cx, h * 0.49, 8 * pulse, 0, 7); ctx.fill();
      ctx.fillStyle = "#78716c"; ctx.fillRect(cx - 1, h * 0.49, 2, h * 0.15);
      ctx.fillStyle = "#d6d3d1";
      ctx.fillRect(cx - 24, h * 0.66, 48, 26);
      ctx.strokeStyle = "#57534e"; ctx.strokeRect(cx - 24, h * 0.66, 48, 26);
    }
    // Sparkle particles for "ancient dust"
    ctx.fillStyle = "rgba(251,191,36,0.5)";
    for (let i = 0; i < 12; i++) {
      const px = (i * 71 + t / 20) % w;
      const py = (i * 53 + h - (t / 15) % h) % h;
      ctx.beginPath(); ctx.arc(px, py, 1.5, 0, 7); ctx.fill();
    }
  },

  atom: function (ctx, w, h, t) {
    ctx.fillStyle = "#0c1929"; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    // Nucleus
    ctx.fillStyle = "#38bdf8";
    ctx.beginPath(); ctx.arc(cx, cy, 14, 0, 7); ctx.fill();
    ctx.shadowColor = "#38bdf8"; ctx.shadowBlur = 20; ctx.fill(); ctx.shadowBlur = 0;
    // Orbits with electrons
    const orbits = [
      { rx: 90, ry: 34, speed: 1, color: "#f472b6" },
      { rx: 70, ry: 90, speed: 1.4, color: "#a78bfa" },
      { rx: 100, ry: 55, speed: 0.7, color: "#34d399" }
    ];
    orbits.forEach((o, idx) => {
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate((idx * Math.PI) / 3);
      ctx.strokeStyle = "rgba(255,255,255,0.25)"; ctx.lineWidth = 1.5;
      ctx.beginPath(); ctx.ellipse(0, 0, o.rx, o.ry, 0, 0, 7); ctx.stroke();
      const angle = (t / 1000) * o.speed * Math.PI * 2;
      const ex = Math.cos(angle) * o.rx, ey = Math.sin(angle) * o.ry;
      ctx.fillStyle = o.color;
      ctx.beginPath(); ctx.arc(ex, ey, 6, 0, 7); ctx.fill();
      ctx.restore();
    });
  },

  space: function (ctx, w, h, t) {
    ctx.fillStyle = "#0b1026"; ctx.fillRect(0, 0, w, h);
    // Stars twinkle
    for (let i = 0; i < 40; i++) {
      const sx = (i * 53) % w, sy = (i * 97) % h;
      const tw = 0.4 + 0.6 * Math.abs(Math.sin(t / 400 + i));
      ctx.fillStyle = `rgba(255,255,255,${tw})`;
      ctx.fillRect(sx, sy, 2, 2);
    }
    // Orbiting planet + moon
    const cx = w * 0.5, cy = h * 0.55;
    ctx.fillStyle = "#f97316";
    ctx.beginPath(); ctx.arc(cx, cy, 34, 0, 7); ctx.fill();
    ctx.fillStyle = "rgba(0,0,0,0.15)";
    ctx.beginPath(); ctx.arc(cx + 10, cy - 6, 34, 0, 7); ctx.fill();
    const angle = t / 900;
    const mx = cx + Math.cos(angle) * 70, my = cy + Math.sin(angle) * 24;
    ctx.fillStyle = "#cbd5e1";
    ctx.beginPath(); ctx.arc(mx, my, 9, 0, 7); ctx.fill();
    ctx.strokeStyle = "rgba(148,163,184,0.3)";
    ctx.beginPath(); ctx.ellipse(cx, cy, 70, 24, 0, 0, 7); ctx.stroke();
  },

  plant: function (ctx, w, h, t) {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#bae6fd"); sky.addColorStop(1, "#ecfccb");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#84cc16"; ctx.fillRect(0, h * 0.8, w, h * 0.2);
    const grow = Math.min(1, (t % 4000) / 3000);
    const cx = w / 2, baseY = h * 0.8;
    const stemH = 90 * grow;
    ctx.strokeStyle = "#16a34a"; ctx.lineWidth = 6; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(cx, baseY); ctx.quadraticCurveTo(cx + 10, baseY - stemH / 2, cx, baseY - stemH); ctx.stroke();
    if (grow > 0.3) {
      const leafSize = Math.min(1, (grow - 0.3) / 0.5);
      ctx.fillStyle = "#22c55e";
      ctx.save(); ctx.translate(cx - 4, baseY - stemH * 0.55);
      ctx.rotate(-0.5);
      ctx.beginPath(); ctx.ellipse(0, 0, 22 * leafSize, 11 * leafSize, 0, 0, 7); ctx.fill();
      ctx.restore();
      ctx.save(); ctx.translate(cx + 4, baseY - stemH * 0.4);
      ctx.rotate(0.5);
      ctx.beginPath(); ctx.ellipse(0, 0, 22 * leafSize, 11 * leafSize, 0, 0, 7); ctx.fill();
      ctx.restore();
    }
    if (grow > 0.7) {
      const bloom = Math.min(1, (grow - 0.7) / 0.3);
      ctx.fillStyle = "#f472b6";
      for (let i = 0; i < 5; i++) {
        const a = (i / 5) * Math.PI * 2;
        ctx.beginPath();
        ctx.ellipse(cx + Math.cos(a) * 12 * bloom, baseY - stemH + Math.sin(a) * 12 * bloom, 9 * bloom, 6 * bloom, a, 0, 7);
        ctx.fill();
      }
      ctx.fillStyle = "#facc15";
      ctx.beginPath(); ctx.arc(cx, baseY - stemH, 6 * bloom, 0, 7); ctx.fill();
    }
    // Sun
    ctx.fillStyle = "rgba(250,204,21,0.9)"; ctx.beginPath(); ctx.arc(w * 0.82, h * 0.18, 22, 0, 7); ctx.fill();
  },

  animal: function (ctx, w, h, t) {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#93c5fd"); sky.addColorStop(1, "#bbf7d0");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#4ade80"; ctx.fillRect(0, h * 0.75, w, h * 0.25);
    // Bouncing/hopping creature (generic friendly critter)
    const hop = Math.abs(Math.sin(t / 350)) * 22;
    const cx = w * 0.5, cy = h * 0.7 - hop;
    ctx.fillStyle = "#f59e0b";
    ctx.beginPath(); ctx.ellipse(cx, cy, 26, 20, 0, 0, 7); ctx.fill();
    ctx.beginPath(); ctx.arc(cx + 22, cy - 14, 13, 0, 7); ctx.fill();
    ctx.fillStyle = "#1f2937";
    ctx.beginPath(); ctx.arc(cx + 27, cy - 17, 2, 0, 7); ctx.fill();
    ctx.strokeStyle = "#f59e0b"; ctx.lineWidth = 5;
    ctx.beginPath(); ctx.moveTo(cx - 24, cy); ctx.quadraticCurveTo(cx - 40, cy - 10 - hop / 2, cx - 46, cy - 4); ctx.stroke();
    // Birds flying across
    for (let i = 0; i < 3; i++) {
      const bx = ((t / 20 + i * 150) % (w + 60)) - 30;
      const by = h * (0.15 + i * 0.06);
      const flap = Math.sin(t / 120 + i) * 6;
      ctx.strokeStyle = "#334155"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(bx - 8, by - flap); ctx.lineTo(bx, by); ctx.lineTo(bx + 8, by - flap); ctx.stroke();
    }
  },

  water: function (ctx, w, h, t) {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#7dd3fc"); sky.addColorStop(1, "#e0f2fe");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h * 0.7);
    ctx.fillStyle = "#0284c7"; ctx.fillRect(0, h * 0.7, w, h * 0.3);
    // Cloud
    ctx.fillStyle = "rgba(255,255,255,0.95)";
    ctx.beginPath(); ctx.arc(w * 0.3, h * 0.2, 22, 0, 7); ctx.arc(w * 0.38, h * 0.17, 16, 0, 7); ctx.arc(w * 0.22, h * 0.17, 16, 0, 7); ctx.fill();
    // Rain drops falling & looping
    ctx.strokeStyle = "rgba(56,189,248,0.8)"; ctx.lineWidth = 2;
    for (let i = 0; i < 14; i++) {
      const dx = (i * 37) % w;
      const dy = ((t / 4 + i * 40) % (h * 0.55)) + h * 0.2;
      ctx.beginPath(); ctx.moveTo(dx, dy); ctx.lineTo(dx - 3, dy + 10); ctx.stroke();
    }
    // Evaporation arrow rising from water
    const rise = (t / 20) % 60;
    ctx.strokeStyle = "rgba(255,255,255,0.6)"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(w * 0.7, h * 0.7 - rise); ctx.lineTo(w * 0.7, h * 0.4 - rise); ctx.stroke();
  },

  globe: function (ctx, w, h, t) {
    ctx.fillStyle = "#022c22"; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.32;
    ctx.fillStyle = "#0369a1";
    ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill();
    // Rotating meridian lines to fake globe spin
    const rot = t / 900;
    ctx.strokeStyle = "rgba(255,255,255,0.35)"; ctx.lineWidth = 1.5;
    for (let i = 0; i < 5; i++) {
      const rx = Math.abs(Math.cos(rot + i * 0.6)) * r;
      ctx.beginPath(); ctx.ellipse(cx, cy, rx, r, 0, 0, 7); ctx.stroke();
    }
    // Green "continents" that drift with rotation
    ctx.fillStyle = "#22c55e";
    for (let i = 0; i < 4; i++) {
      const a = rot + i * 1.6;
      const px = cx + Math.cos(a) * r * 0.55;
      const py = cy + Math.sin(a) * r * 0.35 - r * 0.15;
      if (Math.cos(a) > -0.3) {
        ctx.beginPath(); ctx.ellipse(px, py, 14, 9, a, 0, 7); ctx.fill();
      }
    }
    // Compass needle
    ctx.save(); ctx.translate(w * 0.82, h * 0.2);
    ctx.rotate(Math.sin(t / 700) * 0.3);
    ctx.fillStyle = "#ef4444"; ctx.beginPath(); ctx.moveTo(0, -14); ctx.lineTo(4, 0); ctx.lineTo(-4, 0); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#f1f5f9"; ctx.beginPath(); ctx.moveTo(0, 14); ctx.lineTo(4, 0); ctx.lineTo(-4, 0); ctx.closePath(); ctx.fill();
    ctx.restore();
  },

  landform: function (ctx, w, h, t) {
    const sky = ctx.createLinearGradient(0, 0, 0, h);
    sky.addColorStop(0, "#fdba74"); sky.addColorStop(1, "#fef3c7");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = "#78350f";
    ctx.beginPath(); ctx.moveTo(0, h * 0.75); ctx.lineTo(w * 0.25, h * 0.4); ctx.lineTo(w * 0.5, h * 0.75); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#92400e";
    ctx.beginPath(); ctx.moveTo(w * 0.3, h * 0.75); ctx.lineTo(w * 0.62, h * 0.3); ctx.lineTo(w * 0.95, h * 0.75); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#f8fafc";
    ctx.beginPath(); ctx.moveTo(w * 0.58, h * 0.38); ctx.lineTo(w * 0.62, h * 0.3); ctx.lineTo(w * 0.66, h * 0.38); ctx.closePath(); ctx.fill();
    ctx.fillStyle = "#166534"; ctx.fillRect(0, h * 0.75, w, h * 0.25);
    // River winding + flowing shimmer
    const flow = (t / 30) % 20;
    ctx.strokeStyle = "#38bdf8"; ctx.lineWidth = 10;
    ctx.beginPath();
    ctx.moveTo(0, h * 0.9);
    ctx.quadraticCurveTo(w * 0.3, h * 0.8, w * 0.5, h * 0.92);
    ctx.quadraticCurveTo(w * 0.7, h, w, h * 0.85);
    ctx.stroke();
    ctx.setLineDash([6, 10]); ctx.lineDashOffset = -flow;
    ctx.strokeStyle = "rgba(255,255,255,0.5)"; ctx.lineWidth = 2;
    ctx.stroke();
    ctx.setLineDash([]);
  },

  numberline: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e1b4b"; ctx.fillRect(0, 0, w, h);
    const y = h / 2, margin = 40;
    ctx.strokeStyle = "#818cf8"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(margin, y); ctx.lineTo(w - margin, y); ctx.stroke();
    const n = 10;
    for (let i = 0; i <= n; i++) {
      const x = margin + ((w - margin * 2) / n) * i;
      ctx.beginPath(); ctx.moveTo(x, y - 8); ctx.lineTo(x, y + 8); ctx.stroke();
      ctx.fillStyle = "#c7d2fe"; ctx.font = "12px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(String(i), x, y + 24);
    }
    // Hopping marker
    const pos = (t / 500) % n;
    const hopIdx = Math.floor(pos);
    const frac = pos - hopIdx;
    const x1 = margin + ((w - margin * 2) / n) * hopIdx;
    const x2 = margin + ((w - margin * 2) / n) * (hopIdx + 1);
    const x = x1 + (x2 - x1) * frac;
    const arc = Math.sin(frac * Math.PI) * 26;
    ctx.fillStyle = "#fbbf24";
    ctx.beginPath(); ctx.arc(x, y - 14 - arc, 9, 0, 7); ctx.fill();
  },

  counters: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e1b4b"; ctx.fillRect(0, 0, w, h);
    const cols = 5, rows = 2, count = 1 + Math.floor((t / 600) % (cols * rows));
    const cellW = w / (cols + 1), cellH = h / (rows + 2);
    let n = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        n++;
        const cx = cellW * (c + 1), cy = cellH * (r + 1.4);
        const active = n <= count;
        const pop = active ? Math.min(1, ((t % 600) / 250)) : 0;
        ctx.fillStyle = active ? "#34d399" : "rgba(255,255,255,0.12)";
        ctx.beginPath(); ctx.arc(cx, cy, 14 * (active ? 0.7 + pop * 0.3 : 1), 0, 7); ctx.fill();
      }
    }
    ctx.fillStyle = "#e0e7ff"; ctx.font = "bold 20px sans-serif"; ctx.textAlign = "center";
    ctx.fillText(String(count), w / 2, h - 12);
  },

  clock: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e1b4b"; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.32;
    ctx.fillStyle = "#f8fafc"; ctx.beginPath(); ctx.arc(cx, cy, r, 0, 7); ctx.fill();
    ctx.strokeStyle = "#312e81"; ctx.lineWidth = 4; ctx.stroke();
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      const x1 = cx + Math.cos(a) * r * 0.85, y1 = cy + Math.sin(a) * r * 0.85;
      const x2 = cx + Math.cos(a) * r * 0.95, y2 = cy + Math.sin(a) * r * 0.95;
      ctx.strokeStyle = "#4338ca"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
    }
    const minuteAngle = (t / 3000) * Math.PI * 2;
    const hourAngle = minuteAngle / 12;
    ctx.strokeStyle = "#1e1b4b"; ctx.lineWidth = 5; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.sin(hourAngle) * r * 0.45, cy - Math.cos(hourAngle) * r * 0.45); ctx.stroke();
    ctx.strokeStyle = "#ef4444"; ctx.lineWidth = 3;
    ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + Math.sin(minuteAngle) * r * 0.7, cy - Math.cos(minuteAngle) * r * 0.7); ctx.stroke();
    ctx.fillStyle = "#1e1b4b"; ctx.beginPath(); ctx.arc(cx, cy, 4, 0, 7); ctx.fill();
  },

  coins: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e1b4b"; ctx.fillRect(0, 0, w, h);
    const coins = [
      { color: "#d1d5db", label: "1¢" },
      { color: "#e5e7eb", label: "5¢" },
      { color: "#fbbf24", label: "10¢" },
      { color: "#f3f4f6", label: "25¢" }
    ];
    coins.forEach((c, i) => {
      const bounce = Math.abs(Math.sin(t / 400 + i * 1.3)) * 14;
      const cx = (w / (coins.length + 1)) * (i + 1);
      const cy = h * 0.55 - bounce;
      ctx.fillStyle = c.color;
      ctx.beginPath(); ctx.arc(cx, cy, 22, 0, 7); ctx.fill();
      ctx.strokeStyle = "#78716c"; ctx.lineWidth = 2; ctx.stroke();
      ctx.fillStyle = "#44403c"; ctx.font = "bold 12px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(c.label, cx, cy + 4);
    });
  },

  shapes: function (ctx, w, h, t) {
    ctx.fillStyle = "#312e81"; ctx.fillRect(0, 0, w, h);
    const shapesList = ["circle", "square", "triangle", "hexagon"];
    const idx = Math.floor((t / 1000) % shapesList.length);
    const cx = w / 2, cy = h / 2;
    const spin = (t / 1500);
    ctx.save(); ctx.translate(cx, cy); ctx.rotate(Math.sin(spin) * 0.15);
    ctx.fillStyle = "#818cf8"; ctx.strokeStyle = "#c7d2fe"; ctx.lineWidth = 3;
    const s = shapesList[idx];
    ctx.beginPath();
    if (s === "circle") { ctx.arc(0, 0, 50, 0, 7); }
    else if (s === "square") { ctx.rect(-45, -45, 90, 90); }
    else if (s === "triangle") { ctx.moveTo(0, -55); ctx.lineTo(48, 40); ctx.lineTo(-48, 40); ctx.closePath(); }
    else { for (let i = 0; i < 6; i++) { const a = (i / 6) * Math.PI * 2; const px = Math.cos(a) * 50, py = Math.sin(a) * 50; if (i === 0) ctx.moveTo(px, py); else ctx.lineTo(px, py); } ctx.closePath(); }
    ctx.fill(); ctx.stroke();
    ctx.restore();
  },

  fraction: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e1b4b"; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.3;
    const slices = 4;
    const fillCount = 1 + Math.floor((t / 700) % slices);
    for (let i = 0; i < slices; i++) {
      const a0 = (i / slices) * Math.PI * 2 - Math.PI / 2;
      const a1 = ((i + 1) / slices) * Math.PI * 2 - Math.PI / 2;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, a0, a1); ctx.closePath();
      ctx.fillStyle = i < fillCount ? "#f472b6" : "rgba(255,255,255,0.1)";
      ctx.fill();
      ctx.strokeStyle = "#1e1b4b"; ctx.lineWidth = 2; ctx.stroke();
    }
    ctx.fillStyle = "#e0e7ff"; ctx.font = "bold 16px sans-serif"; ctx.textAlign = "center";
    ctx.fillText(`${fillCount}/${slices}`, cx, cy + r + 26);
  },

  graph: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e1b4b"; ctx.fillRect(0, 0, w, h);
    const bars = [0.4, 0.7, 0.5, 0.9, 0.3];
    const bw = w / (bars.length * 2);
    bars.forEach((b, i) => {
      const grow = Math.min(1, (t / 800) - i * 0.15);
      const bh = Math.max(0, b * h * 0.6 * Math.min(1, Math.max(0, grow)));
      const x = bw + i * bw * 2;
      ctx.fillStyle = "#34d399";
      ctx.fillRect(x, h * 0.8 - bh, bw * 0.8, bh);
    });
    ctx.strokeStyle = "#818cf8"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(20, h * 0.8); ctx.lineTo(w - 10, h * 0.8); ctx.stroke();
  },

  place_value: function (ctx, w, h, t) {
    ctx.fillStyle = "#1e1b4b"; ctx.fillRect(0, 0, w, h);
    const tens = 1 + Math.floor((t / 900) % 5);
    const ones = Math.floor((t / 300) % 10);
    ctx.fillStyle = "#a5b4fc"; ctx.font = "bold 14px sans-serif"; ctx.textAlign = "center";
    ctx.fillText("TENS", w * 0.28, 24);
    ctx.fillText("ONES", w * 0.72, 24);
    for (let i = 0; i < tens; i++) {
      const x = w * 0.12 + (i % 3) * 22;
      const y = 46 + Math.floor(i / 3) * 40;
      ctx.fillStyle = "#818cf8"; ctx.fillRect(x, y, 14, 32);
    }
    for (let i = 0; i < ones; i++) {
      const x = w * 0.62 + (i % 5) * 16;
      const y = 46 + Math.floor(i / 5) * 20;
      ctx.fillStyle = "#34d399"; ctx.beginPath(); ctx.arc(x, y, 6, 0, 7); ctx.fill();
    }
  },

  book: function (ctx, w, h, t) {
    ctx.fillStyle = "#451a03"; ctx.fillRect(0, 0, w, h);
    const cx = w / 2, cy = h / 2;
    const flip = (t / 900) % 1;
    ctx.fillStyle = "#fef3c7";
    ctx.fillRect(cx - 80, cy - 60, 80, 120);
    ctx.save();
    ctx.translate(cx, cy - 60);
    const scaleX = Math.cos(flip * Math.PI);
    ctx.scale(Math.max(0.05, Math.abs(scaleX)), 1);
    ctx.fillStyle = "#fde68a";
    ctx.fillRect(0, 0, 80, 120);
    ctx.strokeStyle = "#92400e";
    for (let i = 0; i < 5; i++) { ctx.beginPath(); ctx.moveTo(8, 16 + i * 18); ctx.lineTo(70, 16 + i * 18); ctx.stroke(); }
    ctx.restore();
    // floating letters
    const letters = ["A", "B", "C"];
    letters.forEach((l, i) => {
      const fy = cy - 90 - Math.sin(t / 400 + i) * 8;
      const fx = cx - 90 + i * 90;
      ctx.fillStyle = "#fbbf24"; ctx.font = "bold 22px sans-serif"; ctx.textAlign = "center";
      ctx.fillText(l, fx, fy);
    });
  },

  letters: function (ctx, w, h, t) {
    ctx.fillStyle = "#7c2d12"; ctx.fillRect(0, 0, w, h);
    const word = ["C", "A", "T"];
    word.forEach((l, i) => {
      const bounce = Math.abs(Math.sin(t / 350 + i * 0.8)) * 16;
      const x = w / 2 - (word.length - 1) * 30 + i * 60;
      const y = h / 2 - bounce;
      ctx.fillStyle = "#fed7aa";
      ctx.fillRect(x - 24, y - 24, 48, 48);
      ctx.strokeStyle = "#fb923c"; ctx.lineWidth = 3; ctx.strokeRect(x - 24, y - 24, 48, 48);
      ctx.fillStyle = "#7c2d12"; ctx.font = "bold 26px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(l, x, y + 2);
    });
    ctx.textBaseline = "alphabetic";
  },

  grammar: function (ctx, w, h, t) {
    ctx.fillStyle = "#7c2d12"; ctx.fillRect(0, 0, w, h);
    const parts = [{t:"Noun",c:"#60a5fa"},{t:"Verb",c:"#f472b6"},{t:"Adj",c:"#34d399"}];
    parts.forEach((p, i) => {
      const slide = Math.min(1, (t / 700) - i * 0.2);
      const x = -60 + Math.max(0, Math.min(1, slide)) * (w / (parts.length + 1) * (i + 1) + 60 - -60);
      const y = h / 2 + (i - 1) * 44;
      ctx.fillStyle = p.c;
      const bx = w / (parts.length + 1) * (i + 1);
      ctx.beginPath();
      ctx.roundRect ? ctx.roundRect(bx - 34, y - 16, 68, 32, 8) : ctx.rect(bx - 34, y - 16, 68, 32);
      ctx.fill();
      ctx.fillStyle = "#fff"; ctx.font = "bold 13px sans-serif"; ctx.textAlign = "center"; ctx.textBaseline = "middle";
      ctx.fillText(p.t, bx, y + 1);
    });
    ctx.textBaseline = "alphabetic";
  },

  palette: function (ctx, w, h, t) {
    ctx.fillStyle = "#3b0764"; ctx.fillRect(0, 0, w, h);
    const colors = ["#ef4444", "#f59e0b", "#eab308", "#22c55e", "#3b82f6", "#a855f7"];
    const cx = w / 2, cy = h / 2, r = Math.min(w, h) * 0.28;
    colors.forEach((c, i) => {
      const a0 = (i / colors.length) * Math.PI * 2 + t / 3000;
      const a1 = ((i + 1) / colors.length) * Math.PI * 2 + t / 3000;
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.arc(cx, cy, r, a0, a1); ctx.closePath();
      ctx.fillStyle = c; ctx.fill();
    });
    ctx.fillStyle = "#f5f3ff"; ctx.beginPath(); ctx.arc(cx, cy, r * 0.28, 0, 7); ctx.fill();
    // Paintbrush dab
    const bx = cx + Math.cos(t / 600) * (r + 30), by = cy + Math.sin(t / 600) * (r + 30);
    ctx.fillStyle = "#facc15"; ctx.beginPath(); ctx.arc(bx, by, 6, 0, 7); ctx.fill();
  },

  brush: function (ctx, w, h, t) {
    ctx.fillStyle = "#f5f3ff"; ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = "#a855f7"; ctx.lineWidth = 8; ctx.lineCap = "round"; ctx.lineJoin = "round";
    const progress = (t / 2200) % 1;
    ctx.beginPath();
    const pts = [];
    const n = 6;
    for (let i = 0; i <= n; i++) {
      const a = (i / n) * Math.PI * 2;
      pts.push([w / 2 + Math.cos(a) * 60, h / 2 + Math.sin(a) * 60]);
    }
    const total = Math.floor(progress * n);
    ctx.moveTo(pts[0][0], pts[0][1]);
    for (let i = 1; i <= total; i++) ctx.lineTo(pts[i][0], pts[i][1]);
    const frac = progress * n - total;
    if (total < n) {
      const x = pts[total][0] + (pts[total + 1][0] - pts[total][0]) * frac;
      const y = pts[total][1] + (pts[total + 1][1] - pts[total][1]) * frac;
      ctx.lineTo(x, y);
    }
    ctx.stroke();
  }
};

// ---------- Scene loop management ----------
let __videoSceneRAF = null;
function stopVideoScene() {
  if (__videoSceneRAF) { cancelAnimationFrame(__videoSceneRAF); __videoSceneRAF = null; }
}
function startVideoScene(canvas, category) {
  stopVideoScene();
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  const drawFn = VIDEO_SCENES[category] || VIDEO_SCENES.numberline;
  const startT = performance.now();
  function frame(now) {
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);
    try { drawFn(ctx, w, h, now - startT); } catch (e) { /* fail quietly, keep video usable */ }
    __videoSceneRAF = requestAnimationFrame(frame);
  }
  __videoSceneRAF = requestAnimationFrame(frame);
}

if (typeof module !== 'undefined') {
  module.exports = { pickLivelyVoice, splitIntoSentences, speakSentencesWithSubtitles, pickSceneCategory, startVideoScene, stopVideoScene };
}

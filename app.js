// Math Academy Application Logic - Unit 1 Lesson 1 Implementation

// 1. SVG Animal Avatars Database (UI Assets)
const AVATARS = [
  // Panda
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="40" fill="#f8fafc" stroke="#334155" stroke-width="4"/>
    <circle cx="22" cy="22" r="14" fill="#334155"/>
    <circle cx="78" cy="22" r="14" fill="#334155"/>
    <circle cx="22" cy="22" r="6" fill="#cbd5e1"/>
    <circle cx="78" cy="22" r="6" fill="#cbd5e1"/>
    <ellipse cx="32" cy="45" rx="10" ry="12" fill="#334155" transform="rotate(-15 32 45)"/>
    <ellipse cx="68" cy="45" rx="10" ry="12" fill="#334155" transform="rotate(15 68 45)"/>
    <circle cx="34" cy="43" r="3" fill="#ffffff"/>
    <circle cx="66" cy="43" r="3" fill="#ffffff"/>
    <ellipse cx="50" cy="62" rx="7" ry="4" fill="#334155"/>
    <path d="M42 70 Q50 78 58 70" stroke="#334155" stroke-width="4" fill="none" stroke-linecap="round"/>
  </svg>`,
  // Fox
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <path d="M50 15 L15 45 L85 45 Z" fill="#f97316"/>
    <path d="M15 45 L50 90 L85 45 Z" fill="#f97316"/>
    <path d="M50 90 L30 60 Q50 70 70 60 Z" fill="#f8fafc"/>
    <path d="M15 45 L8 20 L30 35 Z" fill="#ea580c"/>
    <path d="M85 45 L92 20 L70 35 Z" fill="#ea580c"/>
    <circle cx="32" cy="48" r="5" fill="#334155"/>
    <circle cx="68" cy="48" r="5" fill="#334155"/>
    <circle cx="50" cy="85" r="7" fill="#334155"/>
  </svg>`,
  // Frog
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <ellipse cx="50" cy="55" rx="40" ry="32" fill="#4ade80"/>
    <circle cx="28" cy="26" r="12" fill="#4ade80"/>
    <circle cx="72" cy="26" r="12" fill="#4ade80"/>
    <circle cx="28" cy="26" r="8" fill="#ffffff"/>
    <circle cx="72" cy="26" r="8" fill="#ffffff"/>
    <circle cx="28" cy="26" r="4.5" fill="#1e293b"/>
    <circle cx="72" cy="26" r="4.5" fill="#1e293b"/>
    <ellipse cx="50" cy="66" rx="16" ry="6" fill="#15803d"/>
    <ellipse cx="16" cy="55" rx="5" ry="3" fill="#f87171"/>
    <ellipse cx="84" cy="55" rx="5" ry="3" fill="#f87171"/>
  </svg>`,
  // Penguin
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="40" fill="#334155"/>
    <ellipse cx="50" cy="56" rx="26" ry="30" fill="#ffffff"/>
    <circle cx="36" cy="40" r="5.5" fill="#334155"/>
    <circle cx="64" cy="40" r="5.5" fill="#334155"/>
    <polygon points="44,48 56,48 50,62" fill="#fb923c"/>
    <ellipse cx="26" cy="84" rx="10" ry="5.5" fill="#fb923c"/>
    <ellipse cx="74" cy="84" rx="10" ry="5.5" fill="#fb923c"/>
  </svg>`,
  // Rabbit
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <ellipse cx="32" cy="24" rx="10" ry="22" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
    <ellipse cx="32" cy="24" rx="5" ry="14" fill="#fda4af"/>
    <ellipse cx="68" cy="24" rx="10" ry="22" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="2"/>
    <ellipse cx="68" cy="24" rx="5" ry="14" fill="#fda4af"/>
    <circle cx="50" cy="58" r="32" fill="#f1f5f9" stroke="#cbd5e1" stroke-width="3"/>
    <circle cx="38" cy="52" r="5" fill="#334155"/>
    <circle cx="62" cy="52" r="5" fill="#334155"/>
    <polygon points="46,62 54,62 50,68" fill="#fda4af"/>
    <path d="M43 72 Q50 77 57 72" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,
  // Lion
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="50" r="44" fill="#f97316"/>
    <circle cx="50" cy="50" r="34" fill="#fef08a"/>
    <circle cx="24" cy="24" r="12" fill="#eab308"/>
    <circle cx="76" cy="24" r="12" fill="#eab308"/>
    <circle cx="38" cy="45" r="4.5" fill="#334155"/>
    <circle cx="62" cy="45" r="4.5" fill="#334155"/>
    <ellipse cx="50" cy="58" rx="6" ry="3.5" fill="#334155"/>
    <path d="M42 66 Q50 72 58 66" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,
  // Monkey
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="54" r="38" fill="#a16207" stroke="#713f12" stroke-width="3"/>
    <circle cx="20" cy="45" r="14" fill="#a16207"/>
    <circle cx="20" cy="45" r="8" fill="#fef08a"/>
    <circle cx="80" cy="45" r="14" fill="#a16207"/>
    <circle cx="80" cy="45" r="8" fill="#fef08a"/>
    <ellipse cx="50" cy="58" rx="28" ry="24" fill="#fef08a"/>
    <ellipse cx="38" cy="40" rx="14" ry="12" fill="#fef08a"/>
    <ellipse cx="62" cy="40" rx="14" ry="12" fill="#fef08a"/>
    <circle cx="38" cy="40" r="4.5" fill="#1e293b"/>
    <circle cx="62" cy="40" r="4.5" fill="#1e293b"/>
    <ellipse cx="50" cy="54" rx="5" ry="3.5" fill="#713f12"/>
    <path d="M40 64 Q50 72 60 64" stroke="#713f12" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,
  // Koala
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="54" r="38" fill="#94a3b8" stroke="#475569" stroke-width="3"/>
    <circle cx="20" cy="36" r="16" fill="#94a3b8"/>
    <circle cx="20" cy="36" r="10" fill="#f1f5f9"/>
    <circle cx="80" cy="36" r="16" fill="#94a3b8"/>
    <circle cx="80" cy="36" r="10" fill="#f1f5f9"/>
    <circle cx="38" cy="48" r="4.5" fill="#1e293b"/>
    <circle cx="62" cy="48" r="4.5" fill="#1e293b"/>
    <ellipse cx="50" cy="58" rx="7" ry="12" fill="#334155"/>
    <path d="M42 72 Q50 76 58 72" stroke="#475569" stroke-width="3" fill="none" stroke-linecap="round"/>
  </svg>`,
  // Cat
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <circle cx="50" cy="54" r="38" fill="#fda4af" stroke="#f43f5e" stroke-width="3"/>
    <polygon points="18,30 38,42 16,56" fill="#fda4af" stroke="#f43f5e" stroke-width="2"/>
    <polygon points="18,30 32,38 22,44" fill="#fecdd3"/>
    <polygon points="82,30 62,42 84,56" fill="#fda4af" stroke="#f43f5e" stroke-width="2"/>
    <polygon points="82,30 68,38 78,44" fill="#fecdd3"/>
    <circle cx="36" cy="50" r="4.5" fill="#1e293b"/>
    <circle cx="64" cy="50" r="4.5" fill="#1e293b"/>
    <polygon points="46,58 54,58 50,63" fill="#f43f5e"/>
    <path d="M44 68 Q50 72 56 68" stroke="#f43f5e" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <line x1="28" y1="58" x2="14" y2="56" stroke="#f43f5e" stroke-width="2"/>
    <line x1="28" y1="62" x2="12" y2="64" stroke="#f43f5e" stroke-width="2"/>
    <line x1="72" y1="58" x2="86" y2="56" stroke="#f43f5e" stroke-width="2"/>
    <line x1="72" y1="62" x2="88" y2="64" stroke="#f43f5e" stroke-width="2"/>
  </svg>`,
  // Dragon
  `<svg viewBox="0 0 100 100" width="100%" height="100%">
    <defs>
      <linearGradient id="dragGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#a855f7"/>
        <stop offset="100%" stop-color="#ec4899"/>
      </linearGradient>
    </defs>
    <circle cx="50" cy="54" r="38" fill="url(#dragGrad)" stroke="#6b21a8" stroke-width="3"/>
    <path d="M30 26 Q16 12 12 18 Q20 30 28 32 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <path d="M70 26 Q84 12 88 18 Q80 30 72 32 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2"/>
    <ellipse cx="34" cy="46" rx="9" ry="12" fill="#ffffff" stroke="#6b21a8" stroke-width="2"/>
    <ellipse cx="66" cy="46" rx="9" ry="12" fill="#ffffff" stroke="#6b21a8" stroke-width="2"/>
    <circle cx="34" cy="46" r="4.5" fill="#1e293b"/>
    <circle cx="66" cy="46" r="4.5" fill="#1e293b"/>
    <circle cx="36" cy="43" r="1.5" fill="#ffffff"/>
    <circle cx="68" cy="43" r="1.5" fill="#ffffff"/>
    <ellipse cx="50" cy="62" rx="16" ry="11" fill="#c084fc"/>
    <circle cx="44" cy="62" r="3" fill="#6b21a8"/>
    <circle cx="56" cy="62" r="3" fill="#6b21a8"/>
    <path d="M42 68 Q50 72 58 68" stroke="#6b21a8" stroke-width="2.5" fill="none" stroke-linecap="round"/>
    <polygon points="44,69 47,75 50,69" fill="#ffffff"/>
    <polygon points="50,69 53,75 56,69" fill="#ffffff"/>
  </svg>`
];

// 2. Web Audio Sound Synthesizer
class SoundSynth {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) {
          this.ctx = new AudioCtx();
        }
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(e => console.warn('Audio resume failed', e));
      }
    } catch (err) {
      console.warn('AudioContext not supported or blocked:', err);
      this.enabled = false;
    }
  }

  playPop() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(150, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(800, this.ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.15);
    } catch (e) {
      console.warn('playPop failed', e);
    }
  }

  playCorrect() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const playNote = (freq, delay, duration) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + delay);
        gain.gain.setValueAtTime(0.1, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.001, now + delay + duration);
        osc.start(now + delay);
        osc.stop(now + delay + duration);
      };
      playNote(523.25, 0, 0.1);
      playNote(659.25, 0.08, 0.1);
      playNote(783.99, 0.16, 0.1);
      playNote(1046.50, 0.24, 0.3);
    } catch (e) {
      console.warn('playCorrect failed', e);
    }
  }

  playWrong() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(130, this.ctx.currentTime);
      osc.frequency.linearRampToValueAtTime(85, this.ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.25);
    } catch (e) {
      console.warn('playWrong failed', e);
    }
  }

  playVictory() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const chords = [
        [261.63, 329.63, 392.00],
        [349.23, 440.00, 523.25],
        [392.00, 493.88, 587.33],
        [523.25, 659.25, 783.99, 1046.50]
      ];
      chords.forEach((chord, step) => {
        chord.forEach(freq => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          osc.connect(gain);
          gain.connect(this.ctx.destination);
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(freq, now + step * 0.15);
          gain.gain.setValueAtTime(0.08, now + step * 0.15);
          gain.gain.exponentialRampToValueAtTime(0.001, now + step * 0.15 + 0.3);
          osc.start(now + step * 0.15);
          osc.stop(now + step * 0.15 + 0.3);
        });
      });
    } catch (e) {
      console.warn('playVictory failed', e);
    }
  }

  playCoin() {
    if (!this.enabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc1 = this.ctx.createOscillator();
      const osc2 = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc1.connect(gain);
      osc2.connect(gain);
      gain.connect(this.ctx.destination);
      
      osc1.type = 'sine';
      osc2.type = 'triangle';
      
      osc1.frequency.setValueAtTime(987.77, now);
      osc1.frequency.setValueAtTime(1318.51, now + 0.08);
      
      osc2.frequency.setValueAtTime(987.77, now);
      osc2.frequency.setValueAtTime(1318.51, now + 0.08);
      
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      
      osc1.start(now);
      osc1.stop(now + 0.35);
      osc2.start(now);
      osc2.stop(now + 0.35);
    } catch (e) {
      console.warn('playCoin failed', e);
    }
  }
}
const sounds = new SoundSynth();

// 3. Visual Confetti celebration engine
class ConfettiEngine {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.particles = [];
    this.active = false;
    this.resize();
    window.addEventListener('resize', () => this.resize());
  }

  resize() {
    const parent = this.canvas.parentElement;
    this.canvas.width = parent.clientWidth;
    this.canvas.height = parent.clientHeight;
  }

  burst(count = 100) {
    this.resize();
    const colors = ['#f43f5e', '#a855f7', '#f97316', '#0ea5e9', '#22c55e', '#eab308'];
    const originX = this.canvas.width / 2;
    const originY = this.canvas.height / 2;
    
    for (let i = 0; i < count; i++) {
      const angle = Math.random() * Math.PI * 2;
      const speed = 4 + Math.random() * 8;
      this.particles.push({
        x: originX,
        y: originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed - 5,
        r: 4 + Math.random() * 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: 1,
        decay: 0.01 + Math.random() * 0.015,
        gravity: 0.25,
        shape: Math.random() > 0.5 ? 'circle' : 'star'
      });
    }
    if (!this.active) {
      this.active = true;
      this.tick();
    }
  }

  tick() {
    if (!this.active) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (let i = this.particles.length - 1; i >= 0; i--) {
      const p = this.particles[i];
      p.vy += p.gravity;
      p.x += p.vx;
      p.y += p.vy;
      p.alpha -= p.decay;
      if (p.alpha <= 0 || p.y > this.canvas.height) {
        this.particles.splice(i, 1);
        continue;
      }
      this.ctx.save();
      this.ctx.globalAlpha = p.alpha;
      this.ctx.fillStyle = p.color;
      if (p.shape === 'circle') {
        this.ctx.beginPath();
        this.ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        this.ctx.fill();
      } else {
        this.ctx.beginPath();
        for (let j = 0; j < 5; j++) {
          this.ctx.lineTo(
            p.x + p.r * Math.cos((18 + j * 72) * Math.PI / 180),
            p.y + p.r * Math.sin((18 + j * 72) * Math.PI / 180)
          );
          this.ctx.lineTo(
            p.x + (p.r/2) * Math.cos((54 + j * 72) * Math.PI / 180),
            p.y + (p.r/2) * Math.sin((54 + j * 72) * Math.PI / 180)
          );
        }
        this.ctx.closePath();
        this.ctx.fill();
      }
      this.ctx.restore();
    }
    if (this.particles.length > 0) {
      requestAnimationFrame(() => this.tick());
    } else {
      this.active = false;
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }
}

// 4. Data Structures for Counting 1-10 Lesson
const NUMBER_WORDS = {
  1: "one", 2: "two", 3: "three", 4: "four", 5: "five",
  6: "six", 7: "seven", 8: "eight", 9: "nine", 10: "ten"
};

const NUMBER_EMOJIS = {
  1: "🎈", 2: "🍎", 3: "🍦", 4: "🚗", 5: "⭐",
  6: "🍪", 7: "🦁", 8: "🧸", 9: "🐠", 10: "🧁"
};

const ELEVEN_TWENTY_WORDS = {
  11: "eleven", 12: "twelve", 13: "thirteen", 14: "fourteen", 15: "fifteen",
  16: "sixteen", 17: "seventeen", 18: "eighteen", 19: "nineteen", 20: "twenty"
};

const MATH_UNITS_DATA = [
  { id: 1, name: "Counting & Number Sense (1-100)" },
  { id: 2, name: "Addition Basics & Word Problems" },
  { id: 3, name: "Subtraction Basics & Word Problems" },
  { id: 4, name: "Place Value & Base Ten" },
  { id: 5, name: "Measurement, Time, & Data" },
  { id: 6, name: "Shapes & Geometry Basics" }
];

const ELA_UNITS_DATA = [
  { id: 1, name: "Phonics & Sounds (1-20)" },
  { id: 2, name: "Sight Words & Word Reading (21-40)" },
  { id: 3, name: "Grammar & Sentence Building (41-60)" },
  { id: 4, name: "Vocabulary & Word Meanings (61-80)" },
  { id: 5, name: "Reading Comprehension (81-100)" },
  { id: 6, name: "Writing & Conventions (101-110)" }
];

const HISTORY_UNITS_DATA = [
  { id: 1, name: "My Family & Community (1-5)" },
  { id: 2, name: "Long Ago & Today (6-10)" },
  { id: 3, name: "National Symbols & Holidays (11-15)" },
  { id: 4, name: "Historical Figures (16-20)" },
  { id: 5, name: "Native American Culture (21-25)" },
  { id: 6, name: "American Heroes & Inventions (26-30)" }
];

const GEOGRAPHY_UNITS_DATA = [
  { id: 1, name: "Map Basics & Features (1-5)" },
  { id: 2, name: "Cardinal Directions (6-10)" },
  { id: 3, name: "Continents & Oceans (11-15)" },
  { id: 4, name: "Landforms & Water Bodies (16-20)" },
  { id: 5, name: "Weather, Seasons & Climate (21-25)" },
  { id: 6, name: "My Place in the World (26-30)" }
];

const SCIENCE_UNITS_DATA = [
  { id: 1, name: "Light & Shadows (1-5)" },
  { id: 2, name: "Sound & Vibrations (6-10)" },
  { id: 3, name: "Plant Parts & Growing (11-15)" },
  { id: 4, name: "Animal Parts & Survival (16-20)" },
  { id: 5, name: "Objects in the Sky (21-25)" },
  { id: 6, name: "Seasonal Patterns (26-30)" }
];

const ART_UNITS_DATA = [
  { id: 1, name: "Lines & Shapes (1-5)" },
  { id: 2, name: "Colors & Mixes (6-10)" },
  { id: 3, name: "Texture & Patterns (11-15)" },
  { id: 4, name: "Form & Space (16-20)" },
  { id: 5, name: "Art Types & Media (21-25)" },
  { id: 6, name: "Famous Artists & Cultures (26-30)" }
];

Object.defineProperty(window, 'UNITS_DATA', {
  get: () => {
    if (appState.currentSubject === 'ela') return ELA_UNITS_DATA;
    if (appState.currentSubject === 'history') return HISTORY_UNITS_DATA;
    if (appState.currentSubject === 'geography') return GEOGRAPHY_UNITS_DATA;
    if (appState.currentSubject === 'science') return SCIENCE_UNITS_DATA;
    if (appState.currentSubject === 'art') return ART_UNITS_DATA;
    return MATH_UNITS_DATA;
  }
});

const LESSON_TITLES = {
  1: ["Number Sense (1-10)", "Match numbers 1-10 to spelled word name."],
  2: ["Counting Emojis (1-10)", "Count icons up to 10."],
  3: ["Spelling Numbers (1-10)", "Identify spellings for numbers."],
  4: ["Matching Words (1-10)", "Match spelling names to numbers."],
  5: ["Compare Groups (1-10)", "Compare groups of objects (greater/lesser)."],
  6: ["Ordering Numbers (1-10)", "Sort numbers in sequential order."],
  7: ["Greater Than (1-10)", "Find numbers greater than a target."],
  8: ["Less Than (1-10)", "Find numbers less than a target."],
  9: ["Skip Count 2s to 10", "Skip count by 2s."],
  10: ["Missing Numbers (1-10)", "Fill in the missing numbers."],
  11: ["Number Sense (11-20)", "Match numbers 11-20 to spelled word name."],
  12: ["Counting Emojis (11-20)", "Count icons up to 20."],
  13: ["Spelling Numbers (11-20)", "Identify spellings for numbers 11-20."],
  14: ["Matching Words (11-20)", "Match spelling names to numbers 11-20."],
  15: ["Compare Groups (11-20)", "Compare groups of objects up to 20."],
  16: ["Ordering Numbers (11-20)", "Sort numbers 11-20 in order."],
  17: ["Ten Frames Intro", "Understand tens frames grids."],
  18: ["Greater Than (11-20)", "Find numbers greater than a target up to 20."],
  19: ["Less Than (11-20)", "Find numbers less than a target up to 20."],
  20: ["Missing Numbers (11-20)", "Fill in missing numbers up to 20."],
  21: ["Adding Zero (+0)", "Learn addition by 0."],
  22: ["Adding One (+1)", "Learn addition by 1."],
  23: ["Adding Two (+2)", "Learn addition by 2."],
  24: ["Plus Three (+3)", "Learn addition by 3."],
  25: ["Making Five (Sum = 5)", "Identify pairs that make 5."],
  26: ["Addition to 5", "Solve addition equations up to 5."],
  27: ["Adding Four (+4)", "Learn addition by 4."],
  28: ["Adding Five (+5)", "Learn addition by 5."],
  29: ["Adding Doubles to 10", "Solve doubles addition (e.g. 3+3, 4+4)."],
  30: ["Doubles Plus One to 10", "Solve near-doubles equations."],
  31: ["Commutative Addition", "Learn A+B = B+A relationship."],
  32: ["Adding to 10", "Solve addition equations up to 10."],
  33: ["Adding Six (+6)", "Learn addition by 6."],
  34: ["Adding Seven (+7)", "Learn addition by 7."],
  35: ["Adding Eight (+8)", "Learn addition by 8."],
  36: ["Adding Nine (+9)", "Learn addition by 9."],
  37: ["Making Ten (Sum = 10)", "Identify pairs that make 10."],
  38: ["Addition to 10", "Solve addition equations up to 10."],
  39: ["Add on Number Line", "Solve addition using number lines."],
  40: ["Addition Word Problems", "Solve story addition questions."],
  41: ["Subtracting Zero (-0)", "Learn subtraction by 0."],
  42: ["Subtracting One (-1)", "Learn subtraction by 1."],
  43: ["Subtracting Two (-2)", "Learn subtraction by 2."],
  44: ["Minus Three (-3)", "Learn subtraction by 3."],
  45: ["Subtracting from Five", "Solve subtraction equations from 5."],
  46: ["Subtraction to 5", "Solve subtraction equations up to 5."],
  47: ["Subtracting Four (-4)", "Learn subtraction by 4."],
  48: ["Subtracting Five (-5)", "Learn subtraction by 5."],
  49: ["Subtracting Doubles", "Solve doubles subtraction (e.g. 5-5)."],
  50: ["Subtract on Number Line", "Solve subtraction using number lines."],
  51: ["Subtracting to 10", "Solve subtraction equations up to 10."],
  52: ["Subtracting Six (-6)", "Learn subtraction by 6."],
  53: ["Subtracting Seven (-7)", "Learn subtraction by 7."],
  54: ["Subtracting Eight (-8)", "Learn subtraction by 8."],
  55: ["Subtracting Nine (-9)", "Learn subtraction by 9."],
  56: ["Subtracting from Ten", "Solve subtraction equations from 10."],
  57: ["Subtraction to 10", "Solve subtraction equations up to 10."],
  58: ["Fact Families Basics", "Understand addition/subtraction link."],
  59: ["Subtraction Story Problems", "Solve story subtraction questions."],
  60: ["Missing Addends (X + _ = Y)", "Solve missing number equations."],
  61: ["Tens & Ones frames", "Understand tens and ones grid visuals."],
  62: ["Count Tens to 100", "Count by 10s up to 100."],
  63: ["Spelling Tens", "Spell ten, twenty, thirty..."],
  64: ["Numbers 21-30 Tens/Ones", "Decompose numbers 21-30 into tens and ones."],
  65: ["Numbers 31-40 Tens/Ones", "Decompose numbers 31-40 into tens and ones."],
  66: ["Numbers 41-50 Tens/Ones", "Decompose numbers 41-50 into tens and ones."],
  67: ["Numbers 51-60 Tens/Ones", "Decompose numbers 51-60 into tens and ones."],
  68: ["Numbers 61-70 Tens/Ones", "Decompose numbers 61-70 into tens and ones."],
  69: ["Numbers 71-80 Tens/Ones", "Decompose numbers 71-80 into tens and ones."],
  70: ["Numbers 81-90 Tens/Ones", "Decompose numbers 81-90 into tens and ones."],
  71: ["Numbers 91-100 Tens/Ones", "Decompose numbers 91-100 into tens and ones."],
  72: ["Comparing 2-Digit Numbers", "Compare 2-digit numbers using <, >, =."],
  73: ["Greater/Lesser 2-Digit", "Identify greater or lesser numbers."],
  74: ["Adding Tens (30+20)", "Solve addition of multiples of 10."],
  75: ["Subtracting Tens (50-20)", "Solve subtraction of multiples of 10."],
  76: ["Ten More than a Number", "Find 10 more than any number."],
  77: ["Ten Less than a Number", "Find 10 less than any number."],
  78: ["Add 2-Digit + 1-Digit", "Add 2-digit to 1-digit numbers (no carry)."],
  79: ["Add 2-Digit + 1-Digit Carry", "Add 2-digit to 1-digit numbers with carrying."],
  80: ["Place Value Stories", "Solve place value word questions."],
  81: ["Ordering Object Lengths", "Sort items by length (longest/shortest)."],
  82: ["Measure with Paperclips", "Measure lengths using paperclips."],
  83: ["Measure with Cubes", "Measure lengths using block cubes."],
  84: ["Measurement Stories", "Solve measurement word questions."],
  85: ["Time to the Hour", "Tell time on analog clock (hour)."],
  86: ["Time to the Half-Hour", "Tell time on analog clock (half-hour)."],
  87: ["Digital to Analog Hour", "Match digital time to analog clocks."],
  88: ["Digital to Analog Half", "Match digital to analog (half-hour)."],
  89: ["Time Word Problems", "Solve story time questions."],
  90: ["Reading Tally Charts", "Read and interpret tally data tables."],
  91: ["Creating Tally Charts", "Construct tallies from list data."],
  92: ["Reading Bar Graphs", "Read bar graph heights and categories."],
  93: ["Interpreting Bar Graphs", "Compare bar graph categories."],
  94: ["Data Stories", "Solve graphs and tally word questions."],
  95: ["Double Tally Charts", "Compare data across double tally grids."],
  96: ["Circles & Squares", "Identify circles and squares."],
  97: ["Triangles & Rectangles", "Identify triangles and rectangles."],
  98: ["Counting Sides", "Count shape sides (circle=0, triangle=3)."],
  99: ["Counting Vertices", "Count corners/vertices of shapes."],
  100: ["Identifying Hexagons", "Identify 6-sided shapes."],
  101: ["Cylinders & Spheres", "Identify cylindrical and spherical 3D shapes."],
  102: ["Cubes & Cones", "Identify cubic and conical 3D shapes."],
  103: ["Compare 2D and 3D", "Distinguish flat shapes from 3D solids."],
  104: ["Defining Attributes", "Closed shapes vs open shapes."],
  105: ["Composite Shapes", "Identify shapes made of smaller shapes."],
  106: ["Fractions Intro", "Understand equal share fractions."],
  107: ["Halves of a Shape", "Divide shapes into halves."],
  108: ["Fourths of a Shape", "Divide shapes into fourths."],
  109: ["Quarters of a Shape", "Identify quarters of circles/squares."],
  110: ["Fraction Word Problems", "Solve story fraction sharing questions."]
};

const GRADE_1_MATH_CURRICULUM = [];
const GRADE_1_ELA_CURRICULUM = [];
const GRADE_1_HISTORY_CURRICULUM = [];
const GRADE_1_GEOGRAPHY_CURRICULUM = [];
const GRADE_1_SCIENCE_CURRICULUM = [];
const GRADE_1_ART_CURRICULUM = [];

const ELA_LESSON_TITLES = {
  1: ["Short 'a' Sound", "Identify words with short 'a' sound (e.g. cat, rat)."],
  2: ["Short 'e' Sound", "Identify words with short 'e' sound (e.g. hen, pen)."],
  3: ["Short 'i' Sound", "Identify words with short 'i' sound (e.g. pig, fin)."],
  4: ["Short 'o' Sound", "Identify words with short 'o' sound (e.g. dog, hop)."],
  5: ["Short 'u' Sound", "Identify words with short 'u' sound (e.g. bug, sun)."],
  6: ["Vowel Sounds Match", "Sort short and long vowel sound words."],
  7: ["Digraph 'sh'", "Words starting or ending with 'sh' (e.g. fish, ship)."],
  8: ["Digraph 'ch'", "Words starting or ending with 'ch' (e.g. chin, rich)."],
  9: ["Digraph 'th'", "Words starting or ending with 'th' (e.g. thin, path)."],
  10: ["Digraph 'wh'", "Words starting with 'wh' (e.g. whip, whale)."],
  11: ["Consonant Blend 'cl'", "Words starting with 'cl' (e.g. clap, clock)."],
  12: ["Consonant Blend 'fl'", "Words starting with 'fl' (e.g. flag, flat)."],
  13: ["Consonant Blend 'st'", "Words starting or ending with 'st' (e.g. star, nest)."],
  14: ["Consonant Blend 'sp'", "Words starting with 'sp' (e.g. spin, spot)."],
  15: ["Silent 'e' Magic", "Long vowel with silent e (e.g. cake, ripe)."],
  16: ["Vowel Team 'ee'", "Words with double 'e' (e.g. tree, bee)."],
  17: ["Vowel Team 'oa'", "Words with 'oa' (e.g. boat, goat)."],
  18: ["Vowel Team 'ai'", "Words with 'ai' (e.g. rain, nail)."],
  19: ["Vowel Team 'ay'", "Words with 'ay' (e.g. play, day)."],
  20: ["R-Controlled Vowels", "Words with 'ar', 'er', 'ir', 'ur' (e.g. star, bird)."],
  21: ["Sight Words Set 1", "Practice reading common sight words (the, of, and)."],
  22: ["Sight Words Set 2", "Practice reading common sight words (to, in, is)."],
  23: ["Sight Words Set 3", "Practice reading common sight words (you, that, it)."],
  24: ["Sight Words Set 4", "Practice reading common sight words (he, was, for)."],
  25: ["Sight Words Set 5", "Practice reading common sight words (on, are, as)."],
  26: ["Sight Words Set 6", "Practice reading common sight words (with, his, they)."],
  27: ["Compound Words", "Combine two small words to make a new one (sun+flower)."],
  28: ["Inflectional '-s'", "Adding 's' to make plural nouns (cats, dogs)."],
  29: ["Inflectional '-ed'", "Adding 'ed' for past tense verbs (jumped, walked)."],
  30: ["Inflectional '-ing'", "Adding 'ing' for continuous actions (running, eating)."],
  31: ["Contractions (not)", "Combine word + not (don't, can't)."],
  32: ["Contractions (will)", "Combine word + will (I'll, she'll)."],
  33: ["Contractions (is)", "Combine word + is (he's, it's)."],
  34: ["Rhyming Words 1", "Identify simple rhyming words (cat/hat)."],
  35: ["Rhyming Words 2", "Identify longer rhyming words (make/lake)."],
  36: ["Syllables Count", "Count syllables in simple words."],
  37: ["Beginning Blends", "Blends like br, cr, dr, fr."],
  38: ["Ending Blends", "Blends like nd, nt, mp, ft."],
  39: ["Word Families -at", "Identify words in the -at family."],
  40: ["Word Families -op", "Identify words in the -op family."],
  41: ["Nouns Intro", "Identify naming words for people, places, or things."],
  42: ["Plural Nouns", "Differentiate singular and plural nouns."],
  43: ["Proper Nouns", "Identify names of specific people/places."],
  44: ["Verbs Intro", "Identify action words (run, jump)."],
  45: ["Verb Tenses", "Identify present, past, and future actions."],
  46: ["Adjectives Intro", "Identify describing words (happy, big)."],
  47: ["Pronouns (I, you)", "Use pronouns in simple sentences."],
  48: ["Pronouns (he, she, it)", "Use pronouns for singular subjects."],
  49: ["Pronouns (we, they)", "Use pronouns for plural subjects."],
  50: ["Capitalizing Sentences", "Capitalize the first word of a sentence."],
  51: ["Capitalizing Names", "Capitalize names of people."],
  52: ["Pronoun 'I' Capital", "Always capitalize the pronoun 'I'."],
  53: ["Ending Periods", "End statement sentences with a period."],
  54: ["Ending Question Marks", "End question sentences with a question mark."],
  55: ["Ending Exclamations", "End excited sentences with an exclamation mark."],
  56: ["Prepositions Intro", "Identify position words (in, on, under)."],
  57: ["Subject-Verb Match", "Match singular and plural subjects to verbs."],
  58: ["Simple Sentences", "Construct simple subject-verb sentences."],
  59: ["Conjunction 'and'", "Combine words and sentences using 'and'."],
  60: ["Conjunction 'but'", "Combine contrast sentences using 'but'."],
  61: ["Synonyms Intro", "Identify words with similar meanings (big/huge)."],
  62: ["Antonyms Intro", "Identify words with opposite meanings (hot/cold)."],
  63: ["Homophones (to/two)", "Distinguish to, two, and too."],
  64: ["Homophones (see/sea)", "Distinguish see and sea."],
  65: ["Homophones (for/four)", "Distinguish for and four."],
  66: ["Categories: Colors", "Sort words belonging to color groups."],
  67: ["Categories: Animals", "Sort words belonging to animal groups."],
  68: ["Categories: Clothes", "Sort words belonging to clothing groups."],
  69: ["Categorizing Foods", "Identify words in the food category."],
  70: ["Multiple Meanings", "Words with multiple meanings (bat, fly)."],
  71: ["Prefix 'un-'", "Understand meaning of un- (unhappy)."],
  72: ["Prefix 're-'", "Understand meaning of re- (redo)."],
  73: ["Suffix '-ful'", "Understand meaning of -ful (helpful)."],
  74: ["Suffix '-less'", "Understand meaning of -less (hopeless)."],
  75: ["Root Words", "Identify the base/root word."],
  76: ["Adjective Opposites", "Match adjective antonyms."],
  77: ["Verb Opposites", "Match action opposites."],
  78: ["Context Clues 1", "Find word meaning from a sentence context."],
  79: ["Context Clues 2", "Choose the right word to fill a blank."],
  80: ["Word Associations", "Link related words (sun/sky, dog/bark)."],
  81: ["Identifying Characters", "Find characters in a short passage."],
  82: ["Identifying Settings", "Find where a story takes place."],
  83: ["Main Idea Intro", "Identify what a short passage is mostly about."],
  84: ["Story Plot: Beginning", "Identify what happens first."],
  85: ["Story Plot: Ending", "Identify what happens last."],
  86: ["Asking Questions", "Formulate who/what/where questions."],
  87: ["Fact vs Fiction", "Distinguish real facts from make-believe stories."],
  88: ["Reading Passage: Animals", "Comprehension passage about pets."],
  89: ["Reading Passage: Toys", "Comprehension passage about a toy robot."],
  90: ["Reading Passage: Friends", "Comprehension passage about playing together."],
  91: ["Cause and Effect", "Understand why something happens in a story."],
  92: ["Comparing Stories", "Find similarities between two simple characters."],
  93: ["Author's Purpose", "Understand why an author writes a text."],
  94: ["Reading Signs", "Comprehension of simple signs and labels."],
  95: ["Problem & Solution", "Identify character problems and resolutions."],
  96: ["Sequence of Events", "Order three events from a passage."],
  97: ["Making Predictions", "Guess what happens next."],
  98: ["Feelings in Stories", "Identify character emotions from context."],
  99: ["Drawing Conclusions", "Deduce simple outcomes."],
  100: ["Main Topic (Info Text)", "Identify the topic of an informative paragraph."],
  101: ["Capitalizing Dates", "Capitalize days of the week and months."],
  102: ["Commas in a Series", "Use commas in list forms."],
  103: ["Spelling Grade Words 1", "Spell grade-appropriate words (dog, cat, run)."],
  104: ["Spelling Grade Words 2", "Spell grade-appropriate words (jump, swim, book)."],
  105: ["Word Choice: Adjectives", "Choose vivid describing words."],
  106: ["Word Choice: Verbs", "Choose active action words."],
  107: ["Completing Sentences", "Identify fragments vs complete thoughts."],
  108: ["Sentence Editing 1", "Find capitalization/punctuation errors."],
  109: ["Sentence Editing 2", "Find simple spelling errors in a sentence."],
  110: ["Opinion Writing Intro", "Select opinion starters (I think, I believe)."]
};

const HISTORY_LESSON_TITLES = {
  1: ["What is History?", "Learn what history means and how we study the past."],
  2: ["My Family Tree", "Understand family relationships across generations."],
  3: ["Family Traditions", "Discover celebrations, foods, and customs passed down."],
  4: ["Community Helpers", "Learn about firefighters, doctors, and teachers."],
  5: ["School Long Ago", "Compare one-room schoolhouses to modern classrooms."],
  6: ["How We Travel", "Compare horses and carriages to cars and airplanes."],
  7: ["Talking to Friends", "Compare writing letters to computers and video calls."],
  8: ["What We Wear", "Compare clothes worn long ago to clothes worn today."],
  9: ["Toys of the Past", "Compare wooden hoops and dolls to modern video games."],
  10: ["Grandparent Stories", "Learn history by listening to stories from our elders."],
  11: ["The American Flag", "Understand the symbols, stars, and stripes of our flag."],
  12: ["Pledge of Allegiance", "Learn the words and meaning of our national promise."],
  13: ["The Bald Eagle", "Discover why the bald eagle is a symbol of freedom."],
  14: ["Independence Day", "Celebrate the birthday of America on the 4th of July."],
  15: ["Thanksgiving History", "Learn about the Pilgrims and the Wampanoag sharing harvest."],
  16: ["George Washington", "Learn about our first president and army general."],
  17: ["Abraham Lincoln", "Learn about our 16th president and honest Abe."],
  18: ["Martin Luther King Jr.", "Discover the civil rights leader and his 'Dream' speech."],
  19: ["Harriet Tubman", "Learn how she led people to freedom on the Underground Railroad."],
  20: ["Rosa Parks", "Discover how she helped start a movement by sitting on a bus."],
  21: ["Native American Homes", "Learn about tepees, longhouses, and pueblos."],
  22: ["Native American Food", "Discover corn, squash, beans, and hunting traditions."],
  23: ["Storytelling Traditions", "Understand legends and oral history telling."],
  24: ["Music & Dance", "Discover Native American drums, songs, and dances."],
  25: ["Nature & Land", "Learn how Native Americans respected and protected nature."],
  26: ["Benjamin Franklin", "Discover his print shop, lightning rod, and bifocals."],
  27: ["Thomas Edison", "Learn how he invented the lightbulb and phonograph."],
  28: ["The Wright Brothers", "Discover the first airplane flight at Kitty Hawk."],
  29: ["Amelia Earhart", "Learn about the brave pilot who flew alone across the Atlantic."],
  30: ["Going to Space", "Discover Neil Armstrong and landing on the Moon."]
};

const GEOGRAPHY_LESSON_TITLES = {
  1: ["What is a Map?", "Learn about bird's eye view maps of spaces."],
  2: ["Globes vs. Maps", "Compare round globes to flat printed maps."],
  3: ["The Map Key", "Understand the legend and how it explains a map."],
  4: ["Map Symbols", "Match icons like trees and water lines to real places."],
  5: ["Bird's Eye View", "Draw toys and rooms looking straight down from above."],
  6: ["The Compass Rose", "Identify North, South, East, and West."],
  7: ["Finding North", "Learn how the sun and stars guide travelers."],
  8: ["Going East & West", "Discover where the sun rises and sets each day."],
  9: ["Using a Grid Map", "Use letter and number keys to find map objects."],
  10: ["Follow the Path", "Use directions to navigate simple maps and mazes."],
  11: ["The Seven Continents", "Identify the seven major landmasses on Earth."],
  12: ["The Five Oceans", "Identify the five huge saltwater oceans on Earth."],
  13: ["The Equator", "Discover the warm imaginary line around the middle."],
  14: ["North & South Poles", "Explore the cold, icy tops and bottoms of the globe."],
  15: ["Our Continent", "Learn about North America, our home continent."],
  16: ["Mountains & Hills", "Explore high rocky peaks and round green hills."],
  17: ["Valleys & Canyons", "Discover low spaces and steep gorges between mountains."],
  18: ["Islands & Peninsulas", "Explore land pieces surrounded mostly or fully by water."],
  19: ["Rivers & Lakes", "Compare flowing fresh water streams to still lake pools."],
  20: ["Oceans & Seas", "Discover deep, salty waters covering most of the Earth."],
  21: ["The Four Seasons", "Learn about Spring, Summer, Fall, and Winter weather."],
  22: ["Hot & Cold Climates", "Compare tropical rainforests to frozen polar regions."],
  23: ["What to Wear", "Learn how to choose clothes that match local climates."],
  24: ["Animal Homes", "Discover how animals build homes for their habitats."],
  25: ["Shelters Around World", "Explore brick houses, igloos, and houses on stilts."],
  26: ["What is an Address?", "Understand street numbers, names, and postal codes."],
  27: ["My Neighborhood", "Explore parks, roads, and friends around your house."],
  28: ["My City & Town", "Learn about local communities and town services."],
  29: ["My State", "Identify the larger state region we live inside."],
  30: ["My Country", "Learn about our nation and its capital city."]
};

const SCIENCE_LESSON_TITLES = {
  1: ["What is Light?", "Learn what makes light and how it helps us see."],
  2: ["Making Shadows", "Discover how blocking light makes dark shapes."],
  3: ["Transparent vs. Opaque", "Compare things light goes through to things it cannot."],
  4: ["Reflecting Light", "Learn how mirrors bounce light in new directions."],
  5: ["Light Signals", "Explore how lighthouses and traffic lights send messages."],
  6: ["What is Sound?", "Discover how vibrations make all the sounds we hear."],
  7: ["Pitch: High & Low", "Learn why fast vibrations sound squeaky and slow ones sound deep."],
  8: ["Volume: Loud & Soft", "Compare loud sound energy to quiet sound energy."],
  9: ["How Sound Travels", "Discover how sound moves through air, water, and solids."],
  10: ["Sound Signals", "Explore how sirens, alarms, and bells tell us important news."],
  11: ["Roots & Stems", "Learn how roots drink water and stems hold up leaves."],
  12: ["Leaves & Sunlight", "Discover how green leaves catch sunlight to make plant food."],
  13: ["Flowers & Seeds", "Learn how flowers grow seeds to make brand new baby plants."],
  14: ["What Plants Need", "Explore why plants need soil, water, air, and sunlight."],
  15: ["How Plants Survive", "Discover how thorns and thick leaves protect plants from animals."],
  16: ["Staying Safe", "Explore how animal fur, scales, and shells protect them."],
  17: ["Finding Food", "Learn how animal teeth, beaks, and claws help them eat."],
  18: ["Animal Senses", "Discover how animals use sight, hearing, and smell to stay safe."],
  19: ["Animal Babies", "Compare animal babies to their moms and dads."],
  20: ["Super Parents", "Explore how animal moms and dads feed and protect their young."],
  21: ["The Sun", "Discover how the sun gives Earth light and warm heat."],
  22: ["The Moon", "Explore the moon's surface and why its shape changes."],
  23: ["The Stars", "Learn about glowing constellations in the night sky."],
  24: ["Day & Night Cycle", "Discover how the Earth spinning makes the sun rise and set."],
  25: ["Sunrise & Sunset", "Understand why days are longer in summer and shorter in winter."],
  26: ["Spring Growth", "Learn how spring rain wakes up sleeping seeds and flowers."],
  27: ["Summer Sun", "Discover why summer is the warmest season with the longest days."],
  28: ["Fall Leaves", "Explore why leaves change colors and drop in autumn."],
  29: ["Winter Snow", "Learn how plants and animals rest during freezing winter days."],
  30: ["Weather Watch", "Explore how we measure temperature using thermometers."]
};

const ART_LESSON_TITLES = {
  1: ["Straight & Wavy Lines", "Draw pictures using horizontal, vertical, and wavy lines."],
  2: ["Zigzag & Curved Lines", "Explore exciting movement lines in art."],
  3: ["Geometric Shapes", "Identify circles, squares, and triangles in art drawings."],
  4: ["Organic Shapes", "Find leaves, puddles, and free-form organic shapes in art."],
  5: ["Pattern Shapes", "Repeat lines and shapes to decorate drawings."],
  6: ["Primary Colors", "Learn about red, yellow, and blue colors."],
  7: ["Secondary Colors", "Discover mixing green, orange, and purple."],
  8: ["Warm Colors", "Explore sun colors like red, orange, and yellow."],
  9: ["Cool Colors", "Explore water colors like blue, green, and purple."],
  10: ["Colors & Feelings", "Compare happy bright colors to quiet dark colors."],
  11: ["Real Texture", "Learn how clay, wood, and feathers feel to touch."],
  12: ["Visual Texture", "Draw lines to make something look fluffy, rough, or smooth."],
  13: ["Repeating Patterns", "Create art using stamps, prints, and stripes."],
  14: ["Nature Patterns", "Explore bark lines, leaf veins, and zebra stripes."],
  15: ["Collage Textures", "Glue paper, yarn, and fabric together in art."],
  16: ["Flat vs. Solid", "Compare flat 2D shapes to solid 3D clay forms."],
  17: ["Foreground & Background", "Place large objects in front and small in back."],
  18: ["Overlapping Shapes", "Overlap shapes to show space and depth."],
  19: ["Sculptures", "Explore 3D art made of clay, stone, or wood."],
  20: ["Negative Space", "Observe the empty spaces around shapes and sculptures."],
  21: ["Portraits", "Create drawings or paintings of a person's face."],
  22: ["Self-Portraits", "Draw a picture of your own face looking in a mirror."],
  23: ["Landscapes", "Paint outdoor nature scenes with trees and mountains."],
  24: ["Still Life", "Draw quiet, non-moving objects like apples in a bowl."],
  25: ["Clay & Pottery", "Use clay to pinch, roll, and mold pots."],
  26: ["Vincent van Gogh", "Explore Starry Night swirls and thick paint strokes."],
  27: ["Claude Monet", "Discover water lilies, soft light, and reflections."],
  28: ["Henri Matisse", "Create organic paper cutouts and shapes."],
  29: ["Pablo Picasso", "Explore Cubism and drawing faces from different sides."],
  30: ["Storytelling in Art", "Discover how paintings and drawings tell exciting stories."]
};

function buildCurriculum() {
  GRADE_1_MATH_CURRICULUM.length = 0;
  for (let i = 1; i <= 110; i++) {
    const unit = i <= 20 ? 1 : i <= 40 ? 2 : i <= 60 ? 3 : i <= 80 ? 4 : i <= 95 ? 5 : 6;
    const standard = unit === 1 ? "1.NBT.A.1" : unit === 2 ? "1.OA.A.1" : unit === 3 ? "1.OA.A.2" : unit === 4 ? "1.NBT.B.2" : unit === 5 ? "1.MD.B.3" : "1.G.A.1";
    const [title, desc] = LESSON_TITLES[i] || [`Lesson ${i}`, "Learn Grade 1 Math standard."];
    GRADE_1_MATH_CURRICULUM.push({
      id: i,
      unit,
      title,
      type: `lesson_${i}`,
      standard,
      desc
    });
  }

  GRADE_1_ELA_CURRICULUM.length = 0;
  for (let i = 1; i <= 110; i++) {
    const unit = i <= 20 ? 1 : i <= 40 ? 2 : i <= 60 ? 3 : i <= 80 ? 4 : i <= 95 ? 5 : 6;
    const standard = unit === 1 ? "RF.1.2" : unit === 2 ? "RF.1.3" : unit === 3 ? "L.1.1" : unit === 4 ? "L.1.5" : unit === 5 ? "RL.1.1" : "W.1.1";
    const [title, desc] = ELA_LESSON_TITLES[i] || [`Lesson ${i}`, "Learn Grade 1 ELA standard."];
    GRADE_1_ELA_CURRICULUM.push({
      id: i,
      unit,
      title,
      type: `lesson_ela_${i}`,
      standard,
      desc
    });
  }

  GRADE_1_HISTORY_CURRICULUM.length = 0;
  for (let i = 1; i <= 30; i++) {
    const unit = i <= 5 ? 1 : i <= 10 ? 2 : i <= 15 ? 3 : i <= 20 ? 4 : i <= 25 ? 5 : 6;
    const standard = `H.1.${unit}`;
    const [title, desc] = HISTORY_LESSON_TITLES[i] || [`Lesson ${i}`, "Learn Grade 1 History."];
    GRADE_1_HISTORY_CURRICULUM.push({
      id: i,
      unit,
      title,
      type: `lesson_history_${i}`,
      standard,
      desc
    });
  }

  GRADE_1_GEOGRAPHY_CURRICULUM.length = 0;
  for (let i = 1; i <= 30; i++) {
    const unit = i <= 5 ? 1 : i <= 10 ? 2 : i <= 15 ? 3 : i <= 20 ? 4 : i <= 25 ? 5 : 6;
    const standard = `G.1.${unit}`;
    const [title, desc] = GEOGRAPHY_LESSON_TITLES[i] || [`Lesson ${i}`, "Learn Grade 1 Geography."];
    GRADE_1_GEOGRAPHY_CURRICULUM.push({
      id: i,
      unit,
      title,
      type: `lesson_geography_${i}`,
      standard,
      desc
    });
  }

  GRADE_1_SCIENCE_CURRICULUM.length = 0;
  for (let i = 1; i <= 30; i++) {
    const unit = i <= 5 ? 1 : i <= 10 ? 2 : i <= 15 ? 3 : i <= 20 ? 4 : i <= 25 ? 5 : 6;
    const standard = `S.1.${unit}`;
    const [title, desc] = SCIENCE_LESSON_TITLES[i] || [`Lesson ${i}`, "Learn Grade 1 Science."];
    GRADE_1_SCIENCE_CURRICULUM.push({
      id: i,
      unit,
      title,
      type: `lesson_science_${i}`,
      standard,
      desc
    });
  }

  GRADE_1_ART_CURRICULUM.length = 0;
  for (let i = 1; i <= 30; i++) {
    const unit = i <= 5 ? 1 : i <= 10 ? 2 : i <= 15 ? 3 : i <= 20 ? 4 : i <= 25 ? 5 : 6;
    const standard = `A.1.${unit}`;
    const [title, desc] = ART_LESSON_TITLES[i] || [`Lesson ${i}`, "Learn Grade 1 Art."];
    GRADE_1_ART_CURRICULUM.push({
      id: i,
      unit,
      title,
      type: `lesson_art_${i}`,
      standard,
      desc
    });
  }
}
buildCurriculum();

Object.defineProperty(window, 'GRADE_1_CURRICULUM', {
  get: () => {
    if (appState.currentSubject === 'ela') return GRADE_1_ELA_CURRICULUM;
    if (appState.currentSubject === 'history') return GRADE_1_HISTORY_CURRICULUM;
    if (appState.currentSubject === 'geography') return GRADE_1_GEOGRAPHY_CURRICULUM;
    if (appState.currentSubject === 'science') return GRADE_1_SCIENCE_CURRICULUM;
    if (appState.currentSubject === 'art') return GRADE_1_ART_CURRICULUM;
    return GRADE_1_MATH_CURRICULUM;
  }
});

const shortA = ["CAT 🐱", "BAT 🦇", "RAT 🐀", "HAT 🎩", "BAG 🎒", "MAP 🗺️", "PAN 🍳", "FAN 🌀", "CAP 🧢", "VAN 🚐"];
const shortE = ["HEN 🐔", "PEN 🖊️", "BED 🛏️", "NET 🕸️", "RED 🔴", "TEN 🔟", "LEG 🦵", "PET 🐶", "WET 💦", "MEN 👨👨"];
const shortI = ["PIG 🐷", "WIG 🦱", "ZIP 🤐", "PIN 📌", "FIN 🐟", "BIN 🗑️", "LIP 👄", "SIT 🪑", "DIG 🕳️", "WIN 🏆"];
const shortO = ["DOG 🐶", "LOG 🪵", "FOX 🦊", "BOX 📦", "POT 🍲", "HOT 🥵", "MOP 🧹", "TOP 🔝", "COP 👮", "HOP 🐇"];
const shortU = ["BUG 🪱", "SUN ☀️", "CUP 🥛", "TUB 🛁", "MUG 🍺", "RUN 🏃", "NUT 🥜", "RUG 🪵", "GUM 🍬", "MUD 💩"];

const digraphSH = ["SHIP 🚢", "FISH 🐟", "DISH 🍽️", "SHOE 👟", "SHELL 🐚", "SHARK 🦈", "BUSH 🌳", "SHOP 🏪"];
const digraphCH = ["CHICK 🐥", "CHIP 🍟", "CHIN 🦲", "CHAIR 🪑", "CHEST 📦", "CHOP 🪓", "RICH 💰", "MUCH ➕"];
const digraphTH = ["THIN 🪡", "PATH 🛣️", "BATH 🛁", "MOTH 🦋", "THREE 3️⃣", "THANK 🙏", "THUMB 👍", "WITH 🤝"];
const digraphWH = ["WHALE 🐋", "WHIP 🌀", "WHEEL 🎡", "WHITE ⚪", "WHEAT 🌾", "WHISPER 🤫"];

const blendCL = ["CLOCK ⏰", "CLIP 📎", "CLAY 🧱", "CLAP 👏", "CLOUD ☁️", "CLAW 🐈"];
const blendFL = ["FLAG 🚩", "FLY 🪰", "FLAT 📏", "FLIP 🐬", "FLOW 🌊", "FLAP 🕊️"];
const blendST = ["STAR ⭐", "STOP 🛑", "STEM 🌱", "STEP 🪜", "NEST 🪹", "VEST 🦺"];
const blendSP = ["SPIN 🌀", "SPOT 🎯", "SPIT 💦", "SPELL 🪄", "SPOON 🥄", "SPIDER 🕷️"];

function generateVowelSoundQuestion(vowelChar, targetList, otherLists) {
  const randType = Math.floor(Math.random() * 3);
  let questionText = "";
  let correctAnswer = "";
  let options = [];
  let visualContent = "";

  const targetWord = targetList[Math.floor(Math.random() * targetList.length)];
  correctAnswer = targetWord;
  const emoji = targetWord.split(' ')[1] || "📖";

  if (randType === 0) {
    questionText = `Which word has a short '${vowelChar}' sound?`;
    visualContent = `<div style="font-size: 64px; animation: bounce 2s infinite;">${emoji}</div>`;
  }
  else if (randType === 1) {
    questionText = `Select the word with the short '${vowelChar}' sound:`;
    visualContent = `<div style="font-size: 64px; animation: pulse 1.5s infinite;">🗣️</div>`;
  }
  else {
    questionText = `Which short '${vowelChar}' sound word matches this picture ${emoji}?`;
    visualContent = `<div style="font-size: 64px;">${emoji}</div>`;
  }

  const wrongList = otherLists.flat();
  const wrongOptions = [];
  while (wrongOptions.length < 3) {
    const w = wrongList[Math.floor(Math.random() * wrongList.length)];
    if (!wrongOptions.includes(w) && !targetList.includes(w)) {
      wrongOptions.push(w);
    }
  }

  options = [correctAnswer, ...wrongOptions];
  options = options.sort(() => 0.5 - Math.random());

  return { questionText, correctAnswer, options, visualContent };
}

function generateDigraphQuestion(digraphStr, targetList, otherLists) {
  const randType = Math.floor(Math.random() * 3);
  let questionText = "";
  let correctAnswer = "";
  let options = [];
  let visualContent = "";

  const targetWord = targetList[Math.floor(Math.random() * targetList.length)];
  correctAnswer = targetWord;
  const emoji = targetWord.split(' ')[1] || "🗣️";

  if (randType === 0) {
    questionText = `Which word has the digraph sound '${digraphStr}'?`;
    visualContent = `<div style="font-size: 64px; animation: bounce 2s infinite;">${emoji}</div>`;
  }
  else if (randType === 1) {
    questionText = `Select the word with the digraph sound '${digraphStr}':`;
    visualContent = `<div style="font-size: 64px; animation: pulse 1.5s infinite;">🗣️</div>`;
  }
  else {
    questionText = `Which word with the digraph sound '${digraphStr}' matches this picture ${emoji}?`;
    visualContent = `<div style="font-size: 64px;">${emoji}</div>`;
  }

  const wrongList = otherLists.flat();
  const wrongOptions = [];
  while (wrongOptions.length < 3) {
    const w = wrongList[Math.floor(Math.random() * wrongList.length)];
    if (!wrongOptions.includes(w) && !targetList.includes(w)) {
      wrongOptions.push(w);
    }
  }

  options = [correctAnswer, ...wrongOptions];
  options = options.sort(() => 0.5 - Math.random());

  return { questionText, correctAnswer, options, visualContent };
}

const HISTORY_QUESTIONS_LIST = {
  1: [
    {
      questionText: "What is history the study of?",
      correctAnswer: "Things that happened in the past",
      options: ["Things that happened in the past", "How to build rocket ships", "Different kinds of bugs", "Our favorite food recipes"],
      visualContent: "📜🕰️",
      hint: "History helps us learn about yesterday, long ago, and our ancestors!"
    }
  ],
  2: [
    {
      questionText: "Which diagram shows how your parents, grandparents, and ancestors are connected?",
      correctAnswer: "Family Tree",
      options: ["Family Tree", "Number Line", "Weather Chart", "Map Legend"],
      visualContent: "🌳👪",
      hint: "It looks like a tree with branches for each person in your family!"
    }
  ],
  3: [
    {
      questionText: "What is a family tradition?",
      correctAnswer: "A special activity your family repeats every year",
      options: ["A special activity your family repeats every year", "Brushing your teeth", "Buying new shoes", "Going to sleep early"],
      visualContent: "🎂🥧🎉",
      hint: "Traditions are celebrations or recipes passed down, like birthday cakes or holiday foods!"
    }
  ],
  4: [
    {
      questionText: "Who is a helper in our community that puts out fires?",
      correctAnswer: "Firefighter",
      options: ["Firefighter", "Baker", "Astronaut", "Painter"],
      visualContent: "🚒🧑‍🚒",
      hint: "They drive a big red truck with a loud siren!"
    }
  ],
  5: [
    {
      questionText: "What did schools long ago have that is different from schools today?",
      correctAnswer: "A one-room schoolhouse for all grades",
      options: ["A one-room schoolhouse for all grades", "Computers and tablets", "Big buses for every kid", "Air conditioning in classrooms"],
      visualContent: "🏫🔔",
      hint: "Long ago, all kids of different ages sat together in just one classroom with one teacher!"
    }
  ],
  6: [
    {
      questionText: "How did people travel long ago before cars and airplanes?",
      correctAnswer: "Horse and carriage",
      options: ["Horse and carriage", "Fast trains", "Electric cars", "Rocket ships"],
      visualContent: "🐴🐎🛕",
      hint: "They used animals like horses to pull carriages on dirt roads!"
    }
  ],
  7: [
    {
      questionText: "How did people send messages long ago before phones and computers?",
      correctAnswer: "Handwritten letters carried by mail riders",
      options: ["Handwritten letters carried by mail riders", "Video calls", "Text messages", "Emails"],
      visualContent: "✉️✍️",
      hint: "They wrote with pen and paper, and it took days or weeks for the mail to arrive!"
    }
  ],
  8: [
    {
      questionText: "What clothes did boys and girls wear long ago?",
      correctAnswer: "Fancy long dresses and suits",
      options: ["Fancy long dresses and suits", "T-shirts and shorts", "Hoodies and sneakers", "Space suits"],
      visualContent: "👗🎩",
      hint: "Kids long ago dressed very formally, often wearing long skirts or high-collar shirts!"
    }
  ],
  9: [
    {
      questionText: "Which toy did kids play with long ago?",
      correctAnswer: "Wooden hoops and marbles",
      options: ["Wooden hoops and marbles", "Video game controllers", "Plastic toy robots", "Smart tablets"],
      visualContent: "🪁🪵🤹",
      hint: "They played with simple toys carved from wood or made of clay and stone!"
    }
  ],
  10: [
    {
      questionText: "Who can tell us stories about what life was like many years ago?",
      correctAnswer: "Our grandparents and elders",
      options: ["Our grandparents and elders", "Baby brothers", "Toy dolls", "Pet puppies"],
      visualContent: "👵👴📖",
      hint: "Grandparents have lived a long time and remember what it was like when they were kids!"
    }
  ],
  11: [
    {
      questionText: "What shapes are on the American flag to represent our states?",
      correctAnswer: "Stars",
      options: ["Stars", "Triangles", "Circles", "Hearts"],
      visualContent: "🇺🇸⭐",
      hint: "There are 50 white stars on a blue field for our 50 states!"
    }
  ],
  12: [
    {
      questionText: "What is the Pledge of Allegiance?",
      correctAnswer: "A promise to be loyal to our country",
      options: ["A promise to be loyal to our country", "A song about school", "A spelling test", "A rules list for games"],
      visualContent: "🇺🇸✋❤️",
      hint: "We stand, put our right hand over our heart, and promise to support our nation!"
    }
  ],
  13: [
    {
      questionText: "Which animal is the national bird and symbol of freedom for America?",
      correctAnswer: "Bald Eagle",
      options: ["Bald Eagle", "Robin", "Penguin", "Owl"],
      visualContent: "🦅🇺🇸",
      hint: "It is a majestic bird with a white head and a brown body!"
    }
  ],
  14: [
    {
      questionText: "What do we celebrate on Independence Day (the 4th of July)?",
      correctAnswer: "The birthday of our country",
      options: ["The birthday of our country", "The start of winter", "The end of school", "Spelling day"],
      visualContent: "🎆🇺🇸🎂",
      hint: "We celebrate America becoming its own country with parades and fireworks!"
    }
  ],
  15: [
    {
      questionText: "Who shared a harvest feast together at the first Thanksgiving?",
      correctAnswer: "Pilgrims and Native Americans",
      options: ["Pilgrims and Native Americans", "Astronauts and aliens", "Bakers and teachers", "Sailors and knights"],
      visualContent: "🦃🌽🤝",
      hint: "The Wampanoag tribe helped the settlers learn to farm, and they celebrated together!"
    }
  ],
  16: [
    {
      questionText: "Who was the first president of the United States?",
      correctAnswer: "George Washington",
      options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson", "Ben Franklin"],
      visualContent: "👑🇺🇸🗽",
      hint: "His face is on the one-dollar bill and the quarter!"
    }
  ],
  17: [
    {
      questionText: "Which president wore a tall black top hat and led the country during a difficult war?",
      correctAnswer: "Abraham Lincoln",
      options: ["Abraham Lincoln", "George Washington", "Barack Obama", "John F. Kennedy"],
      visualContent: "🎩🇺🇸📜",
      hint: "He was our 16th president and is famous for his honesty!"
    }
  ],
  18: [
    {
      questionText: "Who delivered the famous 'I Have a Dream' speech for equality and fairness?",
      correctAnswer: "Martin Luther King Jr.",
      options: ["Martin Luther King Jr.", "George Washington", "Neil Armstrong", "Thomas Edison"],
      visualContent: "🤝✊☮️",
      hint: "He wanted children of all skin colors to play together and be treated equally!"
    }
  ],
  19: [
    {
      questionText: "Who led many enslaved people to freedom on the secret path called the Underground Railroad?",
      correctAnswer: "Harriet Tubman",
      options: ["Harriet Tubman", "Rosa Parks", "Amelia Earhart", "Sally Ride"],
      visualContent: "🚶‍♀️⭐🌌",
      hint: "She used the North Star in the night sky to guide people safely north!"
    }
  ],
  20: [
    {
      questionText: "What did Rosa Parks refuse to give up on a city bus, starting an important movement?",
      correctAnswer: "Her seat",
      options: ["Her seat", "Her ticket", "Her purse", "Her shoes"],
      visualContent: "🚌✊🏷️",
      hint: "She sat down to stand up for fair rules on buses for everyone!"
    }
  ],
  21: [
    {
      questionText: "Which house is a cone-shaped tent built from poles and animal skins by Native Americans?",
      correctAnswer: "Tepee",
      options: ["Tepee", "Log cabin", "Igloo", "Brick house"],
      visualContent: "⛺🏹",
      hint: "It was easy to take down and carry when families followed bison herds!"
    },
    {
      questionText: "Which Native American home is a long wooden house that many families shared together?",
      correctAnswer: "Longhouse",
      options: ["Longhouse", "Tepee", "Igloo", "Tipi"],
      visualContent: "🛖🪵🪵",
      hint: "It was built of wood and bark, and had space for many fireplaces and families!"
    }
  ],
  22: [
    {
      questionText: "Which crop was known as one of the 'Three Sisters' grown by Native Americans?",
      correctAnswer: "Corn",
      options: ["Corn", "Apples", "Wheat", "Oranges"],
      visualContent: "🌽🌱",
      hint: "It grows tall and yellow, and squash vines wrap around it!"
    }
  ],
  23: [
    {
      questionText: "How did Native American tribes pass down their history without books?",
      correctAnswer: "Telling spoken stories and legends out loud",
      options: ["Telling spoken stories and legends out loud", "Sending text messages", "Writing emails", "Taking photos"],
      visualContent: "🔥🗣️🗣️",
      hint: "Elders gathered children around fires to share exciting histories and lessons orally!"
    }
  ],
  24: [
    {
      questionText: "What instrument is most commonly used in Native American music and celebrations?",
      correctAnswer: "Drums",
      options: ["Drums", "Guitars", "Pianos", "Flutes"],
      visualContent: "🥁🎵🕺",
      hint: "It makes a steady beating sound that matches the heartbeat of the dancers!"
    }
  ],
  25: [
    {
      questionText: "How did Native Americans view the land and animals?",
      correctAnswer: "With respect, taking only what they needed",
      options: ["With respect, taking only what they needed", "As property to buy and sell", "As elements to clear away completely", "They ignored them"],
      visualContent: "🌳🦅🦊",
      hint: "They believed in living in harmony with nature and thanking animals for food!"
    }
  ],
  26: [
    {
      questionText: "Which famous inventor discovered that lightning is electricity using a kite?",
      correctAnswer: "Benjamin Franklin",
      options: ["Benjamin Franklin", "Thomas Edison", "Albert Einstein", "Wright Brothers"],
      visualContent: "🪁⚡👓",
      hint: "He also invented bifocal glasses and the lightning rod!"
    },
    {
      questionText: "Which glasses did Benjamin Franklin invent to help people see both near and far?",
      correctAnswer: "Bifocal glasses",
      options: ["Bifocal glasses", "Sunglasses", "Magnifying glass", "3D glasses"],
      visualContent: "👓🧐",
      hint: "The lenses are divided into two parts for reading and looking far away!"
    }
  ],
  27: [
    {
      questionText: "Which amazing inventor built the first electric lightbulb?",
      correctAnswer: "Thomas Edison",
      options: ["Thomas Edison", "Ben Franklin", "Alexander Graham Bell", "Neil Armstrong"],
      visualContent: "💡⚡🔌",
      hint: "His invention helped light up homes and streets all over the world!"
    },
    {
      questionText: "Which machine did Thomas Edison invent to record and play back sounds?",
      correctAnswer: "Phonograph",
      options: ["Phonograph", "Radio", "Telephone", "Television"],
      visualContent: "📻🎶",
      hint: "It used spinning cylinders to record and listen to voices and music!"
    }
  ],
  28: [
    {
      questionText: "What did the Wright Brothers invent and fly for the very first time?",
      correctAnswer: "The airplane",
      options: ["The airplane", "The bicycle", "The steam train", "The submarine"],
      visualContent: "✈️☁️",
      hint: "They flew their machine at Kitty Hawk, North Carolina in 1903!"
    }
  ],
  29: [
    {
      questionText: "Who was the first female pilot to fly solo across the Atlantic Ocean?",
      correctAnswer: "Amelia Earhart",
      options: ["Amelia Earhart", "Harriet Tubman", "Rosa Parks", "Sally Ride"],
      visualContent: "👩‍✈️✈️🌊",
      hint: "She was a brave pilot who loved exploring the skies!"
    }
  ],
  30: [
    {
      questionText: "Who was the first person to walk on the Moon?",
      correctAnswer: "Neil Armstrong",
      options: ["Neil Armstrong", "Buzz Aldrin", "Thomas Edison", "Wright Brothers"],
      visualContent: "🚀🌕👣",
      hint: "He famously said: 'That's one small step for man, one giant leap for mankind.'"
    }
  ]
};

const SCIENCE_QUESTIONS_LIST = {
  1: [
    {
      questionText: "Which of these is a natural source of light that lights up the day sky?",
      correctAnswer: "The Sun",
      options: ["The Sun", "A flashlight", "A candle", "A desk lamp"],
      visualContent: "☀️🌎",
      hint: "It is a giant star in space that gives us both light and warmth!"
    }
  ],
  2: [
    {
      questionText: "What blocks light to make a dark shadow on the ground?",
      correctAnswer: "An opaque object (like a cardboard box or your body)",
      options: ["An opaque object (like a cardboard box or your body)", "Clear window glass", "Air", "Water"],
      visualContent: "👤🔦",
      hint: "Shadows are created when light cannot pass through something!"
    }
  ],
  3: [
    {
      questionText: "What do we call materials that let light pass straight through them, like a clean window?",
      correctAnswer: "Transparent",
      options: ["Transparent", "Opaque", "Reflective", "Shadowy"],
      visualContent: "🔍🪟",
      hint: "You can see clearly through transparent things because light passes right through!"
    },
    {
      questionText: "What do we call materials that block all light and make dark shadows, like a solid wooden door?",
      correctAnswer: "Opaque",
      options: ["Opaque", "Transparent", "Shiny", "Clear"],
      visualContent: "🚪🪵",
      hint: "Opaque materials stop light completely, making it impossible to see through them!"
    }
  ],
  4: [
    {
      questionText: "What object bounces light in a new direction to show your reflection?",
      correctAnswer: "A mirror",
      options: ["A mirror", "A brick wall", "A carpet", "A book"],
      visualContent: "🪞✨",
      hint: "It has a very smooth, shiny surface that reflects light cleanly!"
    }
  ],
  5: [
    {
      questionText: "Which light signal warns ships at sea about dangerous rocky shores?",
      correctAnswer: "A lighthouse beam",
      options: ["A lighthouse beam", "A traffic light", "A birthday candle", "A phone screen"],
      visualContent: "🚨🚢🌊",
      hint: "It is a tall tower near the ocean that shines a giant rotating light!"
    }
  ],
  6: [
    {
      questionText: "What must a material do to create a sound?",
      correctAnswer: "Vibrate (move back and forth quickly)",
      options: ["Vibrate (move back and forth quickly)", "Stay completely still", "Turn green", "Freeze into ice"],
      visualContent: "🎸🔊",
      hint: "Plucking a guitar string wiggles rapidly, which makes a sound!"
    }
  ],
  7: [
    {
      questionText: "What kind of pitch does a mouse squeak make?",
      correctAnswer: "A high pitch",
      options: ["A high pitch", "A low pitch", "No pitch", "A quiet pitch"],
      visualContent: "🐭🔊",
      hint: "Fast wiggles create a high pitch sound, like a whistle or a squeak!"
    }
  ],
  8: [
    {
      questionText: "Which sound has a loud volume?",
      correctAnswer: "A police siren",
      options: ["A police siren", "A whisper", "A falling leaf", "A purring kitten"],
      visualContent: "🚓🔊",
      hint: "Loud sounds have a lot of energy and can be heard from far away!"
    }
  ],
  9: [
    {
      questionText: "Through which material does sound travel to reach your ears when someone speaks?",
      correctAnswer: "Air",
      options: ["Air", "Empty space", "Fire", "Direct sunlight"],
      visualContent: "🗣️💨👂",
      hint: "Sound wiggles air molecules to travel from a speaker to your ears!"
    }
  ],
  10: [
    {
      questionText: "Which sound signal tells students it is time to go inside for class?",
      correctAnswer: "A school bell",
      options: ["A school bell", "A dog barking", "A car honking", "Rain dripping"],
      visualContent: "🔔🏫",
      hint: "It rings loudly across the playground when recess is over!"
    }
  ],
  11: [
    {
      questionText: "Which plant part grows underground to drink water and anchor the plant in the dirt?",
      correctAnswer: "Roots",
      options: ["Roots", "Leaves", "Flowers", "Stems"],
      visualContent: "🌱🟤",
      hint: "They act like tiny straws wiggling in the soil to drink water!"
    },
    {
      questionText: "Which plant part acts like a highway to carry water up to the leaves and hold the plant upright?",
      correctAnswer: "Stem",
      options: ["Stem", "Roots", "Seeds", "Petals"],
      visualContent: "🌱⬆️",
      hint: "It is the long main stalk of the plant that grows upwards towards the sun!"
    }
  ],
  12: [
    {
      questionText: "What do green leaves capture to help the plant make its own food?",
      correctAnswer: "Sunlight",
      options: ["Sunlight", "Soil minerals", "Small insects", "Rain drops"],
      visualContent: "🍃☀️",
      hint: "Leaves act like solar panels catching light from the sky!"
    }
  ],
  13: [
    {
      questionText: "What grows inside a flower to help a new plant grow later?",
      correctAnswer: "Seeds",
      options: ["Seeds", "Roots", "Bark", "Stems"],
      visualContent: "🌻🌻",
      hint: "Birds and wind scatter them, and they grow into sprouts in the dirt!"
    }
  ],
  14: [
    {
      questionText: "Which of these is a basic need of a growing plant?",
      correctAnswer: "Water",
      options: ["Water", "Soda", "Shade all day", "Cold ice cubes"],
      visualContent: "💧🌱",
      hint: "If you don't water a plant, its leaves will wilt and dry out!"
    }
  ],
  15: [
    {
      questionText: "What sharp parts protect a rose plant from being eaten by hungry animals?",
      correctAnswer: "Thorns",
      options: ["Thorns", "Soft petals", "Green leaves", "Sweet nectar"],
      visualContent: "🌹🌵",
      hint: "They are pointy and pricky, warning animals to stay away!"
    }
  ],
  16: [
    {
      questionText: "What hard cover protects a turtle's soft body from predators?",
      correctAnswer: "A shell",
      options: ["A shell", "Fur", "Feathers", "Scales"],
      visualContent: "🐢🛡️",
      hint: "The turtle can pull its head and legs inside this round armor!"
    }
  ],
  17: [
    {
      questionText: "What sharp animal part helps an eagle catch and tear food?",
      correctAnswer: "A pointed beak and sharp talons",
      options: ["A pointed beak and sharp talons", "Flat teeth", "Soft fins", "Fluffy feathers"],
      visualContent: "🦅🐟",
      hint: "Birds of prey need sharp curved beaks to eat meat!"
    }
  ],
  18: [
    {
      questionText: "Which sense does a deer use to hear a predator wiggling in the grass from far away?",
      correctAnswer: "Hearing",
      options: ["Hearing", "Taste", "Touch", "Smell"],
      visualContent: "🦌👂",
      hint: "They have large ears that swivel to catch the quietest wiggles!"
    }
  ],
  19: [
    {
      questionText: "What is a baby dog called?",
      correctAnswer: "Puppy",
      options: ["Puppy", "Kitten", "Calf", "Chick"],
      visualContent: "🐶🐶",
      hint: "It looks like its adult dog parents but is small, soft, and playful!"
    },
    {
      questionText: "What do baby birds look like compared to their parent birds?",
      correctAnswer: "Similar in shape but smaller and with softer feathers",
      options: ["Similar in shape but smaller and with softer feathers", "Completely different like fish", "Exactly the same size", "They have no eyes"],
      visualContent: "🪺🐥🦅",
      hint: "Offspring look like their parents because they belong to the same animal group!"
    }
  ],
  20: [
    {
      questionText: "How do bird parents help their baby chicks survive in the nest?",
      correctAnswer: "By bringing them worms to eat and sitting on them to keep warm",
      options: ["By bringing them worms to eat and sitting on them to keep warm", "By teaching them to drive", "By leaving them alone immediately", "By singing songs"],
      visualContent: "🦅🐛🪺",
      hint: "Baby birds cannot fly or find food, so their parents feed and shield them!"
    }
  ],
  21: [
    {
      questionText: "What does the sun provide to Earth that helps plants grow and keeps us warm?",
      correctAnswer: "Light and heat",
      options: ["Light and heat", "Cold air and snow", "Salty water", "Spelling rules"],
      visualContent: "☀️🌎🌡️",
      hint: "Without the sun, our planet would be a dark, freezing ball of ice!"
    }
  ],
  22: [
    {
      questionText: "Why does the Moon seem to shine at night?",
      correctAnswer: "It reflects light from the Sun",
      options: ["It reflects light from the Sun", "It is made of lightbulbs", "It is a burning star", "It glows in the dark by itself"],
      visualContent: "🌕☀️✨",
      hint: "The moon acts like a giant space mirror bouncing sunlight back to Earth!"
    }
  ],
  23: [
    {
      questionText: "What are stars?",
      correctAnswer: "Giant glowing balls of hot gas very far away",
      options: ["Giant glowing balls of hot gas very far away", "Shiny diamonds in the clouds", "Small pieces of ice", "Flying satellites"],
      visualContent: "⭐🌌",
      hint: "They look tiny because they are millions of miles away, but they are actually giant suns!"
    }
  ],
  24: [
    {
      questionText: "Why do we see the sun rise and set every day?",
      correctAnswer: "Because the Earth spins around on its axis",
      options: ["Because the Earth spins around on its axis", "Because the sun flies around the Earth", "Because clouds block the sun", "Because the sun turns off"],
      visualContent: "🌎🔄☀️",
      hint: "Think of a spinning top; as Earth rotates, your side faces the sun and then away!"
    },
    {
      questionText: "When our side of the Earth spins away from the sun and faces dark space, what cycle is it?",
      correctAnswer: "Nighttime",
      options: ["Nighttime", "Daytime", "Wintertime", "Eclipse"],
      visualContent: "🌎🌌🌙",
      hint: "It gets dark and cold, and we can see the stars and moon!"
    }
  ],
  25: [
    {
      questionText: "In which season do we have the longest hours of daylight with late sunsets?",
      correctAnswer: "Summer",
      options: ["Summer", "Winter", "Fall", "Spring"],
      visualContent: "☀️🏖️📅",
      hint: "It is the warmest season when the sun sets late in the evening!"
    }
  ],
  26: [
    {
      questionText: "What does spring rain help sleeping seeds in the soil do?",
      correctAnswer: "Sprout and grow new stems",
      options: ["Sprout and grow new stems", "Freeze into ice", "Turn into rocks", "Dissolve completely"],
      visualContent: "🌧️🌱🌻",
      hint: "Water wakes up the seed and lets its roots push down and stem push up!"
    }
  ],
  27: [
    {
      questionText: "What happens to tree leaves in the summer?",
      correctAnswer: "They are fully grown, green, and make food",
      options: ["They are fully grown, green, and make food", "They turn brown and fall off", "They are covered in snow", "They disappear"],
      visualContent: "🌳☀️🍃",
      hint: "Summer sunlight helps green leaves perform photosynthesis to feed the trees!"
    }
  ],
  28: [
    {
      questionText: "What color do leaves turn in the fall before dropping from the trees?",
      correctAnswer: "Red, yellow, and orange",
      options: ["Red, yellow, and orange", "Bright blue", "Neon purple", "Metallic silver"],
      visualContent: "🍁🍂🌳",
      hint: "They lose their green color as the weather gets cooler!"
    }
  ],
  29: [
    {
      questionText: "What do some animals (like bears) do to survive the freezing, foodless winter?",
      correctAnswer: "Hibernate (go into a deep winter sleep)",
      options: ["Hibernate (go into a deep winter sleep)", "Grow wings and fly", "Swim to the bottom of the ocean", "Melt into water"],
      visualContent: "🐻❄️🪨",
      hint: "They eat a lot in fall, then sleep in a safe den until spring warmth returns!"
    }
  ],
  30: [
    {
      questionText: "What tool do we use to measure how hot or cold the weather is?",
      correctAnswer: "A thermometer",
      options: ["A thermometer", "A ruler", "A weighing scale", "A compass rose"],
      visualContent: "🌡️🌦️",
      hint: "It has a line inside that rises high when it is hot and drops low when it is cold!"
    }
  ]
};

function generateScienceQuestion(lessonId, index) {
  const qList = SCIENCE_QUESTIONS_LIST[lessonId] || [];
  let q;
  if (index !== undefined && index !== null) {
    q = qList[index % qList.length];
  } else {
    q = qList[Math.floor(Math.random() * qList.length)];
  }
  
  if (!q) {
    return {
      questionText: "What is science?",
      correctAnswer: "The study of nature",
      options: ["The study of nature", "The study of history", "The study of words", "The study of games"],
      visualContent: "🧪",
      hint: "Science helps us explore how objects move, how plants grow, and how stars shine!"
    };
  }
  
  let options = [...q.options];
  options = options.sort(() => Math.random() - 0.5);
  
  return {
    questionText: q.questionText,
    correctAnswer: q.correctAnswer,
    options: options,
    visualContent: q.visualContent,
    hint: q.hint
  };
}

const ART_QUESTIONS_LIST = {
  1: [
    {
      questionText: "Which line goes straight across from left to right like a flat road?",
      correctAnswer: "Horizontal line ➖",
      options: ["Horizontal line ➖", "Vertical line 垂直", "Zigzag line 📈", "Spiral line 🌀"],
      visualContent: "➖🚗",
      hint: "It looks like the ground or a flat sleeping line!"
    }
  ],
  2: [
    {
      questionText: "Which line goes up and down with sharp pointy corners like a mountain range?",
      correctAnswer: "Zigzag line 📈",
      options: ["Zigzag line 📈", "Wavy line 🌊", "Straight line ➖", "Looping line ➰"],
      visualContent: "📈🏔️",
      hint: "It zigs and zags with sharp corners!"
    }
  ],
  3: [
    {
      questionText: "Which shape has 3 sides and 3 sharp corners?",
      correctAnswer: "Triangle 🔺",
      options: ["Triangle 🔺", "Circle 🔴", "Square 🟩", "Oval 🥚"],
      visualContent: "🔺🍕",
      hint: "Think of a slice of pizza or a roof shape!"
    }
  ],
  4: [
    {
      questionText: "What do we call natural, free-form shapes with curvy edges, like a cloud or a leaf?",
      correctAnswer: "Organic shapes 🍃",
      options: ["Organic shapes 🍃", "Geometric shapes 📐", "Square shapes 🟩", "Straight shapes ➖"],
      visualContent: "🍃☁️",
      hint: "These are shapes found in nature that are not perfectly straight!"
    }
  ],
  5: [
    {
      questionText: "When we repeat a line or shape over and over to decorate a drawing, we make a...",
      correctAnswer: "Pattern 🏁",
      options: ["Pattern 🏁", "Mess 🗑️", "Mistake ❌", "Solid color 🎨"],
      visualContent: "🏁🏁",
      hint: "Think of stripes or checkers repeating!"
    }
  ],
  6: [
    {
      questionText: "Which of these is a primary color that cannot be made by mixing other colors?",
      correctAnswer: "Red 🔴",
      options: ["Red 🔴", "Green 🟢", "Orange 🟠", "Purple 🟣"],
      visualContent: "🔴🎨",
      hint: "Primary colors are red, yellow, and blue!"
    },
    {
      questionText: "Which group contains all three primary colors?",
      correctAnswer: "Red, Yellow, and Blue 🎨",
      options: ["Red, Yellow, and Blue 🎨", "Green, Orange, and Purple 🟢", "Black, White, and Gray 🖤", "Pink, Brown, and Purple 🌸"],
      visualContent: "🎨🔴💛🔵",
      hint: "They are the three main colors on a painter's palette!"
    }
  ],
  7: [
    {
      questionText: "What secondary color do you get if you mix red paint and yellow paint together?",
      correctAnswer: "Orange 🟠",
      options: ["Orange 🟠", "Green 🟢", "Purple 🟣", "Blue 🔵"],
      visualContent: "🔴＋💛＝🟠",
      hint: "It is the color of a pumpkin or a carrot!"
    },
    {
      questionText: "What secondary color do you get if you mix blue paint and yellow paint together?",
      correctAnswer: "Green 🟢",
      options: ["Green 🟢", "Orange 🟠", "Purple 🟣", "Red 🔴"],
      visualContent: "🔵＋💛＝🟢",
      hint: "It is the color of grass and tree leaves!"
    }
  ],
  8: [
    {
      questionText: "Which of these is a warm color that makes us think of a hot sun or fire?",
      correctAnswer: "Orange 🟠",
      options: ["Orange 🟠", "Blue 🔵", "Green 🟢", "Purple 🟣"],
      visualContent: "☀️🔥🟠",
      hint: "Warm colors are red, yellow, and orange!"
    }
  ],
  9: [
    {
      questionText: "Which of these is a cool color that makes us think of cold water or ice?",
      correctAnswer: "Blue 🔵",
      options: ["Blue 🔵", "Red 🔴", "Yellow 🟡", "Orange 🟠"],
      visualContent: "❄️💧🔵",
      hint: "Cool colors are blue, green, and purple!"
    }
  ],
  10: [
    {
      questionText: "If you want to paint a quiet, sleepy night sky, which color group should you use?",
      correctAnswer: "Cool colors (like blue and purple) 🌌",
      options: ["Cool colors (like blue and purple) 🌌", "Warm colors (like red and orange) ☀️", "Neon colors ⚡", "Bright yellow 🟡"],
      visualContent: "🌌🌙🌌",
      hint: "Cool, dark colors feel quiet and calm like sleep!"
    }
  ],
  11: [
    {
      questionText: "What kind of real texture does a fluffy teddy bear have when you touch it?",
      correctAnswer: "Soft 🧸",
      options: ["Soft 🧸", "Rough 🪵", "Sticky 🍯", "Prickly 🌵"],
      visualContent: "🧸🧶",
      hint: "It feels warm, fuzzy, and gentle to cuddle!"
    }
  ],
  12: [
    {
      questionText: "If you draw lots of tiny wiggling lines on a dog drawing, you are showing...",
      correctAnswer: "Visual texture (fluffy fur) 🐶",
      options: ["Visual texture (fluffy fur) 🐶", "Primary colors 🔴", "Sculpture shape 🗿", "A straight horizon line ➖"],
      visualContent: "🐶✏️🐕",
      hint: "It makes the flat drawing look like it has real touchable fur!"
    }
  ],
  13: [
    {
      questionText: "What tool can we press into paint to repeat the exact same shape on paper?",
      correctAnswer: "A stamp 💮",
      options: ["A stamp 💮", "A pencil ✏️", "A pair of scissors ✂️", "A ruler 📏"],
      visualContent: "💮🎨💮",
      hint: "You dip it in ink or paint and stamp it down!"
    }
  ],
  14: [
    {
      questionText: "Which animal has a famous pattern of black and white stripes on its body?",
      correctAnswer: "A zebra 🦓",
      options: ["A zebra 🦓", "A green frog 🐸", "A red bird 🐦", "A pink pig 🐷"],
      visualContent: "🦓🦓",
      hint: "It is a wild horse-like animal with stripes!"
    }
  ],
  15: [
    {
      questionText: "What do we call art made by gluing different papers, fabrics, and string together?",
      correctAnswer: "A collage 🖼️",
      options: ["A collage 🖼️", "A sculpture 🗿", "A pencil drawing ✏️", "A watercolor landscape 🏔️"],
      visualContent: "🖼️✂️🧶",
      hint: "It comes from the word 'glue' and uses mixed materials!"
    }
  ],
  16: [
    {
      questionText: "A flat circle drawn on paper is a...",
      correctAnswer: "2D shape ⭕",
      options: ["2D shape ⭕", "3D form ⚽", "Real texture 🧸", "Sculpture 🗿"],
      visualContent: "⭕✏️",
      hint: "It is completely flat and has no thickness!"
    },
    {
      questionText: "A round ball of clay that you can hold in your hand is a...",
      correctAnswer: "3D form ⚽",
      options: ["3D form ⚽", "2D shape ⭕", "Flat drawing 📄", "Line ➖"],
      visualContent: "⚽🏺",
      hint: "It has height, width, and depth like a sphere!"
    }
  ],
  17: [
    {
      questionText: "In a landscape painting, where do we place objects that are far away in the distance?",
      correctAnswer: "In the background (at the top) 🏔️",
      options: ["In the background (at the top) 🏔️", "In the foreground (at the bottom) 🪵", "Right in the middle 🏠", "Directly on your face 👤"],
      visualContent: "🏔️🌲⛵",
      hint: "Faraway mountains are drawn small and high up!"
    }
  ],
  18: [
    {
      questionText: "If you draw one apple in front of another so it blocks part of it, you are...",
      correctAnswer: "Overlapping 🍎",
      options: ["Overlapping 🍎", "Painting 🎨", "Sculpting 🏺", "Erasing 🧼"],
      visualContent: "🍎🍏",
      hint: "Placing one thing on top of another shows which is closer!"
    }
  ],
  19: [
    {
      questionText: "What do we call a 3D art piece that you can walk all the way around, made of wood or clay?",
      correctAnswer: "A sculpture 🗽",
      options: ["A sculpture 🗽", "A painting 🖼️", "A drawing ✏️", "A map key 🔑"],
      visualContent: "🗽🗿",
      hint: "Think of statues or carved figures!"
    }
  ],
  20: [
    {
      questionText: "What do we call the empty air space around a sculpture or inside a donut shape?",
      correctAnswer: "Negative space 🍩",
      options: ["Negative space 🍩", "Positive form ⚽", "Collage texture 🖼️", "Primary color 🔴"],
      visualContent: "🍩💨",
      hint: "It is the blank space where there is no art material!"
    }
  ],
  21: [
    {
      questionText: "A painting that shows a person's face is called a...",
      correctAnswer: "Portrait 👤",
      options: ["Portrait 👤", "Landscape 🏔️", "Still life 🍎", "Sculpture 🗿"],
      visualContent: "🖼️👤",
      hint: "It captures the eyes, nose, mouth, and expression of a person!"
    },
    {
      questionText: "A painting that shows an outdoor scene with mountains, trees, and sky is a...",
      correctAnswer: "Landscape 🏔️",
      options: ["Landscape 🏔️", "Portrait 👤", "Self-portrait 🪞", "Still life 🍎"],
      visualContent: "🏔️🌳🌲",
      hint: "It is a picture of the natural land outside!"
    }
  ],
  22: [
    {
      questionText: "What is a self-portrait?",
      correctAnswer: "A picture of your own face drawn by you 🪞",
      options: ["A picture of your own face drawn by you 🪞", "A drawing of a pet cat 🐱", "A painting of mountains 🏔️", "A clay pot 🏺"],
      visualContent: "🪞✏️👤",
      hint: "You look in a mirror and draw what you see!"
    }
  ],
  23: [
    {
      questionText: "Which type of painting shows hills, fields, rivers, and outdoor nature?",
      correctAnswer: "Landscape 🌳",
      options: ["Landscape 🌳", "Portrait 👤", "Still life 🍎", "Clay pot 🏺"],
      visualContent: "🏞️🌳🏡",
      hint: "It is a picture of the beautiful land!"
    }
  ],
  24: [
    {
      questionText: "What do we call a drawing of quiet, non-moving objects like fruit or flowers on a table?",
      correctAnswer: "Still life 🍎",
      options: ["Still life 🍎", "Portrait 👤", "Landscape 🏔️", "Action movie 🎬"],
      visualContent: "🍎🍇🏺",
      hint: "The objects are quiet and 'still' because they do not move!"
    }
  ],
  25: [
    {
      questionText: "What soft, wet earth material can we squeeze and bake in an oven to make pots?",
      correctAnswer: "Clay 🏺",
      options: ["Clay 🏺", "Paper 📄", "Wood 🪵", "Metal 🪙"],
      visualContent: "🏺👐🏺",
      hint: "It is mud-like dirt that gets very hard when baked!"
    }
  ],
  26: [
    {
      questionText: "Which famous artist painted 'Starry Night' with big yellow swirls in the sky?",
      correctAnswer: "Vincent van Gogh 🌌",
      options: ["Vincent van Gogh 🌌", "Claude Monet 🪷", "Henri Matisse ✂️", "Pablo Picasso 🎨"],
      visualContent: "🌌🌃🌀",
      hint: "He used thick paint strokes that looked like wiggles!"
    }
  ],
  27: [
    {
      questionText: "Which artist is famous for painting water lilies and bridges in his quiet garden?",
      correctAnswer: "Claude Monet 🪷",
      options: ["Claude Monet 🪷", "Vincent van Gogh 🌌", "Pablo Picasso 🎨", "Henri Matisse ✂️"],
      visualContent: "🪷🌉🪷",
      hint: "He painted soft light and reflections on water!"
    }
  ],
  28: [
    {
      questionText: "Which artist used scissors to cut out bright, organic paper shapes when he was older?",
      correctAnswer: "Henri Matisse ✂️",
      options: ["Henri Matisse ✂️", "Vincent van Gogh 🌌", "Claude Monet 🪷", "Pablo Picasso 🎨"],
      visualContent: "✂️🍃🎨",
      hint: "He called it 'drawing with scissors'!"
    }
  ],
  29: [
    {
      questionText: "Which artist is famous for Cubism, where he mixed up faces to show them from different sides?",
      correctAnswer: "Pablo Picasso 🎨",
      options: ["Pablo Picasso 🎨", "Vincent van Gogh 🌌", "Claude Monet 🪷", "Henri Matisse ✂️"],
      visualContent: "🎨👁️👄👃",
      hint: "He drew faces with one eye looking sideways and one looking front!"
    }
  ],
  30: [
    {
      questionText: "Long ago, where did early humans paint pictures of animals to tell stories?",
      correctAnswer: "On cave walls 🧗",
      options: ["On cave walls 🧗", "On canvases 🖼️", "On iPads 📱", "On paper notebooks 📒"],
      visualContent: "🧗🐃🦌",
      hint: "They used charcoal and colored dirt to draw inside rocky shelters!"
    }
  ]
};

function generateArtQuestion(lessonId, index) {
  const qList = ART_QUESTIONS_LIST[lessonId] || [];
  let q;
  if (index !== undefined && index !== null) {
    q = qList[index % qList.length];
  } else {
    q = qList[Math.floor(Math.random() * qList.length)];
  }
  
  if (!q) {
    return {
      questionText: "What is art?",
      correctAnswer: "Making beautiful things 🎨",
      options: ["Making beautiful things 🎨", "Doing math homework 🔢", "Cleaning the floor 🧹", "Sleeping 😴"],
      visualContent: "🎨",
      hint: "Art lets you paint, draw, sculpt, and share your imagination!"
    };
  }
  
  let options = [...q.options];
  options = options.sort(() => Math.random() - 0.5);
  
  return {
    questionText: q.questionText,
    correctAnswer: q.correctAnswer,
    options: options,
    visualContent: q.visualContent,
    hint: q.hint
  };
}

function generateHistoryQuestion(lessonId, index) {
  const qList = HISTORY_QUESTIONS_LIST[lessonId] || [];
  let q;
  if (index !== undefined && index !== null) {
    q = qList[index % qList.length];
  } else {
    q = qList[Math.floor(Math.random() * qList.length)];
  }
  
  if (!q) {
    return {
      questionText: "What is history?",
      correctAnswer: "The study of the past",
      options: ["The study of the past", "The study of nature", "The study of numbers", "The study of space"],
      visualContent: "📜",
      hint: "History teaches us about events and people who lived long ago!"
    };
  }
  
  let options = [...q.options];
  options = options.sort(() => Math.random() - 0.5);
  
  return {
    questionText: q.questionText,
    correctAnswer: q.correctAnswer,
    options: options,
    visualContent: q.visualContent,
    hint: q.hint
  };
}


const GEOGRAPHY_QUESTIONS_LIST = {
  1: [
    {
      questionText: "What is a map?",
      correctAnswer: "A flat drawing of a place from above",
      options: ["A flat drawing of a place from above", "A round spinning ball", "A storybook page", "A photograph of the sky"],
      visualContent: "🗺️🚶",
      hint: "A map shows streets, buildings, and parks as if you are looking straight down like a bird!"
    }
  ],
  2: [
    {
      questionText: "What is a round model of the whole Earth called?",
      correctAnswer: "Globe",
      options: ["Globe", "Map", "Compass", "Chart"],
      visualContent: "🌎🔵",
      hint: "It spins around and shows all the continents and oceans in a 3D shape!"
    },
    {
      questionText: "What is a flat drawing of a place from above called?",
      correctAnswer: "Map",
      options: ["Map", "Globe", "Compass", "Chart"],
      visualContent: "🗺️📄",
      hint: "A map is flat and easy to fold up or view on a screen!"
    }
  ],
  3: [
    {
      questionText: "What tells us what the symbols on a map mean?",
      correctAnswer: "Map Key",
      options: ["Map Key", "Compass Rose", "Grid Line", "Scale"],
      visualContent: "🔑🗺️",
      hint: "It's also called a legend, and it lists icons alongside their meanings!"
    }
  ],
  4: [
    {
      questionText: "On a map, what does a green tree icon usually represent?",
      correctAnswer: "A park or forest",
      options: ["A park or forest", "A school", "A fire station", "A river"],
      visualContent: "🌳🌲🗺️",
      hint: "Trees stand for green outdoor spaces where people play or hike!"
    }
  ],
  5: [
    {
      questionText: "What does 'bird's eye view' mean?",
      correctAnswer: "Looking at something from straight above",
      options: ["Looking at something from straight above", "Looking from the side", "Looking from underneath", "Looking with one eye closed"],
      visualContent: "🦅👁️🏡",
      hint: "Imagine flying like a bird and looking straight down at the roofs of houses!"
    }
  ],
  6: [
    {
      questionText: "Which direction is at the top of a standard map?",
      correctAnswer: "North",
      options: ["North", "South", "East", "West"],
      visualContent: "🧭⬆️",
      hint: "The top of the compass rose points straight up to 'N'!"
    }
  ],
  7: [
    {
      questionText: "Which star in the night sky helps travelers find North?",
      correctAnswer: "North Star",
      options: ["North Star", "The Moon", "Shooting Star", "Mars"],
      visualContent: "⭐🌌🧭",
      hint: "It is also called Polaris, and it stays in the exact same spot in the northern sky all night!"
    }
  ],
  8: [
    {
      questionText: "Where does the sun rise in the morning?",
      correctAnswer: "East",
      options: ["East", "West", "North", "South"],
      visualContent: "🌅☀️",
      hint: "The sun rises in the East and sets in the West!"
    }
  ],
  9: [
    {
      questionText: "How do we find a box on a grid map?",
      correctAnswer: "Using letters and numbers on the edges",
      options: ["Using letters and numbers on the edges", "Guessing randomly", "Measuring with a ruler", "Tapping the center"],
      visualContent: "🔲🗺️📍",
      hint: "Look at the letter on the side and coordinate with the number at the top, like A-3!"
    }
  ],
  10: [
    {
      questionText: "If you want to walk from South to North, which way do you face?",
      correctAnswer: "Straight ahead (upwards)",
      options: ["Straight ahead (upwards)", "To your left", "To your right", "Behind you"],
      visualContent: "🧭🚶‍♀️⬆️",
      hint: "North is the opposite direction of South!"
    }
  ],
  11: [
    {
      questionText: "How many large pieces of land (continents) are on Earth?",
      correctAnswer: "7",
      options: ["7", "5", "10", "3"],
      visualContent: "🌍🗺️",
      hint: "We live on the continent of North America. There are 7 continents in total!"
    }
  ],
  12: [
    {
      questionText: "How many huge oceans are on Earth?",
      correctAnswer: "5",
      options: ["5", "7", "3", "9"],
      visualContent: "🌊🌊",
      hint: "Think of Pacific, Atlantic, Indian, Southern, and Arctic oceans!"
    }
  ],
  13: [
    {
      questionText: "What is the warm imaginary line around the middle of the Earth called?",
      correctAnswer: "Equator",
      options: ["Equator", "North Pole", "Grid Line", "Border"],
      visualContent: "🌎🔥",
      hint: "It separates the top half (Northern Hemisphere) and the bottom half (Southern Hemisphere)!"
    }
  ],
  14: [
    {
      questionText: "What is the weather like at the North and South poles?",
      correctAnswer: "Frozen and icy",
      options: ["Frozen and icy", "Hot and sunny", "Rainy and humid", "Warm and sandy"],
      visualContent: "❄️🧊🐧",
      hint: "These are the very top and bottom of the Earth, where penguins and polar bears live!"
    }
  ],
  15: [
    {
      questionText: "Which continent do we live on?",
      correctAnswer: "North America",
      options: ["North America", "South America", "Europe", "Asia"],
      visualContent: "🗺️🇺🇸🇨🇦",
      hint: "Our continent is home to Canada, the United States, and Mexico!"
    }
  ],
  16: [
    {
      questionText: "What is the tallest landform on Earth with steep rocky slopes?",
      correctAnswer: "Mountain",
      options: ["Mountain", "Hill", "Valley", "Plains"],
      visualContent: "🏔️🧗",
      hint: "They often have snow on their pointed peaks because they are so high!"
    },
    {
      questionText: "What is a raised area of land that is smaller and rounder than a mountain?",
      correctAnswer: "Hill",
      options: ["Hill", "Mountain", "Valley", "Plains"],
      visualContent: "🟢🌳⛰️",
      hint: "Hills are easier to climb than mountains and usually covered in green grass!"
    }
  ],
  17: [
    {
      questionText: "What is the low space of land between mountains called?",
      correctAnswer: "Valley",
      options: ["Valley", "Mountain", "Plateau", "Island"],
      visualContent: "⛰️🛶⛰️",
      hint: "A river often flows through this low space between two mountain ranges!"
    },
    {
      questionText: "What is a deep, narrow valley with very steep rocky sides often carved by a river?",
      correctAnswer: "Canyon",
      options: ["Canyon", "Valley", "Mountain", "Island"],
      visualContent: "🏜️🧗‍♀️🏜️",
      hint: "Think of the Grand Canyon, which has high red stone walls carved over a long time!"
    }
  ],
  18: [
    {
      questionText: "What is a piece of land called that is completely surrounded by water on all sides?",
      correctAnswer: "Island",
      options: ["Island", "Peninsula", "Continent", "Canyon"],
      visualContent: "🏝️🌊",
      hint: "You need a boat or a plane to visit one because water is all around it!"
    },
    {
      questionText: "What is a piece of land called that is surrounded by water on three sides but connected to main land?",
      correctAnswer: "Peninsula",
      options: ["Peninsula", "Island", "Continent", "Canyon"],
      visualContent: "🗺️🌊🇺🇸",
      hint: "Florida is a famous one because it sticks out into the sea but is still attached at the top!"
    }
  ],
  19: [
    {
      questionText: "Which water body features flowing fresh water that travels towards the ocean?",
      correctAnswer: "River",
      options: ["River", "Lake", "Sea", "Pond"],
      visualContent: "🌊🚣‍♂️",
      hint: "Water is moving and flowing in a long path, like the Mississippi!"
    },
    {
      questionText: "What is a large body of still water surrounded by land on all sides?",
      correctAnswer: "Lake",
      options: ["Lake", "River", "Sea", "Pond"],
      visualContent: "🟢💧🟢",
      hint: "Unlike rivers, lake water is still and does not flow along a long path!"
    }
  ],
  20: [
    {
      questionText: "What cover most of our planet Earth?",
      correctAnswer: "Deep, salty oceans",
      options: ["Deep, salty oceans", "Sandy deserts", "Dense forests", "Icy mountains"],
      visualContent: "🌎🌊🐳",
      hint: "Oceans are massive salt water pools that cover over 70% of the Earth!"
    },
    {
      questionText: "What is a smaller body of saltwater, often partly surrounded by land, called?",
      correctAnswer: "Sea",
      options: ["Sea", "Ocean", "Lake", "River"],
      visualContent: "⛵🌊⚓",
      hint: "Seas are smaller saltwater basins close to land, like the Mediterranean Sea!"
    }
  ],
  21: [
    {
      questionText: "In which season do leaves fall off the trees and get crunchy?",
      correctAnswer: "Fall (Autumn)",
      options: ["Fall (Autumn)", "Spring", "Summer", "Winter"],
      visualContent: "🍁🍂🌳",
      hint: "It comes after hot Summer and before cold, snowy Winter!"
    }
  ],
  22: [
    {
      questionText: "Where on Earth are climates usually the hottest and rainiest?",
      correctAnswer: "Near the equator",
      options: ["Near the equator", "Near the North Pole", "Near the South Pole", "In the mountains"],
      visualContent: "🌎🔥🌴",
      hint: "This imaginary belt around the middle of Earth gets the most direct sunlight!"
    },
    {
      questionText: "Which parts of the Earth have cold, frozen climates all year round?",
      correctAnswer: "The polar poles",
      options: ["The polar poles", "Near the equator", "Near the sea", "In deep valleys"],
      visualContent: "❄️🧊🌬️",
      hint: "These are the icy areas at the very top (North Pole) and bottom (South Pole)!"
    }
  ],
  23: [
    {
      questionText: "If you are visiting a cold polar climate, what should you wear?",
      correctAnswer: "A heavy coat, gloves, and boots",
      options: ["A heavy coat, gloves, and boots", "T-shirt, shorts, and sandals", "A raincoat and umbrella", "A bathing suit"],
      visualContent: "🧥🧤❄️",
      hint: "You need thick layers to keep your body heat trapped in freezing snow weather!"
    }
  ],
  24: [
    {
      questionText: "Where does a beaver build its home to stay safe in a pond?",
      correctAnswer: "A lodge built of branches and mud",
      options: ["A lodge built of branches and mud", "A nest high in a pine tree", "A cave under a mountain", "They do not build homes"],
      visualContent: "🦫🪵🌊",
      hint: "They use their sharp teeth to cut down logs and pile them in the water!"
    }
  ],
  25: [
    {
      questionText: "What shelter is built out of packed blocks of ice and snow?",
      correctAnswer: "Igloo",
      options: ["Igloo", "Log cabin", "Tipi", "Brick building"],
      visualContent: "🧊🛖❄️",
      hint: "Inuit people in icy northern regions built these round domes for warmth!"
    }
  ],
  26: [
    {
      questionText: "Why do we write our address on an envelope?",
      correctAnswer: "So the mail carrier knows where to deliver the letter",
      options: ["So the mail carrier knows where to deliver the letter", "To practice spelling our name", "To show our drawing skills", "To decorate the envelope"],
      visualContent: "✉️🏠📍",
      hint: "An address tells the mail carrier the exact house number, street, and city!"
    }
  ],
  27: [
    {
      questionText: "What is a neighborhood?",
      correctAnswer: "The local area directly around your home",
      options: ["The local area directly around your home", "A different state", "A deep forest with wild bears", "A classroom at school"],
      visualContent: "🏡🏘️🌳",
      hint: "It includes your street, neighbors' houses, and the nearest parks or stores!"
    }
  ],
  28: [
    {
      questionText: "What is a city or town?",
      correctAnswer: "A larger community made of many neighborhoods",
      options: ["A larger community made of many neighborhoods", "A single house", "A country flag", "An ocean name"],
      visualContent: "🏢🏬🚑",
      hint: "It has local services like fire stations, libraries, and city halls!"
    }
  ],
  29: [
    {
      questionText: "Which of these is a name of a state?",
      correctAnswer: "California",
      options: ["California", "America", "Los Angeles", "Earth"],
      visualContent: "🐻🌉🗺️",
      hint: "Think of places like California, Texas, Florida, or New York!"
    }
  ],
  30: [
    {
      questionText: "What is the name of our country?",
      correctAnswer: "United States of America",
      options: ["United States of America", "North America", "California", "Earth"],
      visualContent: "🇺🇸🦅🗺️",
      hint: "It's the land represented by the stars and stripes flag!"
    }
  ]
};

function generateGeographyQuestion(lessonId, index) {
  const qList = GEOGRAPHY_QUESTIONS_LIST[lessonId] || [];
  let q;
  if (index !== undefined && index !== null) {
    q = qList[index % qList.length];
  } else {
    q = qList[Math.floor(Math.random() * qList.length)];
  }
  
  if (!q) {
    return {
      questionText: "What is geography?",
      correctAnswer: "The study of the Earth",
      options: ["The study of the Earth", "The study of numbers", "The study of words", "The study of stars"],
      visualContent: "🌍",
      hint: "Geography helps us explore land, water, maps, and climates!"
    };
  }
  
  let options = [...q.options];
  options = options.sort(() => Math.random() - 0.5);
  
  return {
    questionText: q.questionText,
    correctAnswer: q.correctAnswer,
    options: options,
    visualContent: q.visualContent,
    hint: q.hint
  };
}

function generateElaQuestion(lessonId) {
  let questionText = "";
  let correctAnswer = "";
  let options = [];
  let visualContent = "";

  const lesson = GRADE_1_ELA_CURRICULUM.find(l => l.id === lessonId);
  const unit = lesson ? lesson.unit : 1;

  if (unit === 1) {
    if (lessonId === 1) {
      return generateVowelSoundQuestion("a", shortA, [shortE, shortI, shortO, shortU]);
    } else if (lessonId === 2) {
      return generateVowelSoundQuestion("e", shortE, [shortA, shortI, shortO, shortU]);
    } else if (lessonId === 3) {
      return generateVowelSoundQuestion("i", shortI, [shortA, shortE, shortO, shortU]);
    } else if (lessonId === 4) {
      return generateVowelSoundQuestion("o", shortO, [shortA, shortE, shortI, shortU]);
    } else if (lessonId === 5) {
      return generateVowelSoundQuestion("u", shortU, [shortA, shortE, shortI, shortO]);
    } else if (lessonId === 6) {
      questionText = "Which word has a long 'a' sound (sounds like its name)?";
      const choices = ["CAKE 🍰", "LAKE 🏞️", "GATE 🚪", "TAPE 📼"];
      correctAnswer = choices[Math.floor(Math.random() * choices.length)];
      options = [correctAnswer, "CAT 🐱", "HAT 🎩", "BAG 🎒"];
      visualContent = `<div style="font-size: 48px;">🍰</div>`;
    } else if (lessonId === 7) {
      return generateDigraphQuestion("sh", digraphSH, [digraphCH, digraphTH, digraphWH]);
    } else if (lessonId === 8) {
      return generateDigraphQuestion("ch", digraphCH, [digraphSH, digraphTH, digraphWH]);
    } else if (lessonId === 9) {
      return generateDigraphQuestion("th", digraphTH, [digraphSH, digraphCH, digraphWH]);
    } else if (lessonId === 10) {
      return generateDigraphQuestion("wh", digraphWH, [digraphSH, digraphCH, digraphTH]);
    } else if (lessonId === 11) {
      questionText = "Which word starts with the consonant blend 'cl'?";
      correctAnswer = blendCL[Math.floor(Math.random() * blendCL.length)];
      const wrongs = [blendFL[0], blendST[0], blendSP[0]];
      options = [correctAnswer, ...wrongs];
      visualContent = `<div style="font-size: 48px;">⏰</div>`;
    } else if (lessonId === 12) {
      questionText = "Which word starts with the consonant blend 'fl'?";
      correctAnswer = blendFL[Math.floor(Math.random() * blendFL.length)];
      const wrongs = [blendCL[0], blendST[0], blendSP[0]];
      options = [correctAnswer, ...wrongs];
      visualContent = `<div style="font-size: 48px;">🚩</div>`;
    } else if (lessonId === 13) {
      questionText = "Which word starts with the consonant blend 'st'?";
      correctAnswer = blendST[Math.floor(Math.random() * blendST.length)];
      const wrongs = [blendCL[0], blendFL[0], blendSP[0]];
      options = [correctAnswer, ...wrongs];
      visualContent = `<div style="font-size: 48px;">⭐</div>`;
    } else if (lessonId === 14) {
      questionText = "Which word starts with the consonant blend 'sp'?";
      correctAnswer = blendSP[Math.floor(Math.random() * blendSP.length)];
      const wrongs = [blendCL[0], blendFL[0], blendST[0]];
      options = [correctAnswer, ...wrongs];
      visualContent = `<div style="font-size: 48px;">🌀</div>`;
    } else if (lessonId === 15) {
      questionText = "Which word has a Silent 'e' that makes the vowel long?";
      correctAnswer = "KITE 🪁";
      options = [correctAnswer, "KIT 🧰", "KID 👦", "KIN 👪"];
      visualContent = `<div style="font-size: 48px;">🪁</div>`;
    } else if (lessonId === 16) {
      questionText = "Which vowel team word matches this picture: 🌲?";
      correctAnswer = "TREE";
      options = ["TREE", "THREE", "TRY", "TEA"];
      visualContent = `<div style="font-size: 48px;">🌲</div>`;
    } else if (lessonId === 17) {
      questionText = "Which vowel team word matches this picture: 🐐?";
      correctAnswer = "GOAT";
      options = ["GOAT", "GATE", "GOT", "COAT"];
      visualContent = `<div style="font-size: 48px;">🐐</div>`;
    } else if (lessonId === 18) {
      questionText = "Which vowel team word matches this picture: 🌧️?";
      correctAnswer = "RAIN";
      options = ["RAIN", "RAN", "RUN", "PAIN"];
      visualContent = `<div style="font-size: 48px;">🌧️</div>`;
    } else if (lessonId === 19) {
      questionText = "Which word rhyming with 'say' matches: 🎮?";
      correctAnswer = "PLAY";
      options = ["PLAY", "PAY", "DAY", "CLAY"];
      visualContent = `<div style="font-size: 48px;">🎮</div>`;
    } else {
      questionText = "Which word has an 'ar' sound like in 'car'?";
      correctAnswer = "STAR ⭐";
      options = [correctAnswer, "STORE 🏪", "STIR 🥄", "STARE 👀"];
      visualContent = `<div style="font-size: 48px;">⭐</div>`;
    }
  } else if (unit === 2) {
    if (lessonId <= 26) {
      const sightWordGroups = {
        21: ["the", "of", "and", "a"],
        22: ["to", "in", "is", "you"],
        23: ["that", "it", "he", "was"],
        24: ["for", "on", "are", "as"],
        25: ["with", "his", "they", "I"],
        26: ["at", "be", "this", "have"]
      };
      const words = sightWordGroups[lessonId];
      const target = words[Math.floor(Math.random() * words.length)];
      questionText = `Select the correct spelling of the sight word: "${target}"`;
      correctAnswer = target;
      
      const scrambled = target.split('').sort(() => 0.5 - Math.random()).join('');
      options = [target, scrambled + 'e', 'w' + target, target + 'y'];
      visualContent = `<div style="font-size: 32px; font-weight: 800; color: var(--primary);">${target.toUpperCase()}</div>`;
    } else if (lessonId === 27) {
      questionText = "Which compound word is made from: SUN + FLOWER?";
      correctAnswer = "SUNFLOWER 🌻";
      options = [correctAnswer, "SUNNY ☀️", "FLOWERPOT 🪴", "STARFLOWER 🌸"];
      visualContent = `<div style="font-size: 48px;">☀️ + 🌻</div>`;
    } else if (lessonId === 28) {
      questionText = "Make 'CAT 🐱' plural (more than one):";
      correctAnswer = "CATS 🐱🐱";
      options = [correctAnswer, "CATES", "CATING", "CATED"];
      visualContent = `<div style="font-size: 48px;">🐱🐱</div>`;
    } else if (lessonId === 29) {
      questionText = "Make 'PLAY 🎮' past tense (already happened):";
      correctAnswer = "PLAYED";
      options = ["PLAYED", "PLAYS", "PLAYING", "PLAYER"];
      visualContent = `<div style="font-size: 48px;">📅</div>`;
    } else if (lessonId === 30) {
      questionText = "Make 'RUN 🏃' continuous (happening right now):";
      correctAnswer = "RUNNING";
      options = ["RUNNING", "RUNS", "RUNNED", "RUNNER"];
      visualContent = `<div style="font-size: 48px;">🏃</div>`;
    } else if (lessonId === 31) {
      questionText = "What contraction is made from: DO + NOT?";
      correctAnswer = "DON'T";
      options = ["DON'T", "DOESN'T", "CAN'T", "DIDN'T"];
      visualContent = `<div style="font-size: 36px; font-weight: 800;">DO + NOT</div>`;
    } else if (lessonId === 32) {
      questionText = "What contraction is made from: I + WILL?";
      correctAnswer = "I'LL";
      options = ["I'LL", "I'D", "I'VE", "I'M"];
      visualContent = `<div style="font-size: 36px; font-weight: 800;">I + WILL</div>`;
    } else if (lessonId === 33) {
      questionText = "What contraction is made from: HE + IS?";
      correctAnswer = "HE'S";
      options = ["HE'S", "HIS", "HE'LL", "HE'D"];
      visualContent = `<div style="font-size: 36px; font-weight: 800;">HE + IS</div>`;
    } else if (lessonId === 34) {
      questionText = "Select the word that rhymes with: 'CAT 🐱'";
      correctAnswer = "HAT 🎩";
      options = [correctAnswer, "DOG 🐶", "COW 🐮", "PIG 🐷"];
      visualContent = `<div style="font-size: 48px;">🐱</div>`;
    } else if (lessonId === 35) {
      questionText = "Select the word that rhymes with: 'LAKE 🏞️'";
      correctAnswer = "BAKE 🍞";
      options = [correctAnswer, "LIKE 👍", "LATE ⏰", "LOOK 👀"];
      visualContent = `<div style="font-size: 48px;">🏞️</div>`;
    } else if (lessonId === 36) {
      questionText = "How many syllables are in the word 'ROBOT 🤖'?";
      correctAnswer = "2";
      options = ["1", "2", "3", "4"];
      visualContent = `<div style="font-size: 48px;">🤖</div>`;
    } else if (lessonId === 37) {
      questionText = "Which word starts with the blend 'frog' sound (fr)?";
      correctAnswer = "FRIEND 🤝";
      options = [correctAnswer, "BEND 🪝", "SEND ✉️", "LEND 🤝"];
      visualContent = `<div style="font-size: 48px;">🐸</div>`;
    } else if (lessonId === 38) {
      questionText = "Which word ends with the blend 'nd'?";
      correctAnswer = "HAND ✋";
      options = [correctAnswer, "HAT 🎩", "HAS 🙋", "HAD 🪙"];
      visualContent = `<div style="font-size: 48px;">✋</div>`;
    } else if (lessonId === 39) {
      questionText = "Select the word in the '-at' family:";
      correctAnswer = "FLAT 📏";
      options = [correctAnswer, "FLY 🪰", "FLOW 🌊", "FLAP 🕊️"];
      visualContent = `<div style="font-size: 48px;">📏</div>`;
    } else {
      questionText = "Select the word in the '-op' family:";
      correctAnswer = "SHOP 🏪";
      options = [correctAnswer, "SHIP 🚢", "SHED 🏡", "SHUT 🔒"];
      visualContent = `<div style="font-size: 48px;">🏪</div>`;
    }
  } else if (unit === 3) {
    if (lessonId === 41) {
      questionText = "Find the NOUN (naming word) in: 'The pig runs.'";
      correctAnswer = "pig";
      options = ["pig", "runs", "The"];
      visualContent = `<div style="font-size: 48px;">🐷🏃</div>`;
    } else if (lessonId === 42) {
      questionText = "Which noun means MORE than one?";
      correctAnswer = "DOGS 🐶🐶";
      options = [correctAnswer, "DOG 🐶", "PUP 🐶"];
      visualContent = `<div style="font-size: 48px;">🐶🐶</div>`;
    } else if (lessonId === 43) {
      questionText = "Which word is a PROPER noun (needs a capital letter)?";
      correctAnswer = "MARY 👧";
      options = [correctAnswer, "girl 👧", "kid 👦", "baby 👶"];
      visualContent = `<div style="font-size: 48px;">👧</div>`;
    } else if (lessonId === 44) {
      questionText = "Find the VERB (action word) in: 'The boy jumps.'";
      correctAnswer = "jumps";
      options = ["jumps", "boy", "The"];
      visualContent = `<div style="font-size: 48px;">👦🕴️</div>`;
    } else if (lessonId === 45) {
      questionText = "Which action is happening in the PAST (yesterday)?";
      correctAnswer = "He walked.";
      options = ["He walked.", "He walks.", "He will walk."];
      visualContent = `<div style="font-size: 48px;">🚶🕒</div>`;
    } else if (lessonId === 46) {
      questionText = "Find the ADJECTIVE (describing word) in: 'We see a blue balloon.'";
      correctAnswer = "blue";
      options = ["blue", "balloon", "see", "We"];
      visualContent = `<div style="font-size: 48px;">🎈</div>`;
    } else if (lessonId === 47) {
      questionText = "Choose the correct pronoun: 'Mary loves to paint. ___ is an artist.'";
      correctAnswer = "She";
      options = ["She", "He", "It", "They"];
      visualContent = `<div style="font-size: 48px;">👩🎨</div>`;
    } else if (lessonId === 48) {
      questionText = "Choose the pronoun for the cat: 'The cat sleeps. ___ is warm.'";
      correctAnswer = "It";
      options = ["It", "She", "He", "They"];
      visualContent = `<div style="font-size: 48px;">🐱💤</div>`;
    } else if (lessonId === 49) {
      questionText = "Choose the pronoun for multiple people: 'Tom and Jim play. ___ run fast.'";
      correctAnswer = "They";
      options = ["They", "We", "He", "She"];
      visualContent = `<div style="font-size: 48px;">👦👦🏃</div>`;
    } else if (lessonId === 50) {
      questionText = "Which sentence starts with correct capitalization?";
      correctAnswer = "The sun is hot.";
      options = ["The sun is hot.", "the sun is hot.", "The Sun Is Hot."];
      visualContent = `<div style="font-size: 48px;">☀️</div>`;
    } else if (lessonId === 51) {
      questionText = "Which name is capitalized correctly?";
      correctAnswer = "Billy";
      options = ["Billy", "billy", "BiLLy"];
      visualContent = `<div style="font-size: 48px;">🧒</div>`;
    } else if (lessonId === 52) {
      questionText = "Choose the correct form of the word 'I': 'Can ___ play too?'";
      correctAnswer = "I";
      options = ["I", "i"];
      visualContent = `<div style="font-size: 48px;">🙋</div>`;
    } else if (lessonId === 53) {
      questionText = "Which sentence ends with the correct mark?";
      correctAnswer = "I like apples.";
      options = ["I like apples.", "I like apples?", "I like apples,"];
      visualContent = `<div style="font-size: 48px;">🍎</div>`;
    } else if (lessonId === 54) {
      questionText = "Which question is punctuated correctly?";
      correctAnswer = "Where is my toy?";
      options = ["Where is my toy?", "Where is my toy.", "Where is my toy!"];
      visualContent = `<div style="font-size: 48px;">🧸❓</div>`;
    } else if (lessonId === 55) {
      questionText = "Which excited exclamation is punctuated correctly?";
      correctAnswer = "We won the game!";
      options = ["We won the game!", "We won the game.", "We won the game?"];
      visualContent = `<div style="font-size: 48px;">🏆</div>`;
    } else if (lessonId === 56) {
      questionText = "Find the preposition in: 'The cat sits under the table.'";
      correctAnswer = "under";
      options = ["under", "sits", "table", "cat"];
      visualContent = `<div style="font-size: 48px;">🐱🏷️</div>`;
    } else if (lessonId === 57) {
      questionText = "Which verb fits: 'The two dogs ___ in the park.'";
      correctAnswer = "run";
      options = ["run", "runs", "running"];
      visualContent = `<div style="font-size: 48px;">🐶🐶🏃</div>`;
    } else if (lessonId === 58) {
      questionText = "Which is a complete sentence (not a fragment)?";
      correctAnswer = "The cat ran.";
      options = ["The cat ran.", "Running cat", "Very fast cat"];
      visualContent = `<div style="font-size: 48px;">🐱🏁</div>`;
    } else if (lessonId === 59) {
      questionText = "Combine these with 'and': 'I want apples ___ bananas.'";
      correctAnswer = "and";
      options = ["and", "but", "or"];
      visualContent = `<div style="font-size: 48px;">🍎🍌</div>`;
    } else {
      questionText = "Choose the correct connector: 'It is raining, ___ I have my umbrella.'";
      correctAnswer = "but";
      options = ["but", "and", "or"];
      visualContent = `<div style="font-size: 48px;">🌧️☔</div>`;
    }
  } else if (unit === 4) {
    if (lessonId === 61) {
      questionText = "What is a synonym (same meaning) for 'BIG'?";
      correctAnswer = "LARGE";
      options = ["LARGE", "SMALL", "TINY", "COLD"];
      visualContent = `<div style="font-size: 48px;">🐘</div>`;
    } else if (lessonId === 62) {
      questionText = "What is the antonym (opposite meaning) of 'HOT'?";
      correctAnswer = "COLD";
      options = ["COLD", "WARM", "SUNNY", "RED"];
      visualContent = `<div style="font-size: 48px;">🔥</div>`;
    } else if (lessonId === 63) {
      questionText = "Choose the correct homophone: 'I have ___ hands.'";
      correctAnswer = "two";
      options = ["two", "to", "too"];
      visualContent = `<div style="font-size: 48px;">🙌</div>`;
    } else if (lessonId === 64) {
      questionText = "Choose the correct homophone: 'Fish swim in the ___.'";
      correctAnswer = "sea";
      options = ["sea", "see"];
      visualContent = `<div style="font-size: 48px;">🌊</div>`;
    } else if (lessonId === 65) {
      questionText = "Choose the correct homophone: 'This card is ___ you.'";
      correctAnswer = "for";
      options = ["for", "four"];
      visualContent = `<div style="font-size: 48px;">🎁</div>`;
    } else if (lessonId === 66) {
      questionText = "Which word belongs in the category: COLORS?";
      correctAnswer = "Yellow 💛";
      options = ["Yellow 💛", "Cat 🐱", "Apple 🍎", "Car 🚗"];
      visualContent = `<div style="font-size: 48px;">🎨</div>`;
    } else if (lessonId === 67) {
      questionText = "Which word belongs in the category: ANIMALS?";
      correctAnswer = "Lion 🦁";
      options = ["Lion 🦁", "Tree 🌲", "Chair 🪑", "Bus 🚌"];
      visualContent = `<div style="font-size: 48px;">🦁</div>`;
    } else if (lessonId === 68) {
      questionText = "Which word belongs in the category: CLOTHING?";
      correctAnswer = "Shirt 👕";
      options = ["Shirt 👕", "Apple 🍎", "Dog 🐶", "Pen 🖊️"];
      visualContent = `<div style="font-size: 48px;">👕</div>`;
    } else if (lessonId === 69) {
      questionText = "Which word belongs in the category: FRUITS?";
      correctAnswer = "Banana 🍌";
      options = ["Banana 🍌", "Carrot 🥕", "Potato 🥔", "Milk 🥛"];
      visualContent = `<div style="font-size: 48px;">🍎</div>`;
    } else if (lessonId === 70) {
      questionText = "Which animal word also means a wooden stick used in baseball?";
      correctAnswer = "BAT 🦇";
      options = ["BAT 🦇", "CAT 🐱", "FLY 🪰", "BEE 🐝"];
      visualContent = `<div style="font-size: 48px;">⚾</div>`;
    } else if (lessonId === 71) {
      questionText = "What does the prefix 'un-' make the word 'happy' mean?";
      correctAnswer = "not happy 😢";
      options = ["not happy 😢", "very happy 😄", "happy again 😄", "never happy 😢"];
      visualContent = `<div style="font-size: 48px;">😢</div>`;
    } else if (lessonId === 72) {
      questionText = "What does the prefix 're-' make the word 'read' mean?";
      correctAnswer = "read again 📖";
      options = ["read again 📖", "not read 🚫", "before reading 📚", "who reads 🧒"];
      visualContent = `<div style="font-size: 48px;">📖</div>`;
    } else if (lessonId === 73) {
      questionText = "What does the suffix '-ful' make the word 'helpful' mean?";
      correctAnswer = "full of help 🤝";
      options = ["full of help 🤝", "no help 🚫", "help again 🤝", "not helpful 😢"];
      visualContent = `<div style="font-size: 48px;">🤝</div>`;
    } else if (lessonId === 74) {
      questionText = "What does the suffix '-less' make the word 'fearless' mean?";
      correctAnswer = "without fear 💪";
      options = ["without fear 💪", "full of fear 😨", "fear again 😨", "not fear 🚫"];
      visualContent = `<div style="font-size: 48px;">🦁💪</div>`;
    } else if (lessonId === 75) {
      questionText = "What is the base root word of 'PLAYFUL'?";
      correctAnswer = "PLAY";
      options = ["PLAY", "PLAYFUL", "FUL", "PLAYER"];
      visualContent = `<div style="font-size: 48px;">🎮</div>`;
    } else if (lessonId === 76) {
      questionText = "Match the opposite of 'SMALL':";
      correctAnswer = "BIG 🐘";
      options = ["BIG 🐘", "TINY 🐜", "COLD 🧊", "SOFT 🧸"];
      visualContent = `<div style="font-size: 48px;">🐜</div>`;
    } else if (lessonId === 77) {
      questionText = "Match the opposite of 'STAND':";
      correctAnswer = "SIT 🪑";
      options = ["SIT 🪑", "RUN 🏃", "JUMP 🕴️", "WALK 🚶"];
      visualContent = `<div style="font-size: 48px;">🧍</div>`;
    } else if (lessonId === 78) {
      questionText = "Use context clues: 'The ___ shined bright in the sky, warming the pool.'";
      correctAnswer = "sun";
      options = ["sun", "rain", "moon", "star"];
      visualContent = `<div style="font-size: 48px;">🏊</div>`;
    } else if (lessonId === 79) {
      questionText = "Fill in the blank: 'I brushed my ___ before going to bed.'";
      correctAnswer = "teeth";
      options = ["teeth", "shoes", "toys", "dog"];
      visualContent = `<div style="font-size: 48px;">🪥</div>`;
    } else {
      questionText = "What word is associated with 'SKY' and 'RAIN'?";
      correctAnswer = "CLOUD ☁️";
      options = ["CLOUD ☁️", "GRASS 🌱", "FIRE 🔥", "ROAD 🛣️"];
      visualContent = `<div style="font-size: 48px;">🌧️</div>`;
    }
  } else if (unit === 5) {
    const passage = "Passage: Pip is a little blue bird. He lives in a tall green tree. Pip loves to eat sweet yellow worms.";
    visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${passage}</div>`;
    
    if (lessonId === 81) {
      questionText = "Who is the main character in the passage?";
      correctAnswer = "Pip (a bird) 🐦";
      options = [correctAnswer, "A worm 🐛", "A cat 🐱", "A tree 🌳"];
    } else if (lessonId === 82) {
      questionText = "Where is the setting of the story?";
      correctAnswer = "In a tall green tree 🌳";
      options = [correctAnswer, "In a dog house 🏠", "In a deep lake 🌊", "In a sandy desert 🏜️"];
    } else if (lessonId === 83) {
      questionText = "What is the main topic of this passage?";
      correctAnswer = "Pip the bird and where he lives 🐦";
      options = [correctAnswer, "How to catch sweet worms 🐛", "Why trees are green 🌳", "How to fly high ☁️"];
    } else if (lessonId === 84) {
      questionText = "In a story, where do you learn about the characters first?";
      correctAnswer = "At the beginning 🎬";
      options = [correctAnswer, "At the ending 🏁", "In the index 📚", "Nowhere 🚫"];
      visualContent = `<div style="font-size: 48px;">🎬</div>`;
    } else if (lessonId === 85) {
      questionText = "In a story, where do we find out how the problem is solved?";
      correctAnswer = "At the ending 🏁";
      options = [correctAnswer, "At the beginning 🎬", "In the title 🏷️", "In the middle 📖"];
      visualContent = `<div style="font-size: 48px;">🏁</div>`;
    } else if (lessonId === 86) {
      questionText = "If you want to know the character's location, which question word do you use?";
      correctAnswer = "WHERE 📍";
      options = ["WHERE 📍", "WHO 👤", "WHAT ❓", "WHEN ⏰"];
      visualContent = `<div style="font-size: 48px;">📍</div>`;
    } else if (lessonId === 87) {
      questionText = "Which statement is FACT (real), not fiction?";
      correctAnswer = "Cats have whiskers.";
      options = ["Cats have whiskers.", "Cats can talk in English.", "Cats fly to the moon.", "Cats drive blue school buses."];
      visualContent = `<div style="font-size: 48px;">🐱</div>`;
    } else if (lessonId === 88) {
      const animalPassage = "Passage: Max is a funny dog. He loves to dig in the dirt. Max found a bone today!";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${animalPassage}</div>`;
      questionText = "What did Max find today?";
      correctAnswer = "A bone 🦴";
      options = ["A bone 🦴", "A toy ball ⚽", "A shoe 🥾", "A gold coin 🪙"];
    } else if (lessonId === 89) {
      const toyPassage = "Passage: Leo has a toy robot. The robot is silver and has red flashing eyes. It can dance!";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${toyPassage}</div>`;
      questionText = "What color are the robot's flashing eyes?";
      correctAnswer = "Red 🔴";
      options = ["Red 🔴", "Blue 🔵", "Green 🟢", "Silver 💿"];
    } else if (lessonId === 90) {
      const friendPassage = "Passage: Pam and Kim are best friends. They like to swing at the park. Today they ate ice cream.";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${friendPassage}</div>`;
      questionText = "What food did Pam and Kim eat today?";
      correctAnswer = "Ice cream 🍦";
      options = ["Ice cream 🍦", "Apples 🍎", "Pizza 🍕", "Cookies 🍪"];
    } else if (lessonId === 91) {
      questionText = "If you step in a puddle of water, what will the EFFECT be?";
      correctAnswer = "Your feet get wet 👣";
      options = ["Your feet get wet 👣", "The sun will shine ☀️", "It will snow ❄️", "You get dry 💨"];
      visualContent = `<div style="font-size: 48px;">👣💦</div>`;
    } else if (lessonId === 92) {
      questionText = "Which character is most likely a make-believe fiction character?";
      correctAnswer = "A talking dragon 🐉";
      options = ["A talking dragon 🐉", "A farm vet 👩‍⚕️", "A school teacher 👩‍🏫", "A firefighter 👨‍🚒"];
      visualContent = `<div style="font-size: 48px;">🐉</div>`;
    } else if (lessonId === 93) {
      questionText = "Why does an author write a book of funny jokes?";
      correctAnswer = "To entertain and make you laugh 😄";
      options = ["To entertain and make you laugh 😄", "To teach you how to bake bread 🍞", "To explain map routes 🗺️", "To show school bus rules 🚌"];
      visualContent = `<div style="font-size: 48px;">🃏😄</div>`;
    } else if (lessonId === 94) {
      questionText = "What does a red octagonal sign that says STOP mean?";
      correctAnswer = "You must stop your car 🛑";
      options = ["You must stop your car 🛑", "You must drive faster 🚗", "You must buy ice cream 🍦", "You must park here 🅿️"];
      visualContent = `<div style="font-size: 48px;">🛑</div>`;
    } else if (lessonId === 95) {
      const probPassage = "Passage: Tim lost his yellow crayon. He looked under his bed and found it!";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${probPassage}</div>`;
      questionText = "What was the solution to Tim's problem?";
      correctAnswer = "He found the crayon under his bed 🖍️";
      options = ["He found the crayon under his bed 🖍️", "He lost his crayon 🖍️", "He bought new markers 🖍️", "He drew a picture 🎨"];
    } else if (lessonId === 96) {
      questionText = "Order these events: (1) Put on shoes, (2) Wake up, (3) Tie laces. Which is first?";
      correctAnswer = "Wake up ⏰";
      options = ["Wake up ⏰", "Put on shoes 👟", "Tie laces 🎀"];
      visualContent = `<div style="font-size: 48px;">⏰👟🎀</div>`;
    } else if (lessonId === 97) {
      const predPassage = "Passage: Dark black clouds filled the sky. Thunder boomed loudly.";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${predPassage}</div>`;
      questionText = "Predict what will happen next:";
      correctAnswer = "It will rain 🌧️";
      options = ["It will rain 🌧️", "The sun will rise ☀️", "It will snow candy 🍬", "A rainbow will appear immediately 🌈"];
    } else if (lessonId === 98) {
      const feelPassage = "Passage: Lily dropped her ice cream cone on the sidewalk. Tears ran down her face.";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${feelPassage}</div>`;
      questionText = "How did Lily feel?";
      correctAnswer = "Sad 😢";
      options = ["Sad 😢", "Happy 😄", "Angry 😡", "Scared 😨"];
    } else if (lessonId === 99) {
      const concPassage = "Passage: The children put on warm coats, hats, and mittens. They grabbed sleds and headed outside.";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${concPassage}</div>`;
      questionText = "What season is it?";
      correctAnswer = "Winter ❄️";
      options = ["Winter ❄️", "Summer ☀️", "Spring 🌸", "Fall 🍂"];
    } else {
      const infoPassage = "Passage: Bees fly to flowers to collect sweet nectar. They use it to make honey inside their hives.";
      visualContent = `<div style="padding: 10px; background: #f3f4f6; border-radius: 8px; font-size: 14px; font-style: italic; line-height: 1.5; text-align: left; max-width: 320px; margin: 0 auto 12px auto;">${infoPassage}</div>`;
      questionText = "What is the topic of this informational paragraph?";
      correctAnswer = "How bees make honey 🐝";
      options = ["How bees make honey 🐝", "Why flowers are pretty 🌸", "How bees fly 🐝", "Why bears eat honey 🐻"];
    }
  } else {
    if (lessonId === 101) {
      questionText = "Which month name is capitalized correctly?";
      correctAnswer = "October 🎃";
      options = ["October 🎃", "october 🎃", "OctObeR", "OcTober"];
      visualContent = `<div style="font-size: 48px;">📅</div>`;
    } else if (lessonId === 102) {
      questionText = "Which sentence uses commas correctly in a list?";
      correctAnswer = "I want a toy, a book, and a crayon.";
      options = [correctAnswer, "I want a toy a book and a crayon.", "I want a toy, a book and, a crayon."];
      visualContent = `<div style="font-size: 48px;">🧸📖🖍️</div>`;
    } else if (lessonId === 103) {
      questionText = "Find the correct spelling of this animal: 🐶";
      correctAnswer = "DOG";
      options = ["DOG", "DOGG", "DAG", "DOGE"];
      visualContent = `<div style="font-size: 48px;">🐶</div>`;
    } else if (lessonId === 104) {
      questionText = "Find the correct spelling for this action: 🏊";
      correctAnswer = "SWIM";
      options = ["SWIM", "SWEM", "SWIMM", "SWUM"];
      visualContent = `<div style="font-size: 48px;">🏊</div>`;
    } else if (lessonId === 105) {
      questionText = "Choose the most expressive adjective: 'The ___ cat won the show.'";
      correctAnswer = "beautiful ✨";
      options = ["beautiful ✨", "nice 👍", "good 👌", "okay 🆗"];
      visualContent = `<div style="font-size: 48px;">🐈✨</div>`;
    } else if (lessonId === 106) {
      questionText = "Choose the most active verb: 'The happy frog ___ into the lake.'";
      correctAnswer = "splashed 💦";
      options = ["splashed 💦", "went 🚶", "was 💨", "got 🪙"];
      visualContent = `<div style="font-size: 48px;">🐸💦</div>`;
    } else if (lessonId === 107) {
      questionText = "Which is a complete sentence?";
      correctAnswer = "The sun is hot.";
      options = ["The sun is hot.", "Hot hot sun", "Shining in the sky"];
      visualContent = `<div style="font-size: 48px;">☀️</div>`;
    } else if (lessonId === 108) {
      questionText = "Find the error in: 'the boy plays.'";
      correctAnswer = "Needs a capital T 🔠";
      options = ["Needs a capital T 🔠", "Needs a question mark ❓", "Needs a comma 🪙", "Spelled wrong ❌"];
      visualContent = `<div style="font-size: 32px; font-weight: 800;">the boy plays.</div>`;
    } else if (lessonId === 109) {
      questionText = "Find the spelling error in: 'I saw a big rede balloon.'";
      correctAnswer = "rede -> red 🔴";
      options = ["rede -> red 🔴", "saw -> sow 🐷", "big -> bigg 🐘", "balloon -> baloon 🎈"];
      visualContent = `<div style="font-size: 32px; font-weight: 800;">I saw a big rede balloon.</div>`;
    } else {
      questionText = "Which phrase starts a good opinion statement?";
      correctAnswer = "I believe... 💭";
      options = ["I believe... 💭", "Once upon a time... 📖", "In the month of... 📅", "The passage states... 📝"];
      visualContent = `<div style="font-size: 48px;">💭</div>`;
    }
  }

  options = options.sort(() => 0.5 - Math.random());

  return { questionText, correctAnswer, options, visualContent };
}

function getQuestionsForLesson(subject, lessonId) {
  if (subject === 'history') return HISTORY_QUESTIONS_LIST[lessonId] || [];
  if (subject === 'geography') return GEOGRAPHY_QUESTIONS_LIST[lessonId] || [];
  if (subject === 'science') return SCIENCE_QUESTIONS_LIST[lessonId] || [];
  if (subject === 'art') return ART_QUESTIONS_LIST[lessonId] || [];
  
  if (subject === 'ela') {
    if (lessonId === 6) {
      return [
        {
          questionText: "Which word has a short 'a' sound?",
          correctAnswer: "CAT 🐱",
          options: ["CAT 🐱", "CAKE 🍰", "LAKE 🏞️", "TAPE 📼"],
          visualContent: `<div style="font-size: 48px;">🐱</div>`,
          hint: "Short 'a' sound is like 'ah' in cat!"
        },
        {
          questionText: "Which word has a long 'a' sound (sounds like its name)?",
          correctAnswer: "CAKE 🍰",
          options: ["CAKE 🍰", "CAT 🐱", "HAT 🎩", "BAG 🎒"],
          visualContent: `<div style="font-size: 48px;">🍰</div>`,
          hint: "Long 'a' sound says its own name, like 'ay' in cake!"
        }
      ];
    }
    return [generateElaQuestion(lessonId)];
  }
  
  if (subject === 'math') {
    if (lessonId === 5) {
      return [
        {
          questionText: "Which number is greater (bigger)?",
          correctAnswer: "8",
          options: ["8", "3", "5", "2"],
          visualContent: `<div style="font-size: 48px;">🍎</div><div style="font-size: 16px; margin-top: 8px;">8 vs 3</div>`,
          hint: "8 is more than 3!"
        },
        {
          questionText: "Which number is lesser (smaller)?",
          correctAnswer: "2",
          options: ["2", "7", "6", "9"],
          visualContent: `<div style="font-size: 48px;">🍌</div><div style="font-size: 16px; margin-top: 8px;">2 vs 7</div>`,
          hint: "2 is less than 7!"
        }
      ];
    }
  }
  return [];
}

function generateMathQuestion(lessonId, index) {
  if (appState.currentSubject === 'ela' || appState.currentSubject === 'history' || appState.currentSubject === 'geography' || appState.currentSubject === 'science' || appState.currentSubject === 'art' || (appState.currentSubject === 'math' && lessonId === 5)) {
    const qList = getQuestionsForLesson(appState.currentSubject, lessonId);
    const idx = (index !== undefined && index !== null) ? index : 0;
    let q = qList[idx % qList.length];
    if (!q) q = qList[0];
    if (q) {
      let options = [...q.options];
      options = options.sort(() => Math.random() - 0.5);
      return {
        questionText: q.questionText,
        correctAnswer: q.correctAnswer,
        options: options,
        visualContent: q.visualContent,
        hint: q.hint
      };
    }
  }
  const lesson = GRADE_1_CURRICULUM.find(l => l.id === lessonId);
  const unit = lesson ? lesson.unit : 1;
  
  let questionText = "";
  let correctAnswer = "";
  let options = [];
  let visualContent = "";

  if (unit === 1) {
    // Counting & Number Sense
    const is10 = lessonId <= 10;
    const min = is10 ? 1 : 11;
    const max = is10 ? 10 : 20;
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    const word = is10 ? NUMBER_WORDS[num] : ELEVEN_TWENTY_WORDS[num];
    const emoji = is10 ? NUMBER_EMOJIS[num] : "🍭";
    
    const subType = (lessonId - 1) % 5;
    if (subType === 0) {
      questionText = `Select the word spelling for "${num}"`;
      correctAnswer = word.toUpperCase();
      options = [correctAnswer];
      while (options.length < 4) {
        const w = (is10 ? NUMBER_WORDS[Math.floor(Math.random() * 10) + 1] : ELEVEN_TWENTY_WORDS[Math.floor(Math.random() * 10) + 11]).toUpperCase();
        if (!options.includes(w)) options.push(w);
      }
      visualContent = `<div style="font-size: 32px; letter-spacing: 4px;">${emoji.repeat(num)}</div>`;
    } else if (subType === 1) {
      questionText = `How many icons are shown below?`;
      correctAnswer = String(num);
      options = [correctAnswer];
      while (options.length < 4) {
        const n = String(Math.floor(Math.random() * (max - min + 1)) + min);
        if (!options.includes(n)) options.push(n);
      }
      visualContent = `<div style="font-size: 32px; letter-spacing: 4px;">${emoji.repeat(num)}</div>`;
    } else if (subType === 2) {
      questionText = `Which number spells "${word.toUpperCase()}"?`;
      correctAnswer = String(num);
      options = [correctAnswer];
      while (options.length < 4) {
        const n = String(Math.floor(Math.random() * (max - min + 1)) + min);
        if (!options.includes(n)) options.push(n);
      }
      visualContent = `<div style="font-size: 40px; font-weight:800; color: var(--color-blue-accent);">${word.toUpperCase()}</div>`;
    } else if (subType === 3) {
      const otherNum = Math.floor(Math.random() * (max - min + 1)) + min;
      questionText = `Which comparison is true?`;
      if (num > otherNum) {
        correctAnswer = `${num} > ${otherNum}`;
        options = [correctAnswer, `${num} < ${otherNum}`, `${num} = ${otherNum}`, `${otherNum} > ${num}`];
      } else if (num < otherNum) {
        correctAnswer = `${num} < ${otherNum}`;
        options = [correctAnswer, `${num} > ${otherNum}`, `${num} = ${otherNum}`, `${otherNum} < ${num}`];
      } else {
        correctAnswer = `${num} = ${otherNum}`;
        options = [correctAnswer, `${num} > ${otherNum}`, `${num} < ${otherNum}`, `${num} > ${otherNum + 1}`];
      }
      visualContent = `<div style="font-size: 24px; font-weight:800;">${num} vs ${otherNum}</div>`;
    } else {
      const n1 = num;
      const n2 = num + 1;
      const n3 = num + 2;
      questionText = `Fill in the missing number: ${n1}, [ ? ], ${n3}`;
      correctAnswer = String(n2);
      options = [correctAnswer, String(n2 + 1), String(n2 - 2), String(n2 + 2)];
      visualContent = `<div style="font-size: 28px; font-weight:800; color: var(--color-yellow-accent);">${n1}, ___, ${n3}</div>`;
    }
  } else if (unit === 2) {
    const valA = Math.floor(Math.random() * 10) + 1;
    let valB = Math.floor(Math.random() * 10);
    if (lessonId === 21) valB = 0;
    else if (lessonId === 22) valB = 1;
    else if (lessonId === 23) valB = 2;
    else if (lessonId === 29) valB = valA;
    
    const sum = valA + valB;
    questionText = `What is ${valA} + ${valB}?`;
    correctAnswer = String(sum);
    options = [correctAnswer, String(sum + 1), String(sum - 1), String(sum + 2)];
    visualContent = `
      <div style="font-size: 32px; font-weight:800;">
        <span>${"🍎".repeat(valA)}</span>
        <span style="margin: 0 10px; color: var(--color-pink-accent);">+</span>
        <span>${valB > 0 ? "🍏".repeat(valB) : "0"}</span>
      </div>
    `;
  } else if (unit === 3) {
    const valA = Math.floor(Math.random() * 10) + 5;
    let valB = Math.floor(Math.random() * 5);
    if (lessonId === 41) valB = 0;
    else if (lessonId === 42) valB = 1;
    else if (lessonId === 43) valB = 2;
    else if (lessonId === 49) valB = valA;
    
    const diff = valA - valB;
    questionText = `What is ${valA} - ${valB}?`;
    correctAnswer = String(diff);
    options = [correctAnswer, String(diff + 1), String(diff - 1), String(diff + 2)];
    visualContent = `
      <div style="font-size: 32px; font-weight:800;">
        <span>${"🍓".repeat(valA)}</span>
        <span style="margin: 0 10px; color: var(--color-orange-accent);">-</span>
        <span style="opacity: 0.5;">${"🍓".repeat(valB)}</span>
      </div>
    `;
  } else if (unit === 4) {
    const num = Math.floor(Math.random() * 80) + 11;
    const tens = Math.floor(num / 10);
    const ones = num % 10;
    
    const subType = (lessonId - 61) % 5;
    if (subType === 0) {
      questionText = `What number is represented by ${tens} tens and ${ones} ones?`;
      correctAnswer = String(num);
      options = [correctAnswer, String(tens * 10 + ones + 5), String(ones * 10 + tens), String(tens + ones)];
      visualContent = `<div style="font-weight: 800; font-size:24px;">[ ${tens} Tens ] [ ${ones} Ones ]</div>`;
    } else if (subType === 1) {
      questionText = `What is 10 more than ${num}?`;
      correctAnswer = String(num + 10);
      options = [correctAnswer, String(num - 10), String(num + 1), String(num + 20)];
      visualContent = `<div style="font-size: 28px; font-weight:800; color: var(--color-blue-accent);">${num} + 10 = ?</div>`;
    } else if (subType === 2) {
      questionText = `What is 10 less than ${num}?`;
      correctAnswer = String(num - 10);
      options = [correctAnswer, String(num + 10), String(num - 1), String(num - 20)];
      visualContent = `<div style="font-size: 28px; font-weight:800; color: var(--color-pink-accent);">${num} - 10 = ?</div>`;
    } else {
      questionText = `Which number is greater?`;
      const otherNum = num + (Math.random() > 0.5 ? 5 : -5);
      correctAnswer = String(Math.max(num, otherNum));
      options = [String(num), String(otherNum)];
      visualContent = `<div style="font-weight: 800; font-size:26px;">${num} vs ${otherNum}</div>`;
    }
  } else if (unit === 5) {
    const hour = Math.floor(Math.random() * 12) + 1;
    const isHalf = lessonId === 86 || lessonId === 88;
    const timeStr = isHalf ? `${hour}:30` : `${hour}:00`;
    
    const subType = (lessonId - 81) % 4;
    if (subType === 0) {
      questionText = `Tell the time shown:`;
      correctAnswer = timeStr;
      options = [timeStr, `${hour === 12 ? 1 : hour + 1}:00`, `${hour === 1 ? 12 : hour - 1}:30`, `${hour}:15`].filter((v, i, a) => a.indexOf(v) === i);
      while (options.length < 4) {
        options.push(`${Math.floor(Math.random() * 12) + 1}:00`);
      }
      visualContent = `
        <div style="border: 4px solid var(--text-main); border-radius: 50%; width: 100px; height: 100px; display: flex; align-items: center; justify-content: center; position: relative; margin: 0 auto; background: white; color: black;">
          <div style="font-size: 11px; font-weight: 800;">⏰ Analog</div>
          <div style="position: absolute; width: 4px; height: 30px; background: black; top: 20px; left: 48px; transform-origin: bottom center; transform: rotate(${(hour * 30) + (isHalf ? 15 : 0)}deg);"></div>
          <div style="position: absolute; width: 2px; height: 40px; background: red; top: 10px; left: 49px; transform-origin: bottom center; transform: rotate(${isHalf ? 180 : 0}deg);"></div>
        </div>
      `;
    } else {
      const bananas = Math.floor(Math.random() * 5) + 1;
      const apples = Math.floor(Math.random() * 5) + 1;
      questionText = `How many Apples are there in the chart?`;
      correctAnswer = String(apples);
      options = [correctAnswer, String(bananas), String(apples + bananas), String(Math.max(1, apples - 1))].filter((v, i, a) => a.indexOf(v) === i);
      while (options.length < 4) {
        options.push(String(Math.floor(Math.random() * 10)));
      }
      visualContent = `
        <div style="display: flex; flex-direction: column; align-items: center; gap: 4px; font-size: 14px;">
          <div>🍌 Bananas: ${"|".repeat(bananas)}</div>
          <div>🍎 Apples: ${"|".repeat(apples)}</div>
        </div>
      `;
    }
  } else {
    const shapes = [
      { name: "TRIANGLE", sides: 3, vertices: 3 },
      { name: "SQUARE", sides: 4, vertices: 4 },
      { name: "RECTANGLE", sides: 4, vertices: 4 },
      { name: "CIRCLE", sides: 0, vertices: 0 },
      { name: "HEXAGON", sides: 6, vertices: 6 }
    ];
    const s = shapes[Math.floor(Math.random() * shapes.length)];
    
    const subType = (lessonId - 96) % 3;
    if (subType === 0) {
      questionText = `How many sides does a ${s.name} have?`;
      correctAnswer = String(s.sides);
      options = ["0", "3", "4", "6"];
      visualContent = `<div style="font-weight: 800; font-size:24px; color: var(--color-yellow-accent);">${s.name}</div>`;
    } else if (subType === 1) {
      questionText = `How many corners (vertices) does a ${s.name} have?`;
      correctAnswer = String(s.vertices);
      options = ["0", "3", "4", "6"];
      visualContent = `<div style="font-weight: 800; font-size:24px; color: var(--color-orange-accent);">${s.name}</div>`;
    } else {
      questionText = `If we share a pizza equally between 2 friends, each gets a...`;
      correctAnswer = "HALF";
      options = ["HALF", "FOURTH", "WHOLE", "THIRD"];
      visualContent = `<div style="font-size: 40px;">🍕</div>`;
    }
  }
  
  options = options.sort(() => 0.5 - Math.random());
  
  return {
    questionText,
    correctAnswer,
    options,
    visualContent
  };
}

const NARRATION_SCRIPTS = {
  1: "Meet number one! It spells O-N-E. Look at this single, tall line! Let's count this one floating balloon: One! Just one lonely balloon flying high in the sky. Can you spell it? O... N... E!",
  2: "Look, here's number two! Spelled T-W-O. It curved around like a graceful swan! Let's count these two yummy red apples: One... Two! Two crisp apples to crunch. Spell it out: T... W... O!",
  3: "Here is number three! Spelled T-H-R-E-E. It looks like two round bubbles stacked up! Let's count three delicious ice cream scoops: One... Two... Three! That's three cool treats. Spell it with me: T... H... R... E... E!",
  4: "Say hello to number four! Spelled F-O-U-R. It looks like a little chair turned upside down! Let's count these four zooming cars: One... Two... Three... Four! Beep beep! Four fast cars. Spell it out: F... O... U... R!",
  5: "Here is number five! Spelled F-I-V-E. It has a flat hat and a big fat tummy! Let's count five shiny gold stars: One... Two... Three... Four... Five! You are doing star-tastic! Spell it: F... I... V... E!",
  6: "Look at number six! Spelled S-I-X. It rolls down and curls into a little loop at the bottom! Let's count six tasty chocolate chip cookies: One... Two... Three... Four... Five... Six! Six sweet cookies. Spell it: S... I... X!",
  7: "Say hi to number seven! Spelled S-E-V-E-N. It slides straight across and then slants down! Let's count seven friendly lions: One... Two... Three... Four... Five... Six... Seven! Roar! Seven wild lions. Spell it: S... E... V... E... N!",
  8: "Here is number eight! Spelled E-I-G-H-T. It looks like a racetrack loop or a funny snowman! Let's count eight soft teddy bears: One... Two... Three... Four... Five... Six... Seven... Eight! Eight cuddly buddies. Spell it: E... I... G... H... T!",
  9: "Look at number nine! Spelled N-I-N-E. It has a round head at the top and a long tail! Let's count nine swishy fishes: One... Two... Three... Four... Five... Six... Seven... Eight... Nine! Nine colorful fish swimming. Spell it: N... I... N... E!",
  10: "Double digits! It's number ten! Spelled T-E-N. A number one standing next to a round zero helper! Let's count ten sweet cupcakes: One... Two... Three... Four... Five... Six... Seven... Eight... Nine... Ten! Ten party cupcakes. Spell it: T... E... N!"
};

// 5. App State Controller
class AppState {
  constructor() {
    this.stars = 0;
    this.level = 1;
    this.streak = 1;
    this.avatarIndex = 0; // Default Panda
    this.username = "Learning Explorer";
    
    // Progress tracking for Grade 1 Math and ELA curriculums
    this.completedCountsMath = {
      lessonsCompleted: 0,
      examsPassed: [false, false, false, false, false, false],
      reviewCompleted: false,
      gradeTestPassed: false
    };
    this.completedCountsEla = {
      lessonsCompleted: 0,
      examsPassed: [false, false, false, false, false, false],
      reviewCompleted: false,
      gradeTestPassed: false
    };
    this.completedCountsHistory = {
      lessonsCompleted: 0,
      examsPassed: [false, false, false, false, false, false],
      reviewCompleted: false,
      gradeTestPassed: false
    };
    this.completedCountsGeography = {
      lessonsCompleted: 0,
      examsPassed: [false, false, false, false, false, false],
      reviewCompleted: false,
      gradeTestPassed: false
    };
    this.currentSubject = "math";

    this.isSoundOn = true;
    this.activeTopic = null;
    this.confetti = null;

    // Lesson Flow State (Unit 1 Lesson 1)
    this.activeStep = 1;
    
    // Step 1: Video State
    this.videoSlideIdx = 0;
    this.videoPlaying = false;
    this.videoTimeout = null;
    this.videoSpeaking = false;
    this.videoCheckpointActive = false;
    this.videoSlideTimeouts = [];
    this.textLessonMode = true;

    // Step 2: Practice Lab State
    this.practiceIndex = 0;
    this.practiceProblemsCount = 5;
    this.practiceHintLevel = 0;

    // Step 3: Mastery Arena State
    this.masteryHistory = []; // Last 10 trials, stores 1 (correct first try) or 0 (failed or hint used)
    this.masteryTargetPercent = 85;
    this.masteryActiveProblem = null;
    this.masteryChancesLeft = 3;
    this.masteryHintUsed = false;
    this.masteryConsecutiveFails = 0;
    this.masteryTrialRecorded = false;

    // Step 4: Final Challenge State
    this.testIndex = 0;
    this.testScore = 0;
    this.testProblems = [];
    this.testAttemptsCount = 0;
    this.chatbotUsedForCurrentQuestion = false;

    // Gamification & Shop state variables (Forced test mode: 1000 points and 24 hours game time)
    this.points = 1000;
    
    // New Shop items & Leaderboards state
    this.doubleStarsUntil = 0;
    this.goldenFrameOwned = false;
    this.goldenFrameEquipped = false;
    this.arcadeThemeOwned = false;
    this.activeTheme = 'default';
    this.monthlyLessonsCount = 0;
    this.monthlyLessonsMonth = '';
    this.currentGrade = 1;

    this.streakLastActiveDate = "";
    this.dailyLessonsCount = 0;
    this.dailyLessonsDate = "";
    this.dailyAssignmentSkipped = false;
    this.chatbotUseCount = 0;
    this.chatbotUseDate = "";
    this.chatbotUnlimitedUntil = 0;
    this.purchasedAvatars = [0];
    this.purchasedGameTime = 86400;
    this.dailyCompletedSubjects = [];
    this.dailyCrossSubjectBonusAwardedToday = false;

    this.loadState();
  }

  get activeUnit() {
    const completed = this.completedCounts.lessonsCompleted;
    if (this.currentSubject === 'math') {
      if (completed < 20) return 1;
      if (completed < 40) return 2;
      if (completed < 60) return 3;
      if (completed < 80) return 4;
      if (completed < 95) return 5;
      return 6;
    } else if (this.currentSubject === 'ela') {
      if (completed < 20) return 1;
      if (completed < 40) return 2;
      if (completed < 60) return 3;
      if (completed < 80) return 4;
      if (completed < 100) return 5;
      return 6;
    } else { // history, geography, science, art (5 lessons per unit)
      if (completed < 5) return 1;
      if (completed < 10) return 2;
      if (completed < 15) return 3;
      if (completed < 20) return 4;
      if (completed < 25) return 5;
      return 6;
    }
  }

  get completedCounts() {
    if (this.currentSubject === "math") return this.completedCountsMath;
    if (this.currentSubject === "ela") return this.completedCountsEla;
    if (this.currentSubject === "history") return this.completedCountsHistory;
    return this.completedCountsGeography;
  }
  set completedCounts(val) {
    if (this.currentSubject === "math") {
      this.completedCountsMath = val;
    } else if (this.currentSubject === "ela") {
      this.completedCountsEla = val;
    } else if (this.currentSubject === "history") {
      this.completedCountsHistory = val;
    } else {
      this.completedCountsGeography = val;
    }
  }

  loadState() {
    try {
      const saved = localStorage.getItem('math_academy_state');
      if (saved) {
        const state = JSON.parse(saved);
        this.stars = state.stars ?? 0;
        this.level = state.level ?? 1;
        this.streak = state.streak ?? 1;
        this.avatarIndex = state.avatarIndex ?? 0;
        this.username = state.username ?? "Learning Explorer";
        this.currentSubject = state.currentSubject ?? "math";
        
        // Progress tracking maps
        this.completedCountsMath = state.completedCountsMath || state.completedCounts || {
          lessonsCompleted: 0,
          examsPassed: [false, false, false, false, false, false],
          reviewCompleted: false,
          gradeTestPassed: false
        };
        // Migration support for older single-subject format
        if (this.completedCountsMath.lessonsCompleted === undefined) {
          this.completedCountsMath.lessonsCompleted = (state.completedCounts && state.completedCounts.numbersense >= 4) ? 1 : 0;
        }
        if (this.completedCountsMath.examsPassed === undefined) {
          this.completedCountsMath.examsPassed = [false, false, false, false, false, false];
        }
        
        this.completedCountsEla = state.completedCountsEla || {
          lessonsCompleted: 0,
          examsPassed: [false, false, false, false, false, false],
          reviewCompleted: false,
          gradeTestPassed: false
        };

        this.completedCountsHistory = state.completedCountsHistory || {
          lessonsCompleted: 0,
          examsPassed: [false, false, false, false, false, false],
          reviewCompleted: false,
          gradeTestPassed: false
        };

        this.completedCountsGeography = state.completedCountsGeography || {
          lessonsCompleted: 0,
          examsPassed: [false, false, false, false, false, false],
          reviewCompleted: false,
          gradeTestPassed: false
        };
        
        this.isSoundOn = state.isSoundOn ?? true;
        this.testAttemptsCount = state.testAttemptsCount ?? 0;
        this.masteryHistory = state.masteryHistory ?? [];
        this.textLessonMode = true;

        // Load gamification variables
        this.points = state.points ?? 1000; 
        this.streakLastActiveDate = state.streakLastActiveDate ?? "";
        this.dailyLessonsCount = state.dailyLessonsCount ?? 0;
        this.dailyLessonsDate = state.dailyLessonsDate ?? "";
        this.dailyAssignmentSkipped = state.dailyAssignmentSkipped ?? false;
        this.chatbotUseCount = state.chatbotUseCount ?? 0;
        this.chatbotUseDate = state.chatbotUseDate ?? "";
        this.chatbotUnlimitedUntil = state.chatbotUnlimitedUntil ?? 0;
        this.purchasedAvatars = state.purchasedAvatars ?? [0];
        this.purchasedGameTime = state.purchasedGameTime ?? 0; 

        this.doubleStarsUntil = state.doubleStarsUntil ?? 0;
        this.goldenFrameOwned = state.goldenFrameOwned ?? false;
        this.goldenFrameEquipped = state.goldenFrameEquipped ?? false;
        this.arcadeThemeOwned = state.arcadeThemeOwned ?? false;
        this.activeTheme = state.activeTheme ?? 'default';
        this.monthlyLessonsCount = state.monthlyLessonsCount ?? 0;
        this.monthlyLessonsMonth = state.monthlyLessonsMonth ?? '';
        this.currentGrade = state.currentGrade ?? 1;

        // Toggle arcade theme class on page load
        document.documentElement.classList.toggle('arcade-theme', this.activeTheme === 'arcade');
        this.dailyCompletedSubjects = state.dailyCompletedSubjects ?? [];
        this.dailyCrossSubjectBonusAwardedToday = state.dailyCrossSubjectBonusAwardedToday ?? false;

        this.checkDateResets();
      }
    } catch (e) {
      console.warn("Could not load state:", e);
    }
  }

  saveState() {
    try {
      const state = {
        stars: this.stars,
        level: this.level,
        streak: this.streak,
        avatarIndex: this.avatarIndex,
        username: this.username,
        currentSubject: this.currentSubject,
        completedCountsMath: this.completedCountsMath,
        completedCountsEla: this.completedCountsEla,
        completedCountsHistory: this.completedCountsHistory,
        completedCountsGeography: this.completedCountsGeography,
        isSoundOn: this.isSoundOn,
        testAttemptsCount: this.testAttemptsCount,
        masteryHistory: this.masteryHistory,
        textLessonMode: this.textLessonMode,
        
        // Save gamification variables
        points: this.points,
        streakLastActiveDate: this.streakLastActiveDate,
        dailyLessonsCount: this.dailyLessonsCount,
        dailyLessonsDate: this.dailyLessonsDate,
        dailyAssignmentSkipped: this.dailyAssignmentSkipped,
        chatbotUseCount: this.chatbotUseCount,
        chatbotUseDate: this.chatbotUseDate,
        chatbotUnlimitedUntil: this.chatbotUnlimitedUntil,
        purchasedAvatars: this.purchasedAvatars,
        purchasedGameTime: this.purchasedGameTime,
        dailyCompletedSubjects: this.dailyCompletedSubjects,
        dailyCrossSubjectBonusAwardedToday: this.dailyCrossSubjectBonusAwardedToday,
        
        // Save new shop items & leaderboards variables
        doubleStarsUntil: this.doubleStarsUntil,
        goldenFrameOwned: this.goldenFrameOwned,
        goldenFrameEquipped: this.goldenFrameEquipped,
        arcadeThemeOwned: this.arcadeThemeOwned,
        activeTheme: this.activeTheme,
        monthlyLessonsCount: this.monthlyLessonsCount,
        monthlyLessonsMonth: this.monthlyLessonsMonth,
        currentGrade: this.currentGrade
      };
      localStorage.setItem('math_academy_state', JSON.stringify(state));
      // Also save to per-user registry if someone is currently logged in
      if (window.AuthSystem && window.AuthSystem.currentUsername) {
        window.AuthSystem.saveCurrentUserState(state);
      }
    } catch (e) {
      console.warn("Could not save state:", e);
    }
  }

  addStars(count) {
    let earned = count;
    if (this.doubleStarsUntil && Date.now() < this.doubleStarsUntil) {
      earned = count * 2;
      showPointsNotification(`Double Stars Active! Earned ${earned} Stars! 🌟🌟`);
    }
    this.stars += earned;
    const newLevel = Math.floor(this.stars / 30) + 1;
    if (newLevel > this.level) {
      this.level = newLevel;
      sounds.playVictory();
      setTimeout(() => {
        alert(`🌟 LEVEL UP! You are now Level ${this.level}! 🌟`);
      }, 500);
    }
    this.saveState();
    this.renderUI();
  }

  renderUI() {
    document.getElementById('starCount').innerText = this.stars;
    document.getElementById('streakCount').innerText = this.streak;
    document.getElementById('profileLevel').innerText = `Level ${this.level}`;
    document.getElementById('profileName').innerText = this.username;
    
    // Display points balance
    const pointsSpan = document.getElementById('pointsCount');
    if (pointsSpan) {
      pointsSpan.innerText = `${this.points} Points`;
    }
    
    const currentAvatarWrapper = document.getElementById('currentAvatar');
    currentAvatarWrapper.src = `data:image/svg+xml;utf8,${encodeURIComponent(AVATARS[this.avatarIndex])}`;
    
    const soundToggle = document.getElementById('soundToggle');
    if (this.isSoundOn) {
      soundToggle.innerText = "🔊";
      sounds.enabled = true;
    } else {
      soundToggle.innerText = "🔇";
      sounds.enabled = false;
    }

    const bannerMascots = ["🐼", "🦊", "🐸", "🐧", "🐰", "🦁", "🐒", "🐨", "🐱", "🐲"];
    const bannerMascotElement = document.querySelector('.welcome-mascot');
    if (bannerMascotElement) {
      bannerMascotElement.innerText = bannerMascots[this.avatarIndex] || "🐱";
    }

    const avatarWrapperEl = document.querySelector('.avatar-wrapper');
    if (avatarWrapperEl) {
      if (this.goldenFrameEquipped) {
        avatarWrapperEl.style.borderColor = '#fbbf24';
        avatarWrapperEl.style.boxShadow = '0 0 12px rgba(251,191,36,0.9), inset 0 0 6px rgba(251,191,36,0.6)';
        avatarWrapperEl.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
      } else {
        avatarWrapperEl.style.borderColor = 'var(--primary)';
        avatarWrapperEl.style.boxShadow = 'none';
        avatarWrapperEl.style.background = 'white';
      }
    }

    // Render dynamic curriculum roadmap
    renderCurriculumRoadmap();
    
    // Update daily tasks and shop panels
    this.updateDashboardMissions();
    this.renderShop();

    // Dynamically cap game time input max to user's point balance
    const timeInput = document.getElementById('gameTimeMinInput');
    if (timeInput) {
      timeInput.max = Math.floor(this.points / 3);
      const val = parseInt(timeInput.value) || 0;
      const calcCost = document.getElementById('gameTimeCalcCost');
      if (calcCost) {
        calcCost.innerText = `${val * 3} Points`;
      }
    }
  }

  addPoints(amount, reason) {
    this.points += amount;
    showPointsNotification(`+${amount} Points: ${reason}`);
    sounds.playCoin();
    this.saveState();
    this.renderUI();
  }

  isChatbotUnlimited() {
    return Date.now() < this.chatbotUnlimitedUntil;
  }

  checkDateResets() {
    const todayStr = new Date().toLocaleDateString();
    
    // Check daily lesson completion reset
    if (this.dailyLessonsDate !== todayStr) {
      this.dailyLessonsDate = todayStr;
      this.dailyLessonsCount = 0;
      this.dailyAssignmentSkipped = false;
      this.dailyCompletedSubjects = [];
      this.dailyCrossSubjectBonusAwardedToday = false;
    }

    // Check chatbot limit reset
    if (this.chatbotUseDate !== todayStr) {
      this.chatbotUseDate = todayStr;
      this.chatbotUseCount = 0;
    }
  }

  checkMonthlyResets() {
    const now = new Date();
    const currentMonthYear = `${now.getFullYear()}-${now.getMonth() + 1}`;
    if (this.monthlyLessonsMonth !== currentMonthYear) {
      this.monthlyLessonsMonth = currentMonthYear;
      this.monthlyLessonsCount = 0;
      this.saveState();
    }
  }

  updateDashboardMissions() {
    this.checkDateResets();
    
    // 1. Streak Count
    const streakDaysSpan = document.getElementById('streakDaysCount');
    if (streakDaysSpan) streakDaysSpan.innerText = this.streak;

    // 2. Lesson Explorer progress (3 lessons)
    const lessonsProgText = document.getElementById('dailyLessonsProgressText');
    const lessonsProgFill = document.getElementById('dailyLessonsProgressFill');
    const lessonsPercent = document.getElementById('dailyLessonsPercent');
    const lessonsPoints = document.getElementById('dailyLessonsPoints');

    if (this.dailyAssignmentSkipped) {
      if (lessonsProgText) lessonsProgText.innerText = "Skipped!";
      if (lessonsPercent) lessonsPercent.innerText = "100%";
      if (lessonsProgFill) {
        lessonsProgFill.style.width = "100%";
        lessonsProgFill.style.background = "var(--success)";
      }
      if (lessonsPoints) {
        lessonsPoints.innerText = "🎟️ Skipped";
        lessonsPoints.style.background = "rgba(147, 197, 253, 0.2)";
        lessonsPoints.style.color = "#93c5fd";
      }
    } else {
      const count = Math.min(3, this.dailyLessonsCount);
      const percent = Math.round((count / 3) * 100);
      if (lessonsProgText) lessonsProgText.innerText = `${count} / 3 lessons`;
      if (lessonsPercent) lessonsPercent.innerText = `${percent}%`;
      if (lessonsProgFill) {
        lessonsProgFill.style.width = `${percent}%`;
        lessonsProgFill.style.background = percent === 100 ? "var(--success)" : "var(--color-blue-light)";
      }
      if (lessonsPoints) {
        if (percent === 100) {
          lessonsPoints.innerText = "🎉 Completed";
          lessonsPoints.style.background = "rgba(16, 185, 129, 0.2)";
          lessonsPoints.style.color = "var(--success)";
        } else {
          lessonsPoints.innerText = "+1 Point";
          lessonsPoints.style.background = "rgba(16, 185, 129, 0.15)";
          lessonsPoints.style.color = "var(--success)";
        }
      }
    }

    // 3. Subject checklist completion indicators
    const allSubjects = ['math', 'ela', 'history', 'geography', 'science', 'art'];
    allSubjects.forEach(sub => {
      const icon = document.getElementById(`checkSubject-${sub}`);
      if (icon) {
        // Handle checklist rendering
        const isCompleted = this.dailyCompletedSubjects.includes(sub);
        if (isCompleted) {
          icon.style.filter = "none";
          icon.style.opacity = "1";
          icon.style.background = "rgba(16, 185, 129, 0.2)";
          icon.style.border = "2px solid var(--success)";
          icon.style.borderRadius = "50%";
          icon.style.padding = "6px";
          icon.style.boxShadow = "0 0 10px rgba(16, 185, 129, 0.6)";
        } else {
          icon.style.filter = "grayscale(100%)";
          icon.style.opacity = "0.4";
          icon.style.background = "rgba(255,255,255,0.05)";
          icon.style.border = "2px solid rgba(255,255,255,0.15)";
          icon.style.borderRadius = "50%";
          icon.style.padding = "6px";
          icon.style.boxShadow = "none";
        }
      }
    });
  }

  renderShop() {
    const shelf = document.getElementById('shopAvatarsShelf');
    if (!shelf) return;
    
    // Update points balance display
    const balanceText = document.getElementById('shopPointsBalance');
    if (balanceText) balanceText.innerText = `${this.points} Points`;

    const avatarCosts = [0, 5, 5, 8, 8, 10, 10, 12, 15, 20];
    const avatarNames = ["Panda", "Fox", "Frog", "Penguin", "Rabbit", "Lion", "Monkey", "Koala", "Cat", "Dragon"];
    
    shelf.innerHTML = '';
    for (let i = 0; i < AVATARS.length; i++) {
      const cost = avatarCosts[i];
      const name = avatarNames[i];
      const isUnlocked = this.purchasedAvatars.includes(i);
      const isEquipped = this.avatarIndex === i;
      
      const card = document.createElement('div');
      card.style.background = 'rgba(0,0,0,0.2)';
      card.style.border = isEquipped ? '3px solid var(--color-orange-accent)' : '2px solid rgba(255,255,255,0.05)';
      card.style.borderRadius = '12px';
      card.style.padding = '12px';
      card.style.display = 'flex';
      card.style.flexDirection = 'column';
      card.style.alignItems = 'center';
      card.style.gap = '8px';
      card.style.transition = 'transform 0.2s';
      card.style.boxShadow = isEquipped ? '0 0 15px rgba(249,115,22,0.3)' : 'none';

      card.innerHTML = `
        <div style="width: 70px; height: 70px;">${AVATARS[i]}</div>
        <div style="font-weight: 800; font-size: 13px; color: white;">${name}</div>
        <div style="font-weight: 700; font-size: 11px; color: #94a3b8;">${cost === 0 ? 'Free' : cost + ' pts'}</div>
      `;

      const btn = document.createElement('button');
      btn.className = 'primary-btn';
      btn.style.padding = '4px 10px';
      btn.style.fontSize = '12px';
      btn.style.width = '100%';
      
      if (isEquipped) {
        btn.innerText = 'Equipped';
        btn.disabled = true;
        btn.style.background = 'var(--color-orange-accent)';
        btn.style.borderColor = '#fdba74';
      } else if (isUnlocked) {
        btn.innerText = 'Equip';
        btn.onclick = () => {
          this.avatarIndex = i;
          sounds.playPop();
          this.saveState();
          this.renderUI();
        };
      } else {
        btn.innerText = 'Buy';
        btn.style.background = '#10b981';
        btn.style.borderColor = '#34d399';
        btn.onclick = () => {
          if (this.points >= cost) {
            this.points -= cost;
            this.purchasedAvatars.push(i);
            this.avatarIndex = i; // Auto-equip on purchase
            showPointsNotification(`Unlocked & Equipped ${name}!`);
            sounds.playVictory();
            this.saveState();
            this.renderUI();
          } else {
            alert("Not enough points! Complete more lessons to earn points!");
          }
        };
      }
      card.appendChild(btn);
      shelf.appendChild(card);
    }

    // Update upgrade buttons
    const doubleStarsBtn = document.getElementById('buyDoubleStarsBtn');
    if (doubleStarsBtn) {
      if (this.doubleStarsUntil > Date.now()) {
        const hoursLeft = Math.ceil((this.doubleStarsUntil - Date.now()) / (3600 * 1000));
        doubleStarsBtn.innerText = `Active (${hoursLeft}h left) 🎟️`;
        doubleStarsBtn.disabled = true;
        doubleStarsBtn.style.background = '#475569';
        doubleStarsBtn.style.borderColor = '#64748b';
      } else {
        doubleStarsBtn.innerText = 'Purchase Booster';
        doubleStarsBtn.disabled = false;
        doubleStarsBtn.style.background = '';
        doubleStarsBtn.style.borderColor = '';
      }
    }

    const goldenFrameBtn = document.getElementById('buyGoldenFrameBtn');
    if (goldenFrameBtn) {
      if (this.goldenFrameOwned) {
        goldenFrameBtn.innerText = this.goldenFrameEquipped ? 'Unequip Frame' : 'Equip Frame';
        goldenFrameBtn.style.background = this.goldenFrameEquipped ? '#eab308' : '#4b5563';
        goldenFrameBtn.style.borderColor = this.goldenFrameEquipped ? '#fef08a' : '#64748b';
      } else {
        goldenFrameBtn.innerText = 'Purchase Frame';
        goldenFrameBtn.style.background = '';
        goldenFrameBtn.style.borderColor = '';
      }
    }

    const arcadeThemeBtn = document.getElementById('buyArcadeThemeBtn');
    if (arcadeThemeBtn) {
      if (this.arcadeThemeOwned) {
        arcadeThemeBtn.innerText = this.activeTheme === 'arcade' ? 'Deactivate Theme' : 'Activate Theme';
        arcadeThemeBtn.style.background = this.activeTheme === 'arcade' ? '#ec4899' : '#4b5563';
        arcadeThemeBtn.style.borderColor = this.activeTheme === 'arcade' ? '#f472b6' : '#64748b';
      } else {
        arcadeThemeBtn.innerText = 'Purchase Theme';
        arcadeThemeBtn.style.background = '';
        arcadeThemeBtn.style.borderColor = '';
      }
    }
  }

  recordLessonCompletion(subject, lessonId, score, helpUsed) {
    this.checkDateResets();
    this.checkMonthlyResets();
    const todayStr = new Date().toLocaleDateString();
    
    // Increment daily lessons count
    this.dailyLessonsCount++;
    this.monthlyLessonsCount++;
    
    // Track daily subject completion (map english -> ela for checklist compatibility)
    const checklistSub = subject === 'english' ? 'ela' : subject;
    if (!this.dailyCompletedSubjects.includes(checklistSub)) {
      this.dailyCompletedSubjects.push(checklistSub);
    }
    
    let pointsEarned = 0;
    let reasons = [];

    // 1. Basic lesson completion points
    if (subject === 'math' || subject === 'ela' || subject === 'english') {
      pointsEarned += 2;
      reasons.push("Math/ELA Lesson (+2)");
      
      // Perfect lesson: no help or AI used, and got 100% (score 10/10)
      if (!helpUsed && score === 10) {
        pointsEarned += 3;
        reasons.push("Perfect Lesson (+3)");
      }
    } else {
      pointsEarned += 1;
      reasons.push("Lesson Completed (+1)");
    }

    // 2. 10/10 score on lesson test (Step 4 has 10 questions)
    if (score === 10 && (subject === 'math' || subject === 'ela' || subject === 'english')) {
      pointsEarned += 1;
      reasons.push("10/10 Test Score (+1)");
    }

    // 3. Finish a unit check: +5 points
    let isUnitFinished = false;
    if (subject === 'math') {
      if ([20, 40, 60, 80, 95, 120].includes(lessonId)) isUnitFinished = true;
    } else if (subject === 'ela' || subject === 'english') {
      if ([20, 40, 60, 80, 100, 120].includes(lessonId)) isUnitFinished = true;
    } else {
      // 5 lessons per unit for other subjects
      if (lessonId % 5 === 0) isUnitFinished = true;
    }
    if (isUnitFinished) {
      pointsEarned += 5;
      reasons.push("Finished Unit (+5)");
    }

    // 4. Daily streak milestone points
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const yesterdayStr = yesterday.toLocaleDateString();

    if (this.streakLastActiveDate !== todayStr) {
      if (this.streakLastActiveDate === yesterdayStr) {
        this.streak++;
        if (this.streak % 5 === 0) {
          pointsEarned += 1;
          reasons.push(`${this.streak}-Day Streak (+1)`);
        }
      } else if (this.streakLastActiveDate === "") {
        this.streak = 1;
      } else {
        this.streak = 1;
      }
      this.streakLastActiveDate = todayStr;
    }

    // 5. Daily assignment check (3 lessons completed)
    if (this.dailyLessonsCount === 3 && !this.dailyAssignmentSkipped) {
      pointsEarned += 1;
      reasons.push("Daily Assignment Done (+1)");
    }

    // 6. Cross-subject daily bonus
    const allSubjectsList = ['math', 'ela', 'history', 'geography', 'science', 'art'];
    const completedAllToday = allSubjectsList.every(sub => this.dailyCompletedSubjects.includes(sub));
    if (completedAllToday && !this.dailyCrossSubjectBonusAwardedToday) {
      pointsEarned += 2;
      this.dailyCrossSubjectBonusAwardedToday = true;
      reasons.push("All Subjects Played Today (+2)");
    }

    if (pointsEarned > 0) {
      this.addPoints(pointsEarned, reasons.join(", "));
    } else {
      this.saveState();
      this.renderUI();
    }
  }
}


// ══════════════════════════════════════════════════════════
//  AuthSystem — Multi-user login, signup & session management
//  Users are stored in localStorage under 'funcademy_users'
//  as { [username]: { passwordHash, displayName, avatarEmoji, state } }
//  Current session is in 'funcademy_session': { username, rememberMe }
// ══════════════════════════════════════════════════════════
const AVATAR_EMOJIS = ['🐼', '🦁', '🐸', '🦊', '🐯', '🐧', '🐢', '🦄', '🐬', '🦋', '🐨', '🦖'];

window.AuthSystem = {
  currentUsername: null,

  // ── Storage helpers ──────────────────────────────────────
  getUsers() {
    try { return JSON.parse(localStorage.getItem('funcademy_users') || '{}'); }
    catch { return {}; }
  },
  saveUsers(users) {
    localStorage.setItem('funcademy_users', JSON.stringify(users));
  },
  getSession() {
    try { return JSON.parse(localStorage.getItem('funcademy_session') || 'null'); }
    catch { return null; }
  },
  saveSession(username, rememberMe) {
    if (rememberMe) {
      localStorage.setItem('funcademy_session', JSON.stringify({ username, rememberMe: true }));
    } else {
      // Session only: use sessionStorage so it clears when browser closes
      localStorage.removeItem('funcademy_session');
      sessionStorage.setItem('funcademy_session', JSON.stringify({ username, rememberMe: false }));
    }
    this.currentUsername = username;
  },
  clearSession() {
    localStorage.removeItem('funcademy_session');
    sessionStorage.removeItem('funcademy_session');
    this.currentUsername = null;
  },
  getActiveSession() {
    // Check localStorage (remember me) first, then sessionStorage
    const ls = this.getSession();
    if (ls) return ls;
    try {
      const ss = JSON.parse(sessionStorage.getItem('funcademy_session') || 'null');
      if (ss) return ss;
    } catch {}
    return null;
  },

  // ── Password hashing (SHA-256 via SubtleCrypto) ──────────
  async hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password + 'funcademy_salt_v1');
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
  },

  // ── Register a new user ──────────────────────────────────
  async register(username, password) {
    const users = this.getUsers();
    const key = username.toLowerCase().trim();
    const displayName = username.trim(); // username IS the display name
    if (!key) return { ok: false, error: 'Username cannot be empty.' };
    if (key.length < 3) return { ok: false, error: 'Username must be at least 3 characters.' };
    if (users[key]) return { ok: false, error: 'That username is already taken. Try another!' };
    if (password.length < 4) return { ok: false, error: 'Password must be at least 4 characters.' };

    const hash = await this.hashPassword(password);
    const avatarEmoji = AVATAR_EMOJIS[Object.keys(users).length % AVATAR_EMOJIS.length];
    users[key] = {
      passwordHash: hash,
      displayName,
      avatarEmoji,
      createdAt: Date.now(),
      state: null  // no saved progress yet
    };
    this.saveUsers(users);
    return { ok: true, username: key, displayName, avatarEmoji };
  },

  // ── Login (validate credentials) ────────────────────────
  async login(username, password) {
    const users = this.getUsers();
    const key = username.toLowerCase().trim();
    const user = users[key];
    if (!user) return { ok: false, error: "Account not found. Check your username or sign up!" };
    const hash = await this.hashPassword(password);
    if (hash !== user.passwordHash) return { ok: false, error: "Incorrect password. Try again!" };
    return { ok: true, username: key, displayName: user.displayName, avatarEmoji: user.avatarEmoji, state: user.state };
  },

  // ── Save current user's AppState into their registry entry ─
  saveCurrentUserState(state) {
    if (!this.currentUsername) return;
    const users = this.getUsers();
    if (!users[this.currentUsername]) return;
    users[this.currentUsername].state = state;
    this.saveUsers(users);
  },

  // ── Load a user's saved state into appState ──────────────
  loadUserIntoApp(userRecord) {
    if (userRecord.state) {
      // Returning user: restore their saved progress
      localStorage.setItem('math_academy_state', JSON.stringify(userRecord.state));
      appState.loadState();
    } else {
      // Brand-new account: wipe localStorage and hard-reset every field to zero
      localStorage.removeItem('math_academy_state');
      // Reset all progress fields explicitly so constructor seeds don't bleed in
      appState.stars = 0;
      appState.level = 1;
      appState.streak = 1;
      appState.avatarIndex = 0;
      appState.currentSubject = 'math';
      appState.points = 0;
      appState.purchasedGameTime = 0;
      appState.purchasedAvatars = [0];
      appState.doubleStarsUntil = 0;
      appState.goldenFrameOwned = false;
      appState.goldenFrameEquipped = false;
      appState.arcadeThemeOwned = false;
      appState.activeTheme = 'default';
      appState.monthlyLessonsCount = 0;
      appState.monthlyLessonsMonth = '';
      appState.currentGrade = 1;
      appState.dailyLessonsCount = 0;
      appState.dailyLessonsDate = '';
      appState.streakLastActiveDate = '';
      appState.chatbotUseCount = 0;
      appState.chatbotUseDate = '';
      appState.chatbotUnlimitedUntil = 0;
      appState.masteryHistory = [];
      appState.testAttemptsCount = 0;
      appState.dailyCompletedSubjects = [];
      appState.dailyCrossSubjectBonusAwardedToday = false;
      appState.dailyAssignmentSkipped = false;
      const freshCounts = { lessonsCompleted: 0, examsPassed: [false,false,false,false,false,false], reviewCompleted: false, gradeTestPassed: false };
      appState.completedCountsMath = JSON.parse(JSON.stringify(freshCounts));
      appState.completedCountsEla = JSON.parse(JSON.stringify(freshCounts));
      appState.completedCountsHistory = JSON.parse(JSON.stringify(freshCounts));
      appState.completedCountsGeography = JSON.parse(JSON.stringify(freshCounts));
      document.documentElement.classList.remove('arcade-theme');
    }
    // Set display name and avatar to match the account
    appState.username = userRecord.displayName;
    appState.renderUI();
  },

  // ── Logout ───────────────────────────────────────────────
  logout() {
    // Save before logging out
    if (this.currentUsername) {
      appState.saveState();
    }
    this.clearSession();
    showLoginScreen();
  },

  // ── Check for an existing session on page load ───────────
  async checkAutoLogin() {
    const session = this.getActiveSession();
    if (!session) return false;
    const users = this.getUsers();
    const user = users[session.username];
    if (!user) {
      this.clearSession();
      return false;
    }
    // Valid session found → log in automatically
    this.currentUsername = session.username;
    this.loadUserIntoApp(user);
    return true;
  }
};

// ── UI Helper Functions (called from HTML onclick / DOMContentLoaded) ──

function showLoginScreen() {
  const loginScreen = document.getElementById('loginScreen');
  const appContainer = document.getElementById('appContainer');
  if (loginScreen) loginScreen.style.display = 'flex';
  if (appContainer) appContainer.style.display = 'none';
  renderQuickSwitcher();
}

function hideLoginScreen() {
  const loginScreen = document.getElementById('loginScreen');
  const appContainer = document.getElementById('appContainer');
  if (loginScreen) loginScreen.style.display = 'none';
  if (appContainer) appContainer.style.display = '';
}

function showAuthTab(tab) {
  const signInForm = document.getElementById('signInForm');
  const signUpForm = document.getElementById('signUpForm');
  const tabSI = document.getElementById('loginTabSignIn');
  const tabSU = document.getElementById('loginTabSignUp');
  if (tab === 'signin') {
    signInForm.style.display = 'flex';
    signUpForm.style.display = 'none';
    tabSI.classList.add('active');
    tabSU.classList.remove('active');
  } else {
    signInForm.style.display = 'none';
    signUpForm.style.display = 'flex';
    tabSI.classList.remove('active');
    tabSU.classList.add('active');
  }
}

function togglePw(inputId, btnId) {
  const input = document.getElementById(inputId);
  const btn = document.getElementById(btnId);
  if (!input || !btn) return;
  if (input.type === 'password') {
    input.type = 'text';
    btn.textContent = '🙈';
  } else {
    input.type = 'password';
    btn.textContent = '👁️';
  }
}

function renderQuickSwitcher() {
  const users = window.AuthSystem.getUsers();
  const keys = Object.keys(users);
  const switcher = document.getElementById('quickSwitcher');
  const container = document.getElementById('quickSwitcherUsers');
  if (!switcher || !container) return;
  if (keys.length === 0) { switcher.style.display = 'none'; return; }
  switcher.style.display = 'block';
  container.innerHTML = keys.map(k => {
    const u = users[k];
    return `<button class="quick-user-btn" onclick="quickLogin('${k}')" title="Log in as ${u.displayName}">
      <span class="quick-user-avatar">${u.avatarEmoji || '🐼'}</span>
      <span class="quick-user-name">${u.displayName}</span>
    </button>`;
  }).join('');
}

async function quickLogin(username) {
  // Quick-switch: prompt for password
  const pw = prompt(`Enter password for ${username}:`);
  if (pw === null) return;
  const result = await window.AuthSystem.login(username, pw);
  if (!result.ok) {
    alert(result.error);
    return;
  }
  const rememberMe = document.getElementById('rememberMe');
  window.AuthSystem.saveSession(username, rememberMe ? rememberMe.checked : false);
  window.AuthSystem.loadUserIntoApp({ displayName: result.displayName, avatarEmoji: result.avatarEmoji, state: result.state });
  hideLoginScreen();
}

async function handleSignIn(event) {
  event.preventDefault();
  const btn = document.getElementById('signInBtn');
  const btnText = document.getElementById('signInBtnText');
  const errEl = document.getElementById('signInError');
  const username = document.getElementById('siUsername').value.trim();
  const password = document.getElementById('siPassword').value;
  const rememberMe = document.getElementById('rememberMe').checked;

  errEl.style.display = 'none';
  btn.disabled = true;
  btnText.textContent = 'Signing in…';

  const result = await window.AuthSystem.login(username, password);
  if (!result.ok) {
    errEl.textContent = result.error;
    errEl.style.display = 'block';
    btn.disabled = false;
    btnText.textContent = 'Sign In ➔';
    return;
  }

  window.AuthSystem.saveSession(result.username, rememberMe);
  window.AuthSystem.loadUserIntoApp({ displayName: result.displayName, avatarEmoji: result.avatarEmoji, state: result.state });
  hideLoginScreen();
}

async function handleSignUp(event) {
  event.preventDefault();
  const btn = document.getElementById('signUpBtn');
  const btnText = document.getElementById('signUpBtnText');
  const errEl = document.getElementById('signUpError');
  const username = document.getElementById('suUsername').value.trim();
  const password = document.getElementById('suPassword').value;
  const confirm = document.getElementById('suConfirm').value;

  errEl.style.display = 'none';

  if (password !== confirm) {
    errEl.textContent = "Passwords don't match. Please try again!";
    errEl.style.display = 'block';
    return;
  }

  btn.disabled = true;
  btnText.textContent = 'Creating account…';

  const result = await window.AuthSystem.register(username, password);
  if (!result.ok) {
    errEl.textContent = result.error;
    errEl.style.display = 'block';
    btn.disabled = false;
    btnText.textContent = 'Create Account 🎉';
    return;
  }

  // Auto-login after sign-up
  window.AuthSystem.saveSession(result.username, true);
  window.AuthSystem.loadUserIntoApp({ displayName: result.displayName, avatarEmoji: result.avatarEmoji, state: null });
  hideLoginScreen();
}

const appState = new AppState();

// 6. DOM Events Bootstrapper
document.addEventListener('DOMContentLoaded', () => {
  appState.confetti = new ConfettiEngine('celebrationCanvas');
  
  // Subject Tab Toggle listeners in sidebar
  const sidebarMath = document.getElementById('sidebarMathBtn');
  const sidebarEnglish = document.getElementById('sidebarEnglishBtn');
  const sidebarHistory = document.getElementById('sidebarHistoryBtn');
  const sidebarGeography = document.getElementById('sidebarGeographyBtn');
  const sidebarScience = document.getElementById('sidebarScienceBtn');
  const sidebarArt = document.getElementById('sidebarArtBtn');
  
  function updateSubjectTabs() {
    const sub = appState.currentSubject;
    if (sidebarMath) sidebarMath.classList.toggle('active', sub === 'math');
    if (sidebarEnglish) sidebarEnglish.classList.toggle('active', sub === 'ela');
    if (sidebarHistory) sidebarHistory.classList.toggle('active', sub === 'history');
    if (sidebarGeography) sidebarGeography.classList.toggle('active', sub === 'geography');
    if (sidebarScience) sidebarScience.classList.toggle('active', sub === 'science');
    if (sidebarArt) sidebarArt.classList.toggle('active', sub === 'art');
    
    // Update Title text
    const titleEl = document.getElementById('subjectSectionTitle');
    if (titleEl) {
      if (sub === 'math') titleEl.innerHTML = `<span>🔢</span> Grade 1 Math Quests`;
      else if (sub === 'ela') titleEl.innerHTML = `<span>📚</span> Grade 1 ELA Quests`;
      else if (sub === 'history') titleEl.innerHTML = `<span>📜</span> Grade 1 History Quests`;
      else if (sub === 'geography') titleEl.innerHTML = `<span>🌍</span> Grade 1 Geography Quests`;
      else if (sub === 'science') titleEl.innerHTML = `<span>🧪</span> Grade 1 Science Quests`;
      else if (sub === 'art') titleEl.innerHTML = `<span>🎨</span> Grade 1 Art Quests`;
    }
  }

  if (sidebarMath) {
    sidebarMath.addEventListener('click', () => {
      sounds.playPop();
      appState.currentSubject = 'math';
      appState.activeUnitCollapse = null;
      updateSubjectTabs();
      appState.saveState();
      appState.renderUI();
    });
  }
  
  if (sidebarEnglish) {
    sidebarEnglish.addEventListener('click', () => {
      sounds.playPop();
      appState.currentSubject = 'ela';
      appState.activeUnitCollapse = null;
      updateSubjectTabs();
      appState.saveState();
      appState.renderUI();
    });
  }

  if (sidebarHistory) {
    sidebarHistory.addEventListener('click', () => {
      sounds.playPop();
      appState.currentSubject = 'history';
      appState.activeUnitCollapse = null;
      updateSubjectTabs();
      appState.saveState();
      appState.renderUI();
    });
  }

  if (sidebarGeography) {
    sidebarGeography.addEventListener('click', () => {
      sounds.playPop();
      appState.currentSubject = 'geography';
      appState.activeUnitCollapse = null;
      updateSubjectTabs();
      appState.saveState();
      appState.renderUI();
    });
  }

  if (sidebarScience) {
    sidebarScience.addEventListener('click', () => {
      sounds.playPop();
      appState.currentSubject = 'science';
      appState.activeUnitCollapse = null;
      updateSubjectTabs();
      appState.saveState();
      appState.renderUI();
    });
  }

  if (sidebarArt) {
    sidebarArt.addEventListener('click', () => {
      sounds.playPop();
      appState.currentSubject = 'art';
      appState.activeUnitCollapse = null;
      updateSubjectTabs();
      appState.saveState();
      appState.renderUI();
    });
  }

  // Check auth session on startup
  window.AuthSystem.checkAutoLogin().then(loggedIn => {
    if (loggedIn) {
      hideLoginScreen();
    } else {
      showLoginScreen();
    }
  });
  updateSubjectTabs();

  // Logout button handler
  const logoutBtn = document.getElementById('logoutBtn');
  if (logoutBtn) {
    logoutBtn.addEventListener('click', () => {
      sounds.playPop();
      window.AuthSystem.logout();
    });
  }
  
  // Sound FX toggle
  document.getElementById('soundToggle').addEventListener('click', (e) => {
    e.stopPropagation();
    appState.isSoundOn = !appState.isSoundOn;
    sounds.enabled = appState.isSoundOn;
    sounds.playPop();
    appState.saveState();
    appState.renderUI();
  });
  
  // Start learning hero banner button
  document.getElementById('startLearningBtn').addEventListener('click', () => {
    sounds.playPop();
    // Scroll down to the Grade 1 Math Map Section
    const mapHeader = document.querySelector('.section-title');
    if (mapHeader) {
      mapHeader.scrollIntoView({ behavior: 'smooth' });
    }
    // Automatically trigger numbersense quest
    setTimeout(() => {
      startQuest('numbersense');
    }, 800);
  });
  
  // Avatar Selection Modal
  const profileWidget = document.getElementById('profileWidget');
  const avatarModal = document.getElementById('avatarModal');
  const closeAvatarModal = document.getElementById('closeAvatarModal');
  const avatarGrid = document.getElementById('avatarGrid');
  
  AVATARS.forEach((svgContent, index) => {
    const btn = document.createElement('button');
    btn.className = `avatar-select-btn ${index === appState.avatarIndex ? 'selected' : ''}`;
    btn.innerHTML = svgContent;
    btn.addEventListener('click', () => {
      sounds.playPop();
      document.querySelectorAll('.avatar-select-btn').forEach((b, i) => {
        b.classList.toggle('selected', i === index);
      });
      appState.avatarIndex = index;
      appState.saveState();
      appState.renderUI();
      avatarModal.classList.remove('active');
    });
    avatarGrid.appendChild(btn);
  });
  
  profileWidget.addEventListener('click', () => {
    sounds.playPop();
    avatarModal.classList.add('active');
  });
  
  closeAvatarModal.addEventListener('click', () => {
    sounds.playPop();
    avatarModal.classList.remove('active');
  });

  // Legend Selection Modal
  const openLegendBtn = document.getElementById('openLegendBtn');
  const legendModal = document.getElementById('legendModal');
  const closeLegendModal = document.getElementById('closeLegendModal');
  
  if (openLegendBtn) {
    openLegendBtn.addEventListener('click', () => {
      sounds.playPop();
      populateAssignmentsLegend();
      legendModal.classList.add('active');
    });
  }
  
  if (closeLegendModal) {
    closeLegendModal.addEventListener('click', () => {
      sounds.playPop();
      legendModal.classList.remove('active');
    });
  }

  // Initial render of curriculum roadmap
  renderCurriculumRoadmap();

  // Exit Playground back to dashboard
  document.getElementById('exitPlaygroundBtn').addEventListener('click', () => {
    sounds.playPop();
    pauseVideo();
    window.speechSynthesis.cancel();
    document.getElementById('playgroundOverlay').classList.remove('active');
  });

  // Tabs navigation buttons listeners
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const step = parseInt(btn.getAttribute('data-step'));
      if (btn.classList.contains('locked')) {
        sounds.playWrong();
        // Shake button animation
        btn.style.animation = 'wrong-shake 0.3s ease';
        setTimeout(() => btn.style.animation = '', 300);
        return;
      }
      switchStep(step);
    });
  });

  // Modal explanation close button
  document.getElementById('closeExplanationBtn').addEventListener('click', () => {
    sounds.playPop();
    window.speechSynthesis.cancel();
    document.getElementById('explanationOverlay').classList.remove('active');
    // Load a new question in Step 3 after watching the tutorial
    generateMasteryProblem();
  });

  // Gamification dashboard, shop, and games view switcher binding
  const dashBtn = document.getElementById('sidebarDashboardBtn');
  if (dashBtn) dashBtn.addEventListener('click', () => switchView('dashboard'));
  const shopBtn = document.getElementById('sidebarShopBtn');
  if (shopBtn) shopBtn.addEventListener('click', () => switchView('shop'));
  const exitShopBtn = document.getElementById('exitShopBtn');
  if (exitShopBtn) exitShopBtn.addEventListener('click', () => switchView('dashboard'));
  const gamesBtn = document.getElementById('sidebarGamesBtn');
  if (gamesBtn) gamesBtn.addEventListener('click', () => switchView('games'));

  const mobDashBtn = document.getElementById('mobileDashboardBtn');
  if (mobDashBtn) mobDashBtn.addEventListener('click', () => switchView('dashboard'));
  const mobShopBtn = document.getElementById('mobileShopBtn');
  if (mobShopBtn) mobShopBtn.addEventListener('click', () => switchView('shop'));
  const mobGamesBtn = document.getElementById('mobileGamesBtn');
  if (mobGamesBtn) mobGamesBtn.addEventListener('click', () => switchView('games'));
  const leaderboardBtn = document.getElementById('sidebarLeaderboardBtn');
  if (leaderboardBtn) leaderboardBtn.addEventListener('click', () => switchView('leaderboard'));
  const mobLeaderboardBtn = document.getElementById('mobileLeaderboardBtn');
  if (mobLeaderboardBtn) mobLeaderboardBtn.addEventListener('click', () => switchView('leaderboard'));
  const exitLeaderboardBtn = document.getElementById('exitLeaderboardBtn');
  if (exitLeaderboardBtn) exitLeaderboardBtn.addEventListener('click', () => switchView('dashboard'));

  // Shop item purchases
  const buySkipAssignmentBtn = document.getElementById('buySkipAssignmentBtn');
  if (buySkipAssignmentBtn) {
    buySkipAssignmentBtn.addEventListener('click', () => {
      const cost = 5;
      if (appState.dailyAssignmentSkipped) {
        alert("Daily mission is already completed/skipped today!");
        return;
      }
      if (appState.points >= cost) {
        appState.points -= cost;
        appState.dailyAssignmentSkipped = true;
        appState.dailyLessonsCount = 3; // treat as done
        showPointsNotification("Daily assignment skipped! 🎟️");
        sounds.playVictory();
        appState.saveState();
        appState.renderUI();
      } else {
        alert("Not enough points! You need 5 points to skip your assignment.");
      }
    });
  }

  const buyWeeklyChatPassBtn = document.getElementById('buyWeeklyChatPassBtn');
  if (buyWeeklyChatPassBtn) {
    buyWeeklyChatPassBtn.addEventListener('click', () => {
      const cost = 10;
      if (appState.points >= cost) {
        appState.points -= cost;
        const currentExpiry = appState.chatbotUnlimitedUntil > Date.now() ? appState.chatbotUnlimitedUntil : Date.now();
        appState.chatbotUnlimitedUntil = currentExpiry + (7 * 24 * 60 * 60 * 1000);
        appState.chatbotUseCount = 0;
        
        const expiryDate = new Date(appState.chatbotUnlimitedUntil).toLocaleDateString();
        showPointsNotification(`Chatbot Unlimited Pass activated until ${expiryDate}! 🤖`);
        sounds.playVictory();
        appState.saveState();
        appState.renderUI();
      } else {
        alert("Not enough points! You need 10 points for the weekly chatbot pass.");
      }
    });
  }

  const timeInput = document.getElementById('gameTimeMinInput');
  const calcText = document.getElementById('gameTimeCalcCost');
  
  function updateGameTimeCost() {
    if (timeInput && calcText) {
      const val = parseInt(timeInput.value) || 0;
      calcText.innerText = `${val * 3} Points`;
    }
  }
  
  if (timeInput) {
    timeInput.addEventListener('input', updateGameTimeCost);
    updateGameTimeCost();
  }

  const buyGameTimeBtn = document.getElementById('buyGameTimeBtn');
  if (buyGameTimeBtn) {
    buyGameTimeBtn.addEventListener('click', () => {
      const mins = parseInt(timeInput.value) || 0;
      if (mins <= 0) {
        alert("Please enter a valid amount of minutes!");
        return;
      }
      const requiredPoints = mins * 3;
      if (requiredPoints > appState.points) {
        alert(`Not enough points! You only have ${appState.points} points, but you need ${requiredPoints} points.`);
        return;
      }
      appState.points -= requiredPoints;
      appState.purchasedGameTime += mins * 60; // convert to seconds
      showPointsNotification(`Purchased ${mins} minutes of game time! 🎮`);
      sounds.playVictory();
      appState.saveState();
      appState.renderUI();
    });
  }

  const buyDoubleStarsBtn = document.getElementById('buyDoubleStarsBtn');
  if (buyDoubleStarsBtn) {
    buyDoubleStarsBtn.addEventListener('click', () => {
      const cost = 15;
      if (appState.points >= cost) {
        appState.points -= cost;
        const currentExpiry = appState.doubleStarsUntil > Date.now() ? appState.doubleStarsUntil : Date.now();
        appState.doubleStarsUntil = currentExpiry + (24 * 60 * 60 * 1000);
        showPointsNotification("Double Stars Booster (24h) purchased! 🎟️");
        sounds.playVictory();
        appState.saveState();
        appState.renderUI();
      } else {
        alert("Not enough points! You need 15 points to buy Double Stars Booster.");
      }
    });
  }

  const buyGoldenFrameBtn = document.getElementById('buyGoldenFrameBtn');
  if (buyGoldenFrameBtn) {
    buyGoldenFrameBtn.addEventListener('click', () => {
      if (appState.goldenFrameOwned) {
        // Toggle Equip
        appState.goldenFrameEquipped = !appState.goldenFrameEquipped;
        sounds.playPop();
        appState.saveState();
        appState.renderUI();
      } else {
        const cost = 15;
        if (appState.points >= cost) {
          appState.points -= cost;
          appState.goldenFrameOwned = true;
          appState.goldenFrameEquipped = true;
          showPointsNotification("Premium Golden Frame unlocked and equipped! ✨");
          sounds.playVictory();
          appState.saveState();
          appState.renderUI();
        } else {
          alert("Not enough points! You need 15 points to buy Premium Golden Frame.");
        }
      }
    });
  }

  const buyArcadeThemeBtn = document.getElementById('buyArcadeThemeBtn');
  if (buyArcadeThemeBtn) {
    buyArcadeThemeBtn.addEventListener('click', () => {
      if (appState.arcadeThemeOwned) {
        // Toggle Active
        if (appState.activeTheme === 'arcade') {
          appState.activeTheme = 'default';
          document.documentElement.classList.remove('arcade-theme');
          showPointsNotification("Default Theme restored!");
        } else {
          appState.activeTheme = 'arcade';
          document.documentElement.classList.add('arcade-theme');
          showPointsNotification("Arcade Cyberpunk Theme activated! 🌈");
        }
        sounds.playPop();
        appState.saveState();
        appState.renderUI();
      } else {
        const cost = 20;
        if (appState.points >= cost) {
          appState.points -= cost;
          appState.arcadeThemeOwned = true;
          appState.activeTheme = 'arcade';
          document.documentElement.classList.add('arcade-theme');
          showPointsNotification("Arcade Cyberpunk Theme unlocked and activated! 🌈");
          sounds.playVictory();
          appState.saveState();
          appState.renderUI();
        } else {
          alert("Not enough points! You need 20 points to buy Arcade Cyberpunk Theme.");
        }
      }
    });
  }

  const goToShopBtn = document.getElementById('goToShopFromGamesBtn');
  if (goToShopBtn) {
    goToShopBtn.addEventListener('click', () => switchView('shop'));
  }

  const gameCards = document.querySelectorAll('.game-card');
  const gamesGridPanel = document.getElementById('gamesGridPanel');
  const playScreen = document.getElementById('gameActivePlayScreen');
  const activeGameIframe = document.getElementById('activeGameIframe');
  const iframeTitle = document.getElementById('activeGameIframeTitle');
  const exitGameBtn = document.getElementById('exitActiveGameBtn');

  gameCards.forEach(card => {
    card.addEventListener('click', () => {
      if (appState.purchasedGameTime <= 0) return; // locked
      sounds.playPop();
      const url = card.getAttribute('data-url');
      const title = card.getAttribute('data-title');
      
      if (gamesGridPanel) gamesGridPanel.style.display = 'none';
      if (playScreen) playScreen.style.display = 'flex';
      if (activeGameIframe) activeGameIframe.src = url;
      if (iframeTitle) iframeTitle.innerText = title;

      // Immediately scroll the game play container into full view at the top of the viewport
      const wrapper = document.getElementById('gamesContentWrapper');
      if (wrapper) {
        wrapper.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  const fullscreenGameBtn = document.getElementById('fullscreenGameBtn');
  if (fullscreenGameBtn) {
    fullscreenGameBtn.addEventListener('click', () => {
      sounds.playPop();
      if (activeGameIframe) {
        if (activeGameIframe.requestFullscreen) {
          activeGameIframe.requestFullscreen();
        } else if (activeGameIframe.webkitRequestFullscreen) {
          activeGameIframe.webkitRequestFullscreen();
        } else if (activeGameIframe.msRequestFullscreen) {
          activeGameIframe.msRequestFullscreen();
        }
      }
    });
  }

  if (exitGameBtn) {
    exitGameBtn.addEventListener('click', () => {
      sounds.playPop();
      if (gamesGridPanel) gamesGridPanel.style.display = 'grid';
      if (playScreen) playScreen.style.display = 'none';
      if (activeGameIframe) activeGameIframe.src = '';
    });
  }
});

// View and Points Notifications Globals
function switchView(viewName) {
  sounds.playPop();
  
  if (viewName !== 'games') {
    if (window.gameTimerInterval) {
      clearInterval(window.gameTimerInterval);
      window.gameTimerInterval = null;
    }
  } else {
    startGameTimer();
  }

  document.getElementById('dashboardView').style.display = viewName === 'dashboard' ? 'block' : 'none';
  document.getElementById('shopView').style.display = viewName === 'shop' ? 'block' : 'none';
  document.getElementById('gamesView').style.display = viewName === 'games' ? 'block' : 'none';
  
  const lBoardView = document.getElementById('leaderboardView');
  if (lBoardView) lBoardView.style.display = viewName === 'leaderboard' ? 'block' : 'none';

  const dBtn = document.getElementById('sidebarDashboardBtn');
  const sBtn = document.getElementById('sidebarShopBtn');
  const gBtn = document.getElementById('sidebarGamesBtn');
  const lBtn = document.getElementById('sidebarLeaderboardBtn');
  if (dBtn) dBtn.classList.toggle('active', viewName === 'dashboard');
  if (sBtn) sBtn.classList.toggle('active', viewName === 'shop');
  if (gBtn) gBtn.classList.toggle('active', viewName === 'games');
  if (lBtn) lBtn.classList.toggle('active', viewName === 'leaderboard');

  const mdBtn = document.getElementById('mobileDashboardBtn');
  const msBtn = document.getElementById('mobileShopBtn');
  const mgBtn = document.getElementById('mobileGamesBtn');
  const mlBtn = document.getElementById('mobileLeaderboardBtn');
  if (mdBtn) mdBtn.classList.toggle('active', viewName === 'dashboard');
  if (msBtn) msBtn.classList.toggle('active', viewName === 'shop');
  if (mgBtn) mgBtn.classList.toggle('active', viewName === 'games');
  if (mlBtn) mlBtn.classList.toggle('active', viewName === 'leaderboard');

  if (viewName === 'shop') {
    appState.renderShop();
  } else if (viewName === 'leaderboard') {
    renderLeaderboardData();
  }
}

function startGameTimer() {
  if (window.gameTimerInterval) return;
  updateGamesTimerUI();
  window.gameTimerInterval = setInterval(() => {
    if (appState.purchasedGameTime > 0) {
      appState.purchasedGameTime--;
      updateGamesTimerUI();
      if (appState.purchasedGameTime % 10 === 0) {
        appState.saveState();
      }
    }
  }, 1000);
}

function updateGamesTimerUI() {
  const timerText = document.getElementById('gamesActiveTimer');
  const overlay = document.getElementById('gamesLockedOverlay');
  const gamesGrid = document.getElementById('gamesGridPanel');
  const playScreen = document.getElementById('gameActivePlayScreen');

  const time = appState.purchasedGameTime;
  const mins = Math.floor(time / 60);
  const secs = time % 60;
  const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  
  if (timerText) timerText.innerText = timeStr;

  if (time <= 0) {
    if (overlay) overlay.style.display = 'flex';
    if (gamesGrid) gamesGrid.style.display = 'none';
    if (playScreen) {
      playScreen.style.display = 'none';
      const iframe = document.getElementById('activeGameIframe');
      if (iframe) iframe.src = '';
    }
    if (window.gameTimerInterval) {
      clearInterval(window.gameTimerInterval);
      window.gameTimerInterval = null;
    }
  } else {
    if (overlay) overlay.style.display = 'none';
    if (!playScreen || playScreen.style.display !== 'flex') {
      if (gamesGrid) gamesGrid.style.display = 'grid';
    }
  }
}

function showPointsNotification(msg) {
  const div = document.createElement('div');
  div.innerText = msg;
  div.style.position = 'fixed';
  div.style.bottom = '20px';
  div.style.right = '20px';
  div.style.background = 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)';
  div.style.color = 'white';
  div.style.padding = '12px 24px';
  div.style.borderRadius = '12px';
  div.style.boxShadow = '0 10px 25px rgba(234,179,8,0.3)';
  div.style.border = '2px solid #fef08a';
  div.style.fontWeight = '900';
  div.style.fontSize = '15px';
  div.style.zIndex = '99999';
  div.style.animation = 'trophy-bounce 0.5s ease-out';
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.style.gap = '8px';
  
  document.body.appendChild(div);
  
  setTimeout(() => {
    div.style.transition = 'all 0.5s ease';
    div.style.opacity = '0';
    div.style.transform = 'translateY(-20px)';
    setTimeout(() => div.remove(), 500);
  }, 3000);
}

// 7. Core Quest Controller
function startQuest(topicId) {
  startLessonQuest(1);
}

function startLessonQuest(lessonId) {
  sounds.playPop();
  appState.helpUsedInCurrentLesson = false;
  
  const lesson = GRADE_1_CURRICULUM.find(l => l.id === lessonId);
  appState.activeQuestLessonId = lessonId;
  appState.activeTopic = "numbersense"; // compat
  
  document.getElementById('playgroundTitle').innerText = `L${lesson.id}: ${lesson.title}`;
  document.getElementById('playgroundStars').innerText = appState.stars;
  
  // Show header tabs
  document.querySelector('.playground-header').style.display = 'flex';
  document.querySelector('.playground-tabs').style.display = 'flex';

  const qList = getQuestionsForLesson(appState.currentSubject, lessonId);
  if (appState.currentSubject === 'math' || appState.currentSubject === 'ela') {
    appState.practiceProblemsCount = 5;
  } else {
    appState.practiceProblemsCount = qList.length > 0 ? qList.length : 1;
  }

  if (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') {
    document.getElementById('tab-step-3').style.display = 'none';
    document.getElementById('tab-step-4').style.display = 'none';
  } else {
    document.getElementById('tab-step-3').style.display = '';
    document.getElementById('tab-step-4').style.display = '';
  }

  // Step 2 is always unlocked
  unlockTab(2);
  
  const isLessonFinished = lessonId <= appState.completedCounts.lessonsCompleted;
  
  // Reset video states
  appState.videoSlideIdx = 0;
  appState.videoCurrentTime = 0;
  appState.checkpointPassed = false;
  appState.videoPlaying = false;
  if (appState.videoTimeout) {
    clearTimeout(appState.videoTimeout);
    appState.videoTimeout = null;
  }
  if (appState.videoInterval) {
    clearInterval(appState.videoInterval);
    appState.videoInterval = null;
  }
  
  // Reset mastery state for the new lesson
  appState.masteryHistory = [];
  appState.masteryChancesLeft = 3;
  appState.masteryConsecutiveFails = 0;
  appState.saveState();
  
  if (isLessonFinished) {
    unlockTab(3);
    unlockTab(4);
  } else {
    lockTab(3);
    lockTab(4);
  }
  
  // Open playground overlay and default to Step 1: Watch
  document.getElementById('playgroundOverlay').classList.add('active');
  switchStep(1);
}

function unlockTab(stepNum) {
  const tab = document.getElementById(`tab-step-${stepNum}`);
  if (tab) {
    tab.classList.remove('locked');
    tab.removeAttribute('disabled');
    const lockEl = tab.querySelector('.tab-lock');
    if (lockEl) lockEl.remove();
  }
}

function lockTab(stepNum) {
  const tab = document.getElementById(`tab-step-${stepNum}`);
  if (tab) {
    tab.classList.add('locked');
    tab.setAttribute('disabled', 'true');
    if (!tab.querySelector('.tab-lock')) {
      const lock = document.createElement('span');
      lock.className = 'tab-lock';
      lock.innerText = ' 🔒';
      tab.appendChild(lock);
    }
  }
}

function switchStep(stepNum) {
  sounds.playPop();
  
  // Stop speech synthesis & videos from previous states
  window.speechSynthesis.cancel();
  pauseVideo();
  
  appState.activeStep = stepNum;
  
  // Update Tab buttons styling
  document.querySelectorAll('.tab-btn').forEach((tab, index) => {
    tab.classList.toggle('active', index + 1 === stepNum);
  });
  
  // Toggle displays
  document.querySelectorAll('.step-view').forEach((view, index) => {
    view.style.display = (index + 1 === stepNum) ? 'flex' : 'none';
  });

  // Launch step-specific setup
  if (stepNum === 1) {
    setupStep1Video();
  } else if (stepNum === 2) {
    setupStep2Practice();
  } else if (stepNum === 3) {
    setupStep3Mastery();
  } else if (stepNum === 4) {
    setupStep4Test();
  }
}

// 8. Text-to-Speech Aloud Narration
function speakText(text, onEndCallback) {
  if (!appState.isSoundOn) {
    if (onEndCallback) onEndCallback();
    return;
  }
  window.speechSynthesis.cancel(); // stop past speeches
  
  // Parse text into expressive segments by sentence boundaries
  const sentences = text.match(/[^.!?]+[.!?]+/g) || [text];
  
  const voices = window.speechSynthesis.getVoices();
  // Prefer friendly high-quality female or kid-sounding voices
  const preferredVoiceNames = [
    "Google US English", 
    "Samantha", 
    "Tessa",
    "Daniel", 
    "Aria",
    "Microsoft Aria Online (Natural)", 
    "Microsoft Guy Online (Natural)"
  ];
  let chosenVoice = null;
  for (const name of preferredVoiceNames) {
    chosenVoice = voices.find(v => v.name.includes(name));
    if (chosenVoice) break;
  }
  if (!chosenVoice) {
    chosenVoice = voices.find(v => v.lang.startsWith('en') && v.name.includes('Natural')) ||
                  voices.find(v => v.lang.startsWith('en') && v.name.includes('Premium')) ||
                  voices.find(v => v.lang.startsWith('en') && v.name.includes('High')) ||
                  voices.find(v => v.lang.startsWith('en'));
  }

  // Queue each segment in order
  sentences.forEach((sentenceText, idx) => {
    const trimmed = sentenceText.trim();
    if (!trimmed) return;
    
    const utterance = new SpeechSynthesisUtterance(trimmed);
    if (chosenVoice) utterance.voice = chosenVoice;
    
    // Clear, maximum volume for excellent audibility
    utterance.volume = 1.0;
    
    // Cheerful children's show host tone configuration
    let basePitch = 1.12;
    let baseRate = 0.86;

    // Apply dynamic inflections and speed variations to simulate active emotions
    if (trimmed.endsWith('!')) {
      utterance.pitch = basePitch + 0.15; // highly excited, energetic pitch!
      utterance.rate = baseRate + 0.06;   // faster rate to express happiness
    } else if (trimmed.endsWith('?')) {
      utterance.pitch = basePitch + 0.1;  // inquisitive, rising curiosity tone
      utterance.rate = baseRate - 0.04;   // slightly slower to draw attention
    } else if (trimmed.includes('...') || (trimmed.includes('.') && trimmed.length < 15)) {
      utterance.pitch = basePitch + 0.05; // spelling highlight words
      utterance.rate = 0.65;              // slower spelling cadence
    } else {
      // Natural human sentence melody simulation via slight randomized fluctuation
      utterance.pitch = basePitch + (Math.random() * 0.08 - 0.04);
      utterance.rate = baseRate;
    }
    
    // Bind callback to the last sentence
    if (idx === sentences.length - 1 && onEndCallback) {
      utterance.onend = onEndCallback;
    }
    
    window.speechSynthesis.speak(utterance);
  });
}

// 8.5. AI Chatbot Tutor widget
function initSmartyChatbot(container, activeQuestion, onPenaltyCallback, isHighStakes) {
  // Only use Smarty for middle and higher schoolers (Grades >= 6)
  if (appState.currentGrade < 6) {
    let chatArea = container.querySelector('.smarty-chat-area');
    if (chatArea) chatArea.remove();
    return;
  }
  
  // Check if chat layout already exists
  let chatArea = container.querySelector('.smarty-chat-area');
  if (!chatArea) {
    chatArea = document.createElement('div');
    chatArea.className = 'smarty-chat-area';
    chatArea.style.cssText = 'border-top: 2px dashed #cbd5e1; margin-top: 20px; padding-top: 16px; width: 100%;';
    container.querySelector('.practice-container').appendChild(chatArea);
  }
  
  chatArea.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 10px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 24px; animation: bounce 2s infinite;">🤖</span>
        <span style="font-weight: 800; font-size: 15px; color: var(--primary);">Smarty the AI Tutor</span>
      </div>
      ${isHighStakes ? `<span style="font-size: 11px; font-weight: 700; color: var(--danger); background: #fee2e2; padding: 4px 8px; border-radius: 8px;">⚠️ Help = Marked Wrong</span>` : ''}
    </div>
    
    <div class="chat-messages" id="smartyChatMessages" style="max-height: 140px; overflow-y: auto; padding: 12px; background: #f8fafc; border-radius: 16px; border: 2px solid #e2e8f0; margin-bottom: 12px; font-size: 14px; text-align: left; display: flex; flex-direction: column; gap: 8px; line-height: 1.4;">
      <div style="color: var(--text-muted);">Hi there! I'm Smarty! Ask me anything about this problem, and I'll give you a hint. 🌟</div>
    </div>
    
    <div style="display: flex; gap: 8px; width: 100%;">
      <input type="text" id="smartyChatInput" placeholder="Ask Smarty a question..." style="flex: 1; padding: 10px 16px; border-radius: 24px; border: 2px solid #cbd5e1; font-size: 14px; outline: none; transition: border-color 0.2s; user-select: text !important; -webkit-user-select: text !important; pointer-events: auto !important; cursor: text;" onfocus="this.style.borderColor='var(--primary)'" onblur="this.style.borderColor='#cbd5e1'">
      <button id="smartySendChatBtn" class="primary-btn" style="padding: 10px 20px; border-radius: 24px; font-size: 14px; margin: 0; display: flex; align-items: center; gap: 4px; background: var(--primary); box-shadow: 0 4px 0 #312e81; pointer-events: auto !important; cursor: pointer; position: relative; z-index: 10;">Send ➔</button>
    </div>
  `;
  
  const chatMessages = chatArea.querySelector('#smartyChatMessages');
  const chatInput = chatArea.querySelector('#smartyChatInput');
  const sendBtn = chatArea.querySelector('#smartySendChatBtn');
  
  // Add warning alert if high stakes
  if (isHighStakes) {
    const warningMsg = document.createElement('div');
    warningMsg.style.cssText = 'color: #b91c1c; font-size: 12px; font-weight: 700; margin-bottom: 8px; text-align: left; background: #fff5f5; padding: 6px 12px; border-radius: 8px; border: 1px solid #fecaca;';
    warningMsg.innerText = "🚨 Warning: Asking for help in this section will mark this question as INCORRECT!";
    chatMessages.appendChild(warningMsg);
  }

  function appendMessage(sender, text, isSystem = false) {
    const msg = document.createElement('div');
    msg.style.cssText = `padding: 8px 12px; border-radius: 12px; max-width: 85%; ${
      sender === 'user' 
        ? 'background: #dbeafe; color: #1e40af; align-self: flex-end;' 
        : isSystem 
        ? 'background: #fee2e2; color: #b91c1c; align-self: center; font-size: 12px; font-weight:700;' 
        : 'background: #ffffff; color: #1e293b; align-self: flex-start; border: 1px solid #e2e8f0;'
    }`;
    msg.innerHTML = text;
    chatMessages.appendChild(msg);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
  
  function processChat() {
    appState.checkDateResets();
    const isUnlimited = appState.isChatbotUnlimited();
    if (appState.chatbotUseCount >= 3 && !isUnlimited) {
      appendMessage("Smarty", "⚠️ Daily limit (3/3 hints) reached! Buy the Unlimited Chatbot Week-Pass in the shop for 10 points to keep chatting.", true);
      chatInput.value = '';
      return;
    }

    const query = chatInput.value.trim();
    if (!query) return;
    
    if (!isUnlimited) {
      appState.chatbotUseCount++;
      appState.saveState();
    }
    
    appendMessage('user', query);
    chatInput.value = '';
    
    // Disable input while processing
    chatInput.disabled = true;
    sendBtn.disabled = true;
    
    setTimeout(() => {
      let botResponse = "";
      const lower = query.toLowerCase();
      
      const cleanAns = String(activeQuestion.correctAnswer).replace(/<\/?[^>]+(>|$)/g, "");
      const hintText = activeQuestion.hint || `Look for ${cleanAns}.`;
      
      // Determine if user really doesn't know and wants the answer directly
      const wantsAnswer = lower.includes("answer") || lower.includes("reveal") || lower.includes("give me") || lower.includes("don't know") || lower.includes("dont know") || lower.includes("stuck") || lower.includes("what is it") || lower.includes("what is correct");
      
      // greetings
      const isGreeting = lower.includes("hi") || lower.includes("hello") || lower.includes("hey") || lower.includes("hola") || lower.includes("greetings");
      
      // explanation request (why / how)
      const isExplain = lower.includes("why") || lower.includes("how") || lower.includes("explain") || lower.includes("understand") || lower.includes("reason");
      
      // asking about options
      const isOptionsQuery = lower.includes("option") || lower.includes("choice") || lower.includes("select") || lower.includes("pick") || lower.includes("which one");

      if (wantsAnswer) {
        botResponse = `Okay, explorer! Since you are really stuck, the correct answer is **${cleanAns}**!`;
      } else if (isGreeting) {
        botResponse = `Hello there, buddy! I'm Smarty! Ask me any questions about the problem: "${activeQuestion.questionText}". Let's solve it together! 🌟`;
      } else if (isExplain) {
        botResponse = `Great question! We want to find: "${activeQuestion.questionText}". Since the correct answer is **${cleanAns}**, we can find it by looking at the visuals and choosing the matching card! Clue: ${hintText}`;
      } else if (isOptionsQuery) {
        botResponse = `Let's inspect our options: ${activeQuestion.options.map(opt => `[${opt}]`).join(', ')}. Try to find the one that fits! Clue: ${hintText}`;
      } else {
        // Adapt response based on whether user query mentions any of the options
        let mentionedOption = null;
        activeQuestion.options.forEach(opt => {
          if (lower.includes(String(opt).toLowerCase())) {
            mentionedOption = opt;
          }
        });
        
        if (mentionedOption !== null) {
          if (String(mentionedOption).toLowerCase() === cleanAns.toLowerCase()) {
            botResponse = `Ooh! You mentioned **${mentionedOption}**! That sounds super warm! Let's think if that is the correct match! 😉`;
          } else {
            botResponse = `You mentioned **${mentionedOption}**, but let's count/look again. It might be different! Hint: ${hintText}`;
          }
        } else {
          // Default personalized fallback
          botResponse = `I hear you! To solve: "${activeQuestion.questionText}", here is a helpful clue: ${hintText}`;
        }
      }
      
      appendMessage('bot', botResponse);
      speakText(botResponse);
      
      // Apply penalty if high stakes
      appState.helpUsedInCurrentLesson = true;
      if (isHighStakes) {
        if (!appState.chatbotUsedForCurrentQuestion) {
          appState.chatbotUsedForCurrentQuestion = true;
          appendMessage('system', '🔴 AI help used. This question will be marked as incorrect.', true);
        }
      }
      
      chatInput.disabled = false;
      sendBtn.disabled = false;
      chatInput.focus();
    }, 800);
  }
  
  sendBtn.addEventListener('click', processChat);
  chatInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') processChat();
  });
}

function getTextLessonExplanation(subject, lessonId) {
  let lesson;
  if (subject === 'ela') lesson = GRADE_1_ELA_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'history') lesson = GRADE_1_HISTORY_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'geography') lesson = GRADE_1_GEOGRAPHY_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'science') lesson = GRADE_1_SCIENCE_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'art') lesson = GRADE_1_ART_CURRICULUM.find(l => l.id === lessonId);
  else lesson = GRADE_1_MATH_CURRICULUM.find(l => l.id === lessonId);
  const title = lesson ? lesson.title : "Lesson Explanation";
  const desc = lesson ? lesson.desc : "Let's learn!";
  const unit = lesson ? lesson.unit : 1;

  let concept = "";
  let challenge = "";
  let tip = "";

  if (subject === 'ela') {
    if (unit === 1) {
      concept = `Welcome to ELA class! Today we are learning all about <b>"${title}"</b>. ${desc}. Phonics is the study of how letters and their voices connect to make spoken words. When we learn to read, we look at letters and make their special sounds out loud. By blending these individual sounds together from left to right (like /c/ - /a/ - /t/), we can read the whole word smoothly! Every letter has a voice, and vowels (like A, E, I, O, U) have short sounds that form the core of simple three-letter words. We pay close attention to the mouth shapes we make when saying short vowel sounds. For example, when making the short /a/ sound (like in "apple" or "cat"), we open our mouths wide and say "aaah". By identifying starting, middle, and ending sounds, we gain the superpower to read and spell hundreds of words! Let's practice saying the letters and blending their voices together to read like a superstar.`;
      challenge = `Look around the room: can you find something that starts with the /b/ sound? Say it out loud! (Hint: book, bed, or box!)`;
      tip = `Touch each letter on the screen or in a book with your finger as you sound it out. This helps your brain connect letters to their sounds!`;
    } else if (unit === 2) {
      concept = `Welcome to ELA class! Today we are learning all about <b>"${title}"</b>. ${desc}. Sight words are high-frequency words that appear very often in stories and sentences, such as "the", "and", "she", "he", "was", and "are". Because they are so common, we practice recognizing them instantly at a single glance without needing to sound them out letter-by-letter. This helps us read stories much faster and smoother! Think of sight words like warm friends that you recognize by their face immediately, without needing to spell out their names. By training your eyes to spot these words instantly, your reading flows smoothly, and you can focus all your energy on the fun adventure of the story itself!`;
      challenge = `Can you find a sight word in your favorite storybook? Point to it and read the sentence out loud!`;
      tip = `Write sight words on cards and post them on the wall. Practice reading them quickly every time you walk past them!`;
    } else if (unit === 3) {
      concept = `Welcome to ELA class! Today we are learning all about <b>"${title}"</b>. ${desc}. Grammar is the set of rules we use to build sentences that make sense to others. In first grade, we learn about Naming Words (Nouns) which represent people, places, animals, or things, and Action Words (Verbs) which tell us what someone or something is doing (like running, sleeping, or laughing). Without nouns, we wouldn't know WHO our story is about, and without verbs, we wouldn't know WHAT they are doing! By learning to match naming words with action words, we construct clear sentences that express our thoughts perfectly.`;
      challenge = `Look at your parents or a pet: what are they doing? Can you say a sentence describing their action?`;
      tip = `Every complete sentence starts with a capital letter and ends with a punctuation mark, like a period (.) or a question mark (?).`;
    } else if (unit === 4) {
      concept = `Welcome to ELA class! Today we are learning all about <b>"${title}"</b>. ${desc}. Writing is how we share our thoughts, stories, and ideas with others using written words. To write beautiful, readable sentences, we start with a capital letter, leave clean finger spaces between our words, and end our sentences with punctuation marks like periods (.) or question marks (?). Spacing is incredibly important because it tells our reader where one idea ends and the next one begins. Neatly formed letters and clear spacing make your stories a joy for everyone to read!`;
      challenge = `Can you write your name on a piece of paper, making sure the first letter is capital and the rest are lowercase?`;
      tip = `When writing a sentence, imagine placing your index finger between each word to make sure you leave a perfect finger space!`;
    } else if (unit === 5) {
      concept = `Welcome to ELA class! Today we are learning all about <b>"${title}"</b>. ${desc}. Reading comprehension means understanding and remembering what happens in a story we read. When we read, we think about the characters (the people or animals in the story), the setting (where and when the story takes place), and the plot events (what happens at the beginning, middle, and end). Asking questions like "who is this story about?", "where are they going?", and "why did that happen?" helps us unlock the hidden secrets of books and become master readers!`;
      challenge = `Can you name your favorite story? Who is the main character, and what is their favorite thing to do?`;
      tip = `Pause after reading a page in a book and summarize what happened in your own words before turning the page.`;
    } else {
      concept = `Welcome to ELA class! Today we are learning all about <b>"${title}"</b>. ${desc}. Speaking and listening are how we share our ideas and build friendships. Being a great listener means looking at the speaker, paying close attention to their words, and waiting for our turn to speak without interrupting. Good speakers use clear voices, look at their audience, and express their thoughts in full sentences. When we take turns speaking and listening, we show respect to our friends and learn amazing new things together!`;
      challenge = `Ask someone in your house about their day, listen to their answer, and then ask a friendly follow-up question!`;
      tip = `When someone is talking to you, keep your eyes on them and nod your head to show you are listening to their ideas.`;
    }
  } else if (subject === 'history') {
    if (unit === 1) {
      concept = `Welcome to History class! Today we are learning all about <b>"${title}"</b>. ${desc}. History is the study of the past—it helps us understand how families, neighborhoods, and communities have grown and changed over time. A community is a group of people who live, play, and work together. Community helpers like firefighters, doctors, mail carriers, and teachers work hard to keep us safe and healthy. A family history connects us to our ancestors and helps us preserve special traditions that make our family unique!`;
      challenge = `Ask someone in your house what their favorite holiday is and how they celebrate it! That's a family tradition!`;
      tip = `Ask your parents or grandparents to show you a photo of themselves when they were kids. It helps you see how things looked different in the past!`;
    } else if (unit === 2) {
      concept = `Welcome to History class! Today we are learning all about <b>"${title}"</b>. ${desc}. History helps us compare how people lived long ago with how we live today. Long ago, before electricity, cars, and computers, people traveled on horses, cooked on wood stoves, and played with wooden toys. Today, technology lets us turn on lights with a switch and talk to friends far away instantly! By studying these differences, we see how human creativity and new inventions have changed our daily lives.`;
      challenge = `Can you find an object in your kitchen that people long ago didn't have? (Hint: microwaves, blenders, or refrigerators!)`;
      tip = `Imagine going to school in a one-room schoolhouse with kids of all ages. Think about how lucky we are to have computers and libraries today!`;
    } else if (unit === 3) {
      concept = `Welcome to History class! Today we are learning all about <b>"${title}"</b>. ${desc}. National symbols are special objects, songs, or landmarks that represent our country and its values, like freedom and friendship. Holidays are special days where we gather to honor important people and historic events from our nation's past. The American flag, the bald eagle, and the Liberty Bell are symbols that remind us of our history and the importance of working together in fairness and peace.`;
      challenge = `Stand up, place your right hand over your heart, and practice saying the Pledge of Allegiance with a family member!`;
      tip = `Look for symbols on coins, dollars, and stamps. You will see eagles, flags, and famous presidents representing our country!`;
    } else if (unit === 4) {
      concept = `Welcome to History class! Today we are learning all about <b>"${title}"</b>. ${desc}. Historical figures are famous leaders, inventors, and heroes from the past who did brave and helpful things to make our world a better, fairer place. By studying their courage and honesty, we can learn how to be helpful and kind citizens in our own neighborhoods today. Heroes like Martin Luther King Jr. and George Washington showed us how big dreams and hard work can change the course of history for the better.`;
      challenge = `Can you name the first president of the United States? (Hint: his face is on the quarter and the one-dollar bill!)`;
      tip = `When reading about heroes from history, think about what qualities made them great, like being honest, helpful, or standing up for others!`;
    } else if (unit === 5) {
      concept = `Welcome to History class! Today we are learning all about <b>"${title}"</b>. ${desc}. Native Americans were the very first people to build homes, farm, and live on the land in North America. They lived in different tribes across the country, each with their own language, customs, and houses (like tepees, clay pueblos, or wooden longhouses) that respected the land and nature. They grew crops like corn, beans, and squash together in a helpful way called the "Three Sisters" to keep the soil healthy.`;
      challenge = `Can you think of a way you can show respect to the nature around you today? (Hint: watering plants, picking up trash!)`;
      tip = `Native American stories were not written in books, they were shared out loud! Try sharing a story about your day around the dinner table!`;
    } else {
      concept = `Welcome to History class! Today we are learning all about <b>"${title}"</b>. ${desc}. Inventions are new ideas, machines, or tools created to solve problems and make life easier. Throughout history, brave inventors and explorers (like space astronauts and airplane aviators) have pushed boundaries to explore the skies and light up our world. Inventors like Thomas Edison changed how we live by building the electric lightbulb, replacing dim oil candles with bright, safe light!`;
      challenge = `If you could build any new machine to help people with their chores, what would it do? Tell someone about your idea!`;
      tip = `Look around your room: almost everything you see—clocks, pencils, light bulbs, computers—started as a brand new idea by an inventor!`;
    }
  } else if (subject === 'geography') {
    if (unit === 1) {
      concept = `Welcome to Geography class! Today we are learning all about <b>"${title}"</b>. ${desc}. Geography is the study of planet Earth, its land, its water, and maps! A map is a flat drawing of a real place (like a park, room, or city) seen from directly above, like a bird's eye view. Maps use keys, colors, and symbols to represent real objects. A map key (or legend) is a tiny decoder box that tells you exactly what each drawing or symbol means, like a green tree representing a park or blue lines representing rivers.`;
      challenge = `Can you draw a bird's eye view map of your bed or desk? Draw it as if you are looking straight down from the ceiling!`;
      tip = `A globe is round and shows the exact shape of the Earth, while a map is flat and easy to fold up and carry with you!`;
    } else if (unit === 2) {
      concept = `Welcome to Geography class! Today we are learning all about <b>"${title}"</b>. ${desc}. Cardinal directions are the four main directions we use to navigate: North, South, East, and West. A compass rose is a map tool that shows these directions. North points straight up, South points down, East points right (where the sun rises), and West points left. By learning how to use cardinal directions, you can follow map paths and find your way to exciting new places without ever getting lost!`;
      challenge = `Point your arms: if your face points North, your right arm points East! Where does your left arm point? (Hint: West!)`;
      tip = `The next time you go outside in the morning, look at where the sun is rising. That direction is East! the opposite side is West!`;
    } else if (unit === 3) {
      concept = `Welcome to Geography class! Today we are learning all about <b>"${title}"</b>. ${desc}. Our planet Earth is a beautiful blue and green ball made of land and water. The land is divided into seven massive sections called continents, and the water is divided into five giant salt-water pools called oceans. The equator is a hot imaginary belt wrapping around the middle of the Earth. The North Pole at the very top and the South Pole at the very bottom are frozen, icy regions where unique animals live.`;
      challenge = `Can you say the name of our continent? (Hint: it starts with 'North' and is where Canada, US, and Mexico are!)`;
      tip = `Most of the Earth—over 70%—is covered in ocean water! That is why our planet looks so blue from space!`;
    } else if (unit === 4) {
      concept = `Welcome to Geography class! Today we are learning all about <b>"${title}"</b>. ${desc}. The surface of the Earth is covered with natural shapes. Land shapes are called landforms (like tall mountains, flat plains, and steep valleys) and water shapes are water bodies (like flowing rivers, quiet lakes, and wide oceans). An island is a piece of land completely surrounded by water on all sides, while a peninsula is surrounded by water on three sides but still connected to the mainland.`;
      challenge = `Can you name a landform that is extremely tall and has steep rocky slopes? (Hint: mountain!)`;
      tip = `Water in lakes and ponds is still and sits in a pool, while water in rivers and streams is fresh and flows along a path to the sea!`;
    } else if (unit === 5) {
      concept = `Welcome to Geography class! Today we are learning all about <b>"${title}"</b>. ${desc}. Weather describes what the air is like outside right now (like sunny or snowy). Seasons are the four parts of the year with different weather. Climate is the usual weather pattern of a specific place over a very long time. For example, tropical climates near the equator are always hot and wet, while polar climates at the poles are always freezing cold and snowy. Animals and plants develop amazing features to survive in their climates!`;
      challenge = `What season is it right now? What is the weather like outside today?`;
      tip = `Plants and animals have special houses and bodies that help them survive in their climate, like polar bears having thick white fur!`;
    } else {
      concept = `Welcome to Geography class! Today we are learning all about <b>"${title}"</b>. ${desc}. You have your own unique address and place in our giant world! We use street addresses, neighborhood names, cities, states, and countries to help organize and describe exactly where we live on our planet Earth. Knowing your place in the world is a superpower that helps mail carriers deliver letters directly to your door and helps you share where you live with friends.`;
      challenge = `Do you know your street name? Say it out loud! That's a key part of your address!`;
      tip = `Knowing your address and phone number is a superpower that keeps you safe and helps mail carriers deliver birthday cards directly to you!`;
    }
  } else if (subject === 'science') {
    if (unit === 1) {
      concept = `Welcome to Science class! Today we are learning all about <b>"${title}"</b>. ${desc}. Light is a form of energy that lets us see the world. Light travels in straight lines and comes from sources like the Sun, fire, and lamps. When light hits an object, it can pass straight through transparent glass, bounce off shiny mirrors, or get blocked by solid opaque objects to create a dark shadow! Light travels faster than anything else in the universe, and studying how it bends and reflects helps us build cameras, glasses, and telescopes!`;
      challenge = `Take a flashlight or your phone screen light and hold your hand in front of a wall. Can you make your hand shadow grow bigger and smaller?`;
      tip = `The closer you hold your hand to the light source, the bigger and fuzzy your shadow will look on the wall!`;
    } else if (unit === 2) {
      concept = `Welcome to Science class! Today we are learning all about <b>"${title}"</b>. ${desc}. Sound is made by fast, wiggling back-and-forth movements called vibrations. When an object vibrates (like a plucked guitar string), it wiggles the air around it. This wiggling air travels to our ears, and our brain hears it as talking, music, or noises! Pitch tells us how high or low a sound is (fast wiggles make high pitches), while volume tells us how loud or soft a sound is. Vibrations are all around us, and sound can travel through air, water, and even solid doors!`;
      challenge = `Place your hand gently on the front of your throat and hum a low tune: "Mmmmmm." Can you feel your throat wiggling? Those wiggles are your vocal cords vibrating!`;
      tip = `Sound can travel through air, water, and even solid doors! If you press your ear to a table and tap it, the sound will seem much louder!`;
    } else if (unit === 3) {
      concept = `Welcome to Science class! Today we are learning all about <b>"${title}"</b>. ${desc}. Plants are living things that grow, breathe, and make their own food. Plants have special parts that do important jobs: roots drink water from the dirt, the stem stands tall to carry water, leaves catch sunlight to make food, and flowers grow seeds for new baby plants! To stay healthy and grow strong, plants need four basic ingredients from nature: soil, water, fresh air, and bright sunlight.`;
      challenge = `Find a plant outside. Can you point to its stem, leaves, and flowers without wiggling it?`;
      tip = `Some plants have thorns, needles, or sticky sap. These are special defenses that stop hungry animals from eating them!`;
    } else if (unit === 4) {
      concept = `Welcome to Science class! Today we are learning all about <b>"${title}"</b>. ${desc}. Animals are living things with amazing body parts and senses that help them find food, stay safe, and raise their families in their habitats. Baby animals look very much like their parents, and parents protect and feed their babies until they grow big. Features like a turtle's hard shell or an eagle's sharp beak are custom-built to help each animal survive in its unique environment!`;
      challenge = `Pretend you are a cat: wiggle your ears and use your nose to sniff for food. How do your senses help you discover what is around you?`;
      tip = `Baby animals look like their parents because they inherit their features, like a puppy having the same ears and tail shape as its mom dog!`;
    } else if (unit === 5) {
      concept = `Welcome to Science class! Today we are learning all about <b>"${title}"</b>. ${desc}. The sky above is home to the Sun, the Moon, and billions of stars. These objects seem to rise and set because planet Earth is spinning like a giant top. Daytime happens when our side of Earth faces the hot Sun, and nighttime happens when we spin away into dark space. The moon does not make its own light—it shines by acting like a giant mirror, reflecting the sun's light back to Earth!`;
      challenge = `Stand in one spot and spin around slowly like a top. Watch how the objects in the room seem to move past you. That is exactly how the Sun seems to move across our sky every day!`;
      tip = `The moon does not make its own light! It only looks bright because the sun is shining on it, like a giant mirror in space!`;
    } else {
      concept = `Welcome to Science class! Today we are learning all about <b>"${title}"</b>. ${desc}. As Earth travels around the Sun, we experience four seasons: Spring, Summer, Fall, and Winter. The temperature changes, and the amount of daylight shifts—being longest in the summer and shortest in the winter. Warm spring rains wake up seeds, hot summer days help plants grow, cool fall days cause leaves to drop, and freezing winter temperatures bring snow and sleeping, hibernating animals.`;
      challenge = `What clothing matches a cold winter season? What clothing matches a hot summer season?`;
      tip = `We use a tool called a thermometer to measure temperature. The line goes UP when it gets warm and drops DOWN when it gets freezing cold!`;
    }
  } else if (subject === 'art') {
    if (unit === 1) {
      concept = `Welcome to Art class! Today we are learning all about <b>"${title}"</b>. ${desc}. Lines and shapes are the building blocks of all art. A line is a point that moves across a page, and a shape is made when a line closes up (like a circle or square). We can draw lines and shapes to create beautiful pictures and patterns! Flat shapes are two-dimensional (2D), and they can be geometric (like circles and squares) or organic (like free-form leaves and clouds).`;
      challenge = `Draw a picture of a house using only straight lines, triangles, and squares. Can you add a wavy smoke line coming from the chimney?`;
      tip = `Use a ruler if you want your geometric lines to be super straight, or draw freehand to make organic shapes!`;
    } else if (unit === 2) {
      concept = `Welcome to Art class! Today we are learning all about <b>"${title}"</b>. ${desc}. Colors make our world and art look vibrant. We have three primary colors (red, yellow, blue) that cannot be made by mixing. By mixing primary colors together, we can make secondary colors (green, orange, purple). Warm colors (like red, orange, and yellow) make us feel active and happy, while cool colors (like blue, green, and purple) make us feel quiet, calm, and peaceful!`;
      challenge = `Look around the room: find one object that is a warm color (red, orange, or yellow) and one that is a cool color (blue, green, or purple)!`;
      tip = `Warm colors make us feel happy and active, while cool colors make us feel quiet, calm, and sleepy!`;
    } else if (unit === 3) {
      concept = `Welcome to Art class! Today we are learning all about <b>"${title}"</b>. ${desc}. Texture describes how something feels when you touch it (like soft, rough, or bumpy), and patterns are lines, colors, or shapes that repeat over and over. We can draw visual textures using tiny lines to show fur or bark. Collage is a technique where we glue real textured items (like paper, fabric, and yarn) together to make a rich, bumpy, touchable picture!`;
      challenge = `Touch three different things in your room. What do they feel like? Say the textures out loud (soft, hard, bumpy, or smooth)!`;
      tip = `Repeating a simple shape (like a star or a dot) makes a beautiful pattern sheet that you can use as wrapping paper!`;
    } else if (unit === 4) {
      concept = `Welcome to Art class! Today we are learning all about <b>"${title}"</b>. ${desc}. Form is 3D and has depth (like a solid clay sphere or statue), while shape is flat and 2D. Space tells us where objects are placed—closer things (foreground) are drawn large at the bottom, while faraway things (background) are drawn small at the top. Overlapping shapes slightly in front of one another is a trick that helps flat drawings look like they have deep, real space.`;
      challenge = `Take a piece of paper or clay and roll it into a round ball. You just turned a flat shape into a 3D form!`;
      tip = `Draw foreground items larger and background items smaller to make your flat drawing look like it has deep space!`;
    } else if (unit === 5) {
      concept = `Welcome to Art class! Today we are learning all about <b>"${title}"</b>. ${desc}. Artists use different materials (media) to create art. We paint portraits of faces, self-portraits of our own faces, landscapes of nature scenes, still life drawings of quiet objects on a table, and sculpt clay pottery. Using crayons, colored pencils, paint, or clay lets artists share their feelings and show the world through their own eyes!`;
      challenge = `Look in a mirror and draw your own face! Don't forget your eyes, nose, mouth, and hair. You just drew a self-portrait!`;
      tip = `When drawing a still life, keep your eyes on the objects and draw exactly what shapes you see, not what you think they look like!`;
    } else {
      concept = `Welcome to Art class! Today we are learning all about <b>"${title}"</b>. ${desc}. Throughout history, artists from different cultures have created amazing styles. Famous painters like Vincent van Gogh, Claude Monet, Henri Matisse, and Pablo Picasso changed how we look at colors, light, and shapes. From Van Gogh's swirling star strokes to Matisse's organic paper cutouts, studying famous art inspires us to create our own unique artwork!`;
      challenge = `Can you draw a sky with big swirling wind lines like Vincent van Gogh's Starry Night? Use yellow and blue crayons!`;
      tip = `Early humans started making art thousands of years ago by painting wild animals on rocky cave walls using charcoal and colored dirt!`;
    }
  } else {
    // Math
    if (unit === 1) {
      concept = `Welcome back, math explorer! Today we are learning all about <b>"${title}"</b>. ${desc}. Counting is a foundational skill in math that helps us answer the question: <i>"How many objects are there in this group?"</i> When we count, we point to each item and say the numbers in a strict sequence starting at 1: one, two, three, and so on. The most important rule in counting is that every single object must be counted exactly once—never skip an item, and never count the same item twice! The very last number you speak tells you the total amount of items in the group.`;
      challenge = `Look around your room right now. Can you find a group of similar items (like books, toys, or pillows) and count them out loud? Make sure to touch each item once with your finger as you count! How many did you find?`;
      tip = `When counting large groups, it helps to line up the items in a straight row or move them from one pile to another as you count. This makes it impossible to lose your place or double-count!`;
    } else if (unit === 2) {
      concept = `Welcome back, math explorer! Today we are learning all about <b>"${title}"</b>. ${desc}. Addition is the math superpower of joining or combining two or more separate groups together to find out how many we have in total. We use the plus sign (+) to show we are putting the groups together, and the equals sign (=) to show the final total sum. When you add positive numbers together, the final total is always larger than any of the individual groups you started with!`;
      challenge = `Try this: hold up 3 fingers on your left hand and 2 fingers on your right hand. Now, count all the standing fingers together. You just solved the equation 3 + 2 = 5! Can you try it with different numbers?`;
      tip = `If you get stuck on an addition problem, you can always count on from the larger number! For example, for 5 + 3, start at 5 and count up three steps: 6, 7, 8. The answer is 8!`;
    } else if (unit === 3) {
      concept = `Welcome back, math explorer! Today we are learning all about <b>"${title}"</b>. ${desc}. Subtraction is what we do when we want to take away items from a group to see how many are left behind. Subtraction helps us find the difference between groups or calculate what remains after some items are eaten, lost, or popped. We use the minus sign (-) to represent subtraction. When we subtract, the final amount we have is always smaller than the starting group!`;
      challenge = `Hold up 5 fingers. Imagine you have 5 yummy cookies and eat 2 of them. Fold down 2 fingers. How many cookies are left? Count the standing fingers: 3! You just solved 5 - 2 = 3!`;
      tip = `To subtract easily on paper, you can draw the starting number of circles, then draw a big 'X' through the number of circles you want to take away. Just count the clean, unmarked circles to find your answer!`;
    } else if (unit === 4) {
      concept = `Welcome back, math explorer! Today we are learning all about <b>"${title}"</b>. ${desc}. Place value is a smart sorting system we use for numbers. When we get to double-digit numbers, counting them one-by-one takes too long. So, we group them into sets of ten! Every bundle of 10 items makes 1 "Ten Block" (or rod), and any remaining single items are called "Ones Blocks" (or cubes). By looking at how many Tens and Ones make up a number, we can understand and write big numbers instantly.`;
      challenge = `Look at the number 25. Can you identify how many Tens and how many Ones it has? (Hint: it has 2 Tens, which is 20, and 5 leftover Ones!). Try explaining it to someone nearby!`;
      tip = `The left digit in a two-digit number always tells you the number of Tens (the number of bundles of 10), and the right digit tells you the loose, individual Ones!`;
    } else if (unit === 5) {
      concept = `Welcome back, math explorer! Today we are learning all about <b>"${title}"</b>. ${desc}. Measurement helps us compare the sizes, weights, and times of things in our world. Read clocks to tell time is a superpower that helps us organize our day, knowing when to wake up, go to school, eat lunch, or go to sleep. A standard clock is a circle marked with numbers 1 through 12 and has two arrows called hands: a short hand for hours and a long hand for minutes.`;
      challenge = `Look at the nearest analog clock face. Can you find the short hand and the long hand? Which number is the short hour hand pointing closest to right now?`;
      tip = `When the long minute hand points straight up at the 12, it is always an "o'clock" time! In this case, simply read the number the short hand points to (like 4 o'clock if it points to 4).`;
    } else {
      concept = `Welcome back, math explorer! Today we are learning all about <b>"${title}"</b>. ${desc}. Geometry is the math study of shapes, sizes, and space. Everything we see is made of shapes: wheels are circles, window frames are rectangles, and pizza slices are triangles! We describe flat shapes (2D shapes) by counting their straight sides and their pointy corners (also called vertices).`;
      challenge = `Look around the room: can you spot three different objects that are shaped like circles, squares, or rectangles? Point to each one and say its name out loud!`;
      tip = `Circles are special because they are completely round and curved, meaning they have zero straight sides and zero pointy corners! Triangles always have exactly 3 sides and 3 corners!`;
    }
  }

  // Construct dynamic step-by-step example using question 1
  const questions = getQuestionsForLesson(subject, lessonId);
  let example = "";
  if (questions && questions[0]) {
    const q = questions[0];
    example = `
      Let's practice solving a real question you will see in this lesson:
      <div style="background: rgba(0,0,0,0.25); border-radius: 8px; padding: 16px; margin: 16px 0; border-left: 5px solid var(--color-orange-accent); border: 2px solid rgba(255,255,255,0.1); border-left-width: 5px;">
        <div style="font-weight: 850; font-size: 15px; margin-bottom: 8px; color: var(--color-orange-accent); display: flex; align-items: center; gap: 6px;">❓ Question:</div>
        <p style="margin: 0; font-size: 15px; color: white; font-weight: 700; line-height: 1.5;">${q.questionText}</p>
        ${q.visualContent ? `<div style="margin-top: 14px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px; display: flex; justify-content: center; align-items: center;">${q.visualContent}</div>` : ''}
      </div>
      
      <div style="background: rgba(16, 185, 129, 0.15); border: 3px solid var(--success); border-radius: 8px; padding: 14px; margin-bottom: 16px; display: flex; align-items: center; gap: 12px; box-shadow: 0 4px 10px rgba(16, 185, 129, 0.15);">
        <span style="font-size: 24px;">⭐</span>
        <div>
          <div style="font-weight: 850; font-size: 14px; color: var(--success); text-transform: uppercase; letter-spacing: 0.5px;">Correct Answer:</div>
          <div style="font-size: 16px; font-weight: 800; color: white;">${q.correctAnswer}</div>
        </div>
      </div>
      
      <div style="font-size: 15px; line-height: 1.6; color: #e2e8f0; font-weight: 600; background: rgba(255,255,255,0.03); border-radius: 8px; padding: 14px; border: 1px dashed rgba(255,255,255,0.15);">
        <span style="color: var(--color-blue-light); font-weight: 800;">💡 Step-by-Step Explanation:</span> ${q.hint}
      </div>
    `;
  } else {
    example = `Let's practice step-by-step! When you see a question, read it carefully, look at the options, and use your study tips to pick the best choice. Practice makes perfect!`;
  }

  return { concept, example, challenge, tip };
}

function showQuestionExplanation(question) {
  const cleanAns = String(question.correctAnswer).replace(/<\/?[^>]+(>|$)/g, "");
  const hintText = question.hint || "Look at the options and find the matching answer.";
  
  const modal = document.createElement('div');
  modal.style.cssText = 'position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(15,23,42,0.85); display: flex; align-items: center; justify-content: center; z-index: 10000; padding: 20px; backdrop-filter: blur(8px);';
  modal.innerHTML = `
    <div style="background: #1e293b; border: 3px solid #3b82f6; border-radius: 24px; padding: 30px; max-width: 480px; width: 100%; text-align: center; color: white; box-shadow: 0 10px 25px rgba(0,0,0,0.5); animation: pop-up 0.3s ease-out;">
      <div style="font-size: 54px; margin-bottom: 12px; animation: bounce 2s infinite;">💡</div>
      <h3 style="margin: 0 0 12px 0; font-size: 20px; font-weight: 850;">Let's Learn!</h3>
      <div style="font-size: 14px; font-weight: 700; color: #cbd5e1; margin: 0 0 20px 0; line-height: 1.5; text-align: left; background: rgba(255,255,255,0.05); border-radius: 12px; padding: 16px; border: 1.5px solid rgba(255,255,255,0.08);">
        <b style="color: #60a5fa;">Question:</b> ${question.questionText}<br><br>
        <b style="color: #10b981;">Correct Answer:</b> <b>${cleanAns}</b><br><br>
        <b style="color: #fb923c;">How to Solve:</b> ${hintText}
      </div>
      <button class="primary-btn" id="closeExplanationBtn" style="padding: 12px 30px; font-size: 14px; background: #3b82f6; border-color: #93c5fd; width: 100%; margin: 0; box-shadow: 0 4px 10px rgba(59,130,246,0.3);">Got it! ➔</button>
    </div>
  `;
  document.body.appendChild(modal);
  
  modal.querySelector('#closeExplanationBtn').addEventListener('click', () => {
    sounds.playPop();
    modal.remove();
  });
}

// ======================================================
// VIDEO PLAYBACK CONTROL HELPERS
// ======================================================
function pauseVideo() {
  appState.videoPlaying = false;
  // Clear any pending slide timeouts
  if (appState.videoSlideTimeouts) {
    appState.videoSlideTimeouts.forEach(clearTimeout);
    appState.videoSlideTimeouts = [];
  }
  if (appState.videoTimeout) {
    clearTimeout(appState.videoTimeout);
    appState.videoTimeout = null;
  }
  if (appState.videoInterval) {
    clearInterval(appState.videoInterval);
    appState.videoInterval = null;
  }
  window.speechSynthesis.cancel();
  // Update play button UI if present
  const playBtn = document.getElementById('vidPlayBtn');
  if (playBtn) playBtn.textContent = '▶';
}

function playVideo() {
  appState.videoPlaying = true;
  // Update play button UI if present
  const playBtn = document.getElementById('vidPlayBtn');
  if (playBtn) playBtn.textContent = '⏸';
  // Render / resume from current slide
  renderVideoSlide();
}

function setupStep1Video() {
  appState.lessonSlideIndex = 0;
  renderLessonSlide();
}

function renderLessonSlide() {
  try {
    const container = document.getElementById('step-view-1');
    if (!container) return;

    const slides = getLessonVideoData(appState.currentSubject, appState.activeQuestLessonId);
    const textData = getTextLessonExplanation(appState.currentSubject, appState.activeQuestLessonId);
    
    let lesson;
    if (appState.currentSubject === 'ela') lesson = GRADE_1_ELA_CURRICULUM.find(l => l.id === appState.activeQuestLessonId);
    else if (appState.currentSubject === 'history') lesson = GRADE_1_HISTORY_CURRICULUM.find(l => l.id === appState.activeQuestLessonId);
    else if (appState.currentSubject === 'geography') lesson = GRADE_1_GEOGRAPHY_CURRICULUM.find(l => l.id === appState.activeQuestLessonId);
    else if (appState.currentSubject === 'science') lesson = GRADE_1_SCIENCE_CURRICULUM.find(l => l.id === appState.activeQuestLessonId);
    else if (appState.currentSubject === 'art') lesson = GRADE_1_ART_CURRICULUM.find(l => l.id === appState.activeQuestLessonId);
    else lesson = GRADE_1_MATH_CURRICULUM.find(l => l.id === appState.activeQuestLessonId);
    const title = lesson ? lesson.title : "Lesson Explanation";
    const desc = lesson ? lesson.desc : "Let's learn!";
    const standard = lesson ? lesson.standard : "";
    
    const totalSlides = 7;
    const currentIndex = appState.lessonSlideIndex || 0;
    
    // Subject-themed emoji sets
    const subjectThemes = {
      math: { icon: "🔢", bg: "linear-gradient(135deg, #312e81, #1e1b4b)", accent: "#818cf8", emojis: ["🧮", "➕", "🔢", "📐", "📏", "🎯", "💯", "🏆"] },
      ela: { icon: "📚", bg: "linear-gradient(135deg, #7c2d12, #451a03)", accent: "#fb923c", emojis: ["📖", "✏️", "🗣️", "📝", "🔤", "📕", "🎭", "🦋"] },
      history: { icon: "🏛️", bg: "linear-gradient(135deg, #713f12, #422006)", accent: "#fbbf24", emojis: ["🏛️", "🗽", "🦅", "📜", "⏳", "🎖️", "🌎", "🏰"] },
      geography: { icon: "🌍", bg: "linear-gradient(135deg, #064e3b, #022c22)", accent: "#34d399", emojis: ["🌍", "🗺️", "🧭", "🏔️", "🌊", "🏝️", "🌋", "🦁"] },
      science: { icon: "🔬", bg: "linear-gradient(135deg, #1e3a5f, #0c1929)", accent: "#38bdf8", emojis: ["🔬", "🧪", "🌡️", "🧬", "⚡", "🌱", "🦠", "🔭"] },
      art: { icon: "🎨", bg: "linear-gradient(135deg, #701a75, #3b0764)", accent: "#e879f9", emojis: ["🎨", "🖌️", "🖼️", "🎭", "✨", "🌈", "🎶", "💎"] }
    };
    const theme = subjectThemes[appState.currentSubject] || subjectThemes.math;
    const randomEmoji = theme.emojis[Math.floor(Math.random() * theme.emojis.length)];
    
    // Slide definitions
    const slideConfigs = [
      { title: "Welcome!", color: "#8b5cf6", emoji: "👋", gradient: "linear-gradient(135deg, #7c3aed, #4c1d95)" },
      { title: "Core Concept", color: "#3b82f6", emoji: "💡", gradient: "linear-gradient(135deg, #2563eb, #1e3a8a)" },
      { title: "Visual Breakdown", color: "#06b6d4", emoji: "🎬", gradient: "linear-gradient(135deg, #0891b2, #164e63)" },
      { title: "Step-by-Step Example", color: "#f97316", emoji: "✨", gradient: "linear-gradient(135deg, #ea580c, #7c2d12)" },
      { title: "Action Challenge", color: "#ec4899", emoji: "🎮", gradient: "linear-gradient(135deg, #db2777, #831843)" },
      { title: "Study Tip", color: "#10b981", emoji: "🎒", gradient: "linear-gradient(135deg, #059669, #064e3b)" },
      { title: "Wrap Up & Review", color: "#f59e0b", emoji: "🏆", gradient: "linear-gradient(135deg, #d97706, #78350f)" }
    ];
    const slide = slideConfigs[currentIndex] || slideConfigs[0];
    
    // Build slide content for each index
    let slideContentHtml = "";
    
    // Helper: strip HTML tags for plain text
    const stripHtml = s => s.replace(/<\/?[^>]+(>|$)/g, '');
    let slideSpeakText = "";

    if (currentIndex === 0) {
      // ── SLIDE 0: WELCOME ──
      slideSpeakText = `Welcome to the lesson! Today we are learning ${title}. ${desc}. This lesson has ${totalSlides} slides. Click Next to begin!`;
      slideContentHtml = `
        <div style="text-align: center; padding: 24px 16px;">
          <div style="font-size: 88px; margin-bottom: 14px; animation: float-animation 2.5s infinite ease-in-out; filter: drop-shadow(0 4px 8px rgba(0,0,0,0.3));">${theme.icon}</div>
          <h3 style="font-size: 26px; font-weight: 900; margin-bottom: 8px; color: #fef08a; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">${title}</h3>
          <div style="display: inline-block; background: rgba(255,255,255,0.1); padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; color: #94a3b8; margin-bottom: 18px; border: 1px solid rgba(255,255,255,0.1);">
            ${standard} • ${appState.currentSubject.charAt(0).toUpperCase() + appState.currentSubject.slice(1)}
          </div>
          <p style="font-size: 16px; font-weight: 700; color: #cbd5e1; max-width: 500px; margin: 0 auto 20px; line-height: 1.65;">${desc}</p>
          <div style="background: rgba(255,255,255,0.06); border-radius: 16px; padding: 18px 20px; max-width: 420px; margin: 0 auto 16px; border: 1.5px dashed rgba(255,255,255,0.15); text-align: left;">
            <div style="font-size: 13px; font-weight: 800; color: ${slide.color}; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">📋 What You'll Learn</div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              ${['Learn the core idea behind this topic', 'See a visual breakdown and worked example', 'Try a real challenge and get study tips'].map((item, i) =>
                `<div style="display: flex; align-items: center; gap: 10px; font-size: 14px; color: #e2e8f0; font-weight: 600;">
                  <span style="background: ${slide.color}; color: white; width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 900; flex-shrink: 0;">${i+1}</span>
                  ${item}
                </div>`
              ).join('')}
            </div>
          </div>
          <p style="font-size: 12px; color: #475569; font-weight: 700; margin: 0;">⏱️ About 3–5 minutes • ${totalSlides} slides</p>
        </div>
        <div style="text-align: center; padding: 8px 0 4px;">
          <button id="speakSlideBtn" style="background: rgba(139,92,246,0.15); border: 1.5px solid rgba(139,92,246,0.4); color: #c4b5fd; padding: 9px 22px; border-radius: 24px; cursor: pointer; font-size: 13px; font-weight: 800; font-family: inherit; display: inline-flex; align-items: center; gap: 7px;">
            🔊 Read This Slide Aloud
          </button>
        </div>
      `;
    } else if (currentIndex === 1) {
      // ── SLIDE 1: CORE CONCEPT ──
      const conceptPlain = stripHtml(textData.concept);
      slideSpeakText = conceptPlain;
      const conceptSentences = conceptPlain.match(/[^.!?]+[.!?]+/g) || [conceptPlain];
      const firstSentence = conceptSentences[0] ? conceptSentences[0].trim() : '';
      const restSentences = conceptSentences.slice(1);
      const restHtml = restSentences.map(s => {
        const t = s.trim();
        return t ? `<p style="font-size: 14px; font-weight: 700; color: #e2e8f0; line-height: 1.75; margin: 0 0 10px 0;">${t}</p>` : '';
      }).join('');
      const keyTermSets = {
        math: ['Count', 'Add', 'Subtract', 'Solve'],
        ela: ['Sound', 'Word', 'Sentence', 'Read'],
        history: ['Past', 'Community', 'Symbol', 'Hero'],
        geography: ['Map', 'Direction', 'Landform', 'Climate'],
        science: ['Observe', 'Energy', 'Living', 'Matter'],
        art: ['Shape', 'Color', 'Texture', 'Create']
      };
      const keyTerms = keyTermSets[appState.currentSubject] || keyTermSets.math;
      const termEmojis = theme.emojis.slice(0, 4);
      slideContentHtml = `
        <div style="padding: 4px 0;">
          <div style="background: rgba(59,130,246,0.07); border-radius: 18px; padding: 20px 22px; border-left: 5px solid #60a5fa; margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 850; color: #60a5fa; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 13px;">📘 Full Explanation</div>
            <p style="font-size: 16px; font-weight: 800; color: #fef08a; line-height: 1.7; margin: 0 0 12px 0;">${firstSentence}</p>
            ${restHtml}
          </div>
          <div style="background: rgba(250,204,21,0.07); border-radius: 14px; padding: 14px 18px; border: 1.5px solid rgba(250,204,21,0.18); margin-bottom: 14px;">
            <div style="font-size: 11px; font-weight: 850; color: #fbbf24; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 10px;">🔑 Key Words</div>
            <div style="display: flex; flex-wrap: wrap; gap: 7px;">
              ${keyTerms.map((t, i) => `<span style="background: rgba(250,204,21,0.12); border: 1px solid rgba(250,204,21,0.25); color: #fef08a; padding: 4px 11px; border-radius: 20px; font-size: 12px; font-weight: 800;">${termEmojis[i] || ''} ${t}</span>`).join('')}
            </div>
          </div>
          <div style="background: rgba(16,185,129,0.07); border-radius: 12px; padding: 12px 15px; border: 1.5px solid rgba(16,185,129,0.18); display: flex; align-items: flex-start; gap: 9px; margin-bottom: 14px;">
            <span style="font-size: 18px; flex-shrink: 0; margin-top: 1px;">💡</span>
            <div style="font-size: 13px; font-weight: 700; color: #a7f3d0; line-height: 1.55;">
              Read every sentence carefully. If something is unclear, click <b style="color: #34d399;">🔊 Read Aloud</b> below to hear it spoken out!
            </div>
          </div>
          <div style="text-align: center;">
            <button id="speakSlideBtn" style="background: rgba(59,130,246,0.15); border: 1.5px solid rgba(59,130,246,0.4); color: #93c5fd; padding: 9px 22px; border-radius: 24px; cursor: pointer; font-size: 13px; font-weight: 800; font-family: inherit; display: inline-flex; align-items: center; gap: 7px;">
              🔊 Read This Slide Aloud
            </button>
          </div>
        </div>
      `;
    } else if (currentIndex === 2) {
      // ── SLIDE 2: VISUAL BREAKDOWN ──
      const visualEmojis = slides.slice(0, 6).map(s => s.emoji || randomEmoji);
      const emojiDisplay = visualEmojis.length > 0
        ? visualEmojis.map((e, i) => `<span style="font-size: 40px; display: inline-block; animation: float-animation ${2 + (i * 0.3)}s infinite ease-in-out; animation-delay: ${i * 0.15}s;">${e}</span>`).join(' ')
        : `<span style="font-size: 56px;">${randomEmoji}</span>`;
      const conceptPlain2 = stripHtml(textData.concept);
      const firstTwo = (conceptPlain2.match(/[^.!?]+[.!?]+/g) || [conceptPlain2]).slice(0, 2).join(' ').trim();
      slideSpeakText = `Let's picture what we are learning. ${firstTwo} Look at the images and try to connect each one to the concept.`;
      slideContentHtml = `
        <div style="padding: 4px 0;">
          <div style="background: rgba(6,182,212,0.06); border-radius: 20px; padding: 20px; text-align: center; border: 2px solid rgba(6,182,212,0.15); margin-bottom: 16px; display: flex; align-items: center; justify-content: center; flex-wrap: wrap; gap: 8px; min-height: 90px;">
            ${emojiDisplay}
          </div>
          <div style="background: rgba(6,182,212,0.07); border-radius: 16px; padding: 18px 20px; border-left: 5px solid #06b6d4; margin-bottom: 14px;">
            <div style="font-size: 11px; font-weight: 850; color: #22d3ee; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 10px;">🎬 In Plain Words</div>
            <p style="margin: 0; font-size: 15px; color: #e2e8f0; font-weight: 700; line-height: 1.75;">
              ${firstTwo}<br><br>Each picture above represents a key idea — try saying what each one reminds you of before moving on!
            </p>
          </div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 14px;">
            <div style="background: rgba(139,92,246,0.08); border-radius: 12px; padding: 13px; border: 1px solid rgba(139,92,246,0.2);">
              <div style="font-size: 22px; margin-bottom: 5px;">👀</div>
              <div style="font-size: 12px; font-weight: 800; color: #a78bfa; margin-bottom: 3px;">Look Closely</div>
              <div style="font-size: 11px; color: #c4b5fd; font-weight: 600; line-height: 1.4;">What patterns do you notice between the pictures?</div>
            </div>
            <div style="background: rgba(236,72,153,0.08); border-radius: 12px; padding: 13px; border: 1px solid rgba(236,72,153,0.2);">
              <div style="font-size: 22px; margin-bottom: 5px;">🗣️</div>
              <div style="font-size: 12px; font-weight: 800; color: #f472b6; margin-bottom: 3px;">Say It Aloud</div>
              <div style="font-size: 11px; color: #fbcfe8; font-weight: 600; line-height: 1.4;">Explain this lesson using your own words!</div>
            </div>
          </div>
          <div style="text-align: center;">
            <button id="speakSlideBtn" style="background: rgba(6,182,212,0.15); border: 1.5px solid rgba(6,182,212,0.4); color: #67e8f9; padding: 9px 22px; border-radius: 24px; cursor: pointer; font-size: 13px; font-weight: 800; font-family: inherit; display: inline-flex; align-items: center; gap: 7px;">
              🔊 Read This Slide Aloud
            </button>
          </div>
        </div>
      `;
    } else if (currentIndex === 3) {
      // ── SLIDE 3: STEP-BY-STEP EXAMPLE ──
      slideSpeakText = `Step by step example. ${stripHtml(textData.example)}. Follow these steps every time you see a similar problem.`;
      slideContentHtml = `
        <div style="padding: 4px 0;">
          <div style="background: rgba(249,115,22,0.07); border-radius: 18px; padding: 20px 22px; border-left: 5px solid #fb923c; margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 850; color: #fb923c; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 13px;">✨ Worked Example — Step by Step</div>
            <div style="font-size: 15px; color: #e2e8f0; font-weight: 700; line-height: 1.8;">
              ${textData.example}
            </div>
          </div>
          <div style="display: flex; align-items: stretch; gap: 14px; margin-bottom: 14px;">
            <div style="font-size: 52px; animation: bounce 2s infinite; flex-shrink: 0; display: flex; align-items: center;">
              ${slides[2] && slides[2].emoji ? slides[2].emoji : "🌟"}
            </div>
            <div style="flex: 1; background: rgba(16,185,129,0.08); border-radius: 14px; padding: 14px 15px; border: 1.5px solid rgba(16,185,129,0.2);">
              <div style="font-size: 11px; font-weight: 850; color: #34d399; text-transform: uppercase; margin-bottom: 7px;">✅ Key Takeaway</div>
              <div style="font-size: 13px; font-weight: 700; color: #a7f3d0; line-height: 1.55;">
                Read the example above slowly — each step matters! Use the same approach every time you face a similar question.
              </div>
            </div>
          </div>
          <div style="background: rgba(255,255,255,0.04); border-radius: 12px; padding: 12px 15px; border: 1px dashed rgba(255,255,255,0.12); margin-bottom: 14px; display: flex; align-items: flex-start; gap: 9px;">
            <span style="font-size: 17px; flex-shrink: 0;">🧩</span>
            <div style="font-size: 13px; font-weight: 700; color: #cbd5e1; line-height: 1.55;">
              Try solving the question in the example yourself — then compare your answer to what's shown above!
            </div>
          </div>
          <div style="text-align: center;">
            <button id="speakSlideBtn" style="background: rgba(249,115,22,0.15); border: 1.5px solid rgba(249,115,22,0.4); color: #fdba74; padding: 9px 22px; border-radius: 24px; cursor: pointer; font-size: 13px; font-weight: 800; font-family: inherit; display: inline-flex; align-items: center; gap: 7px;">
              🔊 Read This Slide Aloud
            </button>
          </div>
        </div>
      `;
    } else if (currentIndex === 4) {
      // ── SLIDE 4: ACTION CHALLENGE ──
      slideSpeakText = `Action challenge! ${stripHtml(textData.challenge)}`;
      slideContentHtml = `
        <div style="padding: 4px 0;">
          <div style="background: linear-gradient(135deg, rgba(236,72,153,0.12), rgba(139,92,246,0.08)); border-radius: 20px; padding: 18px 20px; text-align: center; border: 2px solid rgba(236,72,153,0.2); margin-bottom: 16px;">
            <div style="font-size: 48px; margin-bottom: 8px; animation: bounce 1.5s infinite;">⚡</div>
            <div style="font-size: 18px; font-weight: 900; color: #f9a8d4; margin-bottom: 5px;">Your Challenge!</div>
            <div style="font-size: 12px; color: #e9d5ff; font-weight: 600;">Complete this real-world challenge to level up your skills</div>
          </div>
          <div style="background: rgba(236,72,153,0.07); border-radius: 16px; padding: 18px 20px; border-left: 5px solid #f472b6; margin-bottom: 14px;">
            <div style="font-size: 11px; font-weight: 850; color: #f472b6; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 11px;">🎯 Try This Right Now</div>
            <p style="margin: 0; font-size: 15px; color: #e2e8f0; font-weight: 700; line-height: 1.8;">
              ${textData.challenge}
            </p>
          </div>
          <div style="display: flex; gap: 8px; margin-bottom: 14px;">
            <div style="flex: 1; background: rgba(236,72,153,0.07); border-radius: 11px; padding: 11px; text-align: center; border: 1px solid rgba(236,72,153,0.15);">
              <div style="font-size: 22px; margin-bottom: 3px;">🎯</div>
              <div style="font-size: 11px; font-weight: 800; color: #f472b6;">Be Precise</div>
              <div style="font-size: 10px; color: #fbcfe8; font-weight: 600; margin-top: 2px;">Take your time!</div>
            </div>
            <div style="flex: 1; background: rgba(139,92,246,0.07); border-radius: 11px; padding: 11px; text-align: center; border: 1px solid rgba(139,92,246,0.15);">
              <div style="font-size: 22px; margin-bottom: 3px;">🔁</div>
              <div style="font-size: 11px; font-weight: 800; color: #a78bfa;">Try Again</div>
              <div style="font-size: 10px; color: #e9d5ff; font-weight: 600; margin-top: 2px;">If it's hard, retry!</div>
            </div>
            <div style="flex: 1; background: rgba(16,185,129,0.07); border-radius: 11px; padding: 11px; text-align: center; border: 1px solid rgba(16,185,129,0.15);">
              <div style="font-size: 22px; margin-bottom: 3px;">💬</div>
              <div style="font-size: 11px; font-weight: 800; color: #34d399;">Share It</div>
              <div style="font-size: 10px; color: #a7f3d0; font-weight: 600; margin-top: 2px;">Tell someone!</div>
            </div>
          </div>
          <div style="text-align: center;">
            <button id="speakSlideBtn" style="background: rgba(236,72,153,0.15); border: 1.5px solid rgba(236,72,153,0.4); color: #f9a8d4; padding: 9px 22px; border-radius: 24px; cursor: pointer; font-size: 13px; font-weight: 800; font-family: inherit; display: inline-flex; align-items: center; gap: 7px;">
              🔊 Read This Slide Aloud
            </button>
          </div>
        </div>
      `;
    } else if (currentIndex === 5) {
      // ── SLIDE 5: STUDY TIP ──
      const bonusTips = {
        math: ["Draw pictures for every word problem to visualize what's happening", "Say the math fact out loud 3 times to memorize it faster", "Check your answer by working the problem backwards"],
        ela: ["Read one extra page each night before bed to build fluency", "Clap the syllables of long words to break them apart", "Look for sight words on cereal boxes and signs around you"],
        history: ["Ask a grandparent about life when they were your age", "Look at old photos to spot how things have changed", "Draw a timeline of events to see the order they happened"],
        geography: ["Find your home on a map or globe and trace to another country", "Look for the compass rose on every map you see", "Count how many oceans and continents you can name from memory"],
        science: ["Keep a science journal and write down things you observe daily", "Ask why about natural things you notice every day", "Try a simple safe experiment at home with a parent's help"],
        art: ["Doodle in a sketchbook for 5 minutes every day", "Look closely at one object and draw only what you actually see", "Mix two colors of paint together and discover what you create"]
      };
      const bonusTipsList = bonusTips[appState.currentSubject] || bonusTips.math;
      slideSpeakText = `Study tip: ${stripHtml(textData.tip)}. Here are three more ways to practice: ${bonusTipsList.join('. ')}.`;
      slideContentHtml = `
        <div style="padding: 4px 0;">
          <div style="background: rgba(16,185,129,0.07); border-radius: 18px; padding: 20px 22px; border-left: 5px solid #34d399; margin-bottom: 16px;">
            <div style="font-size: 11px; font-weight: 850; color: #34d399; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px;">🎒 Super Study Tip</div>
            <p style="margin: 0; font-size: 15px; color: #e2e8f0; font-weight: 700; line-height: 1.8;">
              ${textData.tip}
            </p>
          </div>
          <div style="background: rgba(255,255,255,0.03); border-radius: 16px; padding: 16px 18px; border: 1.5px dashed rgba(255,255,255,0.1); margin-bottom: 14px;">
            <div style="font-size: 12px; font-weight: 800; color: #94a3b8; margin-bottom: 11px;">🧩 3 More Ways to Remember This</div>
            <div style="display: flex; flex-direction: column; gap: 9px;">
              ${bonusTipsList.map((t, i) => `
                <div style="display: flex; align-items: flex-start; gap: 9px;">
                  <span style="background: rgba(16,185,129,0.2); color: #34d399; width: 20px; height: 20px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 900; flex-shrink: 0; margin-top: 2px;">${i+1}</span>
                  <span style="font-size: 13px; font-weight: 700; color: #cbd5e1; line-height: 1.5;">${t}</span>
                </div>
              `).join('')}
            </div>
          </div>
          <div style="text-align: center;">
            <button id="speakSlideBtn" style="background: rgba(16,185,129,0.15); border: 1.5px solid rgba(16,185,129,0.4); color: #6ee7b7; padding: 9px 22px; border-radius: 24px; cursor: pointer; font-size: 13px; font-weight: 800; font-family: inherit; display: inline-flex; align-items: center; gap: 7px;">
              🔊 Read This Slide Aloud
            </button>
          </div>
        </div>
      `;
    } else if (currentIndex === 6) {
      // ── SLIDE 6: WRAP UP & REVIEW ──
      slideSpeakText = `Lesson complete! Amazing work! You have finished all the slides for ${title}. You learned the core concept, saw a worked example, completed a challenge, and got study tips. Now click the button below to start practicing and earn stars!`;
      slideContentHtml = `
        <div style="text-align: center; padding: 14px 6px;">
          <div style="font-size: 68px; margin-bottom: 10px; animation: bounce 2s infinite;">🏆</div>
          <h3 style="font-size: 22px; font-weight: 900; color: #fef08a; margin-bottom: 6px;">Lesson Complete!</h3>
          <p style="font-size: 14px; font-weight: 700; color: #cbd5e1; max-width: 400px; margin: 0 auto 18px; line-height: 1.5;">
            You've gone through all the slides for <b style="color: #fbbf24;">"${title}"</b>. Here's what you covered:
          </p>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 9px; max-width: 400px; margin: 0 auto 16px; text-align: left;">
            ${[
              ['💡', '#60a5fa', 'rgba(59,130,246,0.1)', 'rgba(59,130,246,0.2)', 'Core Concept', 'Explained & understood'],
              ['✨', '#fb923c', 'rgba(249,115,22,0.1)', 'rgba(249,115,22,0.2)', 'Worked Example', 'Walked through step-by-step'],
              ['🎮', '#f472b6', 'rgba(236,72,153,0.1)', 'rgba(236,72,153,0.2)', 'Challenge', 'Real-world practice done'],
              ['🎒', '#34d399', 'rgba(16,185,129,0.1)', 'rgba(16,185,129,0.2)', 'Study Tips', 'Strategies locked in']
            ].map(([emoji, color, bg, border, label, sub]) => `
              <div style="background: ${bg}; border-radius: 13px; padding: 13px; border: 1.5px solid ${border};">
                <div style="font-size: 26px; margin-bottom: 4px;">${emoji}</div>
                <div style="font-size: 12px; font-weight: 800; color: ${color};">${label}</div>
                <div style="font-size: 11px; color: ${color}; font-weight: 600; margin-top: 2px; opacity: 0.8;">✅ ${sub}</div>
              </div>
            `).join('')}
          </div>
          <div style="background: rgba(16,185,129,0.1); border-radius: 13px; padding: 13px 16px; border: 1.5px solid rgba(16,185,129,0.25); max-width: 360px; margin: 0 auto;">
            <div style="font-size: 14px; font-weight: 800; color: #34d399; margin-bottom: 4px;">🎯 Ready for Practice?</div>
            <div style="font-size: 13px; font-weight: 700; color: #a7f3d0; line-height: 1.4;">
              Click <b>Let's Practice!</b> below to answer questions and earn stars. You've got this!
            </div>
          </div>
        </div>
      `;
    }

    // Build step indicator dots

    let dotsHtml = '';
    for (let i = 0; i < totalSlides; i++) {
      const dotActive = i === currentIndex;
      const dotCompleted = i < currentIndex;
      const dotColor = dotActive ? slide.color : (dotCompleted ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.15)');
      const dotSize = dotActive ? '10px' : '7px';
      dotsHtml += `<span style="width: ${dotSize}; height: ${dotSize}; border-radius: 50%; background: ${dotColor}; display: inline-block; transition: all 0.3s ease;"></span>`;
    }

    const isMuted = !appState.isSoundOn;
    const muteIcon = isMuted ? '🔇' : '🔊';

    container.innerHTML = `
      <div class="text-lesson-container" style="border-radius: 24px; border: 3px solid rgba(255,255,255,0.1); background: #0f172a; color: white; display: flex; flex-direction: column; width: 100%; max-width: 720px; max-height: calc(100vh - 180px); box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.05); text-align: left; margin: 0 auto; position: relative;">
        
        <!-- Slide Header -->
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 16px 24px 12px; background: ${slide.gradient}; border-radius: 21px 21px 0 0; position: relative; overflow: hidden; flex-shrink: 0;">
          <div style="position: absolute; top: 0; right: 0; width: 120px; height: 120px; background: rgba(255,255,255,0.04); border-radius: 50%; transform: translate(30px, -40px);"></div>
          <div style="display: flex; align-items: center; gap: 12px; position: relative; z-index: 1;">
            <span style="font-size: 30px; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));">${slide.emoji}</span>
            <div>
              <h2 style="font-size: 18px; font-weight: 900; color: white; margin: 0; text-shadow: 0 1px 3px rgba(0,0,0,0.2);">${slide.title}</h2>
              <div style="font-size: 11px; font-weight: 700; color: rgba(255,255,255,0.6); margin-top: 1px;">${title}</div>
            </div>
          </div>
          <div style="display: flex; align-items: center; gap: 8px; position: relative; z-index: 1;">
            <button id="slideMuteBtn" style="background: rgba(255,255,255,0.15); border: 1.5px solid rgba(255,255,255,0.2); color: white; width: 34px; height: 34px; border-radius: 10px; cursor: pointer; font-size: 16px; display: flex; align-items: center; justify-content: center; transition: background 0.2s;" title="${isMuted ? 'Unmute narration' : 'Mute narration'}">${muteIcon}</button>
            <div style="font-size: 12px; font-weight: 850; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.15); padding: 5px 12px; border-radius: 12px; backdrop-filter: blur(4px); white-space: nowrap;">
              ${currentIndex + 1} / ${totalSlides}
            </div>
          </div>
        </div>

        <!-- Slide Progress Bar -->
        <div style="height: 4px; width: 100%; background: rgba(255,255,255,0.06); position: relative; flex-shrink: 0;">
          <div style="height: 100%; width: ${((currentIndex + 1) / totalSlides) * 100}%; background: ${slide.color}; transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 0 12px ${slide.color}40;"></div>
        </div>
        
        <!-- Slide Content Body (SCROLLABLE) -->
        <div style="flex: 1; padding: 24px 28px; overflow-y: auto; -webkit-overflow-scrolling: touch; min-height: 0;">
          ${slideContentHtml}
        </div>
        
        <!-- Slide Footer Actions (ALWAYS VISIBLE) -->
        <div style="display: flex; justify-content: space-between; align-items: center; width: 100%; padding: 14px 24px 16px; border-top: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); border-radius: 0 0 21px 21px; gap: 12px; flex-shrink: 0;">
          <button id="prevSlideBtn" style="padding: 10px 18px; font-size: 14px; font-weight: 800; font-family: inherit; margin: 0; background: #334155; border: 2px solid #475569; color: white; border-radius: 12px; cursor: pointer; display: ${currentIndex === 0 ? 'none' : 'flex'}; align-items: center; gap: 6px; transition: background 0.2s;">
            ⬅️ Back
          </button>
          
          <!-- Dot indicators -->
          <div style="display: flex; align-items: center; gap: 6px; flex: 1; justify-content: center;">
            ${dotsHtml}
          </div>
          
          ${currentIndex < totalSlides - 1 ? `
            <button id="nextSlideBtn" style="padding: 10px 22px; font-size: 15px; font-weight: 800; font-family: inherit; margin: 0; background: ${slide.color}; border: 2px solid ${slide.color}; color: white; border-radius: 12px; cursor: pointer; box-shadow: 0 4px 14px ${slide.color}40; display: flex; align-items: center; gap: 6px; transition: transform 0.15s, box-shadow 0.15s;">
              Next ➔
            </button>
          ` : `
            <button id="textFinishedBtn" style="font-size: 15px; font-weight: 800; font-family: inherit; padding: 12px 26px; margin: 0; background: linear-gradient(135deg, #10b981, #059669); border: 2px solid #34d399; color: white; cursor: pointer; border-radius: 14px; box-shadow: 0 4px 16px rgba(16, 185, 129, 0.35); display: flex; align-items: center; gap: 8px; transition: transform 0.15s;">
              Let's Practice! 🚀
            </button>
          `}
        </div>
      </div>
    `;

    // Scroll container to top on slide change
    container.scrollTop = 0;

    // Narrate slide content aloud
    let speakContent = "";
    if (currentIndex === 0) {
      speakContent = `Welcome to the lesson! Today we are learning: ${title}. ${desc}. Click next to start learning!`;
    } else if (currentIndex === 1) {
      speakContent = `Core Concept: ${textData.concept.replace(/<\/?[^>]+(>|$)/g, "")}`;
    } else if (currentIndex === 2) {
      speakContent = `Let's visualize what we're learning about ${title}. Look at the pictures and think about how they connect to the concept.`;
    } else if (currentIndex === 3) {
      speakContent = `Step-by-step example: ${textData.example.replace(/<\/?[^>]+(>|$)/g, "")}`;
    } else if (currentIndex === 4) {
      speakContent = `Action Challenge: ${textData.challenge.replace(/<\/?[^>]+(>|$)/g, "")}`;
    } else if (currentIndex === 5) {
      speakContent = `Study tip: ${textData.tip.replace(/<\/?[^>]+(>|$)/g, "")}`;
    } else if (currentIndex === 6) {
      speakContent = `Amazing work! You've completed all the slides for ${title}. Click the button below to start practicing!`;
    }
    speakText(speakContent);

    // Bind slide controls
    const prevBtn = container.querySelector('#prevSlideBtn');
    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        sounds.playPop();
        appState.lessonSlideIndex--;
        renderLessonSlide();
      });
      prevBtn.addEventListener('mouseenter', () => { prevBtn.style.background = '#475569'; });
      prevBtn.addEventListener('mouseleave', () => { prevBtn.style.background = '#334155'; });
    }

    const nextBtn = container.querySelector('#nextSlideBtn');
    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        sounds.playPop();
        appState.lessonSlideIndex++;
        renderLessonSlide();
      });
      nextBtn.addEventListener('mouseenter', () => { nextBtn.style.transform = 'translateY(-2px)'; nextBtn.style.boxShadow = `0 6px 20px ${slide.color}60`; });
      nextBtn.addEventListener('mouseleave', () => { nextBtn.style.transform = ''; nextBtn.style.boxShadow = `0 4px 14px ${slide.color}40`; });
    }

    const finishBtn = container.querySelector('#textFinishedBtn');
    if (finishBtn) {
      finishBtn.addEventListener('click', () => {
        sounds.playCorrect();
        completeStep1();
      });
      finishBtn.addEventListener('mouseenter', () => { finishBtn.style.transform = 'translateY(-2px)'; });
      finishBtn.addEventListener('mouseleave', () => { finishBtn.style.transform = ''; });
    }

    // Read Aloud button: speaks the current slide's content on demand
    const speakBtn = container.querySelector('#speakSlideBtn');
    if (speakBtn) {
      speakBtn.addEventListener('click', () => {
        if (!appState.isSoundOn) {
          // Temporarily allow speech for this button even if muted
          window.speechSynthesis.cancel();
        }
        const textToSpeak = slideSpeakText || speakContent;
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(textToSpeak);
        utt.rate = 0.88;
        utt.pitch = 1.05;
        const voices = window.speechSynthesis.getVoices();
        const preferred = voices.find(v => v.name.includes('Samantha') || v.name.includes('Karen') || v.name.includes('Google') || v.lang === 'en-US');
        if (preferred) utt.voice = preferred;
        speakBtn.textContent = '⏸️ Speaking...';
        speakBtn.style.opacity = '0.7';
        utt.onend = () => {
          speakBtn.textContent = '🔊 Read This Slide Aloud';
          speakBtn.style.opacity = '1';
        };
        utt.onerror = () => {
          speakBtn.textContent = '🔊 Read This Slide Aloud';
          speakBtn.style.opacity = '1';
        };
        window.speechSynthesis.speak(utt);
      });
    }

    // Mute button: toggles narration on/off and re-renders icon
    const muteBtn = container.querySelector('#slideMuteBtn');
    if (muteBtn) {
      muteBtn.addEventListener('click', () => {
        appState.isSoundOn = !appState.isSoundOn;
        sounds.enabled = appState.isSoundOn;
        if (!appState.isSoundOn) {
          window.speechSynthesis.cancel();
        }
        appState.save && appState.save();
        // Update icon without re-rendering whole slide
        muteBtn.textContent = appState.isSoundOn ? '🔊' : '🔇';
        muteBtn.title = appState.isSoundOn ? 'Mute narration' : 'Unmute narration';
        muteBtn.style.background = appState.isSoundOn ? 'rgba(255,255,255,0.15)' : 'rgba(239,68,68,0.35)';
        muteBtn.style.borderColor = appState.isSoundOn ? 'rgba(255,255,255,0.2)' : 'rgba(239,68,68,0.5)';
      });
      muteBtn.addEventListener('mouseenter', () => { muteBtn.style.background = appState.isSoundOn ? 'rgba(255,255,255,0.25)' : 'rgba(239,68,68,0.5)'; });
      muteBtn.addEventListener('mouseleave', () => { muteBtn.style.background = appState.isSoundOn ? 'rgba(255,255,255,0.15)' : 'rgba(239,68,68,0.35)'; });
    }
  } catch (err) {
    console.error("Error inside renderLessonSlide:", err);
    const container = document.getElementById('step-view-1');
    if (container) {
      container.innerHTML = `
        <div style="padding: 20px; background: #fee2e2; border: 2px solid #ef4444; color: #b91c1c; border-radius: 12px; margin: 20px auto; max-width: 600px;">
          <h3 style="margin-top:0;">⚠️ Lesson Load Error</h3>
          <p>${err.toString()}</p>
          <pre style="font-size: 11px; white-space: pre-wrap; margin-top: 10px;">${err.stack || ''}</pre>
        </div>
      `;
    }
  }
}



function getMathLessonVisualData(lessonId) {
  let valA = 3;
  let valB = 2;
  let operation = "+";
  let emoji = "🍒";
  let info = "";

  if (lessonId <= 20) {
    operation = "counting";
    emoji = ["🍒", "🐸", "⭐", "🦖", "🍎", "🎈", "🍪", "🍕", "🍦", "🍓", "🦊", "🐻", "🦁", "🐼", "🐸", "🐰", "🐯", "🐶", "🐱", "🐒"][lessonId % 20] || "🍒";
    valA = lessonId <= 10 ? lessonId : lessonId - 10;
    if (valA === 0) valA = 10;
  } else if (lessonId <= 40) {
    operation = "+";
    emoji = "🍎";
    if (lessonId === 21) { valA = 3; valB = 0; }
    else if (lessonId === 22) { valA = 4; valB = 1; }
    else if (lessonId === 23) { valA = 3; valB = 2; }
    else if (lessonId === 24) { valA = 2; valB = 3; }
    else if (lessonId === 25) { valA = 4; valB = 1; }
    else if (lessonId === 26) { valA = 3; valB = 2; }
    else if (lessonId === 27) { valA = 2; valB = 4; }
    else if (lessonId === 28) { valA = 3; valB = 5; }
    else if (lessonId === 29) { valA = 4; valB = 4; }
    else if (lessonId === 30) { valA = 4; valB = 5; }
    else if (lessonId === 31) { valA = 2; valB = 3; }
    else if (lessonId === 32) { valA = 7; valB = 3; }
    else if (lessonId === 33) { valA = 3; valB = 6; }
    else if (lessonId === 34) { valA = 2; valB = 7; }
    else if (lessonId === 35) { valA = 1; valB = 8; }
    else if (lessonId === 36) { valA = 1; valB = 9; }
    else if (lessonId === 37) { valA = 6; valB = 4; }
    else if (lessonId === 38) { valA = 5; valB = 5; }
    else if (lessonId === 39) { valA = 4; valB = 3; }
    else { valA = 5; valB = 2; }
  } else if (lessonId <= 60) {
    operation = "-";
    emoji = "🎈";
    if (lessonId === 41) { valA = 4; valB = 0; }
    else if (lessonId === 42) { valA = 5; valB = 1; }
    else if (lessonId === 43) { valA = 6; valB = 2; }
    else if (lessonId === 44) { valA = 5; valB = 3; }
    else if (lessonId === 45) { valA = 5; valB = 2; }
    else if (lessonId === 46) { valA = 4; valB = 1; }
    else if (lessonId === 47) { valA = 7; valB = 4; }
    else if (lessonId === 48) { valA = 8; valB = 5; }
    else if (lessonId === 49) { valA = 4; valB = 4; }
    else if (lessonId === 50) { valA = 6; valB = 2; }
    else if (lessonId === 51) { valA = 9; valB = 3; }
    else if (lessonId === 52) { valA = 8; valB = 6; }
    else if (lessonId === 53) { valA = 9; valB = 7; }
    else if (lessonId === 54) { valA = 10; valB = 8; }
    else if (lessonId === 55) { valA = 10; valB = 9; }
    else if (lessonId === 56) { valA = 10; valB = 4; }
    else if (lessonId === 57) { valA = 8; valB = 3; }
    else if (lessonId === 58) { valA = 6; valB = 2; }
    else if (lessonId === 59) { valA = 7; valB = 3; }
    else { valA = 4; valB = 2; }
  } else if (lessonId <= 80) {
    operation = "placevalue";
    valA = 10 + (lessonId % 10) * 3;
    if (lessonId === 62) valA = 30;
    else if (lessonId === 63) valA = 40;
  } else if (lessonId <= 95) {
    if (lessonId <= 84) {
      operation = "measurement";
      valA = 3 + (lessonId % 4);
    } else if (lessonId <= 89) {
      operation = "time";
      valA = 1 + (lessonId % 12);
      valB = (lessonId === 86 || lessonId === 88) ? 30 : 0;
    } else {
      operation = "data";
      valA = 4;
    }
  } else {
    operation = "geometry";
    if (lessonId === 96) info = "circle_square";
    else if (lessonId === 97) info = "triangle_rectangle";
    else if (lessonId === 100) info = "hexagon";
    else if (lessonId === 101) info = "cylinder_sphere";
    else if (lessonId === 102) info = "cube_cone";
    else if (lessonId >= 106) info = "fractions";
    else info = "sides_vertices";
  }

  return { valA, valB, operation, emoji, info };
}

function getElaLessonVisualData(lessonId) {
  let type = "phonics";
  let words = ["CAT 🐱", "BAT 🦇", "RAT 🐀"];
  let info = "";

  if (lessonId <= 20) {
    type = "phonics";
    if (lessonId === 1) words = ["CAT 🐱", "BAT 🦇", "HAT 🎩"];
    else if (lessonId === 2) words = ["HEN 🐔", "PEN 🖊️", "BED 🛏️"];
    else if (lessonId === 3) words = ["PIG 🐷", "WIG 🦱", "ZIP 🤐"];
    else if (lessonId === 4) words = ["DOG 🐶", "LOG 🪵", "FOX 🦊"];
    else if (lessonId === 5) words = ["BUG 🪱", "SUN ☀️", "CUP 🥛"];
    else if (lessonId === 7) words = ["SHIP 🚢", "FISH 🐟", "DISH 🍽️"];
    else if (lessonId === 8) words = ["CHICK 🐥", "CHIP 🍟", "CHIN 🦲"];
    else if (lessonId === 9) words = ["THIN 🪡", "PATH 🛣️", "BATH 🛁"];
    else if (lessonId === 10) words = ["WHALE 🐋", "WHIP 🌀", "WHEEL 🎡"];
    else if (lessonId === 12) words = ["CLOCK ⏰", "CLIP 📎", "CLAY 🧱"];
    else if (lessonId === 13) words = ["FLAG 🚩", "FLY 🪰", "FLAT 📏"];
    else if (lessonId === 14) words = ["STAR ⭐", "STOP 🛑", "STEM 🌱"];
    else words = ["BAG 🎒", "NET 🕸️", "PIN 📌"];
  } else if (lessonId <= 40) {
    type = "sightwords";
    if (lessonId === 21) words = ["the", "of", "and"];
    else if (lessonId === 22) words = ["a", "to", "in"];
    else if (lessonId === 23) words = ["is", "you", "that"];
    else if (lessonId === 24) words = ["it", "he", "was"];
    else words = ["for", "on", "are"];
  } else if (lessonId <= 60) {
    type = "grammar";
    if (lessonId <= 45) info = "Nouns (person, place, thing)";
    else if (lessonId <= 50) info = "Verbs (action words)";
    else info = "Sentences (capital letters)";
  } else if (lessonId <= 80) {
    type = "writing";
  } else if (lessonId <= 95) {
    type = "comprehension";
  } else {
    type = "speaking";
  }

  return { type, words, info };
}

function getLessonVideoData(subject, lessonId) {
  let lesson;
  if (subject === 'ela') lesson = GRADE_1_ELA_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'history') lesson = GRADE_1_HISTORY_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'geography') lesson = GRADE_1_GEOGRAPHY_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'science') lesson = GRADE_1_SCIENCE_CURRICULUM.find(l => l.id === lessonId);
  else if (subject === 'art') lesson = GRADE_1_ART_CURRICULUM.find(l => l.id === lessonId);
  else lesson = GRADE_1_MATH_CURRICULUM.find(l => l.id === lessonId);
  
  const title = lesson ? lesson.title : "Lesson Explanation";
  const desc = lesson ? lesson.desc : "Let's learn!";
  const unit = lesson ? lesson.unit : 1;

  if (subject === 'math' && lessonId === 1) {
    const slides = [{ title: "Let's Count!", text: "Ready to learn numbers 1 to 10? Click play to start our adventure!", emoji: "🔢", visualType: "intro" }];
    for (let i = 1; i <= 10; i++) {
      slides.push({
        num: i,
        title: `${i}`,
        word: NUMBER_WORDS[i].toUpperCase(),
        emoji: NUMBER_EMOJIS[i],
        narration: NARRATION_SCRIPTS[i],
        visualType: "math_counting_spell",
        visualData: { num: i, word: NUMBER_WORDS[i].toUpperCase(), emoji: NUMBER_EMOJIS[i] }
      });
    }
    return slides;
  }

  // Let's get the checkpoint questions for this lesson to explain them
  let questions = getQuestionsForLesson(subject, lessonId);

  // Fallback if no questions
  if (questions.length === 0) {
    questions = [{
      questionText: `What is the main idea of ${title}?`,
      correctAnswer: desc,
      hint: `Remember: ${desc}`
    }];
  }

  const slides = [];

  // Slide 0: Intro (35+ words)
  let subjectText = "math";
  let subjectEmoji = "🔢";
  if (subject === 'ela') { subjectText = "English reading"; subjectEmoji = "📚"; }
  else if (subject === 'history') { subjectText = "history"; subjectEmoji = "📜"; }
  else if (subject === 'geography') { subjectText = "geography"; subjectEmoji = "🌍"; }
  else if (subject === 'science') { subjectText = "science"; subjectEmoji = "🧪"; }
  else if (subject === 'art') { subjectText = "art"; subjectEmoji = "🎨"; }

  slides.push({
    title: `${subjectText.toUpperCase()}: ${title}!`,
    text: `Welcome back, little explorer! Today in our ${subjectText} adventure, we are learning all about: "${title}". Click play to start watching and let's learn how this works together in a fun way!`,
    emoji: subjectEmoji,
    visualType: "intro"
  });

  // Slide 1: Concept Explanation (45+ words)
  let conceptExplain = "";
  if (subject === 'math') {
    conceptExplain = `Math is all about understanding numbers, shapes, and patterns. Today's goal is: ${desc}. We will learn how to count items, solve math equations, or read clock hands to see what time it is. Paying close attention to values helps us solve real-world puzzles!`;
  } else if (subject === 'ela') {
    conceptExplain = `Reading and writing helps us communicate our ideas and read fun stories. Today's goal is: ${desc}. We will check letters, sight words, capitalization, or sound out vowel blends. Blending sounds step-by-step makes reading super easy for everyone!`;
  } else if (subject === 'history') {
    conceptExplain = `History is the study of things that happened in the past, long ago. Today's goal is: ${desc}. We will learn about historical heroes, family traditions, or special inventions. Knowing history helps us understand our life and communities today!`;
  } else if (subject === 'geography') {
    conceptExplain = `Geography is the study of our planet Earth, its land, its water, and maps. Today's goal is: ${desc}. We will explore cardinal directions, oceans, landforms, or weather. Reading maps helps us find where places are located in the world!`;
  } else if (subject === 'science') {
    conceptExplain = `Science is all about asking questions, making observations, and learning how nature works. Today's goal is: ${desc}. We will explore properties of light, sound wiggles, living plants, or space objects like the Sun, Moon, and stars.`;
  } else if (subject === 'art') {
    conceptExplain = `Art is all about using your imagination to create drawings, paintings, and sculptures. Today's goal is: ${desc}. We will explore lines and shapes, mix primary and secondary colors, look at textures, or learn about famous artists.`;
  }

  slides.push({
    title: "Learning Goal",
    text: conceptExplain,
    emoji: "💡",
    visualType: "concept"
  });

  // Slide 2: Explain Question 1 (60+ words)
  const q1 = questions[0];
  const cleanQText = q1.questionText.replace(/<\/?[^>]+(>|$)/g, ""); // strip any html tags
  const cleanAns = String(q1.correctAnswer).replace(/<\/?[^>]+(>|$)/g, "");
  const hintText = q1.hint || `Remember that ${cleanAns} is the correct answer.`;
  
  let q1Explain = `Let's look at an interesting example! Imagine we want to find: "${cleanQText}". How do we solve it? Well, the answer is: "${cleanAns}"! That is because ${hintText} Wow, isn't that cool? Now we understand how it works!`;

  let detailVisualType = "concept";
  let detailVisualData = null;
  if (subject === 'math') {
    const mData = getMathLessonVisualData(lessonId);
    if (mData.operation === "counting") {
      detailVisualType = "math_counting";
      detailVisualData = { limit: mData.valA, emoji: mData.emoji };
    } else if (mData.operation === "+" || mData.operation === "-") {
      detailVisualType = "math_op";
      detailVisualData = { valA: mData.valA, valB: mData.valB, operation: mData.operation, emoji: mData.emoji, result: (mData.operation === "+" ? mData.valA + mData.valB : mData.valA - mData.valB) };
    } else if (mData.operation === "placevalue") {
      detailVisualType = "math_placevalue";
      detailVisualData = { num: mData.valA, tens: Math.floor(mData.valA / 10), ones: mData.valA % 10 };
    } else if (mData.operation === "time") {
      detailVisualType = "math_time";
      detailVisualData = { hour: mData.valA, minute: mData.valB };
    } else if (mData.operation === "geometry") {
      detailVisualType = "math_geometry";
      detailVisualData = { info: mData.info };
    }
  } else if (subject === 'history') {
    detailVisualType = "history_details";
    detailVisualData = { unit: unit, lessonId: lessonId };
  } else if (subject === 'geography') {
    detailVisualType = "geography_details";
    detailVisualData = { unit: unit, lessonId: lessonId };
  } else if (subject === 'science') {
    detailVisualType = "science_details";
    detailVisualData = { unit: unit, lessonId: lessonId };
  } else if (subject === 'art') {
    detailVisualType = "art_details";
    detailVisualData = { unit: unit, lessonId: lessonId };
  }

  slides.push({
    title: "Lesson Details",
    text: q1Explain,
    emoji: q1.visualContent || "📝",
    visualType: detailVisualType,
    visualData: detailVisualData
  });

  // Slide 3: Explain Question 2 (for multi-concept lessons) or Fun Fact Application (50+ words)
  if (questions.length > 1) {
    const q2 = questions[1];
    const cleanQText2 = q2.questionText.replace(/<\/?[^>]+(>|$)/g, "");
    const cleanAns2 = String(q2.correctAnswer).replace(/<\/?[^>]+(>|$)/g, "");
    const hintText2 = q2.hint || `Look for ${cleanAns2}.`;
    
    let q2Explain = `Let's explore another fun example together! What if we want to know: "${cleanQText2}"? The best answer is: "${cleanAns2}"! Remember, ${hintText2} By understanding this, we become real experts at this topic!`;
    
    slides.push({
      title: "Second Concept",
      text: q2Explain,
      emoji: q2.visualContent || "📝",
      visualType: "concept"
    });
  } else {
    // Fun fact connect
    let funFact = "";
    if (subject === 'math') {
      funFact = `Here is a fun math tip! When we solve problems, we can count objects or use pictures to help us. For example, counting fingers or apples makes math real. By taking our time and counting step-by-step, we never make mistakes!`;
    } else if (subject === 'ela') {
      funFact = `Here is a fun reading tip! When you see a word you do not know, look at the first letters and make their sounds. You can also look at the pictures in the book to help you guess what is happening in the story!`;
    } else if (subject === 'history') {
      funFact = `Did you know? Historical records, old photos, and stories from our grandparents help us travel back in time. We learn how heroes changed our country and made our communities a better, friendlier place to live today!`;
    } else if (subject === 'geography') {
      funFact = `Did you know? The Earth is shaped like a giant round ball, and maps show us drawings of real places from high up in the sky. Using maps and cardinal directions helps us explore new places without getting lost!`;
    } else if (subject === 'science') {
      funFact = `Did you know? Scientists are like detectives who ask questions and observe nature. By looking at shadows, listening to wiggling sounds, or watching plants grow, we discover the secrets of how our amazing world works!`;
    } else if (subject === 'art') {
      funFact = `Did you know? Drawing, painting, and sculpting are like languages of the imagination! You can use bright warm colors to express high energy, or deep cool colors to show a calm, quiet, and sleepy mood in your artwork!`;
    }

    slides.push({
      title: "Did You Know?",
      text: funFact,
      emoji: "🌟",
      visualType: "concept"
    });
  }

  // Slide 4: Outro (40+ words)
  slides.push({
    title: "Ready to Play!",
    text: `You did a wonderful job watching our lesson video and listening to the explanations! Now it is your turn to head into the Practice Lab, answer the questions we just learned, and earn shiny stars. Let's start the game!`,
    emoji: "🏆",
    visualType: "outro"
  });

  return slides;
}

function renderVideoSlide() {
  const slide = appState.videoSlideIdx;
  const slides = getLessonVideoData(appState.currentSubject, appState.activeQuestLessonId);
  const totalSlides = slides.length - 1;
  
  // Clear any past animation timeouts before starting new ones
  if (appState.videoSlideTimeouts) {
    appState.videoSlideTimeouts.forEach(clearTimeout);
    appState.videoSlideTimeouts = [];
  }

  // Estimate totalDuration
  let cumulative = 0;
  slides.forEach(s => {
    const narration = s.narration || s.text || "";
    const wordCount = narration.split(/\s+/).length;
    s.duration = Math.max(5000, (wordCount * 450) + 1500);
    s.startTime = cumulative;
    cumulative += s.duration;
  });
  const totalDuration = cumulative;

  if (slide === 0) {
    updatePlayerUI(totalDuration);
    
    const canvas = document.getElementById('vidCanvas');
    if (canvas) {
      canvas.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 16px;">
          <div style="font-size: 56px; margin-bottom: 8px; animation: bounce 2s infinite;">${slides[0].emoji || "🔢"}</div>
          <h2 style="font-size: 22px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 6px; line-height: 1.2;">${slides[0].title}</h2>
          <p style="font-size: 14px; color: var(--color-blue-light); max-width: 320px; line-height: 1.4; margin: 0 auto;">${slides[0].text}</p>
        </div>
      `;
    }
    const narrationBox = document.getElementById('vidNarration');
    if (narrationBox) {
      narrationBox.innerText = slides[0].text;
    }
    if (appState.videoPlaying) {
      speakText(slides[0].text);
    }
    return;
  }

  // Update control bar UI
  updatePlayerUI(totalDuration);
  
  const currentSlideData = slides[slide];
  const canvas = document.getElementById('vidCanvas');
  
  const title = currentSlideData.title;
  const titleLower = title.toLowerCase();

  const vType = currentSlideData.visualType;
  const vData = currentSlideData.visualData;

  if (vType === "math_counting") {
    const limit = vData.limit;
    const emoji = vData.emoji;
    
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center;">
        <div style="font-size: 80px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 10px; animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);" id="countDisplay">0</div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 320px;" id="itemGrid"></div>
      </div>
    `;

    const grid = document.getElementById('itemGrid');
    const display = document.getElementById('countDisplay');
    const pointer = document.getElementById('vidPointer');
    
    for (let i = 1; i <= limit; i++) {
      const t = setTimeout(() => {
        if (!grid || !display) return;
        display.innerText = i;
        const el = document.createElement('span');
        el.style.fontSize = '28px';
        el.style.display = 'inline-block';
        el.style.animation = 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        el.innerText = emoji;
        grid.appendChild(el);
        sounds.playPop();

        if (pointer) {
          const elRect = el.getBoundingClientRect();
          const screenRect = document.querySelector('.video-screen').getBoundingClientRect();
          const x = elRect.left - screenRect.left + elRect.width / 2;
          const y = elRect.top - screenRect.top + elRect.height / 2;
          pointer.style.left = `${x}px`;
          pointer.style.top = `${y}px`;
          pointer.style.opacity = '1';
          pointer.style.transform = 'translate(-10px, -10px) scale(0.8)';
          const tPtr = setTimeout(() => {
            pointer.style.transform = 'translate(-10px, -10px) scale(1)';
          }, 150);
          appState.videoSlideTimeouts.push(tPtr);
        }
      }, i * 300);
      appState.videoSlideTimeouts.push(t);
    }

    const tHide = setTimeout(() => {
      if (pointer) pointer.style.opacity = '0';
    }, (limit + 1) * 300);
    appState.videoSlideTimeouts.push(tHide);

  } 
  else if (vType === "math_counting_spell") {
    const num = vData.num;
    const word = vData.word;
    const emoji = vData.emoji;

    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center;">
        <div style="font-size: 80px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 10px; animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);">${num}</div>
        <div style="font-size: 32px; font-weight: 800; text-transform: uppercase; letter-spacing: 2px; color: var(--color-blue-accent); margin-bottom: 24px;" id="spelledWord"></div>
        <div style="display: flex; flex-wrap: wrap; gap: 8px; justify-content: center; max-width: 320px;" id="itemGrid"></div>
      </div>
    `;

    const grid = document.getElementById('itemGrid');
    const pointer = document.getElementById('vidPointer');
    
    for (let i = 1; i <= num; i++) {
      const t = setTimeout(() => {
        if (!grid) return;
        const el = document.createElement('span');
        el.style.fontSize = '32px';
        el.style.display = 'inline-block';
        el.style.animation = 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        el.innerText = emoji;
        grid.appendChild(el);
        sounds.playPop();

        if (pointer) {
          const elRect = el.getBoundingClientRect();
          const screenRect = document.querySelector('.video-screen').getBoundingClientRect();
          const x = elRect.left - screenRect.left + elRect.width / 2;
          const y = elRect.top - screenRect.top + elRect.height / 2;
          pointer.style.left = `${x}px`;
          pointer.style.top = `${y}px`;
          pointer.style.opacity = '1';
          pointer.style.transform = 'translate(-10px, -10px) scale(0.8)';
          const tPtr = setTimeout(() => {
            pointer.style.transform = 'translate(-10px, -10px) scale(1)';
          }, 150);
          appState.videoSlideTimeouts.push(tPtr);
        }
      }, i * 350);
      appState.videoSlideTimeouts.push(t);
    }

    const tHide = setTimeout(() => {
      if (pointer) pointer.style.opacity = '0';
    }, (num + 1) * 350);
    appState.videoSlideTimeouts.push(tHide);

    const wordDiv = document.getElementById('spelledWord');
    const chars = word.split('');
    const countDoneDelay = num * 350;
    
    chars.forEach((c, idx) => {
      const span = document.createElement('span');
      span.innerText = c;
      span.style.opacity = '0.3';
      span.style.transition = 'opacity 0.2s';
      wordDiv.appendChild(span);
      
      const tChar = setTimeout(() => {
        span.style.opacity = '1';
        span.style.color = '#fff';
        span.style.transform = 'scale(1.2)';
      }, countDoneDelay + 500 + (idx * 250));
      appState.videoSlideTimeouts.push(tChar);
    });

  }
  else if (vType === "math_op") {
    const valA = vData.valA;
    const valB = vData.valB;
    const op = vData.operation;
    const emoji = vData.emoji;
    const result = vData.result;
    
    if (op === "+") {
      canvas.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 24px; font-size: 32px; font-weight: 800;">
            <div id="addGrp1" style="display: flex; gap: 4px;"></div>
            <div style="color: var(--color-yellow-accent); font-size: 36px;">+</div>
            <div id="addGrp2" style="display: flex; gap: 4px;"></div>
            <div style="color: var(--color-yellow-accent); font-size: 36px;">=</div>
            <div id="addTotal" style="opacity: 0; font-size: 48px; color: var(--color-blue-accent); transition: all 0.5s;">?</div>
          </div>
          <h3 style="font-size: 24px; font-weight: 800; color: var(--color-yellow-accent);">${title}</h3>
        </div>
      `;
      const grp1 = document.getElementById('addGrp1');
      const grp2 = document.getElementById('addGrp2');
      const total = document.getElementById('addTotal');
      
      for (let i = 0; i < valA; i++) {
        const t = setTimeout(() => {
          if (!grp1) return;
          const span = document.createElement('span');
          span.innerText = emoji;
          span.style.fontSize = '32px';
          span.style.animation = 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          grp1.appendChild(span);
          sounds.playPop();
        }, i * 300);
        appState.videoSlideTimeouts.push(t);
      }
      
      for (let i = 0; i < valB; i++) {
        const t = setTimeout(() => {
          if (!grp2) return;
          const span = document.createElement('span');
          span.innerText = emoji;
          span.style.fontSize = '32px';
          span.style.animation = 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          grp2.appendChild(span);
          sounds.playPop();
        }, (valA * 300) + 400 + (i * 300));
        appState.videoSlideTimeouts.push(t);
      }
      
      const t = setTimeout(() => {
        if (!total) return;
        total.innerText = String(result);
        total.style.opacity = "1";
        total.style.transform = "scale(1.3)";
        sounds.playCorrect();
      }, (valA * 300) + 400 + (valB * 300) + 600);
      appState.videoSlideTimeouts.push(t);
    } else {
      // Subtraction
      canvas.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
          <div style="display: flex; align-items: center; justify-content: center; gap: 16px; margin-bottom: 24px; font-size: 32px; font-weight: 800;">
            <div id="subGrp" style="display: flex; gap: 8px;"></div>
            <div style="color: var(--color-yellow-accent); font-size: 36px;">=</div>
            <div id="subTotal" style="opacity: 0; font-size: 48px; color: var(--color-blue-accent); transition: all 0.5s;">?</div>
          </div>
          <h3 style="font-size: 24px; font-weight: 800; color: var(--color-yellow-accent);">${title}</h3>
        </div>
      `;
      const grp = document.getElementById('subGrp');
      const total = document.getElementById('subTotal');
      const items = [];
      
      for (let i = 0; i < valA; i++) {
        const t = setTimeout(() => {
          if (!grp) return;
          const span = document.createElement('span');
          span.innerText = emoji;
          span.style.fontSize = '32px';
          span.style.animation = 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          grp.appendChild(span);
          items.push(span);
          sounds.playPop();
        }, i * 250);
        appState.videoSlideTimeouts.push(t);
      }
      
      for (let i = 0; i < valB; i++) {
        const t = setTimeout(() => {
          if (items[valA - 1 - i]) {
            items[valA - 1 - i].style.opacity = '0.2';
            items[valA - 1 - i].style.transform = 'scale(0.8)';
            items[valA - 1 - i].style.textDecoration = 'line-through';
            sounds.playPop();
          }
        }, (valA * 250) + 400 + (i * 300));
        appState.videoSlideTimeouts.push(t);
      }
      
      const t = setTimeout(() => {
        if (!total) return;
        total.innerText = String(result);
        total.style.opacity = "1";
        total.style.transform = "scale(1.3)";
        sounds.playCorrect();
      }, (valA * 250) + 400 + (valB * 300) + 600);
      appState.videoSlideTimeouts.push(t);
    }

  }
  else if (vType === "math_placevalue") {
    const num = vData.num;
    const tens = vData.tens;
    const ones = vData.ones;
    
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <h3 style="font-size: 26px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 16px;">${num}</h3>
        <div style="display: flex; gap: 32px; justify-content: center; align-items: flex-end;" id="pvGrid">
          <div style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;" id="tensCol">
            <span style="font-size: 14px; color: var(--color-blue-light); font-weight:800;">TENS</span>
            <div id="tensGrid" style="display: flex; gap: 6px;"></div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px; padding: 12px; background: rgba(255,255,255,0.05); border-radius: 8px;" id="onesCol">
            <span style="font-size: 14px; color: var(--color-orange-accent); font-weight:800;">ONES</span>
            <div id="onesGrid" style="display: flex; gap: 6px;"></div>
          </div>
        </div>
      </div>
    `;
    const tGrid = document.getElementById('tensGrid');
    const oGrid = document.getElementById('onesGrid');
    
    for (let i = 0; i < tens; i++) {
      const t = setTimeout(() => {
        if (!tGrid) return;
        const box = document.createElement('div');
        box.style.display = 'flex';
        box.style.flexDirection = 'column';
        box.style.border = '2px solid var(--color-blue-accent)';
        box.style.borderRadius = '4px';
        box.style.background = 'rgba(56, 189, 248, 0.2)';
        box.innerHTML = `<span style="font-size: 18px; margin: 2px;">📦</span>`.repeat(10);
        box.style.animation = 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        tGrid.appendChild(box);
        sounds.playPop();
      }, i * 400);
      appState.videoSlideTimeouts.push(t);
    }
    
    for (let i = 0; i < ones; i++) {
      const t = setTimeout(() => {
        if (!oGrid) return;
        const dot = document.createElement('span');
        dot.innerText = "📦";
        dot.style.fontSize = "22px";
        dot.style.animation = 'pop-in 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        oGrid.appendChild(dot);
        sounds.playPop();
      }, (tens * 400) + (i * 300));
      appState.videoSlideTimeouts.push(t);
    }

  }
  else if (vType === "math_time") {
    const hr = vData.hour;
    const min = vData.minute;
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <div style="border: 6px solid white; border-radius: 50%; width: 130px; height: 130px; display: flex; align-items: center; justify-content: center; position: relative; margin: 0 auto 16px; background: #0f172a; box-shadow: 0 0 15px rgba(255,255,255,0.2);">
          <div style="position: absolute; font-size: 13px; font-weight:800; top: 4px;">12</div>
          <div style="position: absolute; font-size: 13px; font-weight:800; right: 8px;">3</div>
          <div style="position: absolute; font-size: 13px; font-weight:800; bottom: 4px;">6</div>
          <div style="position: absolute; font-size: 13px; font-weight:800; left: 8px;">9</div>
          <div style="position: absolute; width: 6px; height: 35px; background: var(--color-yellow-accent); top: 30px; left: 62px; transform-origin: bottom center; transform: rotate(${(hr * 30) + (min * 0.5)}deg); border-radius: 3px;"></div>
          <div style="position: absolute; width: 4px; height: 50px; background: var(--color-blue-accent); top: 15px; left: 63px; transform-origin: bottom center; transform: rotate(${min * 6}deg); border-radius: 2px;"></div>
          <div style="width: 10px; height: 10px; border-radius: 50%; background: white; position: absolute; z-index: 10;"></div>
        </div>
        <h3 style="font-size: 22px; font-weight: 800; color: var(--color-yellow-accent);">${title}</h3>
      </div>
    `;
    sounds.playPop();

  }
  else if (vType === "math_geometry") {
    const info = vData.info;
    let shapeHtml = "";
    if (info === "circle_square") {
      shapeHtml = `
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="width: 70px; height: 70px; border-radius: 50%; background: var(--color-blue-accent); box-shadow: 0 0 15px rgba(56, 189, 248, 0.5); animation: pulse 1.5s infinite;"></div>
          <div style="width: 70px; height: 70px; background: var(--color-yellow-accent); box-shadow: 0 0 15px rgba(253, 224, 71, 0.5); animation: bounce 2s infinite;"></div>
        </div>
      `;
    } else if (info === "triangle_rectangle") {
      shapeHtml = `
        <div style="display: flex; gap: 24px; align-items: center;">
          <div style="width: 0; height: 0; border-left: 40px solid transparent; border-right: 40px solid transparent; border-bottom: 70px solid var(--primary); filter: drop-shadow(0 0 10px rgba(139, 92, 246, 0.5)); animation: pulse 2s infinite;"></div>
          <div style="width: 90px; height: 55px; background: var(--color-orange-accent); box-shadow: 0 0 15px rgba(249, 115, 22, 0.5); animation: bounce 1.8s infinite;"></div>
        </div>
      `;
    } else if (info === "hexagon") {
      shapeHtml = `
        <div style="width: 70px; height: 70px; background: #ec4899; clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%); animation: pulse 1.5s infinite; filter: drop-shadow(0 0 10px #f472b6);"></div>
      `;
    } else if (info === "fractions") {
      shapeHtml = `
        <div style="width: 80px; height: 80px; border-radius: 50%; border: 4px solid white; background: linear-gradient(90deg, var(--color-blue-accent) 50%, rgba(255,255,255,0.1) 50%); animation: pulse 2s infinite;"></div>
      `;
    } else {
      shapeHtml = `<div style="font-size: 72px; animation: bounce 2.2s infinite;">📐</div>`;
    }
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <div style="margin-bottom: 20px; height: 85px; display: flex; align-items: center; justify-content: center;">${shapeHtml}</div>
        <h3 style="font-size: 22px; font-weight: 800; color: var(--color-yellow-accent);">${title}</h3>
      </div>
    `;
    sounds.playPop();

  }
  else if (vType === "spelling") {
    const word = vData.word;
    const emoji = currentSlideData.emoji || "📝";
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center;">
        <div style="font-size: 88px; margin-bottom: 20px; animation: bounce 2s infinite;">${emoji}</div>
        <div style="font-size: 48px; font-weight: 800; text-transform: uppercase; letter-spacing: 6px; color: var(--color-yellow-accent); margin-bottom: 16px;" id="spelledWord"></div>
      </div>
    `;
    
    const wordDiv = document.getElementById('spelledWord');
    if (wordDiv) {
      const chars = word.split('');
      chars.forEach((c, idx) => {
        const span = document.createElement('span');
        span.innerText = c;
        span.style.opacity = '0.3';
        span.style.display = 'inline-block';
        span.style.transition = 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
        wordDiv.appendChild(span);
        
        const t = setTimeout(() => {
          if (!span) return;
          span.style.opacity = '1';
          span.style.color = '#fff';
          span.style.transform = 'scale(1.25)';
          sounds.playPop();
        }, 500 + (idx * 400));
        appState.videoSlideTimeouts.push(t);
      });
    }

  }
  else if (vType === "history_details") {
    const unitId = vData.unit;
    let histHtml = "📜";
    if (unitId === 1) histHtml = "🌳👪";
    else if (unitId === 2) histHtml = "🐴🐎";
    else if (unitId === 3) histHtml = "🇺🇸🦅";
    else if (unitId === 4) histHtml = "🎩📜";
    else if (unitId === 5) histHtml = "⛺🌽";
    else histHtml = "⚡💡🚀";
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <div style="font-size: 80px; margin-bottom: 20px; animation: bounce 2s infinite;">${histHtml}</div>
        <h3 style="font-size: 24px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 8px;">${title}</h3>
      </div>
    `;
    sounds.playPop();

  }
  else if (vType === "geography_details") {
    const unitId = vData.unit;
    let geoHtml = "🌍";
    if (unitId === 1) geoHtml = "🗺️🔑";
    else if (unitId === 2) geoHtml = "🧭🧭";
    else if (unitId === 3) geoHtml = "🌎🌍";
    else if (unitId === 4) geoHtml = "🏔️🏝️";
    else if (unitId === 5) geoHtml = "🌦️🍁";
    else geoHtml = "🏡📍🇺🇸";
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <div style="font-size: 80px; margin-bottom: 20px; animation: bounce 2s infinite;">${geoHtml}</div>
        <h3 style="font-size: 24px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 8px;">${title}</h3>
      </div>
    `;
    sounds.playPop();

  }
  else if (vType === "science_details") {
    const unitId = vData.unit;
    let sciHtml = "🧪";
    if (unitId === 1) sciHtml = "💡🔦";
    else if (unitId === 2) sciHtml = "🔊📢";
    else if (unitId === 3) sciHtml = "🌱🌸";
    else if (unitId === 4) sciHtml = "🦁🦅";
    else if (unitId === 5) sciHtml = "☀️🌙";
    else sciHtml = "❄️🌡️";
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <div style="font-size: 80px; margin-bottom: 20px; animation: bounce 2s infinite;">${sciHtml}</div>
        <h3 style="font-size: 24px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 8px;">${title}</h3>
      </div>
    `;
    sounds.playPop();

  }
  else if (vType === "art_details") {
    const unitId = vData.unit;
    let artHtml = "🎨";
    if (unitId === 1) artHtml = "✏️📐";
    else if (unitId === 2) artHtml = "🎨🌈";
    else if (unitId === 3) artHtml = "🧸🧶";
    else if (unitId === 4) artHtml = "⚽🏺";
    else if (unitId === 5) artHtml = "🖼️🖌️";
    else artHtml = "🌌🎨";
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <div style="font-size: 80px; margin-bottom: 20px; animation: bounce 2s infinite;">${artHtml}</div>
        <h3 style="font-size: 24px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 8px;">${title}</h3>
      </div>
    `;
    sounds.playPop();

  }
  else {
    canvas.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
        <div style="font-size: 72px; margin-bottom: 16px; animation: bounce 2s infinite;">${currentSlideData.emoji || "💡"}</div>
        <h3 style="font-size: 22px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 8px; text-transform: uppercase; line-height: 1.2;">${title}</h3>
      </div>
    `;
    sounds.playPop();
  }

  const narration = currentSlideData.narration || currentSlideData.text;
  document.getElementById('vidNarration').innerText = narration;
  
  if (appState.videoPlaying) {
    speakText(narration);
  }
}

function renderVideoCheckpointQuestion() {
  appState.videoCheckpointActive = true;
  const playBtn = document.getElementById('vidPlayBtn');
  if (playBtn) playBtn.style.opacity = '0.3';

  const slide = appState.videoSlideIdx;
  const slides = getLessonVideoData(appState.currentSubject, appState.activeQuestLessonId);
  const totalSlides = slides.length - 1;
  
  const q = generateMathQuestion(appState.activeQuestLessonId, 0);
  
  const canvas = document.getElementById('vidCanvas');
  canvas.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
      <div style="font-size: 20px; font-weight: 800; color: var(--color-orange-accent); margin-bottom: 8px;">🌟 Checkpoint Quest!</div>
      ${q.visualContent ? `<div style="margin-bottom: 12px;">${q.visualContent}</div>` : ''}
      <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 16px; line-height: 1.4;">${q.questionText}</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 320px;" id="checkpointOptions"></div>
    </div>
  `;

  const optGrid = document.getElementById('checkpointOptions');
  const incorrect = q.options.find(o => o !== q.correctAnswer) || "Other";
  const options = Math.random() > 0.5 ? [q.correctAnswer, incorrect] : [incorrect, q.correctAnswer];
  
  options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.style.fontSize = '16px';
    btn.style.padding = '10px';
    btn.innerText = opt;
    
    btn.addEventListener('click', () => {
      if (opt === q.correctAnswer) {
        appState.videoCheckpointActive = false;
        if (playBtn) playBtn.style.opacity = '1';

        sounds.playCorrect();
        btn.classList.add('correct');
        speakText("That's correct! Great job!", () => {
          setTimeout(() => {
            if (slide < totalSlides) {
              appState.videoSlideIdx++;
              playVideo();
            } else {
              completeStep1();
            }
          }, 800);
        });
      } else {
        sounds.playWrong();
        btn.classList.add('wrong');
        btn.style.animation = 'wrong-shake 0.3s ease';
        speakText("Oops! Try again!");
        setTimeout(() => {
          btn.style.animation = '';
          btn.classList.remove('wrong');
        }, 400);
      }
    });
    optGrid.appendChild(btn);
  });
  
  speakText(`Checkpoint! ${q.questionText}`);
}

function completeStep1() {
  pauseVideo();
  unlockTab(3);
  appState.renderUI();

  if (appState.textLessonMode) {
    switchStep(2);
    return;
  }

  const canvas = document.getElementById('vidCanvas');
  canvas.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width:100%; color: white; text-align: center; padding: 20px;">
      <div style="font-size: 64px; margin-bottom: 12px;">🎉</div>
      <h3 style="font-size: 26px; font-weight: 800; color: var(--success); margin-bottom: 8px;">Video Finished!</h3>
      <p style="font-size: 16px; margin-bottom: 24px; max-width: 300px; color: var(--text-muted);">Excellent watching! You finished the lesson video and unlocked the next activities!</p>
      <button class="continue-btn" id="finishStep1Btn" style="font-size: 16px; padding: 10px 24px;">Go to Practice Lab ➔</button>
    </div>
  `;
  
  speakText("You finished watching the video! Awesome. Let's practice now!");
  
  document.getElementById('finishStep1Btn').addEventListener('click', () => {
    switchStep(2);
  });
}

// ======================================================
// STEP 2: Practice Lab (5 exercises, unlimited hints, optional)
// ======================================================
function setupStep2Practice() {
  appState.practiceIndex = 0;
  appState.practiceHintLevel = 0;
  renderPracticeLayout();
}

function renderPracticeLayout() {
  const container = document.getElementById('step-view-2');
  container.innerHTML = `
    <div class="practice-container">
      <div style="font-size: 18px; font-weight: 700; color: var(--text-muted); margin-bottom: 12px;">
        Practice: Problem ${appState.practiceIndex + 1} of ${appState.practiceProblemsCount}
      </div>
      <h2 class="question-text" id="practiceQuestion"></h2>
      
      <div class="workspace-area" id="practiceWorkspace" style="min-height: 120px;">
        <!-- Visual counts drawn dynamically -->
      </div>
      
      <div class="options-grid" id="practiceOptions" style="margin-bottom: 24px;">
        <!-- Choice buttons -->
      </div>

      <div class="workspace-actions">
        <button class="hint-btn-premium" id="practiceHintBtn">💡 Get Hint</button>
        <button class="smarty-chat-toggle-btn" id="practiceChatBtn">💬 Ask AI Tutor</button>
        <button class="skip-btn" id="practiceSkipBtn">Skip Practice ➔</button>
      </div>
      
      <div class="hint-bubble" id="practiceHintBubble" style="display: none;"></div>
    </div>
  `;

  document.getElementById('practiceHintBtn').addEventListener('click', showPracticeHint);
  document.getElementById('practiceSkipBtn').addEventListener('click', () => {
    // Force unlocks step 3 directly (practice is optional)
    unlockTab(3);
    switchStep(3);
  });

  generatePracticeProblem();
}

function generatePracticeProblem() {
  appState.questionMistakes = 0;
  appState.chatbotUsedForCurrentQuestion = false;
  const q = generateMathQuestion(appState.activeQuestLessonId, appState.practiceIndex);
  appState.currentPracticeQuestion = q;
  
  // Set question text
  document.getElementById('practiceQuestion').innerText = q.questionText;
  
  // Draw visuals in workspace
  const workspace = document.getElementById('practiceWorkspace');
  workspace.innerHTML = q.visualContent;
  
  // Render options buttons
  const optGrid = document.getElementById('practiceOptions');
  optGrid.innerHTML = '';
  
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    
    btn.addEventListener('click', () => {
      const isHighStakes = (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art');
      
      if (opt === q.correctAnswer) {
        if (isHighStakes && appState.chatbotUsedForCurrentQuestion) {
          sounds.playWrong();
          btn.classList.add('wrong');
          speakText("AI or hint was used, so this is marked as incorrect.");
          
          // Highlight correct option in green
          document.querySelectorAll('#practiceOptions .option-btn').forEach(optBtn => {
            if (optBtn.innerText === q.correctAnswer) {
              optBtn.classList.add('correct');
            }
            optBtn.disabled = true;
          });
          
          setTimeout(() => {
            appState.practiceIndex++;
            appState.practiceHintLevel = 0;
            if (appState.practiceIndex < appState.practiceProblemsCount) {
              renderPracticeLayout();
            } else {
              completeStep2();
            }
          }, 1500);
        } else {
          sounds.playCorrect();
          btn.classList.add('correct');
          speakText("Great job!");
          
          setTimeout(() => {
            appState.practiceIndex++;
            appState.practiceHintLevel = 0;
            if (appState.practiceIndex < appState.practiceProblemsCount) {
              renderPracticeLayout();
            } else {
              completeStep2();
            }
          }, 1000);
        }
      } else {
        sounds.playWrong();
        btn.classList.add('wrong');
        btn.style.animation = 'wrong-shake 0.3s ease';
        speakText("Try again!");
        setTimeout(() => {
          btn.style.animation = '';
          btn.classList.remove('wrong');
        }, 400);

        if (!appState.questionMistakes) appState.questionMistakes = 0;
        appState.questionMistakes++;
        if (appState.questionMistakes >= 3) {
          showQuestionExplanation(q);
          appState.questionMistakes = 0;
        }
      }
    });
    optGrid.appendChild(btn);
  });

  speakText(q.questionText);

  // Bind AI Tutor Chatbot button
  const chatBtn = document.getElementById('practiceChatBtn');
  if (chatBtn) {
    chatBtn.onclick = () => {
      sounds.playPop();
      const container = document.getElementById('step-view-2');
      const chatArea = container.querySelector('.smarty-chat-area');
      if (chatArea && chatArea.style.display !== 'none') {
        chatArea.style.display = 'none';
      } else {
        const isHighStakes = (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art');
        initSmartyChatbot(
          container,
          q,
          (correctAnswer) => {
            // Penalty callback: mark as wrong and go to next
            appState.practiceIndex++;
            appState.practiceHintLevel = 0;
            setTimeout(() => {
              if (appState.practiceIndex < appState.practiceProblemsCount) {
                renderPracticeLayout();
              } else {
                completeStep2();
              }
            }, 1000);
          },
          isHighStakes
        );
        container.querySelector('.smarty-chat-area').style.display = 'block';
      }
    };
  }
}

function showPracticeHint() {
  sounds.playPop();
  appState.practiceHintLevel++;
  appState.helpUsedInCurrentLesson = true;
  
  const isHighStakes = (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art');
  if (isHighStakes) {
    appState.chatbotUsedForCurrentQuestion = true;
  }
  
  const q = appState.currentPracticeQuestion;
  const answer = String(q.correctAnswer);
  
  const bubble = document.getElementById('practiceHintBubble');
  bubble.style.display = 'block';
  
  let hintMsg = "";
  if (appState.practiceHintLevel === 1) {
    hintMsg = `Think about the problem. Look at the visuals!`;
  } else if (appState.practiceHintLevel === 2) {
    hintMsg = `The correct answer starts with the letter or number: "${answer[0]}"`;
  } else {
    hintMsg = `The correct answer is: "${answer}"! Click it!`;
  }
  
  bubble.innerText = hintMsg;
  speakText(hintMsg);
}

function completeStep2() {
  if (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') {
    const isNew = appState.activeQuestLessonId > appState.completedCounts.lessonsCompleted;
    if (isNew) {
      appState.completedCounts.lessonsCompleted = appState.activeQuestLessonId;
      recordWeeklyLesson(); // track for weekly leaderboard
    }
    appState.addStars(50); // Grand reward
    if (isNew) {
      appState.recordLessonCompletion(appState.currentSubject, appState.activeQuestLessonId, 10, false);
    } else {
      appState.saveState();
      appState.renderUI();
    }
    
    const subjectName = appState.currentSubject;
    const container = document.getElementById('step-view-2');
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
        <div style="font-size: 80px; animation: trophy-bounce 1s infinite alternate;">🏆</div>
        <h2 style="font-size: 32px; font-weight: 800; color: var(--success); margin-bottom: 8px;">CONGRATULATIONS!</h2>
        <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">You answered the practice questions correctly and mastered this ${subjectName} topic!</p>
        <div class="reward-card" style="margin-bottom: 24px;">
          <span>⭐</span>
          <span>+50 Stars Reward!</span>
        </div>
        <button class="continue-btn" id="finishGeoQuestBtn">Back to Dashboard ➔</button>
      </div>
    `;
    sounds.playVictory();
    appState.confetti.burst(200);
    speakText(`Congratulations! You completed the ${subjectName} lesson and earned 50 stars!`);
    document.getElementById('finishGeoQuestBtn').addEventListener('click', () => {
      pauseVideo();
      window.speechSynthesis.cancel();
      document.getElementById('playgroundOverlay').classList.remove('active');
    });
    return;
  }

  unlockTab(3);
  appState.renderUI();

  const container = document.getElementById('step-view-2');
  container.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
      <div style="font-size: 64px; margin-bottom: 12px;">🧠</div>
      <h3 style="font-size: 26px; font-weight: 800; color: var(--success); margin-bottom: 8px;">Practice Lab Completed!</h3>
      <p style="font-size: 16px; margin-bottom: 24px; max-width: 320px; color: var(--text-muted);">Awesome job practicing! Let's head to the Mastery Arena to score 85%!</p>
      <button class="continue-btn" id="finishStep2Btn">Go to Step 3: Mastery Arena ➔</button>
    </div>
  `;
  speakText("Practice completed! Let's test your skills in the Mastery Arena!");
  document.getElementById('finishStep2Btn').addEventListener('click', () => {
    switchStep(3);
  });
}

// ======================================================
// STEP 3: Mastery Arena (Score 85%, hints penalize, video popups)
// ======================================================
function setupStep3Mastery() {
  appState.masteryChancesLeft = 3;
  appState.masteryHintUsed = false;
  appState.masteryConsecutiveFails = 0;
  
  // Set up screen structure
  const container = document.getElementById('step-view-3');
  container.innerHTML = `
    <div class="practice-container">
      <div class="mastery-header-row">
        <!-- Circular mastery dial -->
        <div class="mastery-score-widget">
          <div class="mastery-dial">
            <svg width="60" height="60">
              <circle class="dial-circle-bg" cx="30" cy="30" r="25"/>
              <circle class="dial-circle-fill" id="masteryFill" cx="30" cy="30" r="25" stroke-dasharray="157.08" stroke-dashoffset="157.08"/>
            </svg>
            <div class="dial-text" id="masteryPercentText">0%</div>
          </div>
          <div style="display: flex; flex-direction: column;">
            <span style="font-weight: 700; font-size: 14px; color: var(--text-muted); line-height: 1.2;">Mastery Score<br>(Goal: 85%)</span>
            <span id="masterySolvedText" style="font-weight: 800; font-size: 12px; color: var(--primary); margin-top: 4px;">Solved: 0/8</span>
          </div>
        </div>
        
        <!-- Chances (hearts) widgets -->
        <div class="chances-widget" id="chancesGrid">
          <div class="strike-heart" id="heart-1">❤️</div>
          <div class="strike-heart" id="heart-2">❤️</div>
          <div class="strike-heart" id="heart-3">❤️</div>
        </div>
      </div>
      
      <h2 class="question-text" id="masteryQuestion"></h2>
      
      <div class="workspace-area" id="masteryWorkspace" style="min-height: 100px;"></div>
      
      <div class="options-grid" id="masteryOptions" style="margin-bottom: 24px;"></div>
      
      <div class="workspace-actions">
        <button class="hint-btn-premium" id="masteryHintBtn" style="background: #fecdd3 !important; border-color: #fda4af !important; color: #be123c !important; box-shadow: 0 4px 0 #be123c !important;">💡 Get Hint (Costs Score!)</button>
        <button class="smarty-chat-toggle-btn" id="masteryChatBtn">💬 Ask AI Tutor</button>
      </div>
      
      <div class="hint-bubble" id="masteryHintBubble" style="display: none;"></div>
    </div>
  `;

  document.getElementById('masteryHintBtn').addEventListener('click', showMasteryHint);

  updateMasteryDial();
  generateMasteryProblem();
}

function updateMasteryDial() {
  const history = appState.masteryHistory;
  let pct = 0;
  if (history.length > 0) {
    const correct = history.reduce((sum, val) => sum + val, 0);
    pct = Math.round((correct / history.length) * 100);
  }
  
  // Update dial fill stroke-dashoffset: 2 * PI * r = 2 * 3.14159 * 25 = 157.08
  const offset = 157.08 - (pct / 100) * 157.08;
  const fill = document.getElementById('masteryFill');
  if (fill) fill.style.strokeDashoffset = offset;
  
  const text = document.getElementById('masteryPercentText');
  if (text) text.innerText = `${pct}%`;

  // Update solved count text in UI
  const solvedText = document.getElementById('masterySolvedText');
  if (solvedText) {
    solvedText.innerText = `Solved: ${history.length}/8`;
    if (history.length >= 8) {
      solvedText.style.color = 'var(--success)';
    } else {
      solvedText.style.color = 'var(--primary)';
    }
  }

// If score hits 85% and they solved at least 8 trials, unlock Step 4!
  if (pct >= appState.masteryTargetPercent && history.length >= 8) {
    unlockTab(4);
  } else {
    // Only lock tab 4 if they haven't finished this lesson yet!
    const isCompleted = appState.activeQuestLessonId <= appState.completedCounts.lessonsCompleted;
    if (!isCompleted) {
      lockTab(4);
    }
  }
}

function generateMasteryProblem() {
  appState.questionMistakes = 0;
  appState.chatbotUsedForCurrentQuestion = false;
  // Reset lives and hints
  appState.masteryChancesLeft = 3;
  appState.masteryHintUsed = false;
  appState.masteryTrialRecorded = false;
  
  // Reset hearts widgets in UI
  document.querySelectorAll('.strike-heart').forEach(heart => {
    heart.className = 'strike-heart';
  });
  
  const bubble = document.getElementById('masteryHintBubble');
  if (bubble) bubble.style.display = 'none';

  // Generate question using dynamic math engine
  const q = generateMathQuestion(appState.activeQuestLessonId, appState.masteryHistory.length);
  appState.currentMasteryQuestion = q;
  
  document.getElementById('masteryQuestion').innerText = q.questionText;
  
  // Render visual cards
  const workspace = document.getElementById('masteryWorkspace');
  workspace.innerHTML = q.visualContent;
  
  const optGrid = document.getElementById('masteryOptions');
  optGrid.innerHTML = '';
  
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    
    btn.addEventListener('click', () => {
      handleMasteryChoice(opt, btn);
    });
    optGrid.appendChild(btn);
  });
  
  speakText(q.questionText);

  // Bind AI Tutor Chatbot button
  const chatBtn = document.getElementById('masteryChatBtn');
  if (chatBtn) {
    chatBtn.onclick = () => {
      sounds.playPop();
      const container = document.getElementById('step-view-3');
      const chatArea = container.querySelector('.smarty-chat-area');
      if (chatArea && chatArea.style.display !== 'none') {
        chatArea.style.display = 'none';
      } else {
        initSmartyChatbot(
          container,
          q,
          (correctAnswer) => {
            // Penalty callback: mark as wrong (0 chances left) and fail quest
            recordMasteryTrial(0);
            triggerExplanationVideo(q);
          },
          true // High Stakes
        );
        container.querySelector('.smarty-chat-area').style.display = 'block';
      }
    };
  }
}

function handleMasteryChoice(selectedOpt, btnElement) {
  const q = appState.currentMasteryQuestion;
  const isCorrect = (selectedOpt === q.correctAnswer);
  
  if (isCorrect) {
    // Correct Option Clicked!
    
    // If AI help was used, count it as incorrect
    if (appState.chatbotUsedForCurrentQuestion) {
      sounds.playWrong();
      btnElement.classList.add('wrong');
      speakText("AI was used, so this is marked as incorrect.");
      
      // Highlight correct option in green
      document.querySelectorAll('#masteryOptions .option-btn').forEach(optBtn => {
        if (optBtn.innerText === q.correctAnswer) {
          optBtn.classList.add('correct');
        }
        optBtn.disabled = true;
      });
      
      // Strike a life if not already recorded
      if (!appState.masteryTrialRecorded) {
        appState.masteryChancesLeft--;
        const lostHeart = document.getElementById(`heart-${appState.masteryChancesLeft + 1}`);
        if (lostHeart) {
          lostHeart.classList.add('lost', 'bounce-lose');
        }
        recordMasteryTrial(0);
      }
      
      setTimeout(() => {
        generateMasteryProblem();
      }, 1500);
      return;
    }
    
    // Normal correct option clicked
    sounds.playCorrect();
    btnElement.classList.add('correct');
    
    // If they got here on their first try and used no hints, record a 1 (success)
    if (appState.masteryChancesLeft === 3 && !appState.masteryHintUsed && !appState.masteryTrialRecorded) {
      recordMasteryTrial(1);
    } else {
      // Otherwise, record incorrect (0) if not already recorded
      if (!appState.masteryTrialRecorded) {
        recordMasteryTrial(0);
      }
    }
    
    speakText("Correct!");
    
    // Disable all options
    document.querySelectorAll('#masteryOptions .option-btn').forEach(btn => btn.disabled = true);
    
    setTimeout(() => {
      const history = appState.masteryHistory;
      let pct = 0;
      if (history.length > 0) {
        const correct = history.reduce((sum, val) => sum + val, 0);
        pct = Math.round((correct / history.length) * 100);
      }
      
      if (pct >= appState.masteryTargetPercent && history.length >= 8) {
        showMasterySuccessScreen();
      } else {
        generateMasteryProblem();
      }
    }, 1000);
    
  } else {
    // Incorrect Option Clicked!
    sounds.playWrong();
    btnElement.classList.add('wrong');
    btnElement.style.animation = 'wrong-shake 0.3s ease';
    
    // Strike a life
    appState.masteryChancesLeft--;
    const lostHeart = document.getElementById(`heart-${appState.masteryChancesLeft + 1}`);
    if (lostHeart) {
      lostHeart.classList.add('lost', 'bounce-lose');
    }
    
    // Record as wrong immediately to lower the percentage dial on the screen!
    if (!appState.masteryTrialRecorded) {
      recordMasteryTrial(0);
    }
    
    speakText("Not quite! Try again!");
    
    setTimeout(() => {
      btnElement.style.animation = '';
      btnElement.classList.remove('wrong');
      btnElement.disabled = true; // disable incorrect option
    }, 500);

    if (!appState.questionMistakes) appState.questionMistakes = 0;
    appState.questionMistakes++;
    if (appState.questionMistakes >= 3) {
      showQuestionExplanation(q);
      appState.questionMistakes = 0;
    }
  }
}

function recordMasteryTrial(success) {
  if (appState.masteryTrialRecorded) return; // Prevent logging multiple trials for one problem
  appState.masteryTrialRecorded = true;

  appState.masteryHistory.push(success);
  // Keep only the last 10 trials
  if (appState.masteryHistory.length > 10) {
    appState.masteryHistory.shift();
  }
  updateMasteryDial();
  appState.saveState();
}

function showMasteryHint() {
  if (appState.masteryHintUsed) return;
  sounds.playPop();
  
  appState.masteryHintUsed = true;
  appState.helpUsedInCurrentLesson = true;
  const q = appState.currentMasteryQuestion;
  const answer = String(q.correctAnswer);
  
  const bubble = document.getElementById('masteryHintBubble');
  bubble.style.display = 'block';
  
  const hintMsg = `Hint: The correct answer is "${answer}"!`;
  bubble.innerText = hintMsg;
  speakText(hintMsg);
  
  // Note: Using a hint counts this problem as incorrect in history immediately
  recordMasteryTrial(0);
}

function triggerExplanationVideo(q) {
  const overlay = document.getElementById('explanationOverlay');
  const screen = document.getElementById('explanationVideoScreen');
  
  overlay.classList.add('active');
  pauseVideo();
  
  screen.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; color: white; text-align: center; padding: 20px;">
      <div style="font-size: 24px; font-weight: 800; color: var(--color-yellow-accent); margin-bottom: 12px;">🌟 Let's Review Together!</div>
      <p style="font-size: 16px; margin-bottom: 16px;">The question was: <strong>${q.questionText}</strong></p>
      <div style="margin-bottom: 16px;">${q.visualContent}</div>
      <div class="reward-card" style="background: rgba(255,255,255,0.15); border-color: white; font-size: 18px;">
        <span>💡</span>
        <span>The correct answer is: <strong>${q.correctAnswer}</strong></span>
      </div>
    </div>
  `;
  
  speakText(`Let's review this together. The question asks: ${q.questionText}. The correct answer is ${q.correctAnswer}. Let's remember this for next time!`);
}

function showMasterySuccessScreen() {
  const container = document.getElementById('step-view-3');
  container.innerHTML = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
      <div style="font-size: 64px; margin-bottom: 12px;">🎯</div>
      <h3 style="font-size: 26px; font-weight: 800; color: var(--success); margin-bottom: 8px;">Mastery Reached!</h3>
      <p style="font-size: 16px; margin-bottom: 24px; max-width: 320px; color: var(--text-muted);">You scored 85% or higher! Step 4: Final Challenge is now unlocked.</p>
      <button class="continue-btn" id="finishStep3Btn">Go to Step 4: Final Challenge ➔</button>
    </div>
  `;
  speakText("Great job! You reached 85 percent mastery! Let's take the final test now!");
  document.getElementById('finishStep3Btn').addEventListener('click', () => {
    switchStep(4);
  });
}

// ======================================================
// STEP 4: Final Challenge (Test) (10 questions, no help)
// ======================================================
function setupStep4Test() {
  appState.testIndex = 0;
  appState.testScore = 0;
  
  // Generate 10 dynamic math questions for active lesson
  appState.testProblems = Array.from({length: 10}, () => generateMathQuestion(appState.activeQuestLessonId));
  
  renderTestQuestion();
}

function renderTestQuestion() {
  appState.questionMistakes = 0;
  appState.chatbotUsedForCurrentQuestion = false;
  const idx = appState.testIndex;
  const q = appState.testProblems[idx];
  
  const container = document.getElementById('step-view-4');
  container.innerHTML = `
    <div class="practice-container">
      <div style="font-size: 18px; font-weight: 700; color: var(--text-muted); margin-bottom: 12px;">
        Final Test: Problem ${idx + 1} of 10
      </div>
      <h2 class="question-text">${q.questionText}</h2>
      
      <div class="workspace-area" style="min-height: 120px;">
        ${q.visualContent}
      </div>
      
      <div class="options-grid" id="testOptions" style="margin-bottom: 24px;"></div>
      
      <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 12px; gap: 12px; width: 100%;">
        <div style="font-weight: 700; color: var(--color-pink-accent); font-size: 13px;">
          ⚠️ Warning: No hints or extra retries allowed on the Test!
        </div>
        <button class="smarty-chat-toggle-btn" id="testChatBtn" style="margin:0; padding: 8px 16px; font-size:13px;">💬 Ask AI Tutor</button>
      </div>
    </div>
  `;

  // Draw options
  const optGrid = document.getElementById('testOptions');
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    
    btn.addEventListener('click', () => {
      handleTestChoice(opt === q.correctAnswer, btn);
    });
    optGrid.appendChild(btn);
  });

  speakText(q.questionText);

  // Bind AI Tutor Chatbot button
  const chatBtn = document.getElementById('testChatBtn');
  if (chatBtn) {
    chatBtn.onclick = () => {
      sounds.playPop();
      const container = document.getElementById('step-view-4');
      const chatArea = container.querySelector('.smarty-chat-area');
      if (chatArea && chatArea.style.display !== 'none') {
        chatArea.style.display = 'none';
      } else {
        initSmartyChatbot(
          container,
          q,
          (correctAnswer) => {
            // Penalty callback: mark as wrong and go to next
            appState.testIndex++;
            setTimeout(() => {
              if (appState.testIndex < 10) {
                renderTestQuestion();
              } else {
                processTestResults();
              }
            }, 1000);
          },
          true // High Stakes
        );
        container.querySelector('.smarty-chat-area').style.display = 'block';
      }
    };
  }
}

function handleTestChoice(isCorrect, btnElement) {
  const q = appState.testProblems[appState.testIndex] || {};
  
  // Disable all options immediately to prevent double-clicks
  document.querySelectorAll('#testOptions .option-btn').forEach(btn => btn.disabled = true);
  
  if (appState.chatbotUsedForCurrentQuestion) {
    sounds.playWrong();
    btnElement.classList.add('wrong');
    btnElement.style.animation = 'wrong-shake 0.3s ease';
    
    // Highlight correct answer
    document.querySelectorAll('#testOptions .option-btn').forEach(optBtn => {
      if (optBtn.innerText === q.correctAnswer) {
        optBtn.classList.add('correct');
      }
    });
  } else if (isCorrect) {
    sounds.playCorrect();
    btnElement.classList.add('correct');
    appState.testScore++;
  } else {
    sounds.playWrong();
    btnElement.classList.add('wrong');
    btnElement.style.animation = 'wrong-shake 0.3s ease';
  }

  // Pause briefly before loading next
  setTimeout(() => {
    appState.testIndex++;
    if (appState.testIndex < 10) {
      renderTestQuestion();
    } else {
      processTestResults();
    }
  }, 1000);
}

function processTestResults() {
  const score = appState.testScore;
  const passed = (score >= 8);
  
  const container = document.getElementById('step-view-4');
  if (passed) {
    // 1. Success completion
    const isNew = appState.activeQuestLessonId > appState.completedCounts.lessonsCompleted;
    if (isNew) {
      appState.completedCounts.lessonsCompleted = appState.activeQuestLessonId;
      recordWeeklyLesson(); // track for weekly leaderboard
    }
    appState.addStars(50); // Grand reward
    appState.testAttemptsCount = 0; // reset attempts
    if (isNew) {
      appState.recordLessonCompletion(appState.currentSubject, appState.activeQuestLessonId, score, appState.helpUsedInCurrentLesson);
    } else {
      appState.saveState();
      appState.renderUI();
    }
    
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
        <div style="font-size: 80px; animation: trophy-bounce 1s infinite alternate;">🏆</div>
        <h2 style="font-size: 32px; font-weight: 800; color: var(--success); margin-bottom: 8px;">CONGRATULATIONS!</h2>
        <p style="font-size: 18px; margin-bottom: 12px; font-weight: 700;">You scored ${score}/10 on the test!</p>
        <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">You are now a certified master of this lesson! Ready for the next quest?</p>
        <div class="reward-card" style="margin-bottom: 24px;">
          <span>⭐</span>
          <span>+50 Stars Reward!</span>
        </div>
        <button class="continue-btn" id="claimRewardBtn">Finish Quest! ➔</button>
      </div>
    `;
    
    sounds.playVictory();
    appState.confetti.burst(200);
    speakText(`Congratulations! You passed the test with a score of ${score} out of 10! You got 50 stars!`);
    
    document.getElementById('claimRewardBtn').addEventListener('click', () => {
      sounds.playPop();
      document.getElementById('playgroundOverlay').classList.remove('active');
    });

  } else {
    // 2. Failed test path
    appState.testAttemptsCount++;
    appState.saveState();
    
    if (appState.testAttemptsCount === 1) {
      // First attempt fail: let them try once more!
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
          <div style="font-size: 64px; margin-bottom: 12px;">😢</div>
          <h3 style="font-size: 26px; font-weight: 800; color: var(--danger); margin-bottom: 8px;">Not Quite Passed</h3>
          <p style="font-size: 16px; margin-bottom: 12px;">You scored ${score}/10. We need 8/10 correct to pass.</p>
          <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px;">Don't worry! You get one more try on the test right now.</p>
          <button class="continue-btn" id="retryTestBtn" style="background: var(--warning); box-shadow: 0 6px 0 #d97706;">Try Test Again ➔</button>
        </div>
      `;
      speakText(`You got ${score} out of 10. That's okay! Try the test one more time.`);
      document.getElementById('retryTestBtn').addEventListener('click', () => {
        setupStep4Test();
      });
      
    } else {
      // Second attempt fail: force lock step 4, drop back to Step 3 mastery!
      appState.testAttemptsCount = 0; // reset attempts
      appState.masteryHistory = []; // Reset mastery history to 0 percent!
      appState.saveState();
      appState.renderUI();
      lockTab(4); // Relock test tab
 
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
          <div style="font-size: 64px; margin-bottom: 12px;">🔒</div>
          <h3 style="font-size: 24px; font-weight: 800; color: var(--danger); margin-bottom: 8px;">Test Locked</h3>
          <p style="font-size: 15px; margin-bottom: 12px;">You scored ${score}/10 on this try.</p>
          <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">Let's head back to Step 3: Mastery Arena to practice. You can unlock the test again by raising your Mastery score back to 85%!</p>
          <button class="continue-btn" id="lockExitBtn" style="background: var(--primary); box-shadow: 0 6px 0 var(--primary-hover);">Back to Step 3: Mastery ➔</button>
        </div>
      `;
      speakText(`You scored ${score} out of 10. Let's practice some more in the mastery arena to review.`);
      document.getElementById('lockExitBtn').addEventListener('click', () => {
        switchStep(3);
      });
    }
  }
}

function renderCurriculumRoadmap() {
  const roadmap = document.getElementById('curriculumRoadmap');
  if (!roadmap) return;

  roadmap.innerHTML = '';
  
  if (appState.activeUnitCollapse === undefined || appState.activeUnitCollapse === null) {
    appState.activeUnitCollapse = appState.activeUnit;
  }
  
  UNITS_DATA.forEach(unit => {
    const accordion = document.createElement('div');
    accordion.className = 'unit-accordion';
    
    const isExpanded = appState.activeUnitCollapse === unit.id;
    if (isExpanded) accordion.classList.add('active');
    
    const unitLessons = GRADE_1_CURRICULUM.filter(l => l.unit === unit.id);
    const completedInUnit = unitLessons.filter(l => l.id <= appState.completedCounts.lessonsCompleted).length;
    const totalInUnit = unitLessons.length;
    const examPassed = appState.completedCounts.examsPassed[unit.id - 1];
    
    accordion.innerHTML = `
      <div class="unit-header" data-unit-id="${unit.id}">
        <div class="unit-title-group">
          <span class="unit-toggle-arrow">▶</span>
          <span>Unit ${unit.id}: ${unit.name}</span>
        </div>
        <div style="display: flex; align-items: center; gap: 8px;">
          <span class="unit-progress-tag">${completedInUnit}/${totalInUnit}</span>
          ${examPassed ? '✅' : ''}
        </div>
      </div>
      <div class="unit-content"></div>
    `;
    
    const content = accordion.querySelector('.unit-content');
    
    unitLessons.forEach(lesson => {
      const isCompleted = lesson.id <= appState.completedCounts.lessonsCompleted;
      const isLocked = lesson.id > appState.completedCounts.lessonsCompleted + 1;
      
      let actuallyLocked = isLocked;
      if (unit.id > 1) {
        const prevExamPassed = appState.completedCounts.examsPassed[unit.id - 2];
        if (!prevExamPassed) actuallyLocked = true;
      }
      
      const row = document.createElement('div');
      row.className = `lesson-row-card ${isCompleted ? 'completed' : ''} ${actuallyLocked ? 'locked' : ''}`;
      
      row.innerHTML = `
        <div class="lesson-info-box">
          <span class="lesson-num-badge">L${lesson.id}</span>
          <div>
            <div class="lesson-title-text">${lesson.title}</div>
            <div style="font-size: 12px; color: var(--text-muted);">${lesson.standard} • ${lesson.desc}</div>
          </div>
        </div>
        <button class="lesson-action-btn" ${actuallyLocked ? 'disabled' : ''}>
          ${isCompleted ? 'Review' : actuallyLocked ? 'Locked' : 'Start'}
        </button>
      `;
      
      if (!actuallyLocked) {
        row.querySelector('.lesson-action-btn').addEventListener('click', (e) => {
          e.stopPropagation();
          startLessonQuest(lesson.id);
        });
      }
      
      content.appendChild(row);
    });
    
    const examUnlocked = completedInUnit === totalInUnit;
    const isExamLocked = !examUnlocked;
    
    const examRow = document.createElement('div');
    examRow.className = `exam-row-card ${isExamLocked ? 'locked' : ''}`;
    examRow.innerHTML = `
      <div class="exam-info-box">
        <span style="font-size: 20px;">🏆</span>
        <div>
          <div class="exam-title-text">Unit ${unit.id} Final Exam</div>
          <div style="font-size: 12px; color: var(--text-muted);">
            ${(appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') ? '5 questions • Needs 4/5 correct to pass' : '30 questions • Needs 25/30 correct to pass'}
          </div>
        </div>
      </div>
      <button class="exam-action-btn" ${isExamLocked ? 'disabled' : ''}>
        ${examPassed ? 'Exam Passed' : isExamLocked ? 'Locked' : 'Take Exam'}
      </button>
    `;
    
    if (!isExamLocked) {
      examRow.querySelector('.exam-action-btn').addEventListener('click', (e) => {
        e.stopPropagation();
        startUnitExam(unit.id);
      });
    }
    
    content.appendChild(examRow);
    
    accordion.querySelector('.unit-header').addEventListener('click', () => {
      appState.activeUnitCollapse = isExpanded ? null : unit.id;
      renderCurriculumRoadmap();
    });
    
    roadmap.appendChild(accordion);
  });
  
  updateGradeReviewTestCards();
}

function updateGradeReviewTestCards() {
  const allExamsPassed = appState.completedCounts.examsPassed.every(p => p === true);
  const reviewPassed = appState.completedCounts.reviewCompleted === true;
  const gradePassed = appState.completedCounts.gradeTestPassed === true;
  
  const reviewCard = document.getElementById('gradeReviewCard');
  const reviewBtn = document.getElementById('startReviewBtn');
  if (reviewCard && reviewBtn) {
    const reviewDesc = reviewCard.querySelector('.topic-desc');
    if (reviewDesc) {
      const maxLessons = GRADE_1_CURRICULUM.length;
      reviewDesc.innerText = `1 question per lesson! ${maxLessons} questions total.`;
    }
    
    if (allExamsPassed) {
      reviewCard.classList.remove('locked');
      reviewBtn.removeAttribute('disabled');
      reviewBtn.innerText = reviewPassed ? 'Review Done ✅' : 'Start Review ➔';
      
      const newBtn = reviewBtn.cloneNode(true);
      reviewBtn.parentNode.replaceChild(newBtn, reviewBtn);
      newBtn.addEventListener('click', startGradeReview);
    } else {
      reviewCard.classList.add('locked');
      reviewBtn.setAttribute('disabled', 'true');
      reviewBtn.innerText = 'Locked 🔒';
    }
  }
  
  const testCard = document.getElementById('gradeTestCard');
  const testBtn = document.getElementById('startGradeTestBtn');
  if (testCard && testBtn) {
    const testDesc = testCard.querySelector('.topic-desc');
    if (testDesc) {
      const maxLessons = GRADE_1_CURRICULUM.length;
      const numQuestions = (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') ? 30 : Math.min(50, maxLessons);
      const goalQuestions = Math.floor(numQuestions * 0.9);
      testDesc.innerText = `${numQuestions} questions! Need ${goalQuestions}/${numQuestions} to pass.`;
    }
    
    if (reviewPassed) {
      testCard.classList.remove('locked');
      testBtn.removeAttribute('disabled');
      testBtn.innerText = gradePassed ? 'Grade Passed! 🎉' : 'Take Grade Test ➔';
      
      const newBtn = testBtn.cloneNode(true);
      testBtn.parentNode.replaceChild(newBtn, testBtn);
      newBtn.addEventListener('click', startGradeTest);
    } else {
      testCard.classList.add('locked');
      testBtn.setAttribute('disabled', 'true');
      testBtn.innerText = 'Locked 🔒';
    }
  }
}

function startUnitExam(unitId) {
  sounds.playPop();
  appState.examType = 'unit';
  appState.examUnitId = unitId;
  appState.examIndex = 0;
  appState.examScore = 0;
  appState.examQuestions = [];
  
  const unitLessons = GRADE_1_CURRICULUM.filter(l => l.unit === unitId);
  if (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') {
    unitLessons.forEach(l => {
      appState.examQuestions.push(generateMathQuestion(l.id, 0));
    });
  } else {
    for (let i = 0; i < 30; i++) {
      const randLesson = unitLessons[Math.floor(Math.random() * unitLessons.length)];
      appState.examQuestions.push(generateMathQuestion(randLesson.id));
    }
  }
  
  const totalQs = appState.examQuestions.length;
  const targetScore = (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') ? Math.ceil(totalQs * 0.8) : 25;
  
  document.querySelector('.playground-header').style.display = 'none';
  document.querySelector('.playground-tabs').style.display = 'none';
  document.getElementById('playgroundTitle').innerText = `🏆 Unit ${unitId} Exam (Goal: ${targetScore}/${totalQs})`;
  document.getElementById('playgroundOverlay').classList.add('active');
  
  switchStep(4);
  renderExamQuestion();
}

function startGradeReview() {
  sounds.playPop();
  appState.examType = 'review';
  appState.examIndex = 0;
  appState.examScore = 0;
  appState.examQuestions = [];
  
  const maxLessons = GRADE_1_CURRICULUM.length;
  for (let i = 1; i <= maxLessons; i++) {
    appState.examQuestions.push(generateMathQuestion(i));
  }
  
  const totalQs = appState.examQuestions.length;
  document.querySelector('.playground-header').style.display = 'none';
  document.querySelector('.playground-tabs').style.display = 'none';
  document.getElementById('playgroundTitle').innerText = `🧠 Grade 1 Review (${totalQs} Lessons)`;
  document.getElementById('playgroundOverlay').classList.add('active');
  
  switchStep(4);
  renderExamQuestion();
}

function startGradeTest() {
  sounds.playPop();
  appState.examType = 'test';
  appState.examIndex = 0;
  appState.examScore = 0;
  appState.examQuestions = [];
  
  const maxLessons = GRADE_1_CURRICULUM.length;
  if (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') {
    for (let i = 1; i <= maxLessons; i++) {
      appState.examQuestions.push(generateMathQuestion(i));
    }
  } else {
    const numQuestions = Math.min(50, maxLessons);
    for (let i = 0; i < numQuestions; i++) {
      const randLessonId = Math.floor(Math.random() * maxLessons) + 1;
      appState.examQuestions.push(generateMathQuestion(randLessonId));
    }
  }
  
  const totalQuestions = appState.examQuestions.length;
  const passingScore = Math.floor(totalQuestions * 0.9);
  
  document.querySelector('.playground-header').style.display = 'none';
  document.querySelector('.playground-tabs').style.display = 'none';
  document.getElementById('playgroundTitle').innerText = `🏆 Grade 1 Final Test (Goal: ${passingScore}/${totalQuestions})`;
  document.getElementById('playgroundOverlay').classList.add('active');
  
  switchStep(4);
  renderExamQuestion();
}

function renderExamQuestion() {
  appState.chatbotUsedForCurrentQuestion = false;
  const q = appState.examQuestions[appState.examIndex];
  const totalQs = appState.examQuestions.length;
  
  const container = document.getElementById('step-view-4');
  container.innerHTML = `
    <div style="padding: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 380px;" class="practice-container">
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 8px;">
        <span style="font-size: 16px; font-weight: 800; color: var(--primary);">
          Question ${appState.examIndex + 1} of ${totalQs} • Score: ${appState.examScore}/${appState.examIndex}
        </span>
        <button class="smarty-chat-toggle-btn" id="examChatBtn" style="margin:0; padding: 8px 16px; font-size:13px;">💬 Ask AI Tutor</button>
      </div>
      <div class="test-question-box" style="width: 100%; text-align: center; margin-bottom: 20px;">
        <div style="margin-bottom: 16px;" id="examVisual">${q.visualContent}</div>
        <h3 style="font-size: 20px; font-weight: 800; color: var(--text-main);">${q.questionText}</h3>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 320px;" id="examOptions"></div>
    </div>
  `;
  
  speakText(q.questionText);
  
  const optionsGrid = document.getElementById('examOptions');
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.addEventListener('click', () => handleExamChoice(opt, btn));
    optionsGrid.appendChild(btn);
  });

  // Bind AI Tutor Chatbot button
  const chatBtn = document.getElementById('examChatBtn');
  if (chatBtn) {
    chatBtn.onclick = () => {
      sounds.playPop();
      const chatArea = container.querySelector('.smarty-chat-area');
      if (chatArea && chatArea.style.display !== 'none') {
        chatArea.style.display = 'none';
      } else {
        initSmartyChatbot(
          container,
          q,
          (correctAnswer) => {
            // Penalty callback: mark as wrong and go to next
            setTimeout(() => {
              if (appState.examType === 'review') {
                enterReviewRecoveryLoop();
                return;
              }
              
              appState.examIndex++;
              if (appState.examIndex < totalQs) {
                renderExamQuestion();
              } else {
                processExamResults();
              }
            }, 1000);
          },
          true // High Stakes
        );
        container.querySelector('.smarty-chat-area').style.display = 'block';
      }
    };
  }
}

function handleExamChoice(choice, btnElement) {
  document.querySelectorAll('#examOptions .option-btn').forEach(b => b.setAttribute('disabled', 'true'));
  
  const q = appState.examQuestions[appState.examIndex];
  let isCorrect = (choice === q.correctAnswer);
  
  if (appState.chatbotUsedForCurrentQuestion) {
    sounds.playWrong();
    btnElement.classList.add('wrong');
    btnElement.style.animation = 'wrong-shake 0.3s ease';
    isCorrect = false;
    
    // Highlight correct answer
    document.querySelectorAll('#examOptions .option-btn').forEach(optBtn => {
      if (optBtn.innerText === q.correctAnswer) {
        optBtn.classList.add('correct');
      }
    });
  } else if (isCorrect) {
    sounds.playCorrect();
    btnElement.classList.add('correct');
    appState.examScore++;
  } else {
    sounds.playWrong();
    btnElement.classList.add('wrong');
    btnElement.style.animation = 'wrong-shake 0.3s ease';
  }
  
  setTimeout(() => {
    if (appState.examType === 'review' && !isCorrect) {
      enterReviewRecoveryLoop();
      return;
    }
    
    appState.examIndex++;
    const totalQs = appState.examQuestions.length;
    
    if (appState.examIndex < totalQs) {
      renderExamQuestion();
    } else {
      processExamResults();
    }
  }, 1000);
}

function enterReviewRecoveryLoop() {
  appState.recoveryLessonId = appState.examIndex + 1;
  appState.recoveryStreak = 0;
  renderRecoveryQuestion();
}

function renderRecoveryQuestion() {
  appState.chatbotUsedForCurrentQuestion = false;
  const lesson = GRADE_1_CURRICULUM.find(l => l.id === appState.recoveryLessonId);
  const q = generateMathQuestion(appState.recoveryLessonId, appState.recoveryStreak);
  appState.currentRecoveryQuestion = q;
  
  const container = document.getElementById('step-view-4');
  container.innerHTML = `
    <div style="padding: 16px; display: flex; flex-direction: column; align-items: center; justify-content: center; min-height: 380px;" class="practice-container">
      <div style="display: flex; align-items: center; justify-content: space-between; width: 100%; margin-bottom: 8px;">
        <span style="font-size: 16px; font-weight: 800; color: var(--danger);">
          ⚠️ Practice Loop: Lesson ${lesson.id} • Streak: ${appState.recoveryStreak}/3
        </span>
        <button class="smarty-chat-toggle-btn" id="recoveryChatBtn" style="margin:0; padding: 8px 16px; font-size:13px;">💬 Ask AI Tutor</button>
      </div>
      <p style="font-size: 14px; color: var(--text-muted); text-align: center; margin-bottom: 12px; max-width: 300px;">
        Let's practice this concept. Answer 3 questions in a row correctly to get back to the Grade Review!
      </p>
      <div class="test-question-box" style="width: 100%; text-align: center; margin-bottom: 20px;">
        <div style="margin-bottom: 16px;">${q.visualContent}</div>
        <h3 style="font-size: 20px; font-weight: 800; color: var(--text-main);">${q.questionText}</h3>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; width: 100%; max-width: 320px;" id="recoveryOptions"></div>
    </div>
  `;
  
  speakText("Let's practice this. " + q.questionText);
  
  const optionsGrid = document.getElementById('recoveryOptions');
  q.options.forEach(opt => {
    const btn = document.createElement('button');
    btn.className = 'option-btn';
    btn.innerText = opt;
    btn.addEventListener('click', () => handleRecoveryChoice(opt, btn));
    optionsGrid.appendChild(btn);
  });

  // Bind AI Tutor Chatbot button
  const chatBtn = document.getElementById('recoveryChatBtn');
  if (chatBtn) {
    chatBtn.onclick = () => {
      sounds.playPop();
      const chatArea = container.querySelector('.smarty-chat-area');
      if (chatArea && chatArea.style.display !== 'none') {
        chatArea.style.display = 'none';
      } else {
        initSmartyChatbot(
          container,
          q,
          (correctAnswer) => {
            // Penalty callback: reset streak and reload next recovery question
            appState.recoveryStreak = 0;
            setTimeout(() => {
              renderRecoveryQuestion();
            }, 1000);
          },
          true // High Stakes
        );
        container.querySelector('.smarty-chat-area').style.display = 'block';
      }
    };
  }
}

function handleRecoveryChoice(choice, btnElement) {
  document.querySelectorAll('#recoveryOptions .option-btn').forEach(b => b.setAttribute('disabled', 'true'));
  
  const q = appState.currentRecoveryQuestion;
  let isCorrect = (choice === q.correctAnswer);
  
  if (appState.chatbotUsedForCurrentQuestion) {
    sounds.playWrong();
    btnElement.classList.add('wrong');
    btnElement.style.animation = 'wrong-shake 0.3s ease';
    isCorrect = false;
    appState.recoveryStreak = 0;
    
    // Highlight correct answer
    document.querySelectorAll('#recoveryOptions .option-btn').forEach(optBtn => {
      if (optBtn.innerText === q.correctAnswer) {
        optBtn.classList.add('correct');
      }
    });
  } else if (isCorrect) {
    sounds.playCorrect();
    btnElement.classList.add('correct');
    appState.recoveryStreak++;
  } else {
    sounds.playWrong();
    btnElement.classList.add('wrong');
    btnElement.style.animation = 'wrong-shake 0.3s ease';
    appState.recoveryStreak = 0;
  }
  
  const delay = appState.chatbotUsedForCurrentQuestion ? 2000 : 1000;
  setTimeout(() => {
    if (appState.recoveryStreak >= 3) {
      appState.examIndex++;
      const totalQs = appState.examQuestions.length;
      if (appState.examIndex < totalQs) {
        renderExamQuestion();
      } else {
        processExamResults();
      }
    } else {
      renderRecoveryQuestion();
    }
  }, delay);
}

function processExamResults() {
  const container = document.getElementById('step-view-4');
  const type = appState.examType;
  const score = appState.examScore;
  
  if (type === 'unit') {
    const totalQs = appState.examQuestions.length;
    const targetScore = (appState.currentSubject === 'geography' || appState.currentSubject === 'history' || appState.currentSubject === 'science' || appState.currentSubject === 'art') ? Math.ceil(totalQs * 0.8) : 25;
    const passed = score >= targetScore;
    if (passed) {
      appState.completedCounts.examsPassed[appState.examUnitId - 1] = true;
      appState.addStars(100);
      appState.saveState();
      appState.renderUI();
      
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
          <div style="font-size: 80px; animation: trophy-bounce 1s infinite alternate;">🏆</div>
          <h2 style="font-size: 32px; font-weight: 800; color: var(--success); margin-bottom: 8px;">UNIT EXAM PASSED!</h2>
          <p style="font-size: 18px; margin-bottom: 12px; font-weight: 700;">You scored ${score}/${totalQs}!</p>
          <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">Outstanding job! Unit ${appState.examUnitId} is fully mastered. Ready for the next unit?</p>
          <div class="reward-card" style="margin-bottom: 24px;">
            <span>⭐</span>
            <span>+100 Stars Reward!</span>
          </div>
          <button class="continue-btn" id="finishExamBtn">Back to Dashboard ➔</button>
        </div>
      `;
      sounds.playVictory();
      appState.confetti.burst(200);
      speakText(`Congratulations! You passed the unit exam with ${score} correct answers!`);
      
      document.getElementById('finishExamBtn').addEventListener('click', () => {
        document.getElementById('playgroundOverlay').classList.remove('active');
      });
    } else {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
          <div style="font-size: 64px; margin-bottom: 12px;">😢</div>
          <h3 style="font-size: 26px; font-weight: 800; color: var(--danger); margin-bottom: 8px;">Exam Failed</h3>
          <p style="font-size: 18px; margin-bottom: 12px;">Score: ${score}/${totalQs}</p>
          <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">You need to get at least ${targetScore} questions correct to pass this Unit Exam.</p>
          <button class="continue-btn" id="retryExamBtn" style="background: var(--warning); box-shadow: 0 6px 0 #d97706;">Try Exam Again ➔</button>
        </div>
      `;
      speakText(`You scored ${score} out of ${totalQs}. That's okay! Let's try the unit exam again.`);
      document.getElementById('retryExamBtn').addEventListener('click', () => {
        startUnitExam(appState.examUnitId);
      });
    }
  } else if (type === 'review') {
    appState.completedCounts.reviewCompleted = true;
    appState.addStars(200);
    appState.saveState();
    appState.renderUI();
    
    const totalQs = appState.examQuestions.length;
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
        <div style="font-size: 80px; animation: trophy-bounce 1s infinite alternate;">🧠</div>
        <h2 style="font-size: 28px; font-weight: 800; color: var(--success); margin-bottom: 8px;">GRADE REVIEW COMPLETED!</h2>
        <p style="font-size: 16px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">You successfully reviewed all ${totalQs} questions in Grade 1! You are ready for the final test!</p>
        <div class="reward-card" style="margin-bottom: 24px;">
          <span>⭐</span>
          <span>+200 Stars Reward!</span>
        </div>
        <button class="continue-btn" id="finishReviewBtn">Back to Dashboard ➔</button>
      </div>
    `;
    sounds.playVictory();
    appState.confetti.burst(250);
    speakText(`Excellent work! You completed the Grade 1 Review!`);
    
    document.getElementById('finishReviewBtn').addEventListener('click', () => {
      document.getElementById('playgroundOverlay').classList.remove('active');
    });
  } else if (type === 'test') {
    const totalQuestions = appState.examQuestions.length;
    const passingScore = Math.floor(totalQuestions * 0.9);
    const passed = score >= passingScore;
    if (passed) {
      const isNew = !appState.completedCounts.gradeTestPassed;
      appState.completedCounts.gradeTestPassed = true;
      appState.addStars(500);
      if (isNew) {
        appState.addPoints(20, "Passed Grade Final Test");
      } else {
        appState.saveState();
        appState.renderUI();
      }
      
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
          <div style="font-size: 100px; margin-bottom: 16px;">🎓</div>
          <h2 style="font-size: 36px; font-weight: 800; color: #eab308; text-shadow: 0 4px 0 #b45309; margin-bottom: 8px;">GRADE 1 GRADUATE!</h2>
          <p style="font-size: 20px; font-weight: 700; margin-bottom: 12px;">Final Score: ${score}/${totalQuestions}!</p>
          <p style="font-size: 16px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">Incredible! You have passed the Grade 1 Final Test and completed the curriculum!</p>
          <div class="reward-card" style="margin-bottom: 24px; background: #fef08a; border-color: #facc15;">
            <span style="font-size: 24px;">🏆</span>
            <span style="color: #854d0e; font-weight: 800;">+500 Stars Graduation Bonus!</span>
          </div>
          <button class="continue-btn" id="finishGradBtn" style="background: #eab308; box-shadow: 0 6px 0 #b45309;">Finish Graduation! 🎓</button>
        </div>
      `;
      sounds.playVictory();
      appState.confetti.burst(400);
      speakText(`Congratulations! You passed the Grade 1 Final Test and graduated! You got 500 stars!`);
      
      document.getElementById('finishGradBtn').addEventListener('click', () => {
        document.getElementById('playgroundOverlay').classList.remove('active');
      });
    } else {
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; padding: 40px;">
          <div style="font-size: 64px; margin-bottom: 12px;">😢</div>
          <h3 style="font-size: 26px; font-weight: 800; color: var(--danger); margin-bottom: 8px;">Grade Test Failed</h3>
          <p style="font-size: 18px; margin-bottom: 12px;">Score: ${score}/${totalQuestions}</p>
          <p style="font-size: 15px; color: var(--text-muted); margin-bottom: 24px; max-width: 320px;">You need to get at least ${passingScore} questions correct to pass the Grade Test.</p>
          <button class="continue-btn" id="retryTestBtn" style="background: var(--warning); box-shadow: 0 6px 0 #d97706;">Try Test Again ➔</button>
        </div>
      `;
      speakText(`You scored ${score} out of ${totalQuestions}. Let's try the Grade Test again.`);
      document.getElementById('retryTestBtn').addEventListener('click', () => {
        startGradeTest();
      });
    }
  }
}

// Populate Live Assignments & Reward Rules Legend Modal
function populateAssignmentsLegend() {
  const container = document.getElementById('legendListContent');
  if (!container) return;

  appState.checkDateResets();

  const missions = [
    {
      name: "Daily Lesson Explorer",
      points: "+1 pt",
      desc: "Complete 3 lessons of any subject today.",
      status: appState.dailyAssignmentSkipped 
        ? "Bypassed 🎟️" 
        : `${Math.min(3, appState.dailyLessonsCount)}/3 Completed`,
      completed: appState.dailyAssignmentSkipped || appState.dailyLessonsCount >= 3,
      badgeColor: "var(--color-blue-light)"
    },
    {
      name: "Subject Master",
      points: "+2 pts",
      desc: "Complete a lesson in all 6 subjects today (Math, ELA, History, Geography, Science, Art).",
      status: `${appState.dailyCompletedSubjects.length}/6 Played`,
      completed: appState.dailyCompletedSubjects.length >= 6,
      badgeColor: "var(--color-orange-accent)"
    },
    {
      name: "Math/ELA Lesson Completion",
      points: "+2 pts each",
      desc: "Complete a Math or ELA lesson for the first time.",
      status: "Active 📚",
      completed: false,
      badgeColor: "var(--color-purple-accent)"
    },
    {
      name: "Perfect Lesson Master",
      points: "+3 pts bonus",
      desc: "Get 10/10 on a Math/ELA final challenge without using any chatbot assistance or study hints.",
      status: "Active 🌟",
      completed: false,
      badgeColor: "#10b981"
    },
    {
      name: "Other Subject Completion",
      points: "+1 pt each",
      desc: "Complete a History, Geography, Science, or Art lesson for the first time.",
      status: "Active 🌍",
      completed: false,
      badgeColor: "var(--color-blue-accent)"
    },
    {
      name: "Perfect Test Score",
      points: "+1 pt bonus",
      desc: "Score a perfect 10/10 on a Math or ELA lesson's final challenge.",
      status: "Active 🎯",
      completed: false,
      badgeColor: "#ca8a04"
    },
    {
      name: "Finish a Unit",
      points: "+5 pts",
      desc: "Complete all the lessons inside any unit.",
      status: "Active 🏆",
      completed: false,
      badgeColor: "#ec4899"
    },
    {
      name: "Finish a Grade",
      points: "+20 pts",
      desc: "Pass the Final Grade Graduation Test.",
      status: appState.completedCounts.gradeTestPassed ? "Completed 🎓" : "Active 🎓",
      completed: appState.completedCounts.gradeTestPassed,
      badgeColor: "#eab308"
    },
    {
      name: "Streak Milestone",
      points: "+1 pt bonus",
      desc: "Maintain a daily learning streak! Earn a point every multiple of 5 streak days (5, 10, 15...).",
      status: `Current Streak: ${appState.streak} Days 🔥`,
      completed: false,
      badgeColor: "#ef4444"
    }
  ];

  container.innerHTML = '';
  missions.forEach(m => {
    const card = document.createElement('div');
    card.style.cssText = `
      background: rgba(255, 255, 255, 0.03);
      border: 2px solid ${m.completed ? 'var(--success)' : 'rgba(255, 255, 255, 0.05)'};
      border-radius: 12px;
      padding: 12px 16px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 12px;
      transition: all 0.2s;
    `;
    if (m.completed) {
      card.style.background = 'rgba(16, 185, 129, 0.06)';
      card.style.boxShadow = '0 0 10px rgba(16, 185, 129, 0.1)';
    }

    card.innerHTML = `
      <div style="flex: 1; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 850; font-size: 14px; color: white;">${m.name}</span>
          <span style="font-size: 11px; font-weight: 800; color: ${m.completed ? 'white' : '#fef08a'}; background: ${m.completed ? 'var(--success)' : 'rgba(234, 179, 8, 0.15)'}; padding: 2px 8px; border-radius: 8px;">${m.points}</span>
        </div>
        <p style="margin: 0; font-size: 12px; color: #cbd5e1; font-weight: 600; line-height: 1.4;">${m.desc}</p>
      </div>
      <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
        <span style="font-size: 12px; font-weight: 850; color: ${m.completed ? 'var(--success)' : '#94a3b8'}; background: ${m.completed ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255,255,255,0.05)'}; padding: 4px 10px; border-radius: 12px; white-space: nowrap; border: 1.5px solid ${m.completed ? 'var(--success)' : 'rgba(255,255,255,0.1)'};">
          ${m.completed ? 'Completed ✅' : m.status}
        </span>
      </div>
    `;

    container.appendChild(card);
  });
}

// ── Weekly ISO-week helper ──────────────────────────────────
function getISOWeekKey(date) {
  const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
  const day = d.getUTCDay() || 7; // Monday = 1
  d.setUTCDate(d.getUTCDate() + 4 - day);
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
  const weekNum = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
  return `${d.getUTCFullYear()}-W${String(weekNum).padStart(2, '0')}`;
}

// ── Record a lesson completion for the current user in weekly tracking ──
function recordWeeklyLesson() {
  if (!window.AuthSystem || !window.AuthSystem.currentUsername) return;
  const users = window.AuthSystem.getUsers();
  const key = window.AuthSystem.currentUsername;
  if (!users[key]) return;
  const weekKey = getISOWeekKey(new Date());
  if (!users[key].weeklyData) users[key].weeklyData = {};
  if (users[key].weeklyData.week !== weekKey) {
    // New week — reset count
    users[key].weeklyData = { week: weekKey, lessons: 0 };
  }
  users[key].weeklyData.lessons += 1;
  window.AuthSystem.saveUsers(users);
}

function renderLeaderboardData() {
  const users = window.AuthSystem ? window.AuthSystem.getUsers() : {};
  const currentKey = window.AuthSystem ? window.AuthSystem.currentUsername : null;
  const weekKey = getISOWeekKey(new Date());

  // ── Accounts created stat ────────────────────────────────
  const totalAccounts = Object.keys(users).length;
  const accountsEl = document.getElementById('accountsCreatedCount');
  if (accountsEl) accountsEl.textContent = totalAccounts;

  // ── Weekly reset label ───────────────────────────────────
  const resetLabel = document.getElementById('weeklyResetLabel');
  if (resetLabel) {
    const now = new Date();
    const dayOfWeek = now.getDay() || 7;
    const daysUntilMonday = dayOfWeek === 1 ? 7 : 8 - dayOfWeek;
    const nextMonday = new Date(now);
    nextMonday.setDate(now.getDate() + daysUntilMonday);
    const opts = { weekday: 'long', month: 'short', day: 'numeric' };
    resetLabel.textContent = `Resets every Monday · Next reset: ${nextMonday.toLocaleDateString('en-US', opts)}`;
  }

  // ── Build real player list from registered users only ────
  const allPlayers = Object.entries(users).map(([uname, data]) => {
    const savedState = data.state || {};
    const weeklyLessons = (data.weeklyData && data.weeklyData.week === weekKey)
      ? data.weeklyData.lessons : 0;
    return {
      name: data.displayName || uname,
      avatarEmoji: data.avatarEmoji || '🐼',
      streak: savedState.streak || 0,
      monthlyLessons: savedState.monthlyLessonsCount || 0,
      stars: savedState.stars || 0,
      points: savedState.points || 0,
      weeklyLessons,
      isPlayer: uname === currentKey
    };
  });

  // ── 0. Weekly Lessons Leaderboard (top 10, real users only) ─
  const weeklyRanked = [...allPlayers]
    .sort((a, b) => b.weeklyLessons - a.weeklyLessons)
    .slice(0, 10);
  const weeklyList = document.getElementById('weeklyLeaderboardList');
  const weeklyEmpty = document.getElementById('weeklyEmptyState');
  if (weeklyList) {
    weeklyList.innerHTML = '';
    const hasActivity = weeklyRanked.some(p => p.weeklyLessons > 0);
    if (!hasActivity) {
      if (weeklyEmpty) weeklyEmpty.style.display = 'block';
    } else {
      if (weeklyEmpty) weeklyEmpty.style.display = 'none';
      const topCount = Math.max(1, weeklyRanked[0].weeklyLessons);
      weeklyRanked.forEach((p, idx) => {
        if (p.weeklyLessons === 0) return; // skip zero-lesson users
        const row = document.createElement('div');
        const isTop3 = idx < 3;
        const rankColors = ['#fbbf24', '#c0cad8', '#f97316'];
        row.style.cssText = `
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 18px;
          border-radius: 14px;
          background: ${p.isPlayer ? 'rgba(251,191,36,0.12)' : 'rgba(255,255,255,0.04)'};
          border: 2px solid ${p.isPlayer ? 'rgba(251,191,36,0.45)' : (isTop3 ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.05)')};
          ${p.isPlayer ? 'box-shadow: 0 0 0 1px rgba(251,191,36,0.15);' : ''}
        `;
        let medal = `<span style="font-size:15px;font-weight:900;color:#64748b;min-width:24px;text-align:center;">${idx + 1}</span>`;
        if (idx === 0) medal = '<span style="font-size:22px;min-width:24px;text-align:center;">🥇</span>';
        else if (idx === 1) medal = '<span style="font-size:22px;min-width:24px;text-align:center;">🥈</span>';
        else if (idx === 2) medal = '<span style="font-size:22px;min-width:24px;text-align:center;">🥉</span>';
        const barPct = Math.round((p.weeklyLessons / topCount) * 100);
        const barColor = isTop3 ? rankColors[idx] : '#6366f1';
        row.innerHTML = `
          ${medal}
          <span style="font-size:24px;line-height:1;">${p.avatarEmoji}</span>
          <div style="flex:1;min-width:0;">
            <div style="font-size:15px;font-weight:800;color:${p.isPlayer ? '#fbbf24' : 'white'};margin-bottom:6px;display:flex;align-items:center;gap:8px;">
              ${p.name}
              ${p.isPlayer ? '<span style="font-size:11px;font-weight:700;color:rgba(251,191,36,0.65);background:rgba(251,191,36,0.1);padding:2px 8px;border-radius:20px;">You</span>' : ''}
            </div>
            <div style="display:flex;align-items:center;gap:10px;">
              <div style="flex:1;height:7px;background:rgba(255,255,255,0.07);border-radius:99px;overflow:hidden;">
                <div style="height:100%;width:${barPct}%;background:${barColor};border-radius:99px;transition:width 0.5s cubic-bezier(0.4,0,0.2,1);"></div>
              </div>
              <span style="font-size:14px;font-weight:900;color:#fde68a;white-space:nowrap;">${p.weeklyLessons} lesson${p.weeklyLessons !== 1 ? 's' : ''}</span>
            </div>
          </div>
        `;
        weeklyList.appendChild(row);
      });
    }
  }

  // ── 1–4. Other leaderboards (real users only) ────────────
  const streakSorted = [...allPlayers].sort((a, b) => b.streak - a.streak);
  renderTable('streakLeaderboardList', streakSorted, 'streak', 'day streak 🔥');

  const monthlySorted = [...allPlayers].sort((a, b) => b.monthlyLessons - a.monthlyLessons);
  renderTable('monthlyLeaderboardList', monthlySorted, 'monthlyLessons', 'lessons this month 📚');

  const starSorted = [...allPlayers].sort((a, b) => b.stars - a.stars);
  renderTable('starLeaderboardList', starSorted, 'stars', 'stars ⭐');

  const coinSorted = [...allPlayers].sort((a, b) => b.points - a.points);
  renderTable('coinLeaderboardList', coinSorted, 'points', 'coins 🪙');
}

function renderTable(containerId, sortedList, valueKey, valueSuffix) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';

  if (sortedList.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:24px 12px;color:rgba(255,255,255,0.25);font-size:13px;font-weight:700;">No players yet 👾</div>';
    return;
  }

  const topValue = Math.max(1, sortedList[0][valueKey]);

  sortedList.forEach((p, idx) => {
    const row = document.createElement('div');
    const isTop3 = idx < 3;
    const barPct = Math.round(((p[valueKey] || 0) / topValue) * 100);

    row.style.cssText = `
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 12px 14px;
      border-radius: 12px;
      background: ${p.isPlayer ? 'rgba(99,102,241,0.12)' : 'rgba(255,255,255,0.03)'};
      border: 1.5px solid ${p.isPlayer ? 'rgba(99,102,241,0.4)' : (isTop3 ? 'rgba(255,255,255,0.09)' : 'rgba(255,255,255,0.04)')};
      ${p.isPlayer ? 'box-shadow: 0 0 0 1px rgba(99,102,241,0.12);' : ''}
    `;

    let medal = `<span style="font-size:13px;font-weight:900;color:#64748b;min-width:20px;text-align:center;">${idx + 1}</span>`;
    if (idx === 0) medal = '<span style="font-size:20px;min-width:20px;text-align:center;">🥇</span>';
    else if (idx === 1) medal = '<span style="font-size:20px;min-width:20px;text-align:center;">🥈</span>';
    else if (idx === 2) medal = '<span style="font-size:20px;min-width:20px;text-align:center;">🥉</span>';

    row.innerHTML = `
      ${medal}
      <span style="font-size:20px;line-height:1;">${p.avatarEmoji || '🐼'}</span>
      <div style="flex:1;min-width:0;">
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;margin-bottom:5px;">
          <span style="font-size:14px;font-weight:800;color:${p.isPlayer ? '#818cf8' : 'white'};white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:130px;">
            ${p.name}${p.isPlayer ? ' <span style="font-size:10px;color:rgba(129,140,248,0.65);font-weight:700;">(You)</span>' : ''}
          </span>
          <span style="font-size:13px;font-weight:900;color:${p.isPlayer ? '#a5b4fc' : '#e2e8f0'};white-space:nowrap;background:rgba(255,255,255,0.05);padding:3px 10px;border-radius:20px;">
            ${(p[valueKey] || 0).toLocaleString()} ${valueSuffix}
          </span>
        </div>
        <div style="height:5px;background:rgba(255,255,255,0.06);border-radius:99px;overflow:hidden;">
          <div style="height:100%;width:${barPct}%;background:${p.isPlayer ? '#6366f1' : (isTop3 ? '#a78bfa' : '#334155')};border-radius:99px;transition:width 0.4s;"></div>
        </div>
      </div>
    `;

    container.appendChild(row);
  });
}


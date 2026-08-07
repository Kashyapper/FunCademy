// ============================================================
// MATH QUIZ TOPIC GENERATORS (Grades 2-5)
// Procedural, title-dispatched question generators that replace
// the old ID-bucketed getGradeSpecificDynamicQuestion fallback,
// which mismatched quiz topics to lesson titles.
// ============================================================

function uniqOptions(correct, distractors) {
  const cs = String(correct);
  const opts = [cs];
  for (const d of distractors) {
    const s = String(d);
    if (s !== cs && !opts.includes(s)) opts.push(s);
    if (opts.length === 4) break;
  }
  let pad = 1;
  while (opts.length < 4) {
    const n = Number(correct);
    const fracMatch = cs.match(/^(\d+)\/(\d+)$/);
    let candidate;
    if (fracMatch) {
      candidate = `${parseInt(fracMatch[1], 10) + pad}/${fracMatch[2]}`;
    } else if (!isNaN(n)) {
      candidate = String(n + pad * 3);
    } else {
      candidate = cs + '?'.repeat(pad);
    }
    if (!opts.includes(candidate)) opts.push(candidate);
    pad++;
  }
  return opts;
}

function gcdMQ(a, b) {
  a = Math.abs(a); b = Math.abs(b);
  while (b) { const t = b; b = a % b; a = t; }
  return a || 1;
}

// ---------- Whole number operations ----------

function genAddition(seed, idx, opts) {
  opts = opts || {};
  const digits = opts.digits || 2;
  let a, b;
  if (opts.forceRegroup && digits === 2) {
    const aOnesF = 5 + ((seed + idx) % 5);
    const bOnesF = 5 + ((seed * 3 + idx * 5) % 5);
    const aTens = 1 + ((seed * 7) % 8);
    const bTens = 1 + ((idx * 11) % 8);
    a = aTens * 10 + aOnesF;
    b = bTens * 10 + bOnesF;
  } else {
    const lo = Math.pow(10, digits - 1);
    const hi = Math.pow(10, digits) - 1;
    const range = hi - lo + 1;
    a = lo + ((seed * 3 + idx * 11) % range);
    b = lo + ((seed * 5 + idx * 7) % range);
  }
  const sum = a + b;
  return {
    questionText: `Solve: ${a} + ${b} = ?`,
    correctAnswer: String(sum),
    options: uniqOptions(sum, [sum + 1, sum - 1, sum + 10]),
    visualContent: `<div style="font-size: 48px;">➕🔢</div>`,
    hint: `${a} plus ${b} equals ${sum}!`
  };
}

function genSubtraction(seed, idx, opts) {
  opts = opts || {};
  const digits = opts.digits || 2;
  let a, b;
  if (opts.forceRegroup && digits === 2) {
    const aOnes = (seed + idx) % 4;
    const bOnes = 5 + ((seed * 3 + idx * 5) % 5);
    const bTens = 1 + ((idx * 11) % 7);
    const aTens = bTens + 1 + ((seed * 7) % Math.max(1, 9 - bTens));
    a = aTens * 10 + aOnes;
    b = bTens * 10 + bOnes;
  } else {
    const lo = Math.pow(10, digits - 1);
    const hi = Math.pow(10, digits) - 1;
    const range = hi - lo + 1;
    let x = lo + ((seed * 3 + idx * 11) % range);
    let y = lo + ((seed * 5 + idx * 7) % range);
    a = Math.max(x, y); b = Math.min(x, y);
    if (a === b) b = Math.max(lo, b - 1);
  }
  const diff = a - b;
  return {
    questionText: `Solve: ${a} - ${b} = ?`,
    correctAnswer: String(diff),
    options: uniqOptions(diff, [diff + 1, diff - 1, diff + 10]),
    visualContent: `<div style="font-size: 48px;">➖🔢</div>`,
    hint: `${a} minus ${b} equals ${diff}!`
  };
}

function genMixedAddSub(seed, idx, opts) {
  return (idx % 2 === 0) ? genAddition(seed, idx, opts) : genSubtraction(seed, idx, opts);
}

const WORD_PROBLEM_ITEMS = [
  { obj: 'stickers', emoji: '⭐' }, { obj: 'marbles', emoji: '🔵' }, { obj: 'books', emoji: '📚' },
  { obj: 'cookies', emoji: '🍪' }, { obj: 'crayons', emoji: '🖍️' }, { obj: 'toy cars', emoji: '🚗' }
];
function genWordProblemAddSub(seed, idx, opts) {
  opts = opts || {};
  const digits = opts.digits || 2;
  const lo = Math.pow(10, digits - 1);
  const hi = Math.pow(10, digits) - 1;
  const range = hi - lo + 1;
  const item = WORD_PROBLEM_ITEMS[(seed + idx) % WORD_PROBLEM_ITEMS.length];
  const a = lo + ((seed * 3 + idx * 11) % range);
  const isAdd = idx % 2 === 0;
  let b, correct, text;
  if (isAdd) {
    b = lo + ((seed * 5 + idx * 7) % range);
    correct = a + b;
    text = `Maya had ${a} ${item.obj}. She got ${b} more ${item.obj}. How many ${item.obj} does she have now?`;
  } else {
    b = 1 + ((seed * 5 + idx * 7) % Math.max(1, a - 1));
    if (b >= a) b = a - 1;
    if (b < 1) b = 1;
    correct = a - b;
    text = `Maya had ${a} ${item.obj}. She gave away ${b} ${item.obj}. How many ${item.obj} does she have left?`;
  }
  return {
    questionText: text,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + 1, correct - 1, correct + 10]),
    visualContent: `<div style="font-size: 48px;">${item.emoji}</div>`,
    hint: isAdd ? `${a} + ${b} = ${correct}` : `${a} - ${b} = ${correct}`
  };
}

function genPlaceValueHundreds(seed, idx) {
  const num = 100 + ((seed * 13 + idx * 17) % 900);
  const hundreds = Math.floor(num / 100);
  const tens = Math.floor((num % 100) / 10);
  const ones = num % 10;
  if (idx % 2 === 0) {
    const places = [{ name: 'hundreds', val: hundreds }, { name: 'tens', val: tens }, { name: 'ones', val: ones }];
    const p = places[(seed + idx) % places.length];
    const distractors = places.filter(x => x.name !== p.name).map(x => x.val);
    distractors.push(p.val + 1);
    return {
      questionText: `What digit is in the ${p.name} place of ${num}?`,
      correctAnswer: String(p.val),
      options: uniqOptions(p.val, distractors),
      visualContent: `<div style="font-size: 48px;">🔢💯</div>`,
      hint: `In ${num}, the digits are ${hundreds} hundreds, ${tens} tens, and ${ones} ones.`
    };
  } else {
    return {
      questionText: `How many hundreds are in the number ${num}?`,
      correctAnswer: String(hundreds),
      options: uniqOptions(hundreds, [hundreds + 1, hundreds - 1, tens]),
      visualContent: `<div style="font-size: 48px;">🔢💯</div>`,
      hint: `${num} has ${hundreds} hundreds, ${tens} tens, and ${ones} ones.`
    };
  }
}

function genComparingNumbers(seed, idx, opts) {
  opts = opts || {};
  const digits = opts.digits || 3;
  const lo = Math.pow(10, digits - 1);
  const hi = Math.pow(10, digits) - 1;
  const range = hi - lo + 1;
  let a = lo + ((seed * 3 + idx * 11) % range);
  let b = lo + ((seed * 7 + idx * 5) % range);
  if (a === b) b = (a === hi) ? a - 1 : a + 1;
  const askGreater = idx % 2 === 0;
  const correct = askGreater ? Math.max(a, b) : Math.min(a, b);
  return {
    questionText: `Which number is ${askGreater ? 'greater' : 'smaller'}: ${a} or ${b}?`,
    correctAnswer: String(correct),
    options: [String(a), String(b)],
    visualContent: `<div style="font-size: 48px;">⚖️🔢</div>`,
    hint: `Compare digit by digit from the left. ${Math.max(a, b)} is greater than ${Math.min(a, b)}.`
  };
}

function genSkipCounting(seed, idx, opts) {
  opts = opts || {};
  const steps = opts.steps || [5, 10];
  const step = steps[idx % steps.length];
  const startMult = 1 + ((seed + idx) % 8);
  const n1 = startMult * step, n2 = n1 + step, n3 = n2 + step, n4 = n3 + step, correct = n4 + step;
  return {
    questionText: `What comes next: ${n1}, ${n2}, ${n3}, ${n4}, __?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + step, correct - step, n4]),
    visualContent: `<div style="font-size: 48px;">🔢➡️</div>`,
    hint: `Each number increases by ${step}. ${n4} + ${step} = ${correct}.`
  };
}

// ---------- Measurement, time, money ----------

const LENGTH_OBJECTS = {
  inches: [{ obj: 'a crayon', len: 3 }, { obj: 'a pencil', len: 7 }, { obj: 'a notebook', len: 11 }, { obj: 'a shoe', len: 10 }],
  centimeters: [{ obj: 'a paperclip', len: 3 }, { obj: 'a crayon', len: 8 }, { obj: 'a marker', len: 14 }, { obj: 'a book', len: 25 }]
};
function genMeasuringLength(seed, idx, opts) {
  opts = opts || {};
  const unit = opts.unit || 'inches';
  const bank = LENGTH_OBJECTS[unit] || LENGTH_OBJECTS.inches;
  const item = bank[(seed + idx) % bank.length];
  const correct = item.len;
  return {
    questionText: `About how many ${unit} long is ${item.obj}?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct * 3, Math.max(1, correct - 2), correct + 5]),
    visualContent: `<div style="font-size: 48px;">📏</div>`,
    hint: `${item.obj} is about ${correct} ${unit} long.`
  };
}

function genCompareLengths(seed, idx) {
  const unit = idx % 2 === 0 ? 'inches' : 'centimeters';
  const a = 2 + ((seed * 3 + idx) % 20);
  let b = 2 + ((seed * 5 + idx * 7) % 20);
  if (a === b) b = a + 3;
  const askLonger = idx % 2 === 0;
  const correct = askLonger ? Math.max(a, b) : Math.min(a, b);
  return {
    questionText: `Object A is ${a} ${unit} long. Object B is ${b} ${unit} long. Which is ${askLonger ? 'longer' : 'shorter'}?`,
    correctAnswer: correct === a ? 'Object A' : 'Object B',
    options: ['Object A', 'Object B'],
    visualContent: `<div style="font-size: 48px;">📏📐</div>`,
    hint: `${a} ${unit} vs ${b} ${unit} — ${Math.max(a, b)} is the longer length.`
  };
}

function genEstimateLength(seed, idx) {
  const unit = idx % 2 === 0 ? 'inches' : 'centimeters';
  return genMeasuringLength(seed, idx, { unit });
}

function genMeasurementWordProblem(seed, idx) {
  const unit = idx % 2 === 0 ? 'inches' : 'centimeters';
  const a = 5 + ((seed * 3 + idx) % 30);
  const b = 2 + ((seed * 7 + idx * 5) % 15);
  const isAdd = idx % 2 === 0;
  const big = Math.max(a, b), small = Math.min(a, b);
  const correct = isAdd ? a + b : big - small;
  const text = isAdd
    ? `A ribbon is ${a} ${unit} long. Another ribbon is ${b} ${unit} long. If you join them, how long are they together?`
    : `A ribbon is ${big} ${unit} long. You cut off ${small} ${unit}. How long is the ribbon now?`;
  return {
    questionText: text,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + 1, correct - 1, correct + 5]),
    visualContent: `<div style="font-size: 48px;">📏🎀</div>`,
    hint: isAdd ? `${a} + ${b} = ${correct}` : `${big} - ${small} = ${correct}`
  };
}

function genTellingTime(seed, idx, opts) {
  opts = opts || {};
  const precision = opts.precision || 5;
  const hour = 1 + ((seed + idx) % 12);
  const steps = Math.floor(60 / precision);
  const minute = ((seed * 7 + idx * 11) % steps) * precision;
  const mm = String(minute).padStart(2, '0');
  const correct = `${hour}:${mm}`;
  const wrongMin1 = (minute + precision) % 60;
  const wrongMin2 = (minute - precision + 60) % 60;
  const wrongHour = (hour % 12) + 1;
  return {
    questionText: minute === 0 ? `It is exactly ${hour} o'clock. What time is that?` : `It is ${minute} minutes past ${hour}. What time is that?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`${hour}:${String(wrongMin1).padStart(2, '0')}`, `${hour}:${String(wrongMin2).padStart(2, '0')}`, `${wrongHour}:${mm}`]),
    visualContent: `<div style="font-size: 48px;">🕐</div>`,
    hint: `${minute} minutes past ${hour} is written as ${correct}.`
  };
}

function genElapsedTime(seed, idx) {
  const startHour = 1 + ((seed + idx) % 12);
  const startMin = ((seed * 7 + idx * 11) % 12) * 5;
  const duration = 5 * (1 + ((seed * 3 + idx * 5) % 11));
  let endMin = startMin + duration;
  let endHour = startHour;
  while (endMin >= 60) { endMin -= 60; endHour += 1; }
  if (endHour > 12) endHour -= 12;
  const startStr = `${startHour}:${String(startMin).padStart(2, '0')}`;
  const endStr = `${endHour}:${String(endMin).padStart(2, '0')}`;
  if (idx % 2 === 0) {
    return {
      questionText: `A movie starts at ${startStr} and lasts ${duration} minutes. What time does it end?`,
      correctAnswer: endStr,
      options: uniqOptions(endStr, [`${endHour}:${String((endMin + 5) % 60).padStart(2, '0')}`, `${endHour}:${String(Math.max(0, endMin - 5)).padStart(2, '0')}`, `${(endHour % 12) + 1}:${String(endMin).padStart(2, '0')}`]),
      visualContent: `<div style="font-size: 48px;">⏱️</div>`,
      hint: `${startStr} + ${duration} minutes = ${endStr}.`
    };
  } else {
    return {
      questionText: `A movie starts at ${startStr} and ends at ${endStr}. How many minutes did it last?`,
      correctAnswer: `${duration} minutes`,
      options: uniqOptions(`${duration} minutes`, [`${duration + 5} minutes`, `${Math.max(5, duration - 5)} minutes`, `${duration + 10} minutes`]),
      visualContent: `<div style="font-size: 48px;">⏱️</div>`,
      hint: `From ${startStr} to ${endStr} is ${duration} minutes.`
    };
  }
}

const AMPM_ACTIVITIES = [
  { act: 'eat breakfast', hour: 7, period: 'A.M.' }, { act: 'go to school', hour: 8, period: 'A.M.' },
  { act: 'eat lunch', hour: 12, period: 'P.M.' }, { act: 'do homework after school', hour: 4, period: 'P.M.' },
  { act: 'eat dinner', hour: 6, period: 'P.M.' }, { act: 'go to bed', hour: 9, period: 'P.M.' },
  { act: 'wake up', hour: 7, period: 'A.M.' }, { act: 'watch the sunrise', hour: 6, period: 'A.M.' }
];
function genAMPM(seed, idx) {
  const item = AMPM_ACTIVITIES[(seed + idx) % AMPM_ACTIVITIES.length];
  return {
    questionText: `You usually ${item.act} at ${item.hour} o'clock. Is that A.M. or P.M.?`,
    correctAnswer: item.period,
    options: ['A.M.', 'P.M.'],
    visualContent: `<div style="font-size: 48px;">🌅🌙</div>`,
    hint: item.period === 'A.M.' ? `A.M. is morning time, before noon.` : `P.M. is afternoon/evening time, after noon.`
  };
}

const COIN_VALUES = { penny: 1, nickel: 5, dime: 10, quarter: 25 };
function genMoney(seed, idx, opts) {
  opts = opts || {};
  const coinTypes = opts.coins || ['penny', 'nickel'];
  const count = 2 + ((seed + idx) % 3);
  let total = 0;
  const used = [];
  for (let i = 0; i < count; i++) {
    const c = coinTypes[(seed * 3 + idx * 7 + i) % coinTypes.length];
    total += COIN_VALUES[c];
    used.push(c);
  }
  const correct = `${total}¢`;
  return {
    questionText: `You have ${used.join(', ')}. What is the total value?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`${total + 5}¢`, `${Math.max(1, total - 5)}¢`, `${total + 1}¢`]),
    visualContent: `<div style="font-size: 48px;">🪙</div>`,
    hint: `Add up the coin values: ${used.map(c => COIN_VALUES[c] + '¢').join(' + ')} = ${total}¢.`
  };
}

const MONEY_ITEMS = [
  { name: 'a pencil', price: 35 }, { name: 'an eraser', price: 25 }, { name: 'a sticker', price: 15 },
  { name: 'a notebook', price: 75 }, { name: 'a juice box', price: 60 }
];
function genMoneyWordProblem(seed, idx) {
  const item1 = MONEY_ITEMS[(seed + idx) % MONEY_ITEMS.length];
  const item2 = MONEY_ITEMS[(seed * 3 + idx * 5 + 1) % MONEY_ITEMS.length];
  if (idx % 2 === 0) {
    const total = item1.price + item2.price;
    return {
      questionText: `${item1.name} costs ${item1.price}¢ and ${item2.name} costs ${item2.price}¢. How much do both cost together?`,
      correctAnswer: `${total}¢`,
      options: uniqOptions(`${total}¢`, [`${total + 10}¢`, `${total - 10}¢`, `${total + 5}¢`]),
      visualContent: `<div style="font-size: 48px;">🪙🛒</div>`,
      hint: `${item1.price}¢ + ${item2.price}¢ = ${total}¢`
    };
  } else {
    const change = 100 - item1.price;
    return {
      questionText: `${item1.name} costs ${item1.price}¢. You pay with $1.00 (100¢). How much change do you get?`,
      correctAnswer: `${change}¢`,
      options: uniqOptions(`${change}¢`, [`${change + 10}¢`, `${change - 10}¢`, `${item1.price}¢`]),
      visualContent: `<div style="font-size: 48px;">🪙💵</div>`,
      hint: `100¢ - ${item1.price}¢ = ${change}¢`
    };
  }
}

// ---------- Shapes ----------

const SHAPES_SIDES = [
  { name: 'triangle', sides: 3 }, { name: 'square', sides: 4 }, { name: 'pentagon', sides: 5 },
  { name: 'hexagon', sides: 6 }, { name: 'heptagon', sides: 7 }, { name: 'octagon', sides: 8 }
];
function genShapeSides(seed, idx) {
  const s = SHAPES_SIDES[(seed + idx) % SHAPES_SIDES.length];
  const askCorners = idx % 2 === 1;
  return {
    questionText: `How many ${askCorners ? 'corners' : 'sides'} does a ${s.name} have?`,
    correctAnswer: String(s.sides),
    options: uniqOptions(s.sides, SHAPES_SIDES.filter(x => x.name !== s.name).map(x => x.sides)),
    visualContent: `<div style="font-size: 48px;">📐</div>`,
    hint: `A ${s.name} has exactly ${s.sides} straight sides and ${s.sides} corners.`
  };
}

const SHAPES_3D_FV = [
  { name: 'cube', faces: 6, vertices: 8 }, { name: 'rectangular prism', faces: 6, vertices: 8 },
  { name: 'square pyramid', faces: 5, vertices: 5 }, { name: 'cone', faces: 1, vertices: 0 },
  { name: 'cylinder', faces: 2, vertices: 0 }
];
function genFacesVertices(seed, idx) {
  const s = SHAPES_3D_FV[(seed + idx) % SHAPES_3D_FV.length];
  const askVertices = idx % 2 === 1;
  const correct = askVertices ? s.vertices : s.faces;
  return {
    questionText: `How many ${askVertices ? 'vertices (corners)' : 'faces'} does a ${s.name} have?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, SHAPES_3D_FV.filter(x => x.name !== s.name).map(x => askVertices ? x.vertices : x.faces)),
    visualContent: `<div style="font-size: 48px;">📦</div>`,
    hint: `A ${s.name} has ${s.faces} faces and ${s.vertices} vertices.`
  };
}

const SHAPE_CLASSIFY_BANK = [
  { q: 'Which shape has exactly 3 sides?', correct: 'Triangle', options: ['Triangle', 'Square', 'Pentagon', 'Hexagon'] },
  { q: 'Which shape has exactly one pair of parallel sides?', correct: 'Trapezoid', options: ['Trapezoid', 'Square', 'Rectangle', 'Rhombus'] },
  { q: 'Which shape has 4 equal sides and 4 right angles?', correct: 'Square', options: ['Square', 'Rectangle', 'Rhombus', 'Trapezoid'] },
  { q: 'Which shape has all sides equal but does not have to have right angles?', correct: 'Rhombus', options: ['Rhombus', 'Square', 'Rectangle', 'Trapezoid'] },
  { q: 'Which shape has exactly 5 sides?', correct: 'Pentagon', options: ['Pentagon', 'Hexagon', 'Square', 'Triangle'] },
  { q: 'Which shape has 2 pairs of parallel sides and 4 right angles?', correct: 'Rectangle', options: ['Rectangle', 'Rhombus', 'Trapezoid', 'Triangle'] }
];
function genShapeClassification(seed, idx) {
  const item = SHAPE_CLASSIFY_BANK[(seed + idx) % SHAPE_CLASSIFY_BANK.length];
  return { questionText: item.q, correctAnswer: item.correct, options: item.options, visualContent: `<div style="font-size: 48px;">🔺🔷</div>`, hint: `Think about the number of sides and angles.` };
}

const QUAD_BANK = [
  { q: 'A square is always a type of which other shape?', correct: 'Rectangle', options: ['Rectangle', 'Triangle', 'Pentagon', 'Circle'] },
  { q: 'Which quadrilateral has exactly one pair of parallel sides?', correct: 'Trapezoid', options: ['Trapezoid', 'Square', 'Rhombus', 'Rectangle'] },
  { q: 'How many sides does every quadrilateral have?', correct: '4', options: ['4', '3', '5', '6'] },
  { q: 'Which shape has 4 sides of equal length but angles that are not always 90 degrees?', correct: 'Rhombus', options: ['Rhombus', 'Square', 'Rectangle', 'Trapezoid'] },
  { q: 'A rectangle always has how many right angles?', correct: '4', options: ['4', '2', '3', '0'] },
  { q: 'Which quadrilateral has two pairs of parallel sides but is not a rectangle or rhombus?', correct: 'Parallelogram', options: ['Parallelogram', 'Trapezoid', 'Square', 'Triangle'] }
];
function genQuadrilaterals(seed, idx) {
  const item = QUAD_BANK[(seed + idx) % QUAD_BANK.length];
  return { questionText: item.q, correctAnswer: item.correct, options: item.options, visualContent: `<div style="font-size: 48px;">◻️</div>`, hint: `All quadrilaterals have 4 sides.` };
}

function genPartitioningShapes(seed, idx) {
  const n = 2 + ((seed + idx) % 7);
  return {
    questionText: `If a rectangle is cut into ${n} equal parts, what fraction of the whole is each part?`,
    correctAnswer: `1/${n}`,
    options: uniqOptions(`1/${n}`, [`1/${n + 1}`, `${n}/${n}`, `2/${n}`]),
    visualContent: `<div style="font-size: 48px;">▭✂️</div>`,
    hint: `Cutting a shape into ${n} equal parts means each part is 1/${n} of the whole.`
  };
}

const SYMMETRY_BANK = [
  { shape: 'the letter A', has: true, lines: 1 }, { shape: 'the letter F', has: false, lines: 0 },
  { shape: 'a circle', has: true, lines: 'infinitely many' }, { shape: 'a square', has: true, lines: 4 },
  { shape: 'the letter N', has: false, lines: 0 }, { shape: 'the letter M', has: true, lines: 1 },
  { shape: 'a regular triangle', has: true, lines: 3 }, { shape: 'the letter R', has: false, lines: 0 }
];
function genSymmetry(seed, idx) {
  const item = SYMMETRY_BANK[(seed + idx) % SYMMETRY_BANK.length];
  return {
    questionText: `Does ${item.shape} have a line of symmetry?`,
    correctAnswer: item.has ? 'Yes' : 'No',
    options: ['Yes', 'No'],
    visualContent: `<div style="font-size: 48px;">🪞</div>`,
    hint: item.has ? `${item.shape} can be folded in half so both sides match — it has ${item.lines} line(s) of symmetry.` : `${item.shape} cannot be folded so both halves match exactly.`
  };
}

const SHAPES_3D_BANK = [
  { q: 'Which 3D shape looks like a can of soup?', correct: 'Cylinder', options: ['Cylinder', 'Cube', 'Cone', 'Sphere'] },
  { q: 'Which 3D shape looks like a ball?', correct: 'Sphere', options: ['Sphere', 'Cube', 'Cylinder', 'Pyramid'] },
  { q: 'Which 3D shape has 6 identical square faces?', correct: 'Cube', options: ['Cube', 'Rectangular prism', 'Cylinder', 'Cone'] },
  { q: 'Which 3D shape looks like an ice cream cone?', correct: 'Cone', options: ['Cone', 'Cylinder', 'Cube', 'Sphere'] },
  { q: 'Which 3D shape looks like a cereal box?', correct: 'Rectangular prism', options: ['Rectangular prism', 'Cube', 'Sphere', 'Cone'] },
  { q: 'Which 3D shape has a triangular base and a pointed top?', correct: 'Pyramid', options: ['Pyramid', 'Cube', 'Cylinder', 'Sphere'] }
];
function genShapes3d(seed, idx) {
  const item = SHAPES_3D_BANK[(seed + idx) % SHAPES_3D_BANK.length];
  return { questionText: item.q, correctAnswer: item.correct, options: item.options, visualContent: `<div style="font-size: 48px;">📦</div>`, hint: `Picture the real object to help identify the shape.` };
}

const POLYGON_BANK = [
  { q: 'How many sides does a pentagon have?', correct: '5', options: ['5', '4', '6', '8'] },
  { q: 'How many sides does a hexagon have?', correct: '6', options: ['6', '5', '7', '8'] },
  { q: 'How many sides does an octagon have?', correct: '8', options: ['8', '6', '7', '9'] },
  { q: 'What is the sum of the interior angles of a quadrilateral?', correct: '360°', options: ['360°', '180°', '540°', '720°'] },
  { q: 'What is the sum of the interior angles of a triangle?', correct: '180°', options: ['180°', '360°', '90°', '270°'] },
  { q: 'What is the sum of the interior angles of a pentagon?', correct: '540°', options: ['540°', '360°', '450°', '720°'] }
];
function genPropertiesOfPolygons(seed, idx) {
  const item = POLYGON_BANK[(seed + idx) % POLYGON_BANK.length];
  return { questionText: item.q, correctAnswer: item.correct, options: item.options, visualContent: `<div style="font-size: 48px;">⬡</div>`, hint: `Recall the properties of regular polygons.` };
}

// ---------- Fractions ----------

function genFractionsBasic(seed, idx, opts) {
  opts = opts || {};
  const denoms = opts.denoms || [2, 3, 4];
  const d = denoms[(seed + idx) % denoms.length];
  const n = 1 + ((seed * 3 + idx * 5) % (d - 1));
  return {
    questionText: `A shape is divided into ${d} equal parts. ${n} of the parts are shaded. What fraction is shaded?`,
    correctAnswer: `${n}/${d}`,
    options: uniqOptions(`${n}/${d}`, [`${d - n}/${d}`, `${n}/${d + 1}`, `${n + 1}/${d}`]),
    visualContent: `<div style="font-size: 48px;">🟦🟨</div>`,
    hint: `${n} shaded parts out of ${d} total equal parts = ${n}/${d}.`
  };
}

function genFractionsNumberLine(seed, idx) {
  const denoms = [2, 3, 4, 5, 6, 8];
  const d = denoms[(seed + idx) % denoms.length];
  const k = 1 + ((seed * 3 + idx) % (d - 1));
  const ord = k === 1 ? 'st' : k === 2 ? 'nd' : k === 3 ? 'rd' : 'th';
  return {
    questionText: `A number line from 0 to 1 is divided into ${d} equal parts. What fraction is at the ${k}${ord} mark from 0?`,
    correctAnswer: `${k}/${d}`,
    options: uniqOptions(`${k}/${d}`, [`${k}/${d + 1}`, `${k + 1}/${d}`, `${d - k}/${d}`]),
    visualContent: `<div style="font-size: 48px;">📏🔢</div>`,
    hint: `The ${k}${ord} mark out of ${d} equal parts is ${k}/${d}.`
  };
}

function genEquivalentFractions(seed, idx) {
  const bases = [[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [1, 5], [2, 5]];
  const base = bases[(seed + idx) % bases.length];
  const n = base[0], d = base[1];
  const mult = 2 + ((seed * 3 + idx) % 3);
  const correct = `${n * mult}/${d * mult}`;
  return {
    questionText: `Which fraction is equivalent to ${n}/${d}?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`${n * mult + 1}/${d * mult}`, `${n}/${d * mult}`, `${n * mult}/${d * mult + 1}`]),
    visualContent: `<div style="font-size: 48px;">🟰🟦</div>`,
    hint: `Multiply the top and bottom of ${n}/${d} by ${mult} to get ${correct}.`
  };
}

function genComparingFractions(seed, idx) {
  const denoms = [2, 3, 4, 6, 8];
  const d1 = denoms[(seed + idx) % denoms.length];
  let d2 = denoms[(seed * 3 + idx * 5 + 1) % denoms.length];
  if (d2 === d1) d2 = denoms[(denoms.indexOf(d1) + 1) % denoms.length];
  const n1 = 1 + (seed % (d1 - 1));
  const n2 = 1 + (idx % (d2 - 1));
  const v1 = n1 / d1, v2 = n2 / d2;
  const greaterStr = v1 >= v2 ? `${n1}/${d1}` : `${n2}/${d2}`;
  const lesserStr = v1 >= v2 ? `${n2}/${d2}` : `${n1}/${d1}`;
  const askGreater = idx % 2 === 0;
  return {
    questionText: `Which fraction is ${askGreater ? 'greater' : 'smaller'}: ${n1}/${d1} or ${n2}/${d2}?`,
    correctAnswer: askGreater ? greaterStr : lesserStr,
    options: [`${n1}/${d1}`, `${n2}/${d2}`],
    visualContent: `<div style="font-size: 48px;">⚖️🟦</div>`,
    hint: `${n1}/${d1} = ${v1.toFixed(2)} and ${n2}/${d2} = ${v2.toFixed(2)}.`
  };
}

function genFractionsOfGroup(seed, idx) {
  const denoms = [2, 3, 4, 5, 6];
  const d = denoms[(seed + idx) % denoms.length];
  const mult = 1 + ((seed * 3 + idx) % 6);
  const total = d * mult;
  const correct = mult;
  return {
    questionText: `What is 1/${d} of ${total} apples?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + 1, correct - 1, total]),
    visualContent: `<div style="font-size: 48px;">🍎</div>`,
    hint: `${total} ÷ ${d} = ${correct}.`
  };
}

function genFractionsAdd(seed, idx, opts) {
  opts = opts || {};
  const like = opts.like !== false;
  if (like) {
    const d = 3 + ((seed + idx) % 8);
    const n1 = 1 + (seed % (d - 2 || 1));
    const n2 = 1 + (idx % Math.max(1, d - n1 - 1));
    const sumN = n1 + n2;
    return {
      questionText: `${n1}/${d} + ${n2}/${d} = ?`,
      correctAnswer: `${sumN}/${d}`,
      options: uniqOptions(`${sumN}/${d}`, [`${sumN + 1}/${d}`, `${n1 + n2}/${d + 1}`, `${Math.max(1, sumN - 1)}/${d}`]),
      visualContent: `<div style="font-size: 48px;">➕🟦</div>`,
      hint: `Same denominator: add the numerators. ${n1} + ${n2} = ${sumN}.`
    };
  } else {
    const pairs = [[2, 4], [3, 6], [2, 6], [4, 8], [3, 9], [2, 8]];
    const pair = pairs[(seed + idx) % pairs.length];
    const d1 = pair[0], d2 = pair[1];
    const factor = d2 / d1;
    const n1 = 1 + (seed % (d1 - 1));
    const n2 = 1 + (idx % (d2 - 1));
    const commonN = n1 * factor + n2;
    const g = gcdMQ(commonN, d2);
    const simpN = commonN / g, simpD = d2 / g;
    return {
      questionText: `${n1}/${d1} + ${n2}/${d2} = ?`,
      correctAnswer: `${simpN}/${simpD}`,
      options: uniqOptions(`${simpN}/${simpD}`, [`${n1 + n2}/${d2}`, `${simpN + 1}/${simpD}`, `${commonN + 1}/${d2}`]),
      visualContent: `<div style="font-size: 48px;">➕🟦</div>`,
      hint: `Convert ${n1}/${d1} to ${n1 * factor}/${d2}, then add: ${n1 * factor}/${d2} + ${n2}/${d2} = ${commonN}/${d2}.`
    };
  }
}

function genFractionsSub(seed, idx, opts) {
  opts = opts || {};
  const like = opts.like !== false;
  if (like) {
    const d = 3 + ((seed + idx) % 8);
    let n1 = 2 + (seed % (d - 2 || 1));
    let n2 = 1 + (idx % Math.max(1, n1 - 1));
    if (n2 >= n1) n2 = Math.max(1, n1 - 1);
    const diffN = n1 - n2;
    return {
      questionText: `${n1}/${d} - ${n2}/${d} = ?`,
      correctAnswer: `${diffN}/${d}`,
      options: uniqOptions(`${diffN}/${d}`, [`${diffN + 1}/${d}`, `${n1 + n2}/${d}`, `${Math.max(1, diffN - 1)}/${d}`]),
      visualContent: `<div style="font-size: 48px;">➖🟦</div>`,
      hint: `Same denominator: subtract the numerators. ${n1} - ${n2} = ${diffN}.`
    };
  } else {
    const pairs = [[2, 4], [3, 6], [2, 6], [4, 8], [3, 9], [2, 8]];
    const pair = pairs[(seed + idx) % pairs.length];
    const d1 = pair[0], d2 = pair[1];
    const factor = d2 / d1;
    const n1 = 1 + (seed % (d1 - 1));
    const convertedN1 = n1 * factor;
    let n2 = 1 + (idx % (d2 - 1));
    if (n2 >= convertedN1) n2 = Math.max(1, convertedN1 - 1);
    const diffCommon = convertedN1 - n2;
    const g = gcdMQ(diffCommon, d2);
    const simpN = diffCommon / g, simpD = d2 / g;
    return {
      questionText: `${n1}/${d1} - ${n2}/${d2} = ?`,
      correctAnswer: `${simpN}/${simpD}`,
      options: uniqOptions(`${simpN}/${simpD}`, [`${convertedN1 - n2 + 1}/${d2}`, `${(n1 - n2) > 0 ? n1 - n2 : 1}/${d2}`, `${diffCommon + 1}/${d2}`]),
      visualContent: `<div style="font-size: 48px;">➖🟦</div>`,
      hint: `Convert ${n1}/${d1} to ${convertedN1}/${d2}, then subtract: ${convertedN1}/${d2} - ${n2}/${d2} = ${diffCommon}/${d2}.`
    };
  }
}

function genMixedNumbers(seed, idx) {
  const d = 2 + ((seed + idx) % 7);
  const whole = 1 + (seed % 4);
  const rem = 1 + (idx % (d - 1 || 1));
  const improperN = whole * d + rem;
  if (idx % 2 === 0) {
    return {
      questionText: `What is ${improperN}/${d} written as a mixed number?`,
      correctAnswer: `${whole} ${rem}/${d}`,
      options: uniqOptions(`${whole} ${rem}/${d}`, [`${whole + 1} ${rem}/${d}`, `${whole} ${rem + 1}/${d}`, `${whole - 1 >= 0 ? whole - 1 : whole + 2} ${rem}/${d}`]),
      visualContent: `<div style="font-size: 48px;">🔢🟦</div>`,
      hint: `${improperN} ÷ ${d} = ${whole} remainder ${rem}, so it's ${whole} ${rem}/${d}.`
    };
  } else {
    return {
      questionText: `What is ${whole} ${rem}/${d} written as an improper fraction?`,
      correctAnswer: `${improperN}/${d}`,
      options: uniqOptions(`${improperN}/${d}`, [`${improperN + 1}/${d}`, `${improperN - 1}/${d}`, `${whole * d}/${d}`]),
      visualContent: `<div style="font-size: 48px;">🔢🟦</div>`,
      hint: `${whole} x ${d} + ${rem} = ${improperN}, so the improper fraction is ${improperN}/${d}.`
    };
  }
}

function genFractionsMultiply(seed, idx, opts) {
  opts = opts || {};
  const byWhole = !!opts.byWhole;
  if (byWhole) {
    const d = [2, 3, 4, 5, 6][(seed + idx) % 5];
    const whole = d * (1 + (idx % 3));
    const correct = whole / d;
    return {
      questionText: `1/${d} x ${whole} = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [correct + 1, correct - 1, whole]),
      visualContent: `<div style="font-size: 48px;">✖️🟦</div>`,
      hint: `${whole} ÷ ${d} = ${correct}.`
    };
  } else {
    const denoms = [2, 3, 4, 5, 6];
    const d1 = denoms[(seed + idx) % denoms.length];
    const d2 = denoms[(seed * 3 + idx * 5 + 1) % denoms.length];
    const rn = 1, rd = d1 * d2;
    const g = gcdMQ(rn, rd);
    const simpN = rn / g, simpD = rd / g;
    return {
      questionText: `1/${d1} x 1/${d2} = ?`,
      correctAnswer: `${simpN}/${simpD}`,
      options: uniqOptions(`${simpN}/${simpD}`, [`1/${d1 + d2}`, `2/${rd}`, `${d1}/${rd}`]),
      visualContent: `<div style="font-size: 48px;">✖️🟦</div>`,
      hint: `Multiply numerators and denominators: (1x1)/(${d1}x${d2}) = 1/${rd}.`
    };
  }
}

function genFractionsToDecimals(seed, idx) {
  const map = [[1, 2, 0.5], [1, 4, 0.25], [3, 4, 0.75], [1, 5, 0.2], [2, 5, 0.4], [1, 10, 0.1], [3, 10, 0.3], [1, 20, 0.05], [1, 25, 0.04], [1, 50, 0.02], [1, 100, 0.01]];
  const item = map[(seed + idx) % map.length];
  const n = item[0], d = item[1], dec = item[2];
  return {
    questionText: `What is ${n}/${d} written as a decimal?`,
    correctAnswer: String(dec),
    options: uniqOptions(dec, [dec * 10, dec / 10, Math.round((dec + 0.1) * 100) / 100]),
    visualContent: `<div style="font-size: 48px;">🔢.🔢</div>`,
    hint: `${n}/${d} = ${dec}.`
  };
}

function genFractionsWordProblem(seed, idx) {
  const d = 4 + ((seed + idx) % 5);
  let n1 = 1 + (seed % (d - 2 || 1));
  let n2 = 1 + (idx % (d - n1 - 1 > 0 ? d - n1 - 1 : 1));
  const isAdd = idx % 2 === 0;
  let correct, text;
  if (isAdd) {
    correct = n1 + n2;
    text = `A pizza is cut into ${d} equal slices. Sam eats ${n1}/${d} of the pizza and Alex eats ${n2}/${d} of the pizza. What fraction did they eat together?`;
  } else {
    if (n2 >= n1) n2 = Math.max(1, n1 - 1);
    correct = n1 - n2;
    text = `A pizza is cut into ${d} equal slices. ${n1}/${d} of the pizza is left. If Sam eats ${n2}/${d} more, what fraction is left?`;
  }
  return {
    questionText: text,
    correctAnswer: `${correct}/${d}`,
    options: uniqOptions(`${correct}/${d}`, [`${correct + 1}/${d}`, `${Math.max(0, correct - 1)}/${d}`, `${n1}/${d}`]),
    visualContent: `<div style="font-size: 48px;">🍕</div>`,
    hint: isAdd ? `${n1}/${d} + ${n2}/${d} = ${correct}/${d}.` : `${n1}/${d} - ${n2}/${d} = ${correct}/${d}.`
  };
}

function genDivideUnitFractions(seed, idx) {
  const d = 2 + ((seed + idx) % 7);
  const n = 2 + ((seed * 3 + idx * 5) % 6);
  if (idx % 2 === 0) {
    const correct = d * n;
    return {
      questionText: `1/${d} ÷ ${n} = ?`,
      correctAnswer: `1/${correct}`,
      options: uniqOptions(`1/${correct}`, [`1/${d + n}`, `${n}/${d}`, `1/${correct + d}`]),
      visualContent: `<div style="font-size: 48px;">➗🟦</div>`,
      hint: `1/${d} ÷ ${n} = 1/(${d}x${n}) = 1/${correct}.`
    };
  } else {
    const correct = n * d;
    return {
      questionText: `${n} ÷ 1/${d} = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [correct + d, correct - d, n + d]),
      visualContent: `<div style="font-size: 48px;">➗🟦</div>`,
      hint: `Dividing by a fraction means multiplying by its reciprocal: ${n} x ${d} = ${correct}.`
    };
  }
}

// ---------- Multiplication, division, factors ----------

function genMultiplicationFacts(seed, idx, opts) {
  opts = opts || {};
  const max = opts.max || 10;
  const a = 1 + ((seed + idx) % max);
  const b = 1 + ((seed * 3 + idx * 7) % max);
  const correct = a * b;
  return {
    questionText: `${a} x ${b} = ?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + a, correct - a, correct + b]),
    visualContent: `<div style="font-size: 48px;">✖️🔢</div>`,
    hint: `${a} groups of ${b} equals ${correct}.`
  };
}

function genMultiplicationProperties(seed, idx) {
  const a = 2 + ((seed + idx) % 9);
  const b = 2 + ((seed * 3 + idx * 5) % 9);
  const correct = a * b;
  return {
    questionText: `If ${a} x ${b} = ${correct}, what is ${b} x ${a}?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + a, correct - b, a + b]),
    visualContent: `<div style="font-size: 48px;">🔄✖️</div>`,
    hint: `Multiplication order doesn't change the answer: ${b} x ${a} = ${correct} too!`
  };
}

function genDivisionFacts(seed, idx, opts) {
  opts = opts || {};
  const allowRemainder = !!opts.allowRemainder;
  const divisor = 2 + ((seed + idx) % 9);
  const quotient = 2 + ((seed * 3 + idx * 7) % 9);
  let dividend = divisor * quotient;
  let remainder = 0;
  if (allowRemainder && idx % 2 === 0) {
    remainder = 1 + ((seed * 5) % (divisor - 1 || 1));
    dividend += remainder;
  }
  const correct = remainder > 0 ? `${quotient} remainder ${remainder}` : String(quotient);
  const distractors = remainder > 0
    ? [`${quotient + 1} remainder ${remainder}`, `${quotient} remainder ${remainder + 1}`, String(quotient)]
    : [quotient + 1, quotient - 1, divisor];
  return {
    questionText: `${dividend} ÷ ${divisor} = ?`,
    correctAnswer: correct,
    options: uniqOptions(correct, distractors),
    visualContent: `<div style="font-size: 48px;">➗🔢</div>`,
    hint: remainder > 0 ? `${divisor} x ${quotient} = ${dividend - remainder}, with ${remainder} left over.` : `${divisor} x ${quotient} = ${dividend}.`
  };
}

function genMultiplyMultiDigit(seed, idx, opts) {
  opts = opts || {};
  const aDigits = opts.aDigits || 2;
  const bDigits = opts.bDigits || 1;
  const aLo = Math.pow(10, aDigits - 1), aHi = Math.pow(10, aDigits) - 1;
  const bLo = Math.pow(10, bDigits - 1), bHi = Math.pow(10, bDigits) - 1;
  const a = aLo + ((seed * 3 + idx * 11) % (aHi - aLo + 1));
  const b = bLo + ((seed * 5 + idx * 7) % (bHi - bLo + 1));
  const correct = a * b;
  return {
    questionText: `Solve: ${a} x ${b} = ?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + a, correct - a, correct + b]),
    visualContent: `<div style="font-size: 48px;">✖️🔢</div>`,
    hint: `${a} x ${b} = ${correct}.`
  };
}

function genPlaceValueMultiDigit(seed, idx) {
  const num = 10000 + ((seed * 137 + idx * 271) % 90000);
  const s = String(num);
  const digitIdx = (seed + idx) % s.length;
  const digit = Number(s[digitIdx]);
  const placeValue = digit * Math.pow(10, s.length - 1 - digitIdx);
  const withComma = Number(num).toLocaleString('en-US');
  const pvStr = placeValue.toLocaleString('en-US');
  return {
    questionText: `What is the value of the digit ${digit} in ${withComma}?`,
    correctAnswer: pvStr,
    options: uniqOptions(pvStr, [String(digit), (placeValue * 10).toLocaleString('en-US'), Math.max(1, Math.floor(placeValue / 10)).toLocaleString('en-US')]),
    visualContent: `<div style="font-size: 48px;">🔢💯</div>`,
    hint: `The digit ${digit} is in a place worth ${pvStr}.`
  };
}

function genRoundingWhole(seed, idx, opts) {
  opts = opts || {};
  const roundTos = opts.roundTo ? [opts.roundTo] : [10, 100, 1000];
  const roundTo = roundTos[idx % roundTos.length];
  const num = 10 + ((seed * 13 + idx * 29) % 9000);
  const correct = Math.round(num / roundTo) * roundTo;
  return {
    questionText: `Round ${num} to the nearest ${roundTo}.`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + roundTo, correct - roundTo, num]),
    visualContent: `<div style="font-size: 48px;">🔄🔢</div>`,
    hint: `${num} rounds to ${correct} when rounding to the nearest ${roundTo}.`
  };
}

function genDivisionMultiDigit(seed, idx) {
  const divisor = 2 + ((seed + idx) % 8);
  const quotient = 10 + ((seed * 3 + idx * 7) % 90);
  const dividend = divisor * quotient;
  return {
    questionText: `${dividend} ÷ ${divisor} = ?`,
    correctAnswer: String(quotient),
    options: uniqOptions(quotient, [quotient + 1, quotient - 1, divisor]),
    visualContent: `<div style="font-size: 48px;">➗🔢</div>`,
    hint: `${divisor} x ${quotient} = ${dividend}.`
  };
}

const REMAINDER_ITEMS = [{ obj: 'cookies', friendWord: 'friends' }, { obj: 'stickers', friendWord: 'classmates' }, { obj: 'marbles', friendWord: 'kids' }];
function genRemainderWordProblem(seed, idx) {
  const item = REMAINDER_ITEMS[(seed + idx) % REMAINDER_ITEMS.length];
  const n = 3 + ((seed * 3 + idx) % 6);
  const perPerson = 2 + ((seed * 5 + idx * 7) % 8);
  const remainder = 1 + ((seed * 7) % (n - 1 || 1));
  const total = n * perPerson + remainder;
  return {
    questionText: `${total} ${item.obj} are shared equally among ${n} ${item.friendWord}. How many ${item.obj} are left over?`,
    correctAnswer: String(remainder),
    options: uniqOptions(remainder, [remainder + 1, Math.max(0, remainder - 1), perPerson]),
    visualContent: `<div style="font-size: 48px;">🍪➗</div>`,
    hint: `${total} ÷ ${n} = ${perPerson} remainder ${remainder}.`
  };
}

function genFactorsMultiples(seed, idx) {
  const nums = [12, 18, 20, 24, 30, 36, 40, 48];
  const n = nums[(seed + idx) % nums.length];
  if (idx % 2 === 0) {
    const factors = [];
    for (let i = 1; i <= n; i++) if (n % i === 0) factors.push(i);
    const correct = factors[(seed * 3) % factors.length];
    const nonFactors = [];
    for (let i = 2; i < n && nonFactors.length < 3; i++) if (n % i !== 0) nonFactors.push(i);
    return {
      questionText: `Which of these is a factor of ${n}?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, nonFactors),
      visualContent: `<div style="font-size: 48px;">🔢➗</div>`,
      hint: `${n} ÷ ${correct} = ${n / correct}, with no remainder.`
    };
  } else {
    const mult = n * (2 + (idx % 3));
    const nonMultiples = [mult + 1, mult - 1, mult + 2].filter(x => x % n !== 0);
    return {
      questionText: `Which of these is a multiple of ${n}?`,
      correctAnswer: String(mult),
      options: uniqOptions(mult, nonMultiples.length ? nonMultiples : [mult + 1, mult - 1, mult + 3]),
      visualContent: `<div style="font-size: 48px;">🔢✖️</div>`,
      hint: `${mult} ÷ ${n} = ${mult / n}, so ${mult} is a multiple of ${n}.`
    };
  }
}

function isPrimeMQ(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) if (n % i === 0) return false;
  return true;
}
function genPrimeComposite(seed, idx) {
  const n = 2 + ((seed * 3 + idx * 7) % 49);
  const prime = isPrimeMQ(n);
  return {
    questionText: `Is the number ${n} prime or composite?`,
    correctAnswer: prime ? 'Prime' : 'Composite',
    options: ['Prime', 'Composite'],
    visualContent: `<div style="font-size: 48px;">🔢</div>`,
    hint: prime ? `${n} has only two factors: 1 and ${n} itself, so it's prime.` : `${n} has factors other than 1 and itself, so it's composite.`
  };
}

function genPatterns(seed, idx, opts) {
  opts = opts || {};
  const advanced = !!opts.advanced;
  const isGeometric = advanced && (idx % 2 === 1);
  const start = 1 + ((seed + idx) % 10);
  if (isGeometric) {
    const mult = 2 + ((seed * 3) % 2);
    const terms = [start, start * mult, start * mult * mult, start * mult * mult * mult];
    const correct = terms[3] * mult;
    return {
      questionText: `What number comes next in the pattern: ${terms.join(', ')}, __?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [correct + mult, correct - mult, terms[3]]),
      visualContent: `<div style="font-size: 48px;">🔁🔢</div>`,
      hint: `Each number is multiplied by ${mult}. ${terms[3]} x ${mult} = ${correct}.`
    };
  } else {
    const step = 2 + ((seed * 3 + idx * 5) % 8);
    const terms = [start, start + step, start + 2 * step, start + 3 * step];
    const correct = terms[3] + step;
    return {
      questionText: `What number comes next in the pattern: ${terms.join(', ')}, __?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [correct + 1, correct - 1, terms[3] + 2 * step]),
      visualContent: `<div style="font-size: 48px;">🔁🔢</div>`,
      hint: `Each number increases by ${step}. ${terms[3]} + ${step} = ${correct}.`
    };
  }
}

function genMixedAllOps(seed, idx) {
  const ops = [
    () => genAddition(seed, idx, { digits: 3 }),
    () => genSubtraction(seed, idx, { digits: 3 }),
    () => genMultiplicationFacts(seed, idx, { max: 12 }),
    () => genDivisionFacts(seed, idx, { allowRemainder: false })
  ];
  return ops[idx % 4]();
}

function genExpressionParens(seed, idx, opts) {
  opts = opts || {};
  const withDecimals = !!opts.withDecimals;
  const a = 1 + ((seed + idx) % 9);
  const b = 1 + ((seed * 3 + idx * 5) % 9);
  const c = 1 + ((seed * 7 + idx * 11) % 9);
  if (withDecimals) {
    const da = Math.round((a + 0.5) * 10) / 10;
    const correct = Math.round((da + b * c) * 100) / 100;
    return {
      questionText: `${da} + (${b} x ${c}) = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [Math.round((da + b + c) * 100) / 100, correct + 1, correct - 1]),
      visualContent: `<div style="font-size: 48px;">🔢()</div>`,
      hint: `First multiply: ${b} x ${c} = ${b * c}. Then add: ${da} + ${b * c} = ${correct}.`
    };
  } else if (idx % 2 === 0) {
    const correct = a + (b * c);
    return {
      questionText: `${a} + (${b} x ${c}) = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [(a + b) * c, a + b + c, correct + c]),
      visualContent: `<div style="font-size: 48px;">🔢()</div>`,
      hint: `Solve inside the parentheses first: ${b} x ${c} = ${b * c}. Then add ${a}: ${correct}.`
    };
  } else {
    const correct = a + b * c;
    return {
      questionText: `${a} + ${b} x ${c} = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [(a + b) * c, a * b + c, correct + b]),
      visualContent: `<div style="font-size: 48px;">🔢</div>`,
      hint: `Multiply before adding (order of operations): ${b} x ${c} = ${b * c}, then ${a} + ${b * c} = ${correct}.`
    };
  }
}

function genPowersOfTen(seed, idx) {
  const n = 1 + ((seed + idx) % 99);
  const ops = [
    { label: `${n} x 10`, correct: n * 10 },
    { label: `${n} x 100`, correct: n * 100 },
    { label: `${n * 10} ÷ 10`, correct: n }
  ];
  const item = ops[idx % ops.length];
  return {
    questionText: `${item.label} = ?`,
    correctAnswer: String(item.correct),
    options: uniqOptions(item.correct, [item.correct * 10, item.correct / 10, item.correct + 10]),
    visualContent: `<div style="font-size: 48px;">🔟</div>`,
    hint: `Multiplying by 10 shifts digits one place left; dividing by 10 shifts them one place right.`
  };
}

// ---------- Decimals ----------

function genDecimalPlaceValue(seed, idx) {
  const tenths = (seed + idx) % 10;
  const hundredths = (seed * 3 + idx * 5) % 10;
  const thousandths = (seed * 7 + idx * 11) % 10;
  const num = `0.${tenths}${hundredths}${thousandths}`;
  const places = [{ name: 'tenths', val: tenths }, { name: 'hundredths', val: hundredths }, { name: 'thousandths', val: thousandths }];
  const p = places[(seed + idx) % places.length];
  const distractors = places.filter(x => x.name !== p.name).map(x => x.val);
  distractors.push((p.val + 1) % 10);
  return {
    questionText: `In the number ${num}, what digit is in the ${p.name} place?`,
    correctAnswer: String(p.val),
    options: uniqOptions(p.val, distractors),
    visualContent: `<div style="font-size: 48px;">🔢.🔢</div>`,
    hint: `${num}: ${tenths} is tenths, ${hundredths} is hundredths, ${thousandths} is thousandths.`
  };
}

function genRoundingDecimals(seed, idx) {
  const whole = (seed + idx) % 20;
  const tenths = (seed * 3) % 10;
  const hundredths = (idx * 5) % 10;
  const num = Math.round((whole + tenths / 10 + hundredths / 100) * 100) / 100;
  const roundToTenth = idx % 2 === 0;
  const correct = roundToTenth ? Math.round(num * 10) / 10 : Math.round(num);
  return {
    questionText: `Round ${num} to the nearest ${roundToTenth ? 'tenth' : 'whole number'}.`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [Math.round((correct + (roundToTenth ? 0.1 : 1)) * 10) / 10, Math.round((correct - (roundToTenth ? 0.1 : 1)) * 10) / 10, num]),
    visualContent: `<div style="font-size: 48px;">🔄🔢</div>`,
    hint: `${num} rounds to ${correct}.`
  };
}

function genDecimalOp(seed, idx, opts) {
  opts = opts || {};
  const op = opts.op || 'add';
  let a = Math.round((1 + ((seed * 13 + idx * 7) % 900))) / 100;
  let b = Math.round((1 + ((seed * 7 + idx * 13) % 900))) / 100;
  let correct, symbol;
  if (op === 'add') { correct = Math.round((a + b) * 100) / 100; symbol = '+'; }
  else if (op === 'sub') { if (b > a) { const t = a; a = b; b = t; } correct = Math.round((a - b) * 100) / 100; symbol = '-'; }
  else { correct = Math.round((a * b) * 100) / 100; symbol = 'x'; }
  return {
    questionText: `${a} ${symbol} ${b} = ?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [Math.round((correct + 0.1) * 100) / 100, Math.round((correct - 0.1) * 100) / 100, Math.round((correct + 1) * 100) / 100]),
    visualContent: `<div style="font-size: 48px;">🔢.🔢</div>`,
    hint: `${a} ${symbol} ${b} = ${correct}.`
  };
}

function genCompareDecimals(seed, idx) {
  const a = Math.round(1 + ((seed * 13 + idx * 7) % 900)) / 100;
  let b = Math.round(1 + ((seed * 7 + idx * 13) % 900)) / 100;
  if (a === b) b = Math.round((a + 0.15) * 100) / 100;
  const askGreater = idx % 2 === 0;
  const correct = askGreater ? Math.max(a, b) : Math.min(a, b);
  return {
    questionText: `Which decimal is ${askGreater ? 'greater' : 'smaller'}: ${a} or ${b}?`,
    correctAnswer: String(correct),
    options: [String(a), String(b)],
    visualContent: `<div style="font-size: 48px;">🔢.🔢</div>`,
    hint: `Compare place by place: ${Math.max(a, b)} is greater than ${Math.min(a, b)}.`
  };
}

const METRIC_CONVERSIONS = [
  { q: (n) => `How many centimeters are in ${n} meters?`, factor: 100, unit: 'cm' },
  { q: (n) => `How many grams are in ${n} kilograms?`, factor: 1000, unit: 'g' },
  { q: (n) => `How many milliliters are in ${n} liters?`, factor: 1000, unit: 'mL' }
];
function genMetricMeasurement(seed, idx) {
  const conv = METRIC_CONVERSIONS[(seed + idx) % METRIC_CONVERSIONS.length];
  const n = 1 + ((seed * 3 + idx * 5) % 12);
  const correct = n * conv.factor;
  return {
    questionText: conv.q(n),
    correctAnswer: `${correct} ${conv.unit}`,
    options: uniqOptions(`${correct} ${conv.unit}`, [`${correct / 10} ${conv.unit}`, `${correct + conv.factor} ${conv.unit}`, `${n} ${conv.unit}`]),
    visualContent: `<div style="font-size: 48px;">📏⚖️</div>`,
    hint: `${n} x ${conv.factor} = ${correct}.`
  };
}

const UNIT_CONVERSIONS = [
  { q: (n) => `How many inches are in ${n} feet?`, factor: 12, unit: 'inches' },
  { q: (n) => `How many feet are in ${n} yards?`, factor: 3, unit: 'feet' },
  { q: (n) => `How many ounces are in ${n} pounds?`, factor: 16, unit: 'ounces' },
  { q: (n) => `How many cups are in ${n} pints?`, factor: 2, unit: 'cups' }
];
function genUnitConversion(seed, idx) {
  const conv = UNIT_CONVERSIONS[(seed + idx) % UNIT_CONVERSIONS.length];
  const n = 1 + ((seed * 3 + idx * 5) % 10);
  const correct = n * conv.factor;
  return {
    questionText: conv.q(n),
    correctAnswer: `${correct} ${conv.unit}`,
    options: uniqOptions(`${correct} ${conv.unit}`, [`${correct + conv.factor} ${conv.unit}`, `${Math.max(1, correct - conv.factor)} ${conv.unit}`, `${n} ${conv.unit}`]),
    visualContent: `<div style="font-size: 48px;">📏🔄</div>`,
    hint: `${n} x ${conv.factor} = ${correct}.`
  };
}

// ---------- Data ----------

const COMPARE_PAIRS = [
  { q: 'Which holds more water: a teaspoon or a bathtub?', options: ['A teaspoon', 'A bathtub'], correct: 'A bathtub' },
  { q: 'Which is heavier: a feather or a brick?', options: ['A feather', 'A brick'], correct: 'A brick' },
  { q: 'Which holds more: a cup or a swimming pool?', options: ['A cup', 'A swimming pool'], correct: 'A swimming pool' },
  { q: 'Which is heavier: an elephant or a mouse?', options: ['An elephant', 'A mouse'], correct: 'An elephant' },
  { q: 'Which holds more: a thimble or a bucket?', options: ['A thimble', 'A bucket'], correct: 'A bucket' },
  { q: 'Which is heavier: a pillow or a bowling ball?', options: ['A pillow', 'A bowling ball'], correct: 'A bowling ball' },
  { q: 'Which holds more: a water bottle or a lake?', options: ['A water bottle', 'A lake'], correct: 'A lake' },
  { q: 'Which is heavier: a paperclip or a brick?', options: ['A paperclip', 'A brick'], correct: 'A brick' }
];
function genVolumeMassCompare(seed, idx) {
  const item = COMPARE_PAIRS[(seed + idx) % COMPARE_PAIRS.length];
  return { questionText: item.q, correctAnswer: item.correct, options: item.options, visualContent: `<div style="font-size: 48px;">⚖️</div>`, hint: `Think about the real-world size of each object.` };
}

const DATA_CATEGORY_SETS = [['Apples', 'Bananas', 'Grapes'], ['Dogs', 'Cats', 'Birds'], ['Red', 'Blue', 'Green'], ['Soccer', 'Basketball', 'Tennis']];
function genDataGraphs(seed, idx) {
  const cats = DATA_CATEGORY_SETS[(seed + idx) % DATA_CATEGORY_SETS.length];
  const counts = cats.map((c, i) => 2 + ((seed * (i + 3) + idx * (i + 5)) % 9));
  let maxIdx = 0;
  for (let i = 1; i < counts.length; i++) if (counts[i] > counts[maxIdx]) maxIdx = i;
  const askMost = idx % 2 === 0;
  let targetIdx = maxIdx;
  if (!askMost) {
    let minIdx = 0;
    for (let i = 1; i < counts.length; i++) if (counts[i] < counts[minIdx]) minIdx = i;
    targetIdx = minIdx;
  }
  const desc = cats.map((c, i) => `${c}: ${counts[i]}`).join(', ');
  return {
    questionText: `A graph shows: ${desc}. Which category has the ${askMost ? 'most' : 'fewest'}?`,
    correctAnswer: cats[targetIdx],
    options: cats,
    visualContent: `<div style="font-size: 48px;">📊</div>`,
    hint: `Compare the numbers: ${desc}.`
  };
}

function genLinePlots(seed, idx) {
  const v1 = 2 + (seed % 4), v2 = 2 + (idx % 4);
  const c1 = 1 + ((seed * 3) % 4), c2 = 1 + ((idx * 5) % 4);
  const total = c1 + c2;
  return {
    questionText: `On a line plot, there are ${c1} X's above the number ${v1}, and ${c2} X's above the number ${v2}. How many data points are there in total?`,
    correctAnswer: String(total),
    options: uniqOptions(total, [total + 1, total - 1, Math.max(c1, c2)]),
    visualContent: `<div style="font-size: 48px;">✖️📈</div>`,
    hint: `${c1} + ${c2} = ${total}.`
  };
}

function genLinePlotsFractions(seed, idx) {
  const fracs = ['1/2', '1/4', '3/4'];
  const counts = fracs.map((f, i) => 1 + ((seed * (i + 3) + idx * (i + 2)) % 4));
  const total = counts.reduce((a, b) => a + b, 0);
  const desc = fracs.map((f, i) => `${counts[i]} X's above ${f}`).join(', ');
  return {
    questionText: `On a line plot: ${desc}. How many data points are there in total?`,
    correctAnswer: String(total),
    options: uniqOptions(total, [total + 1, total - 1, Math.max.apply(null, counts)]),
    visualContent: `<div style="font-size: 48px;">✖️📈</div>`,
    hint: `${counts.join(' + ')} = ${total}.`
  };
}

// ---------- Area, perimeter, volume ----------

function genArea(seed, idx) {
  const L = 2 + ((seed + idx) % 11);
  const W = 2 + ((seed * 3 + idx * 5) % 11);
  const area = L * W;
  return {
    questionText: `A rectangle has a length of ${L} units and a width of ${W} units. What is its area?`,
    correctAnswer: `${area} square units`,
    options: uniqOptions(`${area} square units`, [`${2 * (L + W)} square units`, `${area + L} square units`, `${area - W} square units`]),
    visualContent: `<div style="font-size: 48px;">▭📐</div>`,
    hint: `Area = length x width = ${L} x ${W} = ${area}.`
  };
}

function genAreaDistributive(seed, idx) {
  const a = 2 + (seed % 6), b = 2 + (idx % 6);
  const W = 2 + ((seed * 3 + idx) % 8);
  const total = (a + b) * W;
  return {
    questionText: `A rectangle is split into two parts with widths ${a} and ${b}, sharing the same height of ${W}. What is the total area?`,
    correctAnswer: `${total} square units`,
    options: uniqOptions(`${total} square units`, [`${a * W} square units`, `${b * W} square units`, `${total + W} square units`]),
    visualContent: `<div style="font-size: 48px;">▭➕▭</div>`,
    hint: `(${a} x ${W}) + (${b} x ${W}) = ${a * W} + ${b * W} = ${total}.`
  };
}

function genPerimeter(seed, idx) {
  const L = 2 + ((seed + idx) % 11);
  const W = 2 + ((seed * 3 + idx * 5) % 11);
  const perim = 2 * (L + W);
  return {
    questionText: `A rectangle has a length of ${L} units and a width of ${W} units. What is its perimeter?`,
    correctAnswer: `${perim} units`,
    options: uniqOptions(`${perim} units`, [`${L * W} units`, `${perim + 2} units`, `${perim - 2} units`]),
    visualContent: `<div style="font-size: 48px;">▭📏</div>`,
    hint: `Perimeter = 2 x (length + width) = 2 x (${L} + ${W}) = ${perim}.`
  };
}

function genAreaVsPerimeter(seed, idx) {
  const L = 2 + ((seed + idx) % 11);
  const W = 2 + ((seed * 3 + idx * 5) % 11);
  const askArea = idx % 2 === 0;
  const area = L * W, perim = 2 * (L + W);
  const correct = askArea ? `${area} square units` : `${perim} units`;
  const distractors = askArea ? [`${perim} square units`, `${area + L} square units`, `${area - W} square units`] : [`${area} units`, `${perim + 2} units`, `${perim - 2} units`];
  return {
    questionText: `A rectangle has a length of ${L} units and a width of ${W} units. What is its ${askArea ? 'area' : 'perimeter'}?`,
    correctAnswer: correct,
    options: uniqOptions(correct, distractors),
    visualContent: `<div style="font-size: 48px;">▭</div>`,
    hint: askArea ? `Area = ${L} x ${W} = ${area}.` : `Perimeter = 2 x (${L}+${W}) = ${perim}.`
  };
}

function genAreaRectilinear(seed, idx) {
  const l1 = 2 + (seed % 8), w1 = 2 + (idx % 6);
  const l2 = 2 + ((seed * 3) % 6), w2 = 2 + ((idx * 5) % 4);
  const area1 = l1 * w1, area2 = l2 * w2;
  const total = area1 + area2;
  return {
    questionText: `An L-shaped figure is made of two rectangles: one is ${l1} x ${w1}, the other is ${l2} x ${w2}. What is the total area?`,
    correctAnswer: `${total} square units`,
    options: uniqOptions(`${total} square units`, [`${area1} square units`, `${area2} square units`, `${total + 2} square units`]),
    visualContent: `<div style="font-size: 48px;">📐▭</div>`,
    hint: `${l1}x${w1}=${area1}, ${l2}x${w2}=${area2}. ${area1} + ${area2} = ${total}.`
  };
}

function genVolume(seed, idx) {
  const L = 2 + ((seed + idx) % 9);
  const W = 2 + ((seed * 3 + idx * 5) % 9);
  const H = 2 + ((seed * 7 + idx * 11) % 9);
  const vol = L * W * H;
  return {
    questionText: `A rectangular prism has length ${L}, width ${W}, and height ${H} units. What is its volume?`,
    correctAnswer: `${vol} cubic units`,
    options: uniqOptions(`${vol} cubic units`, [`${L * W} cubic units`, `${vol + L} cubic units`, `${2 * (L + W + H)} cubic units`]),
    visualContent: `<div style="font-size: 48px;">📦</div>`,
    hint: `Volume = length x width x height = ${L} x ${W} x ${H} = ${vol}.`
  };
}

function genCountUnitCubes(seed, idx) {
  const L = 2 + ((seed + idx) % 6);
  const W = 2 + ((seed * 3 + idx * 5) % 6);
  const H = 2 + ((seed * 7 + idx * 11) % 6);
  const total = L * W * H;
  return {
    questionText: `A box is built from unit cubes, ${L} cubes long, ${W} cubes wide, and ${H} cubes tall. How many unit cubes make up the box?`,
    correctAnswer: String(total),
    options: uniqOptions(total, [L * W, total + L, total - W]),
    visualContent: `<div style="font-size: 48px;">🧊</div>`,
    hint: `${L} x ${W} x ${H} = ${total} unit cubes.`
  };
}

function genVolumeFormulas(seed, idx) {
  const L = 2 + ((seed + idx) % 9);
  const W = 2 + ((seed * 3 + idx * 5) % 9);
  const H = 2 + ((seed * 7 + idx * 11) % 9);
  const vol = L * W * H;
  return {
    questionText: `Using V = l × w × h, find the volume of a prism with l=${L}, w=${W}, h=${H}.`,
    correctAnswer: `${vol} cubic units`,
    options: uniqOptions(`${vol} cubic units`, [`${L * W} cubic units`, `${vol + L} cubic units`, `${2 * (L + W + H)} cubic units`]),
    visualContent: `<div style="font-size: 48px;">📦</div>`,
    hint: `V = ${L} × ${W} × ${H} = ${vol}.`
  };
}

function genAdditiveVolume(seed, idx) {
  const L1 = 2 + (seed % 5), W1 = 2 + (idx % 5), H1 = 2 + ((seed * 3) % 5);
  const L2 = 2 + ((idx * 3) % 5), W2 = 2 + ((seed * 5) % 5), H2 = 2 + ((idx * 5) % 5);
  const v1 = L1 * W1 * H1, v2 = L2 * W2 * H2;
  const total = v1 + v2;
  return {
    questionText: `Two rectangular prisms are combined: one is ${L1}x${W1}x${H1}, the other is ${L2}x${W2}x${H2}. What is the total volume?`,
    correctAnswer: `${total} cubic units`,
    options: uniqOptions(`${total} cubic units`, [`${v1} cubic units`, `${v2} cubic units`, `${total + 5} cubic units`]),
    visualContent: `<div style="font-size: 48px;">📦📦</div>`,
    hint: `${v1} + ${v2} = ${total}.`
  };
}

// ---------- Angles ----------

const ANGLE_TYPE_BANK = [
  { deg: 30, type: 'Acute' }, { deg: 90, type: 'Right' }, { deg: 120, type: 'Obtuse' }, { deg: 180, type: 'Straight' },
  { deg: 45, type: 'Acute' }, { deg: 150, type: 'Obtuse' }, { deg: 60, type: 'Acute' }, { deg: 100, type: 'Obtuse' }
];
function genLinesAngles(seed, idx) {
  const item = ANGLE_TYPE_BANK[(seed + idx) % ANGLE_TYPE_BANK.length];
  return {
    questionText: `An angle measures ${item.deg} degrees. What type of angle is it?`,
    correctAnswer: item.type,
    options: ['Acute', 'Right', 'Obtuse', 'Straight'],
    visualContent: `<div style="font-size: 48px;">📐</div>`,
    hint: item.type === 'Acute' ? 'Acute angles are less than 90°.' : item.type === 'Right' ? 'Right angles are exactly 90°.' : item.type === 'Obtuse' ? 'Obtuse angles are more than 90° but less than 180°.' : 'Straight angles are exactly 180°.'
  };
}

function genMeasuringAngles(seed, idx) {
  return genLinesAngles(seed, idx);
}

function genAdditiveAngles(seed, idx) {
  const x = 20 + ((seed + idx) % 100);
  let y = 20 + ((seed * 3 + idx * 5) % 100);
  if (x + y >= 180) y = Math.max(10, 170 - x);
  const correct = 180 - x - y;
  return {
    questionText: `Angle A is ${x}° and Angle B is ${y}°. Together with Angle C, they form a straight angle (180°). What is the measure of Angle C?`,
    correctAnswer: `${correct}°`,
    options: uniqOptions(`${correct}°`, [`${correct + 10}°`, `${correct - 10}°`, `${x}°`]),
    visualContent: `<div style="font-size: 48px;">📐➕</div>`,
    hint: `180 - ${x} - ${y} = ${correct}.`
  };
}

// ---------- Coordinates ----------

function genCoordinateSystem(seed, idx) {
  const x = (seed + idx) % 10;
  const y = (seed * 3 + idx * 5) % 10;
  const askX = idx % 2 === 0;
  const correct = askX ? x : y;
  return {
    questionText: `What is the ${askX ? 'x' : 'y'}-coordinate of the point (${x}, ${y})?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [askX ? y : x, correct + 1, correct - 1]),
    visualContent: `<div style="font-size: 48px;">📍📈</div>`,
    hint: `In the point (${x}, ${y}), the first number is the x-coordinate and the second is the y-coordinate.`
  };
}

function genGraphingCoordinatePoints(seed, idx) {
  const x = (seed + idx) % 10;
  const y = (seed * 3 + idx * 5) % 10;
  const correct = `(${x}, ${y})`;
  return {
    questionText: `A point is plotted ${x} units to the right and ${y} units up from the origin. Which coordinate pair represents this point?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`]),
    visualContent: `<div style="font-size: 48px;">📍</div>`,
    hint: `Right/x comes first, up/y comes second: (${x}, ${y}).`
  };
}

function genRealWorldCoordinates(seed, idx) {
  const x = 1 + ((seed + idx) % 9);
  const y = 1 + ((seed * 3 + idx * 5) % 9);
  return {
    questionText: `On a treasure map grid, the treasure is ${x} steps east and ${y} steps north of the starting point. What coordinate pair marks the treasure?`,
    correctAnswer: `(${x}, ${y})`,
    options: uniqOptions(`(${x}, ${y})`, [`(${y}, ${x})`, `(${x + 1}, ${y})`, `(${x}, ${y + 1})`]),
    visualContent: `<div style="font-size: 48px;">🗺️📍</div>`,
    hint: `East (right) is the x-coordinate, north (up) is the y-coordinate: (${x}, ${y}).`
  };
}

// ============================================================
// GRADE 6 QUIZ GENERATORS
// ============================================================

function lcmMQ(a, b) {
  return (a * b) / gcdMQ(a, b);
}

function genRatioWrite(seed, idx) {
  const items = [
    { a: 'red marbles', b: 'blue marbles', emoji: '🔴🔵' },
    { a: 'dogs', b: 'cats', emoji: '🐶🐱' },
    { a: 'apples', b: 'oranges', emoji: '🍎🍊' },
    { a: 'boys', b: 'girls', emoji: '🧒👧' }
  ];
  const item = items[(seed + idx) % items.length];
  const a = 2 + ((seed * 3 + idx * 5) % 10);
  const b = 2 + ((seed * 7 + idx * 11) % 10);
  const correct = `${a}:${b}`;
  return {
    questionText: `A group has ${a} ${item.a} and ${b} ${item.b}. What is the ratio of ${item.a} to ${item.b}?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`${b}:${a}`, `${a}:${a + b}`, `${a + 1}:${b}`]),
    visualContent: `<div style="font-size: 48px;">${item.emoji}</div>`,
    hint: `Write the ${item.a} first, then the ${item.b}: ${a}:${b}.`
  };
}

function genEquivalentRatio(seed, idx) {
  const a = 2 + (seed % 6), b = 2 + (idx % 6);
  const mult = 2 + ((seed * 3 + idx) % 5);
  const correct = `${a * mult}:${b * mult}`;
  return {
    questionText: `Which ratio is equivalent to ${a}:${b}?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`${a * mult + 1}:${b * mult}`, `${a + mult}:${b + mult}`, `${a * mult}:${b * mult + 1}`]),
    visualContent: `<div style="font-size: 48px;">⚖️🔢</div>`,
    hint: `Multiply both terms of ${a}:${b} by ${mult} to get ${correct}.`
  };
}

function genUnitRateG6(seed, idx) {
  const r = 2 + ((seed * 3 + idx * 5) % 11);
  const qty = 2 + ((seed + idx) % 8);
  const total = r * qty;
  return {
    questionText: `A car travels ${total} miles in ${qty} hours. What is the unit rate in miles per hour?`,
    correctAnswer: String(r),
    options: uniqOptions(r, [r + 1, r - 1, qty]),
    visualContent: `<div style="font-size: 48px;">🚗💨</div>`,
    hint: `${total} ÷ ${qty} = ${r} miles per hour.`
  };
}

function genPercentAsRatio(seed, idx) {
  const map = [[1, 2, '50%'], [1, 4, '25%'], [3, 4, '75%'], [1, 5, '20%'], [2, 5, '40%'], [1, 10, '10%'], [3, 10, '30%'], [1, 20, '5%'], [1, 25, '4%'], [1, 50, '2%']];
  const item = map[(seed + idx) % map.length];
  const n = item[0], d = item[1], pct = item[2];
  if (idx % 2 === 0) {
    return {
      questionText: `What percent is equivalent to ${n}/${d}?`,
      correctAnswer: pct,
      options: uniqOptions(pct, [`${n}%`, `${d}%`, `${parseInt(pct) + 10}%`]),
      visualContent: `<div style="font-size: 48px;">💯</div>`,
      hint: `${n}/${d} means ${n} out of ${d}. Scale to a denominator of 100 to get ${pct}.`
    };
  } else {
    return {
      questionText: `What fraction (in simplest form) is equivalent to ${pct}?`,
      correctAnswer: `${n}/${d}`,
      options: uniqOptions(`${n}/${d}`, [`${d}/${n}`, `${n + 1}/${d}`, `${n}/${d + 1}`]),
      visualContent: `<div style="font-size: 48px;">💯</div>`,
      hint: `${pct} means ${parseInt(pct)} out of 100. Simplify to ${n}/${d}.`
    };
  }
}

function genRatioWordProblem(seed, idx) {
  const a = 2 + (seed % 5), b = 2 + (idx % 5);
  const scale = 2 + ((seed * 3 + idx) % 5);
  const newB = b * scale;
  const newA = a * scale;
  return {
    questionText: `A recipe uses ${a} cups of flour for every ${b} cups of sugar. If you use ${newB} cups of sugar, how many cups of flour do you need?`,
    correctAnswer: String(newA),
    options: uniqOptions(newA, [newA + 1, newA - 1, newB]),
    visualContent: `<div style="font-size: 48px;">🍰</div>`,
    hint: `Scale factor: ${newB}÷${b}=${scale}. Flour: ${a}x${scale}=${newA}.`
  };
}

function genDivideFractionsByFractions(seed, idx) {
  const denoms = [2, 3, 4, 5, 6];
  const d1 = denoms[(seed + idx) % denoms.length];
  const d2 = denoms[(seed * 3 + idx * 5 + 1) % denoms.length];
  const n1 = 1 + (seed % (d1 - 1));
  const n2 = 1 + (idx % (d2 - 1));
  const rawN = n1 * d2, rawD = d1 * n2;
  const g = gcdMQ(rawN, rawD);
  const simpN = rawN / g, simpD = rawD / g;
  return {
    questionText: `${n1}/${d1} ÷ ${n2}/${d2} = ?`,
    correctAnswer: `${simpN}/${simpD}`,
    options: uniqOptions(`${simpN}/${simpD}`, [`${n1 * n2}/${d1 * d2}`, `${rawN}/${rawD}`, `${simpN + 1}/${simpD}`]),
    visualContent: `<div style="font-size: 48px;">➗🟦</div>`,
    hint: `Multiply by the reciprocal: ${n1}/${d1} x ${d2}/${n2} = ${rawN}/${rawD} = ${simpN}/${simpD}.`
  };
}

function genFractionDivisionWordProblem(seed, idx) {
  const d = 2 + ((seed + idx) % 6);
  const n = 1 + (seed % (d - 1 || 1));
  const groups = 2 + ((seed * 3 + idx * 5) % 5);
  const rawN = n, rawD = d * groups;
  const g = gcdMQ(rawN, rawD);
  const simpN = rawN / g, simpD = rawD / g;
  return {
    questionText: `You have ${n}/${d} of a pizza left and want to split it equally among ${groups} friends. What fraction of the whole pizza does each friend get?`,
    correctAnswer: `${simpN}/${simpD}`,
    options: uniqOptions(`${simpN}/${simpD}`, [`${n}/${d + groups}`, `${n * groups}/${d}`, `${simpN + 1}/${simpD}`]),
    visualContent: `<div style="font-size: 48px;">🍕➗</div>`,
    hint: `${n}/${d} ÷ ${groups} = ${n}/${d} x 1/${groups} = ${rawN}/${rawD} = ${simpN}/${simpD}.`
  };
}

function genGCF(seed, idx) {
  const nums = [12, 18, 20, 24, 30, 36, 40, 48, 54, 60, 16, 28, 42, 56, 64, 72, 80, 90];
  const a = nums[(seed + idx) % nums.length];
  const b = nums[(seed * 3 + idx * 5 + 1) % nums.length];
  const correct = gcdMQ(a, b);
  return {
    questionText: `What is the greatest common factor (GCF) of ${a} and ${b}?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct * 2, Math.max(1, correct - 1), correct + 2]),
    visualContent: `<div style="font-size: 48px;">🔢🤝</div>`,
    hint: `List the factors of ${a} and ${b} — the largest one they share is ${correct}.`
  };
}

function genLCM(seed, idx) {
  const nums = [2, 3, 4, 5, 6, 7, 8, 9, 10, 12];
  const a = nums[(seed + idx) % nums.length];
  let b = nums[(seed * 3 + idx * 5 + 1) % nums.length];
  if (b === a) b = nums[(nums.indexOf(a) + 1) % nums.length];
  const correct = lcmMQ(a, b);
  return {
    questionText: `What is the least common multiple (LCM) of ${a} and ${b}?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [a * b, correct + a, Math.max(a, b)]),
    visualContent: `<div style="font-size: 48px;">🔢➕</div>`,
    hint: `List multiples of ${a} and ${b} — the smallest one they share is ${correct}.`
  };
}

function genFractionDecimalConversion(seed, idx) {
  const map = [[1, 2, 0.5], [1, 4, 0.25], [3, 4, 0.75], [1, 5, 0.2], [2, 5, 0.4], [3, 5, 0.6], [1, 8, 0.125], [3, 8, 0.375], [1, 10, 0.1], [7, 10, 0.7]];
  const item = map[(seed + idx) % map.length];
  const n = item[0], d = item[1], dec = item[2];
  if (idx % 2 === 0) {
    return {
      questionText: `Convert ${n}/${d} to a decimal.`,
      correctAnswer: String(dec),
      options: uniqOptions(dec, [dec * 10, dec / 10, Math.round((dec + 0.1) * 1000) / 1000]),
      visualContent: `<div style="font-size: 48px;">🔢.🔢</div>`,
      hint: `${n} ÷ ${d} = ${dec}.`
    };
  } else {
    return {
      questionText: `Convert the decimal ${dec} to a fraction in simplest form.`,
      correctAnswer: `${n}/${d}`,
      options: uniqOptions(`${n}/${d}`, [`${d}/${n}`, `${n + 1}/${d}`, `${n}/${d + 1}`]),
      visualContent: `<div style="font-size: 48px;">🔢.🔢</div>`,
      hint: `${dec} = ${n}/${d} in simplest form.`
    };
  }
}

function genIntroNegativeNumbers(seed, idx) {
  const contexts = [
    (n) => ({ d: `a temperature of ${n} degrees below zero`, v: -n }),
    (n) => ({ d: `a debt of $${n}`, v: -n }),
    (n) => ({ d: `${n} feet below sea level`, v: -n }),
    (n) => ({ d: `a gain of ${n} yards`, v: n })
  ];
  const n = 2 + ((seed * 3 + idx * 5) % 20);
  const ctx = contexts[(seed + idx) % contexts.length](n);
  return {
    questionText: `Which integer represents ${ctx.d}?`,
    correctAnswer: String(ctx.v),
    options: uniqOptions(ctx.v, [-ctx.v, ctx.v + 1, ctx.v - 1]),
    visualContent: `<div style="font-size: 48px;">➖🔢</div>`,
    hint: `Below zero, debt, and below sea level are represented with negative numbers; gains are positive.`
  };
}

function genIntegersNumberLine(seed, idx) {
  const a = -10 + ((seed * 3 + idx * 5) % 21);
  let b = -10 + ((seed * 7 + idx * 11) % 21);
  if (a === b) b = a + 1 > 10 ? a - 1 : a + 1;
  const askGreater = idx % 2 === 0;
  const correct = askGreater ? Math.max(a, b) : Math.min(a, b);
  return {
    questionText: `On a number line, which integer is farther to the ${askGreater ? 'right' : 'left'}: ${a} or ${b}?`,
    correctAnswer: String(correct),
    options: [String(a), String(b)],
    visualContent: `<div style="font-size: 48px;">📏➖➕</div>`,
    hint: `On a number line, numbers increase to the right. ${Math.max(a, b)} is to the right of ${Math.min(a, b)}.`
  };
}

function genAbsoluteValue(seed, idx) {
  const n = -20 + ((seed * 3 + idx * 5) % 41);
  const correct = Math.abs(n);
  return {
    questionText: `What is the absolute value of ${n}? (|${n}| = ?)`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [-correct, correct + 1, correct - 1]),
    visualContent: `<div style="font-size: 48px;">|🔢|</div>`,
    hint: `Absolute value is the distance from zero, so it's always positive (or zero): |${n}| = ${correct}.`
  };
}

function genCompareIntegers(seed, idx) {
  const a = -15 + ((seed * 3 + idx * 5) % 31);
  let b = -15 + ((seed * 7 + idx * 11) % 31);
  if (a === b) b = a + 3 > 15 ? a - 3 : a + 3;
  const askGreater = idx % 2 === 0;
  const correct = askGreater ? Math.max(a, b) : Math.min(a, b);
  return {
    questionText: `Which is ${askGreater ? 'greater' : 'smaller'}: ${a} or ${b}?`,
    correctAnswer: String(correct),
    options: [String(a), String(b)],
    visualContent: `<div style="font-size: 48px;">⚖️➖</div>`,
    hint: `${Math.max(a, b)} is greater than ${Math.min(a, b)} on the number line.`
  };
}

function genCoordinateQuadrants(seed, idx) {
  const signs = [[1, 1, 'I'], [-1, 1, 'II'], [-1, -1, 'III'], [1, -1, 'IV']];
  const s = signs[(seed + idx) % 4];
  const x = s[0] * (1 + ((seed * 3 + idx * 5) % 9));
  const y = s[1] * (1 + ((seed * 7 + idx * 11) % 9));
  const correct = `Quadrant ${s[2]}`;
  return {
    questionText: `In which quadrant is the point (${x}, ${y}) located?`,
    correctAnswer: correct,
    options: ['Quadrant I', 'Quadrant II', 'Quadrant III', 'Quadrant IV'],
    visualContent: `<div style="font-size: 48px;">📍➕➖</div>`,
    hint: `Positive x & positive y = Quadrant I; negative x & positive y = Quadrant II; both negative = Quadrant III; positive x & negative y = Quadrant IV.`
  };
}

function genWriteAlgebraicExpression(seed, idx) {
  const phrases = [
    (n) => ({ p: `${n} more than a number x`, e: `x + ${n}` }),
    (n) => ({ p: `${n} less than a number x`, e: `x - ${n}` }),
    (n) => ({ p: `a number x times ${n}`, e: `${n}x` }),
    (n) => ({ p: `a number x divided by ${n}`, e: `x/${n}` })
  ];
  const n = 2 + ((seed * 3 + idx * 5) % 12);
  const item = phrases[(seed + idx) % phrases.length](n);
  return {
    questionText: `Write an algebraic expression for: "${item.p}"`,
    correctAnswer: item.e,
    options: uniqOptions(item.e, [`x + ${n + 1}`, `${n}x + 1`, `x - ${n}`]),
    visualContent: `<div style="font-size: 48px;">✏️x</div>`,
    hint: `Translate the words into symbols one piece at a time.`
  };
}

function genEvaluateAlgebraicExpression(seed, idx) {
  const a = 2 + ((seed + idx) % 9);
  const b = 1 + ((seed * 3 + idx * 5) % 15);
  const x = 1 + ((seed * 7 + idx * 11) % 10);
  const correct = a * x + b;
  return {
    questionText: `Evaluate ${a}x + ${b} when x = ${x}.`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + a, correct - b, a + b + x]),
    visualContent: `<div style="font-size: 48px;">🔢x</div>`,
    hint: `Substitute x=${x}: ${a}(${x}) + ${b} = ${a * x} + ${b} = ${correct}.`
  };
}

function genSolveOneStepEquation(seed, idx) {
  const ops = ['add', 'sub', 'mul', 'div'];
  const op = ops[idx % 4];
  const x = 2 + ((seed * 3 + idx * 5) % 20);
  if (op === 'add') {
    const b = 1 + ((seed + idx) % 20);
    const c = x + b;
    return { questionText: `Solve for x: x + ${b} = ${c}`, correctAnswer: String(x), options: uniqOptions(x, [x + 1, x - 1, c]), visualContent: `<div style="font-size: 48px;">🔢x</div>`, hint: `Subtract ${b} from both sides: x = ${c} - ${b} = ${x}.` };
  } else if (op === 'sub') {
    const b = 1 + ((seed + idx) % 20);
    const c = x - b;
    return { questionText: `Solve for x: x - ${b} = ${c}`, correctAnswer: String(x), options: uniqOptions(x, [x + 1, x - 1, c]), visualContent: `<div style="font-size: 48px;">🔢x</div>`, hint: `Add ${b} to both sides: x = ${c} + ${b} = ${x}.` };
  } else if (op === 'mul') {
    const b = 2 + ((seed + idx) % 9);
    const c = x * b;
    return { questionText: `Solve for x: ${b}x = ${c}`, correctAnswer: String(x), options: uniqOptions(x, [x + 1, x - 1, b]), visualContent: `<div style="font-size: 48px;">🔢x</div>`, hint: `Divide both sides by ${b}: x = ${c} ÷ ${b} = ${x}.` };
  } else {
    const b = 2 + ((seed + idx) % 9);
    const q = x;
    const dividend = q * b;
    return { questionText: `Solve for x: x ÷ ${b} = ${q}`, correctAnswer: String(dividend), options: uniqOptions(dividend, [dividend + b, dividend - b, q]), visualContent: `<div style="font-size: 48px;">🔢x</div>`, hint: `Multiply both sides by ${b}: x = ${q} x ${b} = ${dividend}.` };
  }
}

function genIndependentDependentVariable(seed, idx) {
  const scenarios = [
    { ctx: 'the number of hours you work and the amount you earn', ind: 'hours worked', dep: 'amount earned' },
    { ctx: 'the number of candy bars you buy and the total cost', ind: 'number of candy bars', dep: 'total cost' },
    { ctx: 'the temperature outside and the number of hot cocoas sold', ind: 'temperature', dep: 'number of hot cocoas sold' },
    { ctx: 'the distance you drive and the amount of gas used', ind: 'distance driven', dep: 'gas used' }
  ];
  const item = scenarios[(seed + idx) % scenarios.length];
  const askInd = idx % 2 === 0;
  const correct = askInd ? item.ind : item.dep;
  return {
    questionText: `Consider ${item.ctx}. Which is the ${askInd ? 'independent' : 'dependent'} variable?`,
    correctAnswer: correct,
    options: [item.ind, item.dep],
    visualContent: `<div style="font-size: 48px;">📊➡️</div>`,
    hint: askInd ? `The independent variable is the one that changes on its own — here, that's ${item.ind}.` : `The dependent variable changes because of the independent variable — here, that's ${item.dep}.`
  };
}

function genInequalityNumberLine(seed, idx) {
  const n = -5 + ((seed * 3 + idx * 5) % 16);
  const types = [
    { sym: '>', word: 'greater than' },
    { sym: '<', word: 'less than' },
    { sym: '≥', word: 'greater than or equal to' },
    { sym: '≤', word: 'less than or equal to' }
  ];
  const t = types[idx % 4];
  const correct = `x ${t.sym} ${n}`;
  return {
    questionText: `Write an inequality for: "a number x is ${t.word} ${n}."`,
    correctAnswer: correct,
    options: uniqOptions(correct, types.filter(o => o.sym !== t.sym).map(o => `x ${o.sym} ${n}`)),
    visualContent: `<div style="font-size: 48px;">📏≥≤</div>`,
    hint: `"${t.word}" translates directly to the symbol ${t.sym}.`
  };
}

function genAreaTriangle(seed, idx) {
  const b = 2 * (1 + ((seed + idx) % 10));
  const h = 1 + ((seed * 3 + idx * 5) % 12);
  const area = (b * h) / 2;
  return {
    questionText: `A triangle has a base of ${b} units and a height of ${h} units. What is its area?`,
    correctAnswer: `${area} square units`,
    options: uniqOptions(`${area} square units`, [`${b * h} square units`, `${area + b} square units`, `${area - h} square units`]),
    visualContent: `<div style="font-size: 48px;">🔺📐</div>`,
    hint: `Area = 1/2 x base x height = 1/2 x ${b} x ${h} = ${area}.`
  };
}

function genAreaQuadrilateral(seed, idx) {
  if (idx % 2 === 0) {
    const b = 2 + ((seed + idx) % 12);
    const h = 2 + ((seed * 3 + idx * 5) % 12);
    const area = b * h;
    return {
      questionText: `A parallelogram has a base of ${b} units and a height of ${h} units. What is its area?`,
      correctAnswer: `${area} square units`,
      options: uniqOptions(`${area} square units`, [`${2 * (b + h)} square units`, `${area + b} square units`, `${area - h} square units`]),
      visualContent: `<div style="font-size: 48px;">▱📐</div>`,
      hint: `Area of a parallelogram = base x height = ${b} x ${h} = ${area}.`
    };
  } else {
    const b1 = 2 * (1 + ((seed + idx) % 8));
    const b2 = 2 * (1 + ((seed * 3 + idx) % 8));
    const h = 1 + ((seed * 7 + idx * 11) % 10);
    const area = ((b1 + b2) / 2) * h;
    return {
      questionText: `A trapezoid has parallel sides of ${b1} and ${b2} units and a height of ${h} units. What is its area?`,
      correctAnswer: `${area} square units`,
      options: uniqOptions(`${area} square units`, [`${(b1 + b2) * h} square units`, `${area + h} square units`, `${area - b1} square units`]),
      visualContent: `<div style="font-size: 48px;">🔷📐</div>`,
      hint: `Area of a trapezoid = ((b1+b2)/2) x height = ((${b1}+${b2})/2) x ${h} = ${area}.`
    };
  }
}

function genAreaComposite(seed, idx) {
  const l1 = 2 + (seed % 8), w1 = 2 + (idx % 6);
  const l2 = 2 + ((seed * 3) % 6), w2 = 2 + ((idx * 5) % 4);
  const area1 = l1 * w1, area2 = l2 * w2;
  const total = area1 + area2;
  return {
    questionText: `A composite figure is made of a ${l1}x${w1} rectangle and a ${l2}x${w2} rectangle joined together. What is the total area?`,
    correctAnswer: `${total} square units`,
    options: uniqOptions(`${total} square units`, [`${area1} square units`, `${area2} square units`, `${total + 2} square units`]),
    visualContent: `<div style="font-size: 48px;">📐▭</div>`,
    hint: `${l1}x${w1}=${area1} and ${l2}x${w2}=${area2}. ${area1}+${area2}=${total}.`
  };
}

function genSurfaceAreaPrism(seed, idx) {
  const l = 2 + ((seed + idx) % 9);
  const w = 2 + ((seed * 3 + idx * 5) % 9);
  const h = 2 + ((seed * 7 + idx * 11) % 9);
  const sa = 2 * (l * w + l * h + w * h);
  return {
    questionText: `A rectangular prism has length ${l}, width ${w}, and height ${h}. What is its surface area?`,
    correctAnswer: `${sa} square units`,
    options: uniqOptions(`${sa} square units`, [`${l * w * h} square units`, `${sa + l} square units`, `${sa - w} square units`]),
    visualContent: `<div style="font-size: 48px;">📦📐</div>`,
    hint: `SA = 2(lw + lh + wh) = 2(${l * w} + ${l * h} + ${w * h}) = ${sa}.`
  };
}

function genVolumeRectPrismFrac(seed, idx) {
  const l = 2 + ((seed + idx) % 6);
  const w = 2 + 2 * ((seed * 3 + idx * 5) % 3);
  const hWhole = 2 + ((seed * 7 + idx * 11) % 6);
  const volWhole = l * w * hWhole;
  const volHalf = (l * w) / 2;
  const correct = volWhole + volHalf;
  return {
    questionText: `A rectangular prism has length ${l}, width ${w}, and height ${hWhole}.5 units. What is its volume?`,
    correctAnswer: `${correct} cubic units`,
    options: uniqOptions(`${correct} cubic units`, [`${volWhole} cubic units`, `${correct + l} cubic units`, `${l * w} cubic units`]),
    visualContent: `<div style="font-size: 48px;">📦</div>`,
    hint: `Volume = l x w x h = ${l} x ${w} x ${hWhole}.5 = ${correct}.`
  };
}

function genStatisticalQuestion(seed, idx) {
  const bank = [
    { correct: 'How many pets does each student in the class have?', distractors: ['How many pets does Sam have?', 'What is 5 + 3?', 'What is the capital of France?'] },
    { correct: 'What are the heights of the players on the basketball team?', distractors: ['How tall is the tallest player?', 'What is 10 x 10?', 'What color is the gym floor?'] },
    { correct: 'How long does it take each runner on the team to run a mile?', distractors: ['How long did the fastest runner take?', 'What day is the race?', 'How many laps are in a mile?'] },
    { correct: 'What are the test scores of everyone in the class?', distractors: ['What was the highest test score?', 'What subject was the test on?', 'How many questions were on the test?'] }
  ];
  const item = bank[(seed + idx) % bank.length];
  return {
    questionText: `Which of these is a statistical question — one that expects variety in the answers?`,
    correctAnswer: item.correct,
    options: uniqOptions(item.correct, item.distractors),
    visualContent: `<div style="font-size: 48px;">📊❓</div>`,
    hint: `A statistical question anticipates variability — it's asked about a group, not just one specific answer.`
  };
}

function genMeanMedianMode(seed, idx) {
  const nums = [];
  for (let i = 0; i < 5; i++) nums.push(2 + ((seed * (i + 3) + idx * (i + 2)) % 15));
  const sorted = [...nums].sort((a, b) => a - b);
  const sum = nums.reduce((a, b) => a + b, 0);
  const mean = Math.round((sum / nums.length) * 100) / 100;
  const median = sorted[2];
  const which = idx % 2 === 0 ? 'mean' : 'median';
  const correct = which === 'mean' ? mean : median;
  const distractors = which === 'mean' ? [median, sorted[0], sorted[4]] : [mean, sorted[0], sorted[4]];
  return {
    questionText: `Find the ${which} of this data set: ${nums.join(', ')}.`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, distractors),
    visualContent: `<div style="font-size: 48px;">📊</div>`,
    hint: which === 'mean' ? `Add all values and divide by how many there are: ${sum} ÷ ${nums.length} = ${mean}.` : `Sort the values and pick the middle one: ${sorted.join(', ')} → median = ${median}.`
  };
}

function genRangeVariability(seed, idx) {
  const nums = [];
  for (let i = 0; i < 5; i++) nums.push(2 + ((seed * (i + 3) + idx * (i + 2)) % 20));
  const max = Math.max(...nums), min = Math.min(...nums);
  const range = max - min;
  return {
    questionText: `Find the range of this data set: ${nums.join(', ')}.`,
    correctAnswer: String(range),
    options: uniqOptions(range, [max, min, range + 2]),
    visualContent: `<div style="font-size: 48px;">📏📊</div>`,
    hint: `Range = greatest value - least value = ${max} - ${min} = ${range}.`
  };
}

function genDotPlotsHistograms(seed, idx) {
  const v1 = 2 + (seed % 5), v2 = 2 + (idx % 5), v3 = 2 + ((seed + idx) % 5);
  const c1 = 1 + ((seed * 3) % 4), c2 = 1 + ((idx * 5) % 4), c3 = 1 + ((seed * 7 + idx) % 4);
  const total = c1 + c2 + c3;
  return {
    questionText: `A dot plot shows ${c1} dots above ${v1}, ${c2} dots above ${v2}, and ${c3} dots above ${v3}. How many total data points are there?`,
    correctAnswer: String(total),
    options: uniqOptions(total, [total + 1, total - 1, Math.max(c1, c2, c3)]),
    visualContent: `<div style="font-size: 48px;">⚫📈</div>`,
    hint: `${c1} + ${c2} + ${c3} = ${total}.`
  };
}

function genGrade6Review(seed, idx) {
  const gens = [genRatioWordProblem, genCompareIntegers, genSolveOneStepEquation, genAreaTriangle, genMeanMedianMode, genGCF];
  return gens[idx % gens.length](seed, idx);
}

// ============================================================
// GRADE 7 QUIZ GENERATORS
// ============================================================

function genUnitRateFractionsG7(seed, idx) {
  const denomsTime = [2, 3, 4, 6];
  const dTime = denomsTime[(seed + idx) % denomsTime.length];
  const distNum = 1 + ((seed * 3 + idx * 5) % (dTime * 3));
  const correct = distNum * dTime;
  return {
    questionText: `A cyclist rides ${distNum} miles in 1/${dTime} hour. What is the unit rate in miles per hour?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + dTime, correct - dTime, distNum]),
    visualContent: `<div style="font-size: 48px;">🚴💨</div>`,
    hint: `${distNum} ÷ (1/${dTime}) = ${distNum} x ${dTime} = ${correct} miles per hour.`
  };
}

function genIdentifyProportional(seed, idx) {
  const isProportional = idx % 2 === 0;
  const k = 2 + ((seed + idx) % 8);
  let xs, ys;
  if (isProportional) {
    xs = [1, 2, 3]; ys = xs.map(x => x * k);
  } else {
    const b = 1 + ((seed * 3) % 6);
    xs = [1, 2, 3]; ys = xs.map(x => x * k + b);
  }
  const desc = xs.map((x, i) => `(${x}, ${ys[i]})`).join(', ');
  return {
    questionText: `Is the relationship shown by these points proportional? ${desc}`,
    correctAnswer: isProportional ? 'Yes' : 'No',
    options: ['Yes', 'No'],
    visualContent: `<div style="font-size: 48px;">📈❓</div>`,
    hint: isProportional ? `Every y/x ratio equals ${k}, and the pattern passes through (0,0), so it's proportional.` : `The y/x ratios are not constant and the relationship doesn't pass through the origin, so it's not proportional.`
  };
}

function genConstantProportionality(seed, idx) {
  const k = 2 + ((seed + idx) % 12);
  const x = 1 + ((seed * 3 + idx * 5) % 9);
  const y = k * x;
  return {
    questionText: `A table shows x = ${x} and y = ${y} for a proportional relationship. What is the constant of proportionality?`,
    correctAnswer: String(k),
    options: uniqOptions(k, [k + 1, k - 1, x]),
    visualContent: `<div style="font-size: 48px;">🔢k</div>`,
    hint: `k = y ÷ x = ${y} ÷ ${x} = ${k}.`
  };
}

function genGraphProportional(seed, idx) {
  const k = 2 + ((seed + idx) % 9);
  const x = 1 + ((seed * 3 + idx * 5) % 8);
  const y = k * x;
  return {
    questionText: `A line representing a proportional relationship passes through (0,0) and (${x}, ${y}). What is the slope (unit rate) of the line?`,
    correctAnswer: String(k),
    options: uniqOptions(k, [k + 1, k - 1, y]),
    visualContent: `<div style="font-size: 48px;">📈📏</div>`,
    hint: `Slope = rise/run = ${y}/${x} = ${k}.`
  };
}

function genProportionWordProblem(seed, idx) {
  const items = [{ n: 'pens', u: '$' }, { n: 'tickets', u: '$' }, { n: 'apples', u: '$' }];
  const item = items[(seed + idx) % items.length];
  const qty1 = 2 + ((seed + idx) % 8);
  const price = 2 + ((seed * 3 + idx * 5) % 10);
  const qty2 = qty1 * (2 + ((seed * 7) % 3));
  const correct = (price / qty1) * qty2;
  return {
    questionText: `If ${qty1} ${item.n} cost ${item.u}${price}, how much do ${qty2} ${item.n} cost?`,
    correctAnswer: `${item.u}${correct}`,
    options: uniqOptions(`${item.u}${correct}`, [`${item.u}${correct + price}`, `${item.u}${correct - price}`, `${item.u}${price}`]),
    visualContent: `<div style="font-size: 48px;">🛒⚖️</div>`,
    hint: `Unit price: ${item.u}${price}÷${qty1}. Then multiply by ${qty2}: ${item.u}${correct}.`
  };
}

function genAddSubIntegers(seed, idx) {
  const a = -20 + ((seed * 3 + idx * 5) % 41);
  const b = -20 + ((seed * 7 + idx * 11) % 41);
  const isAdd = idx % 2 === 0;
  const correct = isAdd ? a + b : a - b;
  return {
    questionText: `${a} ${isAdd ? '+' : '-'} (${b}) = ?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + 1, correct - 1, isAdd ? a - b : a + b]),
    visualContent: `<div style="font-size: 48px;">➕➖</div>`,
    hint: isAdd ? `${a} + (${b}) = ${correct}.` : `${a} - (${b}) = ${a} + (${-b}) = ${correct}.`
  };
}

function genMulDivIntegers(seed, idx) {
  if (idx % 2 === 0) {
    const a = -12 + ((seed * 3 + idx * 5) % 25);
    const b = -12 + ((seed * 7 + idx * 11) % 25);
    const correct = a * b;
    return {
      questionText: `${a} x (${b}) = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [-correct, correct + a, correct - b]),
      visualContent: `<div style="font-size: 48px;">✖️➖</div>`,
      hint: `Multiply the magnitudes, then apply the sign rule: ${a} x (${b}) = ${correct}.`
    };
  } else {
    const divisor = 2 + ((seed + idx) % 10);
    const quotientMag = 2 + ((seed * 3 + idx * 5) % 10);
    const signDividend = ((seed + idx) % 2 === 0) ? 1 : -1;
    const signDivisor = ((seed * 3 + idx) % 2 === 0) ? 1 : -1;
    const dividend = signDividend * divisor * quotientMag;
    const divisorSigned = signDivisor * divisor;
    const correct = dividend / divisorSigned;
    return {
      questionText: `${dividend} ÷ (${divisorSigned}) = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [-correct, correct + 1, correct - 1]),
      visualContent: `<div style="font-size: 48px;">➗➖</div>`,
      hint: `Divide the magnitudes, then apply the sign rule: ${dividend} ÷ (${divisorSigned}) = ${correct}.`
    };
  }
}

function genAddSubRational(seed, idx) {
  if (idx % 2 === 0) {
    const d = 2 + ((seed + idx) % 8);
    const n1 = -(d - 1) + ((seed * 3) % (2 * d - 1));
    const n2 = -(d - 1) + ((idx * 5) % (2 * d - 1));
    const sumN = n1 + n2;
    if (sumN === 0) {
      return {
        questionText: `${n1}/${d} + ${n2}/${d} = ?`,
        correctAnswer: `0`,
        options: uniqOptions('0', [`${n1}/${d}`, `1/${d}`, `-1/${d}`]),
        visualContent: `<div style="font-size: 48px;">➕➖</div>`,
        hint: `Same denominator: add numerators. ${n1} + (${n2}) = 0.`
      };
    }
    const g = gcdMQ(Math.abs(sumN), d);
    const simpN = sumN / g, simpD = d / g;
    return {
      questionText: `${n1}/${d} + ${n2}/${d} = ?`,
      correctAnswer: `${simpN}/${simpD}`,
      options: uniqOptions(`${simpN}/${simpD}`, [`${sumN}/${d}`, `${simpN + 1}/${simpD}`, `${simpN - 1}/${simpD}`]),
      visualContent: `<div style="font-size: 48px;">➕➖</div>`,
      hint: `Same denominator: add numerators. ${n1} + (${n2}) = ${sumN}, so the sum is ${sumN}/${d} = ${simpN}/${simpD}.`
    };
  } else {
    const a = Math.round((-1000 + ((seed * 13 + idx * 7) % 2001))) / 100;
    const b = Math.round((-1000 + ((seed * 7 + idx * 13) % 2001))) / 100;
    const correct = Math.round((a - b) * 100) / 100;
    return {
      questionText: `${a} - (${b}) = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [Math.round((correct + 1) * 100) / 100, Math.round((correct - 1) * 100) / 100, Math.round((a + b) * 100) / 100]),
      visualContent: `<div style="font-size: 48px;">🔢.➖</div>`,
      hint: `${a} - (${b}) = ${a} + (${-b}) = ${correct}.`
    };
  }
}

function genMulDivRational(seed, idx) {
  if (idx % 2 === 0) {
    const d1 = 2 + ((seed + idx) % 6);
    const d2 = 2 + ((seed * 3 + idx * 5) % 6);
    const n1sign = ((seed + idx) % 2 === 0) ? 1 : -1;
    const n2sign = ((seed * 3 + idx) % 2 === 0) ? 1 : -1;
    const n1 = n1sign * (1 + ((seed * 5) % (d1 - 1 || 1)));
    const n2 = n2sign * (1 + ((idx * 7) % (d2 - 1 || 1)));
    const rawN = n1 * n2, rawD = d1 * d2;
    const g = gcdMQ(Math.abs(rawN), rawD);
    const simpN = rawN / g, simpD = rawD / g;
    return {
      questionText: `${n1}/${d1} x ${n2}/${d2} = ?`,
      correctAnswer: `${simpN}/${simpD}`,
      options: uniqOptions(`${simpN}/${simpD}`, [`${rawN}/${rawD}`, `${simpN + 1}/${simpD}`, `${Math.abs(simpN)}/${simpD}`]),
      visualContent: `<div style="font-size: 48px;">✖️➖</div>`,
      hint: `Multiply numerators and denominators, then apply the sign rule: (${n1})x(${n2}) = ${rawN}, ${d1}x${d2}=${rawD}, simplify to ${simpN}/${simpD}.`
    };
  } else {
    const magA = Math.round((10 + ((seed * 13 + idx * 7) % 990))) / 10;
    const magB = Math.round((10 + ((seed * 7 + idx * 13) % 990))) / 10;
    const signA = ((seed + idx) % 2 === 0) ? 1 : -1;
    const signB = ((seed * 3 + idx) % 2 === 0) ? 1 : -1;
    const a = signA * magA, b = signB * magB;
    const correct = Math.round((a * b) * 100) / 100;
    return {
      questionText: `${a} x (${b}) = ?`,
      correctAnswer: String(correct),
      options: uniqOptions(correct, [-correct, Math.round((correct + 1) * 100) / 100, Math.round((correct - 1) * 100) / 100]),
      visualContent: `<div style="font-size: 48px;">🔢.✖️</div>`,
      hint: `Multiply the magnitudes, then apply the sign rule: ${a} x (${b}) = ${correct}.`
    };
  }
}

function genRationalWordProblem(seed, idx) {
  if (idx % 2 === 0) {
    const start = -20 + ((seed * 3 + idx * 5) % 41);
    const change = 1 + ((seed * 7 + idx * 11) % 20);
    const rises = (seed + idx) % 2 === 0;
    const correct = rises ? start + change : start - change;
    return {
      questionText: `The temperature was ${start}°F and ${rises ? 'rose' : 'dropped'} ${change}°F. What is the new temperature?`,
      correctAnswer: `${correct}°F`,
      options: uniqOptions(`${correct}°F`, [`${correct + 2}°F`, `${correct - 2}°F`, `${start}°F`]),
      visualContent: `<div style="font-size: 48px;">🌡️</div>`,
      hint: rises ? `${start} + ${change} = ${correct}.` : `${start} - ${change} = ${correct}.`
    };
  } else {
    const depth = -(5 + ((seed * 3 + idx * 5) % 50));
    const factor = 2 + ((seed + idx) % 3);
    const correct = depth * factor;
    return {
      questionText: `A submarine is at ${depth} feet and dives to ${factor} times that depth. What is its new depth?`,
      correctAnswer: `${correct} feet`,
      options: uniqOptions(`${correct} feet`, [`${-correct} feet`, `${correct + 10} feet`, `${depth} feet`]),
      visualContent: `<div style="font-size: 48px;">🤿</div>`,
      hint: `${depth} x ${factor} = ${correct}.`
    };
  }
}

function genSimplifyRationalCoeff(seed, idx) {
  const useDecimal = idx % 2 === 1;
  if (!useDecimal) {
    const d = [2, 4, 6, 8][(seed + idx) % 4];
    const n1 = 1 + ((seed * 3) % (d - 1));
    const n2 = 1 + ((idx * 5) % (d - 1));
    const c1 = 2 + ((seed * 7) % 10), c2 = 2 + ((idx * 11) % 10);
    const nSum = n1 + n2, cSum = c1 + c2;
    const g = gcdMQ(nSum, d);
    const simpN = nSum / g, simpD = d / g;
    const coeffStr = simpD === 1 ? `${simpN}` : `${simpN}/${simpD}`;
    return {
      questionText: `Simplify: ${n1}/${d}x + ${c1} + ${n2}/${d}x + ${c2}`,
      correctAnswer: `${coeffStr}x + ${cSum}`,
      options: uniqOptions(`${coeffStr}x + ${cSum}`, [`${coeffStr}x + ${cSum + 1}`, `${nSum}/${d}x + ${cSum}`, `${coeffStr}x + ${cSum - 1}`]),
      visualContent: `<div style="font-size: 48px;">✏️x</div>`,
      hint: `Combine the x-terms: ${n1}/${d}x + ${n2}/${d}x = ${nSum}/${d}x = ${coeffStr}x. Combine constants: ${c1} + ${c2} = ${cSum}.`
    };
  } else {
    const c1 = Math.round((5 + ((seed * 13 + idx * 7) % 95))) / 10;
    const c2 = Math.round((5 + ((seed * 7 + idx * 13) % 95))) / 10;
    const b1 = 2 + ((seed + idx) % 8), b2 = 2 + ((seed * 3 + idx * 5) % 8);
    const coeffSum = Math.round((c1 + c2) * 10) / 10;
    const constSum = b1 + b2;
    return {
      questionText: `Simplify: ${c1}x + ${b1} + ${c2}x + ${b2}`,
      correctAnswer: `${coeffSum}x + ${constSum}`,
      options: uniqOptions(`${coeffSum}x + ${constSum}`, [`${coeffSum}x + ${constSum + 1}`, `${Math.round(c1 * c2 * 10) / 10}x + ${constSum}`, `${coeffSum}x + ${constSum - 1}`]),
      visualContent: `<div style="font-size: 48px;">✏️x</div>`,
      hint: `Combine the x-terms: ${c1}x + ${c2}x = ${coeffSum}x. Combine constants: ${b1} + ${b2} = ${constSum}.`
    };
  }
}

function genFactorExpression(seed, idx) {
  const gcf = 2 + ((seed + idx) % 10);
  const m1 = 2 + ((seed * 3 + idx * 5) % 8);
  const m2 = 2 + ((seed * 7 + idx * 11) % 8);
  const t1 = gcf * m1, t2 = gcf * m2;
  const isSubtract = idx % 2 === 1;
  const correct = `${gcf}(${m1}x ${isSubtract ? '-' : '+'} ${m2})`;
  return {
    questionText: `Factor completely: ${t1}x ${isSubtract ? '-' : '+'} ${t2}`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`${gcf}(${m1}x ${isSubtract ? '+' : '-'} ${m2})`, `${gcf + 1}(${m1}x ${isSubtract ? '-' : '+'} ${m2})`, `${gcf}(${m1 + 1}x ${isSubtract ? '-' : '+'} ${m2})`]),
    visualContent: `<div style="font-size: 48px;">🔢()</div>`,
    hint: `The GCF of ${t1} and ${t2} is ${gcf}. Divide each term by ${gcf}: ${t1}÷${gcf}=${m1}x and ${t2}÷${gcf}=${m2}.`
  };
}

function genSolveMultiStepEquation(seed, idx) {
  if (idx % 2 === 0) {
    const a = 2 + ((seed + idx) % 9);
    const x = 1 + ((seed * 3 + idx * 5) % 15);
    const b = 1 + ((seed * 7 + idx * 11) % 20);
    const c = a * x + b;
    return {
      questionText: `Solve for x: ${a}x + ${b} = ${c}`,
      correctAnswer: String(x),
      options: uniqOptions(x, [x + 1, x - 1, b]),
      visualContent: `<div style="font-size: 48px;">🔢x</div>`,
      hint: `Subtract ${b}: ${a}x = ${c - b}. Divide by ${a}: x = ${x}.`
    };
  } else {
    const a = 2 + ((seed + idx) % 7);
    const x = 1 + ((seed * 3 + idx * 5) % 12);
    const b = 1 + ((seed * 7) % 8);
    const inner = x - b;
    const c = a * inner;
    return {
      questionText: `Solve for x: ${a}(x - ${b}) = ${c}`,
      correctAnswer: String(x),
      options: uniqOptions(x, [x + 1, x - 1, inner]),
      visualContent: `<div style="font-size: 48px;">🔢x</div>`,
      hint: `Distribute: ${a}x - ${a * b} = ${c}. Add ${a * b}: ${a}x = ${c + a * b}. Divide by ${a}: x = ${x}.`
    };
  }
}

function genEquationsBothSides(seed, idx) {
  const x = 1 + ((seed + idx) % 15);
  const rightCoeff = 2 + ((seed * 3 + idx * 5) % 5);
  const leftCoeff = rightCoeff + 1 + ((idx * 7) % 5);
  const rightConst = 1 + ((seed * 7 + idx * 11) % 20);
  const leftConstCalc = rightConst - (leftCoeff - rightCoeff) * x;
  const leftConstStr = leftConstCalc >= 0 ? `+ ${leftConstCalc}` : `- ${Math.abs(leftConstCalc)}`;
  return {
    questionText: `Solve for x: ${leftCoeff}x ${leftConstStr} = ${rightCoeff}x + ${rightConst}`,
    correctAnswer: String(x),
    options: uniqOptions(x, [x + 1, x - 1, leftCoeff - rightCoeff]),
    visualContent: `<div style="font-size: 48px;">🔢x</div>`,
    hint: `Subtract ${rightCoeff}x from both sides: ${leftCoeff - rightCoeff}x ${leftConstStr} = ${rightConst}. Solve for x: x = ${x}.`
  };
}

function genTranslateWordProblem(seed, idx) {
  const x = 1 + ((seed + idx) % 15);
  if (idx % 2 === 0) {
    const m = 2 + ((seed * 3 + idx * 5) % 6);
    const b = 1 + ((seed * 7) % 15);
    const result = m * x + b;
    return {
      questionText: `${b} more than ${m} times a number is ${result}. What is the number?`,
      correctAnswer: String(x),
      options: uniqOptions(x, [x + 1, x - 1, result]),
      visualContent: `<div style="font-size: 48px;">📝🔢</div>`,
      hint: `Translate: ${m}n + ${b} = ${result}. Subtract ${b}: ${m}n = ${result - b}. Divide by ${m}: n = ${x}.`
    };
  } else {
    const b = 1 + ((seed * 3) % 10);
    const d = 2 + ((idx * 5) % 6);
    const result = 1 + ((seed * 7 + idx * 11) % 10);
    const nMinusB = result * d;
    const n = nMinusB + b;
    return {
      questionText: `${b} less than a number, divided by ${d}, is ${result}. What is the number?`,
      correctAnswer: String(n),
      options: uniqOptions(n, [n + 1, n - 1, nMinusB]),
      visualContent: `<div style="font-size: 48px;">📝🔢</div>`,
      hint: `Translate: (n - ${b})/${d} = ${result}. Multiply by ${d}: n - ${b} = ${nMinusB}. Add ${b}: n = ${n}.`
    };
  }
}

function genSolveInequality(seed, idx) {
  const boundary = 1 + ((seed + idx) % 15);
  const useNegativeCoeff = idx % 2 === 1;
  const a = 2 + ((seed * 3 + idx * 5) % 6);
  const b = 1 + ((seed * 7) % 15);
  if (!useNegativeCoeff) {
    const rhs = a * boundary + b;
    return {
      questionText: `Solve: ${a}x + ${b} < ${rhs}`,
      correctAnswer: `x < ${boundary}`,
      options: uniqOptions(`x < ${boundary}`, [`x > ${boundary}`, `x < ${boundary + 1}`, `x < ${boundary - 1}`]),
      visualContent: `<div style="font-size: 48px;">📏≥≤</div>`,
      hint: `Subtract ${b}: ${a}x < ${rhs - b}. Divide by ${a}: x < ${boundary}.`
    };
  } else {
    const rhs = -a * boundary + b;
    return {
      questionText: `Solve: -${a}x + ${b} < ${rhs}`,
      correctAnswer: `x > ${boundary}`,
      options: uniqOptions(`x > ${boundary}`, [`x < ${boundary}`, `x > ${boundary + 1}`, `x > ${boundary - 1}`]),
      visualContent: `<div style="font-size: 48px;">📏≥≤</div>`,
      hint: `Subtract ${b}: -${a}x < ${rhs - b}. Divide by -${a} and flip the sign: x > ${boundary}.`
    };
  }
}

function genGraphInequality(seed, idx) {
  const n = -8 + ((seed * 3 + idx * 5) % 17);
  const types = [
    { sym: '>', circle: 'open', dir: 'right' },
    { sym: '<', circle: 'open', dir: 'left' },
    { sym: '≥', circle: 'closed', dir: 'right' },
    { sym: '≤', circle: 'closed', dir: 'left' }
  ];
  const t = types[idx % 4];
  const correct = `${t.circle} circle at ${n}, shaded to the ${t.dir}`;
  const others = types.filter(o => o !== t).map(o => `${o.circle} circle at ${n}, shaded to the ${o.dir}`);
  return {
    questionText: `How would you graph x ${t.sym} ${n} on a number line?`,
    correctAnswer: correct,
    options: uniqOptions(correct, others),
    visualContent: `<div style="font-size: 48px;">📏⚪⚫</div>`,
    hint: `${(t.sym === '>' || t.sym === '<') ? 'Strict inequalities use an open circle.' : 'Inequalities with "or equal to" use a closed circle.'} ${(t.sym === '>' || t.sym === '≥') ? 'Greater than shades to the right.' : 'Less than shades to the left.'}`
  };
}

function genPercentIncreaseDecrease(seed, idx) {
  const base = 10 * (2 + ((seed + idx) % 20));
  const pct = 5 * (1 + ((seed * 3 + idx * 5) % 12));
  const isIncrease = idx % 2 === 0;
  const change = (base * pct) / 100;
  const correct = isIncrease ? base + change : base - change;
  return {
    questionText: `A $${base} item ${isIncrease ? 'increases' : 'decreases'} in price by ${pct}%. What is the new price?`,
    correctAnswer: `$${correct}`,
    options: uniqOptions(`$${correct}`, [`$${change}`, `$${correct + 5}`, `$${correct - 5}`]),
    visualContent: `<div style="font-size: 48px;">💲${isIncrease ? '📈' : '📉'}</div>`,
    hint: `${pct}% of ${base} is ${change}. ${isIncrease ? 'Add' : 'Subtract'}: ${base} ${isIncrease ? '+' : '-'} ${change} = ${correct}.`
  };
}

function genSimpleInterest(seed, idx) {
  const p = 100 * (2 + ((seed + idx) % 20));
  const r = 1 + ((seed * 3 + idx * 5) % 9);
  const t = 1 + ((seed * 7 + idx * 11) % 5);
  const interest = (p * r * t) / 100;
  const askTotal = idx % 2 === 1;
  const correct = askTotal ? p + interest : interest;
  return {
    questionText: `Find the ${askTotal ? 'total amount (principal + interest)' : 'simple interest'} on $${p} at ${r}% annual interest for ${t} year(s). (I = prt)`,
    correctAnswer: `$${correct}`,
    options: uniqOptions(`$${correct}`, [`$${interest}`, `$${correct + p * 0.1}`, `$${correct - 10}`]),
    visualContent: `<div style="font-size: 48px;">💰📈</div>`,
    hint: `I = p x r x t = ${p} x ${r / 100} x ${t} = $${interest}.${askTotal ? ` Total = ${p} + ${interest} = $${correct}.` : ''}`
  };
}

function genPercentWordProblem(seed, idx) {
  const base = 5 * (2 + ((seed + idx) % 20));
  const pct = 5 * (1 + ((seed * 3 + idx * 5) % 10));
  const isTip = idx % 2 === 0;
  const change = (base * pct) / 100;
  const correct = isTip ? base + change : base - change;
  return {
    questionText: isTip ? `A $${base} meal has a ${pct}% tip. What is the total cost?` : `A $${base} jacket is ${pct}% off. What is the sale price?`,
    correctAnswer: `$${correct}`,
    options: uniqOptions(`$${correct}`, [`$${change}`, `$${correct + 5}`, `$${correct - 5}`]),
    visualContent: `<div style="font-size: 48px;">💲🧾</div>`,
    hint: `${pct}% of ${base} is ${change}. ${isTip ? 'Add' : 'Subtract'}: ${base} ${isTip ? '+' : '-'} ${change} = $${correct}.`
  };
}

function genScaleDrawing(seed, idx) {
  const scaleUnit2 = 2 + ((seed + idx) % 20);
  const drawingLen = 2 + ((seed * 3 + idx * 5) % 15);
  const correct = drawingLen * scaleUnit2;
  return {
    questionText: `A scale drawing uses a scale of 1 cm : ${scaleUnit2} m. If a wall measures ${drawingLen} cm on the drawing, what is its actual length?`,
    correctAnswer: `${correct} m`,
    options: uniqOptions(`${correct} m`, [`${drawingLen} m`, `${correct + scaleUnit2} m`, `${correct - scaleUnit2} m`]),
    visualContent: `<div style="font-size: 48px;">📐🗺️</div>`,
    hint: `${drawingLen} x ${scaleUnit2} = ${correct} m.`
  };
}

function genCircleCircumferenceArea(seed, idx) {
  const PI_APPROX = 3.14;
  const r = 2 + ((seed + idx) % 13);
  const askArea = idx % 2 === 1;
  const circumference = Math.round(2 * PI_APPROX * r * 100) / 100;
  const area = Math.round(PI_APPROX * r * r * 100) / 100;
  const correct = askArea ? area : circumference;
  return {
    questionText: `A circle has a radius of ${r} units. What is its ${askArea ? 'area' : 'circumference'}? (Use π ≈ 3.14, round to 2 decimals)`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [askArea ? circumference : area, Math.round((correct + 1) * 100) / 100, Math.round((correct - 1) * 100) / 100]),
    visualContent: `<div style="font-size: 48px;">⭕📏</div>`,
    hint: askArea ? `Area = πr² ≈ 3.14 x ${r}² = ${correct}.` : `Circumference = 2πr ≈ 2 x 3.14 x ${r} = ${correct}.`
  };
}

function genAngleRelationships(seed, idx) {
  const isComplementary = idx % 2 === 0;
  const total = isComplementary ? 90 : 180;
  const a = 5 * (1 + ((seed + idx) % (total / 5 - 2)));
  const correct = total - a;
  return {
    questionText: `Two angles are ${isComplementary ? 'complementary' : 'supplementary'}. One angle measures ${a}°. What is the measure of the other angle?`,
    correctAnswer: `${correct}°`,
    options: uniqOptions(`${correct}°`, [`${correct + 10}°`, `${correct - 10}°`, `${a}°`]),
    visualContent: `<div style="font-size: 48px;">📐</div>`,
    hint: `${isComplementary ? 'Complementary' : 'Supplementary'} angles sum to ${total}°: ${total} - ${a} = ${correct}.`
  };
}

function genCrossSections(seed, idx) {
  const bank = [
    { q: 'A rectangular prism is sliced parallel to its base. What is the shape of the cross-section?', correct: 'Rectangle', options: ['Rectangle', 'Triangle', 'Circle', 'Pentagon'] },
    { q: 'A cone is sliced parallel to its circular base. What is the shape of the cross-section?', correct: 'Circle', options: ['Circle', 'Triangle', 'Square', 'Rectangle'] },
    { q: 'A cone is sliced straight down through its apex. What is the shape of the cross-section?', correct: 'Triangle', options: ['Triangle', 'Circle', 'Square', 'Rectangle'] },
    { q: 'A cylinder is sliced parallel to its circular base. What is the shape of the cross-section?', correct: 'Circle', options: ['Circle', 'Rectangle', 'Triangle', 'Square'] },
    { q: 'A cube is sliced parallel to one of its faces. What is the shape of the cross-section?', correct: 'Square', options: ['Square', 'Triangle', 'Circle', 'Pentagon'] },
    { q: 'A square pyramid is sliced parallel to its base. What is the shape of the cross-section?', correct: 'Square', options: ['Square', 'Triangle', 'Circle', 'Rectangle'] }
  ];
  const item = bank[(seed + idx) % bank.length];
  return { questionText: item.q, correctAnswer: item.correct, options: item.options, visualContent: `<div style="font-size: 48px;">🔪📦</div>`, hint: `Picture the flat shape exposed by the slice.` };
}

function genSurfaceVolumeSolids(seed, idx) {
  const askVolume = idx % 2 === 0;
  const l = 2 + ((seed + idx) % 8);
  const w = 2 + ((seed * 3 + idx * 5) % 8);
  const h = 2 + ((seed * 7 + idx * 11) % 8);
  const vol = l * w * h;
  const sa = 2 * (l * w + l * h + w * h);
  const correct = askVolume ? vol : sa;
  const unitLabel = askVolume ? 'cubic' : 'square';
  return {
    questionText: `A rectangular prism has length ${l}, width ${w}, and height ${h}. What is its ${askVolume ? 'volume' : 'surface area'}?`,
    correctAnswer: `${correct} ${unitLabel} units`,
    options: uniqOptions(`${correct} ${unitLabel} units`, [`${askVolume ? sa : vol} ${unitLabel} units`, `${correct + l} ${unitLabel} units`, `${l * w} ${unitLabel} units`]),
    visualContent: `<div style="font-size: 48px;">📦</div>`,
    hint: askVolume ? `Volume = l x w x h = ${l} x ${w} x ${h} = ${vol}.` : `Surface area = 2(lw+lh+wh) = 2(${l * w}+${l * h}+${w * h}) = ${sa}.`
  };
}

function genProbabilitySimple(seed, idx) {
  const fav = 1 + ((seed + idx) % 8);
  const extra = 1 + ((seed * 3 + idx * 5) % 8);
  const total = fav + extra;
  const g = gcdMQ(fav, total);
  const simpFav = fav / g, simpTotal = total / g;
  const correct = `${simpFav}/${simpTotal}`;
  return {
    questionText: `A bag has ${fav} red marbles and ${extra} blue marbles. What is the probability of picking a red marble, in simplest form?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`${fav}/${total}`, `${extra}/${total}`, `${simpFav + 1}/${simpTotal}`]),
    visualContent: `<div style="font-size: 48px;">🔴🔵🎲</div>`,
    hint: `P(red) = ${fav}/${total}, which simplifies to ${correct}.`
  };
}

function genExperimentalTheoretical(seed, idx) {
  const sections = 2 + ((seed + idx) % 5);
  const askTheoretical = idx % 2 === 0;
  const trials = 10 * (2 + ((seed * 3 + idx * 5) % 8));
  const observed = 1 + ((seed * 7 + idx * 11) % (trials - 1));
  const theoreticalStr = `1/${sections}`;
  const g2 = gcdMQ(observed, trials);
  const experimentalStr = `${observed / g2}/${trials / g2}`;
  const correct = askTheoretical ? theoreticalStr : experimentalStr;
  return {
    questionText: askTheoretical
      ? `A spinner has ${sections} equal sections. What is the theoretical probability of landing on any one specific section?`
      : `A spinner with ${sections} equal sections was spun ${trials} times and landed on section 1 exactly ${observed} times. What is the experimental probability of landing on section 1?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [theoreticalStr, experimentalStr, `${observed}/${trials}`]),
    visualContent: `<div style="font-size: 48px;">🎡</div>`,
    hint: askTheoretical ? `Theoretical probability = 1 ÷ number of equal sections = 1/${sections}.` : `Experimental probability = times it happened ÷ total trials = ${observed}/${trials} = ${correct}.`
  };
}

function genCompoundEvents(seed, idx) {
  const sides = 2 + ((seed + idx) % 5);
  const dieFavorable = 1 + ((seed * 3 + idx * 5) % 6);
  const total = sides * 6;
  const correct = `1/${total}`;
  return {
    questionText: `You spin a spinner with ${sides} equal sections and roll a standard 6-sided die. What is the probability of landing on section 1 AND rolling a ${dieFavorable}?`,
    correctAnswer: correct,
    options: uniqOptions(correct, [`1/${sides + 6}`, `2/${total}`, `1/${sides}`]),
    visualContent: `<div style="font-size: 48px;">🎡🎲</div>`,
    hint: `P(section 1) = 1/${sides}, P(${dieFavorable}) = 1/6. Multiply: 1/${sides} x 1/6 = 1/${total}.`
  };
}

function genSamplingPopulations(seed, idx) {
  const sampleSize = 10 * (2 + ((seed + idx) % 8));
  const population = sampleSize * (5 + ((seed * 3 + idx * 5) % 15));
  const sampleFav = 1 + ((seed * 7 + idx * 11) % (sampleSize - 1));
  const proportion = sampleFav / sampleSize;
  const correct = Math.round(proportion * population);
  return {
    questionText: `A random sample of ${sampleSize} students from a school of ${population} shows that ${sampleFav} prefer science class. Based on this sample, about how many students in the whole school prefer science class?`,
    correctAnswer: String(correct),
    options: uniqOptions(correct, [correct + sampleSize, Math.max(0, correct - sampleSize), sampleFav]),
    visualContent: `<div style="font-size: 48px;">📋👥</div>`,
    hint: `Sample proportion: ${sampleFav}/${sampleSize}. Apply to population: ${sampleFav}/${sampleSize} x ${population} = ${correct}.`
  };
}

function genGrade7Review(seed, idx) {
  const gens = [genProportionWordProblem, genAddSubRational, genSolveMultiStepEquation, genPercentWordProblem, genCircleCircumferenceArea, genProbabilitySimple];
  return gens[idx % gens.length](seed, idx);
}

// ============================================================
// DISPATCH TABLE — exact lesson title -> generator call
// ============================================================

const MATH_QUIZ_TOPICS = {
  "Double-Digit Addition": (seed, idx) => genAddition(seed, idx, { digits: 2 }),
  "Double-Digit Subtraction": (seed, idx) => genSubtraction(seed, idx, { digits: 2 }),
  "Regrouping in Addition": (seed, idx) => genAddition(seed, idx, { digits: 2, forceRegroup: true }),
  "Regrouping in Subtraction": (seed, idx) => genSubtraction(seed, idx, { digits: 2, forceRegroup: true }),
  "Arithmetic Word Problems": (seed, idx) => genWordProblemAddSub(seed, idx, { digits: 2 }),
  "Understanding Hundreds": (seed, idx) => genPlaceValueHundreds(seed, idx),
  "Hundreds, Tens, and Ones": (seed, idx) => genPlaceValueHundreds(seed, idx),
  "Comparing Three-Digit Numbers": (seed, idx) => genComparingNumbers(seed, idx, { digits: 3 }),
  "Skip Counting by 5s & 10s": (seed, idx) => genSkipCounting(seed, idx, { steps: [5, 10] }),
  "Skip Counting by 100s": (seed, idx) => genSkipCounting(seed, idx, { steps: [100] }),
  "Measuring in Inches": (seed, idx) => genMeasuringLength(seed, idx, { unit: 'inches' }),
  "Measuring in Centimeters": (seed, idx) => genMeasuringLength(seed, idx, { unit: 'centimeters' }),
  "Comparing Lengths": (seed, idx) => genCompareLengths(seed, idx),
  "Estimating Lengths": (seed, idx) => genEstimateLength(seed, idx),
  "Measurement Word Problems": (seed, idx) => genMeasurementWordProblem(seed, idx),
  "Telling Time: Five Minutes": (seed, idx) => genTellingTime(seed, idx, { precision: 5 }),
  "A.M. vs. P.M.": (seed, idx) => genAMPM(seed, idx),
  "Counting Pennies & Nickels": (seed, idx) => genMoney(seed, idx, { coins: ['penny', 'nickel'] }),
  "Counting Dimes & Quarters": (seed, idx) => genMoney(seed, idx, { coins: ['dime', 'quarter'] }),
  "Solving Money Problems": (seed, idx) => genMoneyWordProblem(seed, idx),
  "Recognizing Shapes": (seed, idx) => genShapeSides(seed, idx),
  "Counting Faces & Vertices": (seed, idx) => genFacesVertices(seed, idx),
  "Halves & Thirds": (seed, idx) => genFractionsBasic(seed, idx, { denoms: [2, 3] }),
  "Fourths & Quarters": (seed, idx) => genFractionsBasic(seed, idx, { denoms: [4] }),
  "Equal Shares Review": (seed, idx) => genFractionsBasic(seed, idx, { denoms: [2, 3, 4] }),
  "Double-Digit Practice": (seed, idx) => genMixedAddSub(seed, idx, { digits: 2 }),
  "Place Value Challenge": (seed, idx) => genPlaceValueHundreds(seed, idx),
  "Measurement Explorer": (seed, idx) => genMeasurementWordProblem(seed, idx),
  "Time & Money Practice": (seed, idx) => (idx % 2 === 0 ? genTellingTime(seed, idx, { precision: 5 }) : genMoneyWordProblem(seed, idx)),
  "Geometry Mastery": (seed, idx) => genShapeSides(seed, idx),
  "Multiplication Concepts": (seed, idx) => genMultiplicationFacts(seed, idx, { max: 5 }),
  "Division Concepts": (seed, idx) => genDivisionFacts(seed, idx, { allowRemainder: false }),
  "Multiplication to 100": (seed, idx) => genMultiplicationFacts(seed, idx, { max: 10 }),
  "Properties of Multiplication": (seed, idx) => genMultiplicationProperties(seed, idx),
  "Arithmetic Patterns": (seed, idx) => genPatterns(seed, idx),
  "Fractions Intro": (seed, idx) => genFractionsBasic(seed, idx, { denoms: [2, 3, 4, 5, 6, 8] }),
  "Fractions on Number Line": (seed, idx) => genFractionsNumberLine(seed, idx),
  "Equivalent Fractions": (seed, idx) => genEquivalentFractions(seed, idx),
  "Comparing Fractions": (seed, idx) => genComparingFractions(seed, idx),
  "Fractions of a Group": (seed, idx) => genFractionsOfGroup(seed, idx),
  "Telling Time: Minute": (seed, idx) => genTellingTime(seed, idx, { precision: 1 }),
  "Elapsed Time": (seed, idx) => genElapsedTime(seed, idx),
  "Liquid Volume & Mass": (seed, idx) => genVolumeMassCompare(seed, idx),
  "Bar Graphs & Pictographs": (seed, idx) => genDataGraphs(seed, idx),
  "Line Plots": (seed, idx) => genLinePlots(seed, idx),
  "Understanding Area": (seed, idx) => genArea(seed, idx),
  "Area of Rectangles": (seed, idx) => genArea(seed, idx),
  "Distributive Area": (seed, idx) => genAreaDistributive(seed, idx),
  "Understanding Perimeter": (seed, idx) => genPerimeter(seed, idx),
  "Area vs. Perimeter": (seed, idx) => genAreaVsPerimeter(seed, idx),
  "Categorizing Shapes": (seed, idx) => genShapeClassification(seed, idx),
  "Understanding Quadrilaterals": (seed, idx) => genQuadrilaterals(seed, idx),
  "Partitioning Shapes": (seed, idx) => genPartitioningShapes(seed, idx),
  "Symmetry in Shapes": (seed, idx) => genSymmetry(seed, idx),
  "Three-Dimensional Shapes": (seed, idx) => genShapes3d(seed, idx),
  "Multiplication Review": (seed, idx) => genMultiplicationFacts(seed, idx, { max: 10 }),
  "Fractions Review": (seed, idx) => genFractionsBasic(seed, idx, { denoms: [2, 3, 4, 5, 6, 8] }),
  "Measurement Review": (seed, idx) => genMeasuringLength(seed, idx, { unit: 'inches' }),
  "Area & Perimeter Review": (seed, idx) => genAreaVsPerimeter(seed, idx),
  "Geometry Review": (seed, idx) => genShapeClassification(seed, idx),
  "Factors & Multiples": (seed, idx) => genFactorsMultiples(seed, idx),
  "Prime & Composite": (seed, idx) => genPrimeComposite(seed, idx),
  "Multi-Digit Addition": (seed, idx) => genAddition(seed, idx, { digits: 4 }),
  "Multi-Digit Subtraction": (seed, idx) => genSubtraction(seed, idx, { digits: 4 }),
  "Multiplication: 4-by-1": (seed, idx) => genMultiplyMultiDigit(seed, idx, { aDigits: 4, bDigits: 1 }),
  "Understanding Place Value": (seed, idx) => genPlaceValueMultiDigit(seed, idx),
  "Multi-Digit Numbers": (seed, idx) => genPlaceValueMultiDigit(seed, idx),
  "Rounding Whole Numbers": (seed, idx) => genRoundingWhole(seed, idx),
  "Multi-Digit Division": (seed, idx) => genDivisionMultiDigit(seed, idx),
  "Remainder Word Problems": (seed, idx) => genRemainderWordProblem(seed, idx),
  "Adding Fractions": (seed, idx) => genFractionsAdd(seed, idx, { like: true }),
  "Mixed Numbers": (seed, idx) => genMixedNumbers(seed, idx),
  "Multiplying Fractions": (seed, idx) => genFractionsMultiply(seed, idx, { byWhole: true }),
  "Fractions to Decimals": (seed, idx) => genFractionsToDecimals(seed, idx),
  "Comparing Decimals": (seed, idx) => genCompareDecimals(seed, idx),
  "Metric Measurement Units": (seed, idx) => genMetricMeasurement(seed, idx),
  "Area of Rectilinear Shapes": (seed, idx) => genAreaRectilinear(seed, idx),
  "Line Plots with Fractions": (seed, idx) => genLinePlotsFractions(seed, idx),
  "Lines & Angles": (seed, idx) => genLinesAngles(seed, idx),
  "Classifying Shapes": (seed, idx) => genShapeClassification(seed, idx),
  "Line Symmetry": (seed, idx) => genSymmetry(seed, idx),
  "Measuring Angles": (seed, idx) => genMeasuringAngles(seed, idx),
  "Additive Angles": (seed, idx) => genAdditiveAngles(seed, idx),
  "Arithmetic Review": (seed, idx) => genMixedAllOps(seed, idx),
  "Decimals Review": (seed, idx) => genCompareDecimals(seed, idx),
  "Parentheses & Brackets": (seed, idx) => genExpressionParens(seed, idx),
  "Evaluating Expressions": (seed, idx) => genExpressionParens(seed, idx),
  "Analyzing Patterns": (seed, idx) => genPatterns(seed, idx, { advanced: true }),
  "Powers of Ten": (seed, idx) => genPowersOfTen(seed, idx),
  "Multi-Digit Multiplication": (seed, idx) => genMultiplyMultiDigit(seed, idx, { aDigits: 2, bDigits: 2 }),
  "Decimal Place Value": (seed, idx) => genDecimalPlaceValue(seed, idx),
  "Rounding Decimals": (seed, idx) => genRoundingDecimals(seed, idx),
  "Decimal Addition": (seed, idx) => genDecimalOp(seed, idx, { op: 'add' }),
  "Decimal Subtraction": (seed, idx) => genDecimalOp(seed, idx, { op: 'sub' }),
  "Decimal Multiplication": (seed, idx) => genDecimalOp(seed, idx, { op: 'mul' }),
  "Adding Fractions (Unlike)": (seed, idx) => genFractionsAdd(seed, idx, { like: false }),
  "Subtracting Fractions (Unlike)": (seed, idx) => genFractionsSub(seed, idx, { like: false }),
  "Fractions Word Problems": (seed, idx) => genFractionsWordProblem(seed, idx),
  "Dividing Unit Fractions": (seed, idx) => genDivideUnitFractions(seed, idx),
  "Understanding Volume": (seed, idx) => genVolume(seed, idx),
  "Counting Unit Cubes": (seed, idx) => genCountUnitCubes(seed, idx),
  "Volume Formulas": (seed, idx) => genVolumeFormulas(seed, idx),
  "Additive Volume": (seed, idx) => genAdditiveVolume(seed, idx),
  "Unit Conversion": (seed, idx) => genUnitConversion(seed, idx),
  "Coordinate System": (seed, idx) => genCoordinateSystem(seed, idx),
  "Graphing Coordinate Points": (seed, idx) => genGraphingCoordinatePoints(seed, idx),
  "Real-World Coordinate Problems": (seed, idx) => genRealWorldCoordinates(seed, idx),
  "Classifying 2D Figures": (seed, idx) => genShapeClassification(seed, idx, { figures2d: true }),
  "Properties of Polygons": (seed, idx) => genPropertiesOfPolygons(seed, idx),
  "PEMDAS & Decimals Review": (seed, idx) => genExpressionParens(seed, idx, { withDecimals: true }),
  "Fractions Mastery": (seed, idx) => genFractionsAdd(seed, idx, { like: true }),
  "Volume Review": (seed, idx) => genVolume(seed, idx),
  "Coordinate Graphing Review": (seed, idx) => genCoordinateSystem(seed, idx),

  // ---------- Grade 6 ----------
  "Intro to Ratios": (seed, idx) => genRatioWrite(seed, idx),
  "Equivalent Ratios": (seed, idx) => genEquivalentRatio(seed, idx),
  "Rate and Unit Rate": (seed, idx) => genUnitRateG6(seed, idx),
  "Percent as a Ratio": (seed, idx) => genPercentAsRatio(seed, idx),
  "Ratio Word Problems": (seed, idx) => genRatioWordProblem(seed, idx),
  "Dividing Fractions by Fractions": (seed, idx) => genDivideFractionsByFractions(seed, idx),
  "Fraction Division Word Problems": (seed, idx) => genFractionDivisionWordProblem(seed, idx),
  "Greatest Common Factor": (seed, idx) => genGCF(seed, idx),
  "Least Common Multiple": (seed, idx) => genLCM(seed, idx),
  "Fraction and Decimal Conversion": (seed, idx) => genFractionDecimalConversion(seed, idx),
  "Intro to Negative Numbers": (seed, idx) => genIntroNegativeNumbers(seed, idx),
  "Integers on the Number Line": (seed, idx) => genIntegersNumberLine(seed, idx),
  "Absolute Value": (seed, idx) => genAbsoluteValue(seed, idx),
  "Comparing and Ordering Integers": (seed, idx) => genCompareIntegers(seed, idx),
  "The Coordinate Plane and Four Quadrants": (seed, idx) => genCoordinateQuadrants(seed, idx),
  "Writing Algebraic Expressions": (seed, idx) => genWriteAlgebraicExpression(seed, idx),
  "Evaluating Algebraic Expressions": (seed, idx) => genEvaluateAlgebraicExpression(seed, idx),
  "Solving One-Step Equations": (seed, idx) => genSolveOneStepEquation(seed, idx),
  "Independent and Dependent Variables": (seed, idx) => genIndependentDependentVariable(seed, idx),
  "Inequalities on a Number Line": (seed, idx) => genInequalityNumberLine(seed, idx),
  "Area of Triangles": (seed, idx) => genAreaTriangle(seed, idx),
  "Area of Quadrilaterals": (seed, idx) => genAreaQuadrilateral(seed, idx),
  "Area of Composite Polygons": (seed, idx) => genAreaComposite(seed, idx),
  "Surface Area of Prisms": (seed, idx) => genSurfaceAreaPrism(seed, idx),
  "Volume of Rectangular Prisms": (seed, idx) => genVolumeRectPrismFrac(seed, idx),
  "Statistical Questions": (seed, idx) => genStatisticalQuestion(seed, idx),
  "Mean, Median, and Mode": (seed, idx) => genMeanMedianMode(seed, idx),
  "Range and Variability": (seed, idx) => genRangeVariability(seed, idx),
  "Dot Plots and Histograms": (seed, idx) => genDotPlotsHistograms(seed, idx),
  "Grade 6 Math Review": (seed, idx) => genGrade6Review(seed, idx),

  // ---------- Grade 7 ----------
  "Unit Rates with Fractions": (seed, idx) => genUnitRateFractionsG7(seed, idx),
  "Identifying Proportional Relationships": (seed, idx) => genIdentifyProportional(seed, idx),
  "Constant of Proportionality": (seed, idx) => genConstantProportionality(seed, idx),
  "Graphing Proportional Relationships": (seed, idx) => genGraphProportional(seed, idx),
  "Proportion Word Problems": (seed, idx) => genProportionWordProblem(seed, idx),
  "Adding and Subtracting Integers": (seed, idx) => genAddSubIntegers(seed, idx),
  "Multiplying and Dividing Integers": (seed, idx) => genMulDivIntegers(seed, idx),
  "Adding and Subtracting Rational Numbers": (seed, idx) => genAddSubRational(seed, idx),
  "Multiplying and Dividing Rational Numbers": (seed, idx) => genMulDivRational(seed, idx),
  "Rational Number Word Problems": (seed, idx) => genRationalWordProblem(seed, idx),
  "Simplifying Expressions with Rational Coefficients": (seed, idx) => genSimplifyRationalCoeff(seed, idx),
  "Factoring Expressions": (seed, idx) => genFactorExpression(seed, idx),
  "Solving Multi-Step Equations": (seed, idx) => genSolveMultiStepEquation(seed, idx),
  "Equations with Variables on Both Sides": (seed, idx) => genEquationsBothSides(seed, idx),
  "Translating Word Problems into Equations": (seed, idx) => genTranslateWordProblem(seed, idx),
  "Solving Inequalities": (seed, idx) => genSolveInequality(seed, idx),
  "Graphing Inequality Solutions": (seed, idx) => genGraphInequality(seed, idx),
  "Percent Increase and Decrease": (seed, idx) => genPercentIncreaseDecrease(seed, idx),
  "Simple Interest": (seed, idx) => genSimpleInterest(seed, idx),
  "Percent Word Problems": (seed, idx) => genPercentWordProblem(seed, idx),
  "Scale Drawings": (seed, idx) => genScaleDrawing(seed, idx),
  "Circumference and Area of Circles": (seed, idx) => genCircleCircumferenceArea(seed, idx),
  "Angle Relationships": (seed, idx) => genAngleRelationships(seed, idx),
  "Cross-Sections of 3D Figures": (seed, idx) => genCrossSections(seed, idx),
  "Surface Area and Volume of Solids": (seed, idx) => genSurfaceVolumeSolids(seed, idx),
  "Probability of Simple Events": (seed, idx) => genProbabilitySimple(seed, idx),
  "Experimental vs Theoretical Probability": (seed, idx) => genExperimentalTheoretical(seed, idx),
  "Compound Events": (seed, idx) => genCompoundEvents(seed, idx),
  "Sampling and Populations": (seed, idx) => genSamplingPopulations(seed, idx),
  "Grade 7 Math Review": (seed, idx) => genGrade7Review(seed, idx)
};

if (typeof module !== 'undefined') module.exports = { MATH_QUIZ_TOPICS };

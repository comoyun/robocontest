const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');
const positiveN = Math.abs(n);
const inverted = ~positiveN;
const negativeN = inverted + 1;

const positiveBin = positiveN.toString(2).padStart(32, '0');
const negativeBin = (negativeN >>> 0).toString(2).padStart(32, '0');

if (n < 0) console.log(negativeBin);
else console.log(positiveBin);

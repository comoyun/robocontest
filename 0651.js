// xo'rlangan javascript, python... lanati robocontest
const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);

const p = (a + b + c) / 2;
const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

const ha = (2 * s) / a;
const hb = (2 * s) / b;
const hc = (2 * s) / c;

console.log(Math.min(ha, hb, hc));

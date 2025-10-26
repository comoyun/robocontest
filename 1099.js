const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').split(' ').map(BigInt);

const count3B = b / 3n;
const count3A = (a - 1n) / 3n;
const count21B = b / 21n;
const count21A = (a - 1n) / 21n;

const sum3B = (count3B * (count3B + 1n) * 3n) / 2n;
const sum3A = (count3A * (count3A + 1n) * 3n) / 2n;

const sum21B = (count21B * (count21B + 1n) * 21n) / 2n;
const sum21A = (count21A * (count21A + 1n) * 21n) / 2n;

console.log((sum3B - sum3A - (sum21B - sum21A)).toString());

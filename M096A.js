const fs = require('fs');
const lines = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(Number));

const freqY = {};
const freqX = {};

for (const [x, y] of lines) {
    freqX[x] = (freqX[x] || 0) + 1;
    freqY[y] = (freqY[y] || 0) + 1;
}

let x, y;
for (const key in freqX) if (freqX[key] === 1) x = key;
for (const key in freqY) if (freqY[key] === 1) y = key;

console.log(x, y);

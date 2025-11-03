const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

let enc = str.split('');

for (let i = 0; i + 1 < enc.length; i += 2)
    [enc[i], enc[i + 1]] = [enc[i + 1], enc[i]];

const latin = 'abcdefghijklmnopqrstuvwxyz';
const latinReversed = [...latin].reverse().join('');

for (let i = 0; i < enc.length; i++) {
    const idx = latin.indexOf(enc[i]);
    enc[i] = latinReversed[idx];
}

console.log(enc.join(''));

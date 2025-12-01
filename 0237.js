const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const paypoqlar = lines[1].split(' ');
const map = {}; // paypoqlar ombori
let result = 0;

for (const paypoq of paypoqlar) {
    map[paypoq] ??= 0;
    map[paypoq]++;
}

for (const paypoq in map) result += Math.floor(map[paypoq] * 0.5); // 2ta bo'lsa bir juft, 8ta bo'lsa 4 juft...

console.log(result);

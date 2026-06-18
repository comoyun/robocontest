const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const [n, m] = lines[0].split(' ').map(Number);
let sum = 0;

for (let i = 1; i < lines.length; i++) {
    const [left, right, k] = lines[i].split(' ').map(Number);
    sum += (right - left + 1) * k;
}

console.log(Math.floor(sum / n));

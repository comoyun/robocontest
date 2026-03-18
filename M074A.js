const fs = require('fs');

const n = fs.readFileSync(0, 'utf-8').trim();
const digits = n.split('').map(Number);
const len = digits.length;

let result = 0;

for (let k = 1; k < len; k++) result += 1 << k;

for (let i = 0; i < len; i++) {
    const d = digits[i];
    const remaining = len - i - 1;

    if (5 < d) result += 1 << remaining;
    if (7 < d) result += 1 << remaining;
    if (d !== 5 && d !== 7) break;
    if (i === len - 1) result += 1;
}

console.log(result);

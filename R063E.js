const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const nums = lines[1].split(' ');
let sum = 1;

for (const num of nums) {
    const sign = num[0];
    const n = +num.slice(1);

    if (sign === '-') {
        const diff = sum * (n / 100);
        sum -= diff;
    } else {
        const diff = sum * (n / 100 + 1);
        sum = diff;
    }
}

const result = (sum - 1) * 100;
console.log((result >= 0 ? '+' : '') + result.toFixed(4));

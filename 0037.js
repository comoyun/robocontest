const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const MOD = 10 ** 9 + 7;
let result = 1;

for (let i = 1; i < lines.length; i++) {
    const [left, right] = lines[i].split(' ').map(Number);
    let count = right - left + 1;

    if (left <= 0 && right >= 0) count--;

    result = (result * count) % MOD;
}

console.log(result);

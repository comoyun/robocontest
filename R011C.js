const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = +lines[0];
const row = new Array(n).fill(0);
const col = new Array(n).fill(0);

for (let i = 0; i < n; i++) {
    const nums = lines[i + 1].split(' ').map(Number);

    for (let j = 0; j < n; j++) {
        row[i] += nums[j];
        col[j] += nums[j];
    }
}

let max = 0;
for (let i = 0; i < n; i++) max = Math.max(max, row[i], col[i]);

let result = 0;
for (const sum of row) result += max - sum;

console.log(result);

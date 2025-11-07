const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const nums = lines[0].split(' ').map(Number);
const n = +lines[1];

let sum = 0;

for (const num of nums) sum += num;

if (sum >= n) console.log(0);
else console.log(n - sum);

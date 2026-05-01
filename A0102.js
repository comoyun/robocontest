const fs = require('fs');
const nums = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

nums.sort((a, b) => a - b);
const [a, b, c] = nums;
let minDiff = Math.min(b - a, c - b);
if (a + minDiff !== b) console.log(a + minDiff);
else if (b + minDiff !== c) console.log(b + minDiff);
else console.log(c + minDiff);

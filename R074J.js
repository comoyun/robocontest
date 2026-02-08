const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const n = +lines[0];
const nums = lines[1].split(' ').map(Number);

const left = new Array(n).fill(0);
const right = new Array(n).fill(0);
let result = 0;

for (let i = 1; i < n; i++)
    if (nums[i] >= nums[i - 1]) left[i] = 1 + left[i - 1];
for (let i = n - 2; i >= 0; i--)
    if (nums[i] >= nums[i + 1]) right[i] = 1 + right[i + 1];
for (let i = 0; i < n; i++) 
    result = Math.max(result, left[i] + right[i] + 1); // +1 joriy ariq uchun

console.log(result);

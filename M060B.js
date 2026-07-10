const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const nums = lines[1].split(' ').map(Number);
nums.sort((a, b) => a - b);

console.log(nums.join(' '));

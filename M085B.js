const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const nums = lines[1].split(' ').map(Number);
console.log(nums.reduce((acc, curr) => acc + curr, 0));

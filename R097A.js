const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const nums = lines[1].split(' ').map(Number);
console.log(nums.reduce((prev, curr) => prev ^ curr, 0) ? 'no' : 'yes');

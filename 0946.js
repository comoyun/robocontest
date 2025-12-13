const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const [a, k] = lines[0].split(' ').map(Number);
const nums = lines[1].split(' ').map(Number);
const result = [];

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === k) result.push(i + 1);
}

console.log(k * result.length);
console.log(result.join(' '));

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const nums = lines[1].split(' ').map(Number);

let max1 = -Infinity,
    min1 = Infinity;
let max2 = -Infinity,
    min2 = Infinity;

for (let i = 0; i < nums.length; i++) {
    max1 = Math.max(max1, nums[i] + i);
    min1 = Math.min(min1, nums[i] + i);
    max2 = Math.max(max2, nums[i] - i);
    min2 = Math.min(min2, nums[i] - i);
}

console.log(Math.max(max1 - min1, max2 - min2));

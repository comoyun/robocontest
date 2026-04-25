const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const nums = lines[1].split(' ').map(Number);
const [kun, oy] = lines[2].split(' ').map(Number);
let result = 0;
let sum = 0;

for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (i >= oy) sum -= nums[i - oy];
    if (i >= oy - 1 && sum === kun) result++;
}

console.log(result);

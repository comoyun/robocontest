const fs = require('fs');

const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const [n, k] = lines[0].split(' ').map(Number);
const nums = lines[1].split(' ').map(Number);

let result = 0;
let left = 0;
let sum = 0;

for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (right - left + 1 > k) {
        sum -= nums[left++];
    }

    const avg = sum / (right - left + 1);
    if (avg > result && right - left + 1 === k) result = avg;
}

console.log(result);

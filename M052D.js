const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const nums = lines[1].split(' ').map(Number);
const freq = {};
let result = 0;

for (const num of nums) freq[num] = (freq[num] || 0) + 1;

for (const num in freq) {
    const count = freq[num];
    result += (count * (count - 1)) / 2;
}

console.log(result);

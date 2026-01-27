const fs = require('fs');
const nums = fs.readFileSync(0, 'utf8').split('\n')[1].split(' ').map(Number);
let max = 0;
const freq = {};

for (const num of nums) {
    freq[num] ??= 0;
    freq[num]++;
    max = Math.max(max, freq[num]);
}

console.log(max);

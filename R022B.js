const fs = require('fs');
const nums = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n')[1]
    .split(' ')
    .map(Number);

const freq = {};
for (const num of nums) {
    freq[num] ??= 0;
    freq[num]++;
}

let result = 0;

for (let i = 1; i < 100; i++) {
    result = Math.max(result, freq[i] || 0);
    if (i in freq && i + 1 in freq) {
        result = Math.max(result, freq[i] + freq[i + 1]);
    }
}

console.log(result);

// kelajakdagi men! solve this with sorting

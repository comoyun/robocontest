const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const [n, m] = lines[0].split(' ').map(Number);
const nums = lines[1].split(' ').map(Number);

nums.sort((a, b) => a - b);

const prefix = [0];
for (let i = 0; i < n; i++) prefix.push(prefix[i] + nums[i]);

let result = 0;
let j = 0;
for (let i = 0; i < n; i++) {
    /* geniy qismi ;) */
    while ((i - j + 1) * nums[i] - (prefix[i + 1] - prefix[j]) > m) j++;
    result = Math.max(result, i - j + 1);
}

console.log(result);

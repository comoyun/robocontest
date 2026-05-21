const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, k] = lines[0].split(' ').map(Number);
const nums = lines[1].split(' ').map(Number);

const freq = new Map();
freq.set(0, 1);

let prefix = 0;
let result = 0;

for (let i = 0; i < n; i++) {
    prefix = (prefix + nums[i]) % k;
    result += freq.get(prefix) || 0;
    freq.set(prefix, (freq.get(prefix) || 0) + 1);
}

console.log(result);

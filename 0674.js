const fs = require('fs');
const [first, second] = fs.readFileSync(0, 'utf8').trim().split('\n');
const [n, k] = first.split(' ').map(Number);
const arr = second.split(' ').map(Number);

let parts = [];
let sum = 0;

for (let i = 0; i < n; i++) {
    if (arr[i] > 0) {
        sum += arr[i];
    } else {
        if (sum) parts.push(sum);
        sum = 0;
    }
}

if (sum) parts.push(sum);

parts.sort((a, b) => b - a);

let result = 0;
for (let i = 0; i < Math.min(k, parts.length); i++) result += parts[i];

console.log(result);

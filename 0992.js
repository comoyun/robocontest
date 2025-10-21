const fs = require('fs');
const [left, right] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
const result = [];

const isPrime = new Array(right + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i <= right; i++) {
    if (!isPrime[i]) continue;
    for (let j = i * i; j <= right; j += i) isPrime[j] = false;
}

for (let i = left; i <= right; i++) if (isPrime[i]) result.push(i);

console.log(result.join(' '));

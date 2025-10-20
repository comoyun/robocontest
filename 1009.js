const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

const sieve = new Array(100).fill(true);
sieve[0] = sieve[1] = false;
for (let i = 2; i * i < sieve.length; i++) {
    if (!sieve[i]) continue;
    for (let j = i * i; j < sieve.length; j += i) sieve[j] = false;
}

let a = 0n,
    b = 1n;
let idx = 1;
const result = [];

while (true) {
    const c = a + b;
    if (c > n) break;
    if (sieve[++idx]) result.push(c);
    a = b;
    b = c;
}

console.log(result.join(' '));

const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();

const isPrime = new Array(n + 1).fill(true);

isPrime[0] = isPrime[1] = false;

for (let i = 2; i * i < isPrime.length; i++)
    for (let j = i * i; j < isPrime.length; j += i) isPrime[j] = false;

let primeCount = 0;
for (const prime of isPrime) if (prime) primeCount++;

if (primeCount & 1) console.log('Ali');
else console.log('Bobur');

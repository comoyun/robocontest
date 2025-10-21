const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

const sieve = new Array(210000).fill(true);
sieve[0] = sieve[1] = false;
const primes = [];

for (let i = 2; i * i < sieve.length; i++) {
    if (!sieve[i]) continue;
    for (let j = i * i; j < sieve.length; j += i) sieve[j] = false;
}

for (let i = 2; i < sieve.length; i++) if (sieve[i]) primes.push(i);

console.log(primes.join('')[n - 1]);

// sieve of eratosthenes ;)
const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const sieveSegment = (low, high) => {
    const limit = Math.floor(Math.sqrt(high)) + 1;
    const prime = Array(limit + 1).fill(true);
    prime[0] = prime[1] = false;

    for (let i = 2; i * i <= limit; i++)
        if (prime[i]) for (let j = i * i; j <= limit; j += i) prime[j] = false;

    const primes = [];
    for (let i = 2; i <= limit; i++) if (prime[i]) primes.push(i);

    const isPrime = Array(high - low + 1).fill(true);
    for (const p of primes) {
        const start = Math.max(p * p, Math.ceil(low / p) * p);
        for (let j = start; j <= high; j += p) isPrime[j - low] = false;
    }

    const result = [];
    for (let i = 0; i < isPrime.length; i++)
        if (isPrime[i] && low + i >= 2) result.push(low + i);

    return result;
};

const primes = sieveSegment(n, m);
let count = 0;
for (let i = 1; i < primes.length; i++)
    if (primes[i] - primes[i - 1] === 2) count++;

console.log(count);

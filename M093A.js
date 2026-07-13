const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();

const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return true;
};

for (let i = n; i >= 2; i--) {
    if (isPrime(i)) {
        console.log(i);
        process.exit(0);
    }
}

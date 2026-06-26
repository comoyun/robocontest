const fs = require('fs');
const k = +fs.readFileSync(0, 'utf8').trim();

const result = [];

const isPrime = num => {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) if (num % i === 0) return false;
    return true;
};

let i = k;
while (i > 1) {
    if (isPrime(i)) {
        result.push(i);
        break;
    }
    i--;
}

i = k + 1;
while (true) {
    if (result.length && i - k > k - result[0]) break;
    if (isPrime(i)) {
        result.push(i);
        break;
    }
    i++;
}

const a = Math.abs(result[0] - k);
const b = result.length > 1 ? Math.abs(result[1] - k) : Infinity;

if (a < b) console.log(result[0]);
else if (b < a) console.log(result[1]);
else console.log(result.join(' '));

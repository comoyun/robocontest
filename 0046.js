const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());

const sum2Popcount = n => {
    if (n === 0n) return 1n;
    const k = BigInt(n.toString(2).length - 1);
    const p = 1n << k;
    if (n === p - 1n) return 3n ** k;
    return 3n ** k + 2n * sum2Popcount(n - p);
};

const totalElements = ((n + 1n) * (n + 2n)) / 2n;
const sumOdd = sum2Popcount(n);
console.log((totalElements - sumOdd).toString());

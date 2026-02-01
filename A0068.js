const fs = require('fs');
const a = BigInt(fs.readFileSync(0, 'utf8'));

let n, m;
if (a % 2n === 1n) {
    n = (a - 1n) / 2n;
    m = n + 1n;
} else {
    n = 1n;
    m = a / 2n;
}

const b = a % 2n === 1n ? 2n * n * m : m * m - n * n;
const c = m * m + n * n;

console.log(a.toString(), b.toString(), c.toString());

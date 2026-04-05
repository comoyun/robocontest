const fs = require('fs');
let [a, b] = fs.readFileSync(0, 'utf8').trim().split('\n').map(BigInt);
let pow = 1n;

while (a || b) {
    if ((a & 1n) === (b & 1n)) break;
    pow <<= 1n;
    a >>= 1n;
    b >>= 1n;
}

console.log(pow.toString());

const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').split(' ').map(BigInt);

function gcd(x, y) {
    while (y !== 0n) [x, y] = [y, x % y];
    return x;
}

const g = gcd(a, b);
let count = 0n;
for (let i = 1n; i * i <= g; i++) {
    if (g % i === 0n) {
        count++;
        if (i * i !== g) count += 1n;
    }
}

console.log(count.toString());

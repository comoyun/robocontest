const fs = require('fs');
let n = BigInt(fs.readFileSync(0, 'utf8').trim());
const result = [];

while (n) {
    if (n % 2n === 0n) {
        result.push('B');
        n /= 2n;
    } else {
        result.push('A');
        n--;
    }
}

result.reverse();
console.log(result.join(''));

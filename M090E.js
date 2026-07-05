const fs = require('fs');
let n = +fs.readFileSync(0, 'utf8').trim();
let count = 0;

while (n) {
    const str = n.toString();
    const maxDigit = Math.max(...str.split('').map(Number));
    n -= maxDigit;
    count++;
}

console.log(count);

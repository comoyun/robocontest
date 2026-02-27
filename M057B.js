const fs = require('fs');
let [a, b] = fs.readFileSync(0, 'utf8').split(' ').map(BigInt);
let result = 0n;

while (a && b) {
    if (a > b) {
        const count = a / b;
        a -= b * count;
        result += count;
    } else {
        const count = b / a;
        b -= a * count;
        result += count;
    }
}

console.log(result.toString());

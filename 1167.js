const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

let fives = n / 5n;
let result = -1n;

while (fives >= 0n) {
    const rem = n - fives * 5n;
    if (rem % 3n === 0n) {
        result = fives + rem / 3n;
        break;
    }
    fives--;
}

console.log(result.toString());

const fs = require('fs');

let X = BigInt(fs.readFileSync(0, 'utf8'));
let balance = 100n;
let result = 0n;

while (balance < X) {
    balance += balance / 100n;
    result++;
}

console.log(result.toString());

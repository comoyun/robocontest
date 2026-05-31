const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').trim().split(' ');

let possible = false;

for (const char of n) 
    if (char === m) 
        possible = true;

if (possible) {
    console.log('Yes');
    process.exit(0);
}

const bign = BigInt(n);
const bigm = BigInt(m);
let curr = BigInt(n);

while (curr) {
    const dig = curr % 10n;
    if (dig === bigm) {
        console.log((bign - curr).toString())
        process.exit(0);
    }
    curr--;
}


const fs = require('fs');
const MOD = 10n ** 9n + 7n;
const n = BigInt(fs.readFileSync(0, 'utf8'));

if (n < 3) {
    console.log(n.toString());
    process.exit(0);
}

let a = n % MOD;
let b = (n - 1n) % MOD;
let c = (n - 2n) % MOD;

console.log(((a * b * c) % MOD).toString());

// islombekka rahmat :)

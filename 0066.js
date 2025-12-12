const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

console.log((n / 2n + 1n).toString())

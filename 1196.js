const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

console.log(((n * (n + 1n)) / 2n).toString());

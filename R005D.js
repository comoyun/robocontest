const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());

console.log(((4n * n * (n + 1n)) / 2n + -3n * n).toString());

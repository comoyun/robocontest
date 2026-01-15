const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());

// (3 * 0 + 1) + (3 * 1 + 1) + ... + (3 * n + 1)
// 3n * (n + 1) / 2 + n + 1

console.log(((3n * (n - 1n) * (n - 1n) + 3n * (n - 1n)) / 2n + n).toString());

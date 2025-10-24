const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

console.log(n ** 5 + 8 * n ** 4 - 5 * n ** 3 + 3 * n ** 2 + n - 12);

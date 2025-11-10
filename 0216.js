const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();

const count = digit => Math.floor((n - digit) / 10) + 1;

console.log(count(3) + count(7));

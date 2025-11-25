const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

console.log(Array.from({ length: n }, (_, idx) => idx + 1).reverse().join(' '));


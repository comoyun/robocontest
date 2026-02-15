const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

console.log(Math.ceil(Math.log2(n)));

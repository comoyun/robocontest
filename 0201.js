const fs = require('fs');
const n = fs.readFileSync(0, 'utf8');

console.log(Math.floor(n / 2) + 1);

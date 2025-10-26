const fs = require('fs');
const n = fs.readFileSync(0, 'utf8');

console.log((n * (n + 1)) / 2);

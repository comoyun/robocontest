const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

const half = Math.floor(n / 2);

console.log((half + 1) * (n - half + 1));

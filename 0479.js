const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

/* fuck robocontest */
console.log((n / 10000) * 100);

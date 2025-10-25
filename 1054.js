const fs = require('fs');
const n = fs.readFileSync(0, 'utf8');

/* fuck robocontest */
if (n == 1) console.log(-1);
else console.log([1, n, 1].join(' '));

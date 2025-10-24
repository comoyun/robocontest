const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

if (n % 4 !== 0) console.log(-1);
else console.log(n / 2);

const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

if (n < 5n) console.log(0);
else console.log(1);

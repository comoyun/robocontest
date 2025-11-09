const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

if (n % 2 == 0) console.log('Second player');
else console.log('First player');

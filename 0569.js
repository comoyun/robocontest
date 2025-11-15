const fs = require('fs');
const p = fs.readFileSync(0, 'utf8').trim();

if (/[PQ7]/.test(p)) console.log('yes');
else console.log('no');

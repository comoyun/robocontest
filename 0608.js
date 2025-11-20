const fs = require('fs');
const [n, a] = fs.readFileSync(0, 'utf8').trim().split(' ');

if (a.length === +n) console.log('yes');
else console.log('no');

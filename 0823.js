const fs = require('fs');
const [t, s, v] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

console.log(v);

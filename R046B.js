const fs = require('fs');
const n = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

console.log(180 * n - 360);

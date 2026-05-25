const fs = require('fs');
const [h, a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

console.log(Math.ceil((h - a) / (a - b)) + 1);

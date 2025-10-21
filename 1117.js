const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

console.log(Math.max(b - a - 1, c - b - 1));

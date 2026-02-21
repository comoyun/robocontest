const fs = require('fs');
const [n, x, y] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

console.log(Math.min(n - x, y + 1));

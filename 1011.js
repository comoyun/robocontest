const fs = require('fs');
const [n, x, y] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const a = Math.abs(y - x);
const b = Math.abs(n - (x + y) + 1);
console.log(Math.min(a, b));

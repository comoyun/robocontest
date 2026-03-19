const fs = require('fs');
const [a, b, n] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const x = Math.min(n, b - 1);
console.log(Math.floor((a * x) / b));

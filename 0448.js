const fs = require('fs');
const [a, b, c, x] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const result = a * x * x + b * x + c;

console.log(result === 0 ? 'YES' : 'NO');


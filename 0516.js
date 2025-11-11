const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const total = a + b;

console.log(c > total ? 'Error' : total - c);

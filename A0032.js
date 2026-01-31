const fs = require('fs');
const [a, b, t] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

console.log(b >= a ? 0 : Math.ceil((t * (a - b)) / b));

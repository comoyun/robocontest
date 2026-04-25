const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

console.log((a % b) * (b % a) + 1);

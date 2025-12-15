const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').split(' ').map(Number);
console.log(b + (24 - a));

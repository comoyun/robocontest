const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

console.log(Math.ceil(n / k));

const fs = require('fs');
const n = parseInt(fs.readFileSync(0, 'utf8'));

console.log(n * n * Math.PI);
console.log(n * n * 2);

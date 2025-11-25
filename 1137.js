const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const v = (k * n) / (k - 1);
const a = v - n;

console.log(v, a);

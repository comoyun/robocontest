const lines = require('fs').readFileSync(0, 'utf8').trim().split('\n').map(Number);
const [a, b] = lines;
console.log(Math.min(b, a - b));

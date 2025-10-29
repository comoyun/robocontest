const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log(max - min);


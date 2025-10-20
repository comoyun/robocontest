const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const min = Math.min(a, b);
const max = Math.max(a, b);

let count = min * Math.floor(max / 2);

if (max & 1) count += Math.floor(min / 2);

console.log(count);

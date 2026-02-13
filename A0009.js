const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').split(' ');
console.log(b % a);

// yoki: b - a * Math.floor(b / a)
// a = 3, b = 14
// 14 - 3 * floor(14 / 3)
// 14 - 12
// 2

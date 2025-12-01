const fs = require('fs');
const nStr = fs.readFileSync(0, 'utf8');
let result = 0;

for (const digit of nStr) result += +digit;

console.log(result);

// bir qatorlik varianti
// console.log(fs.readFileSync(0, 'utf8').trim().split('').map(Number).reduce((prev, curr) => prev + curr, 0));

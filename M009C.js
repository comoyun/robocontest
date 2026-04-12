const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const diffAC = Math.abs(a - c);
const diffBC = Math.abs(b - c);

if (diffAC < diffBC) console.log('1-mushuk');
else if (diffAC > diffBC) console.log('2-mushuk');
else console.log('sichqon');

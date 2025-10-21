const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

console.log(Math.max(a, b, c));


/*

max = a;
if (b > max) max = b;
if (c > max) max = c;

*/

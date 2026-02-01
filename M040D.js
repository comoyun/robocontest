const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

/*

d = r
s = (d + d) * 2
s = (2d) * 2
s = 4d

S = 4d + 2d
S = 6d

d = S / 6
s = S / 6 * 4

*/

console.log(n / 6, n / 6 * 4, n / 6);


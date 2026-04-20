const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
let a = +lines[0].at(-1);
let b = +lines[1].at(-1);

console.log(['juft', 'toq'][(a ^ b) & 1]);

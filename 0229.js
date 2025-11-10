const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(BigInt);

const m1 = (a + b) * (a + b);
const m2 = 4n * a * b;

if (m1 === m2) console.log('=');
else if (m1 < m2) console.log('<');
else console.log('>');

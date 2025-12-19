const fs = require('fs');
const [n, a, b] = BigInt(fs.readFileSync(0, 'utf8').trim().split(' '));

const diff = a - b;

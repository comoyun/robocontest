const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

const mod = (n % 50n) + 1n;
let result = '';

if (mod <= 25n) result = 'O__';
else if (mod <= 29n) result = 'OO_';
else if (mod <= 35n) result = '_O_';
else result = '__O';

console.log(result);

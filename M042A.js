const fs = require('fs');
const cell = fs.readFileSync(0, 'utf8').trim();
const letterCode = cell[0].charCodeAt(0) - 64;
const digit = +cell[1];

console.log(['WHITE', 'BLACK'][(letterCode + (digit - 1)) % 2]);

const fs = require('fs');
const password = fs.readFileSync(0, 'utf8').trim();

let sum = 0;

for (const char of password) sum += +char;

if (sum & 1 && password.length === 9 && password[0] !== '0') console.log('yes');
else console.log('no');

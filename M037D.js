const fs = require('fs');
const num = +fs.readFileSync(0, 'utf8').trim();

console.log(`The next number for the number ${num} is ${num + 1}.
The previous number for the number ${num} is ${num - 1}.`);

const fs = require('fs');
const input = fs.readFileSync(0, 'utf8');

const numberStr = input.slice(1);
const number = parseInt(numberStr, 10);

/* fuck robocontest */
console.log(number % 7 === 0 ? 1 : 0);

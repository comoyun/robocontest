const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

console.log(lines[0]);

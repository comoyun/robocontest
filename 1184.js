const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const a = +lines[0];
const b = +lines[1];

console.log(b - a + 1);


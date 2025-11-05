const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const a = BigInt(lines[0]);
const b = BigInt(lines[1]);

console.log((a + b).toString());

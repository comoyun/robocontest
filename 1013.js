const fs = require('fs');
const bin = fs.readFileSync(0, 'utf8').trim();

let ones = 0;

for (const bit of bin) if (bit === '1') ones++;

console.log(ones & 1 ? 'YES' : 'NO');

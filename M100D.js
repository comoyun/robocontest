// masala tavsifi, chegaralar qani? wtf? 
const fs = require('fs');

const n = BigInt(fs.readFileSync(0, 'utf8').trim());

const result = (3n * n + 3n) / 2n;

console.log(result.toString());

const fs = require('fs');
const content = fs.readFileSync(0, 'utf8');

const n = BigInt(content);


console.log((n * n).toString());

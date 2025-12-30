const fs = require('fs');
const n = Number(fs.readFileSync(0, 'utf8').trim());

const depth = Math.floor(Math.log2(n)) + 1;
const colors = Math.ceil(depth / 2);

console.log(colors);

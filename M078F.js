const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();
const s = Math.floor(n / 8);
const o = n - s;
console.log(s * 8000 + o * 30000);

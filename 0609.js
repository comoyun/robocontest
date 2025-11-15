const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

// yoki: k / n === Math.floor(k / n)
if (k % n === 0) console.log('Yes');
else console.log('No');

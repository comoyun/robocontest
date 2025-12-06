const fs = require('fs');
const [x, y] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

console.log(((y / x) * 100).toFixed(2) + '%');

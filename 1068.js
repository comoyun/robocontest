const fs = require('fs');
const [x, y] = fs.readFileSync(0, 'utf8').trim().split(' ');

if (x[x.length - 1] === 'v') console.log(y, x);
else console.log(x, y);

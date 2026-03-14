const fs = require('fs');
const [x1, y1, x2, y2] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const diffX = Math.abs(x1 - x2);
const diffY = Math.abs(y1 - y2);

if (diffX === 1 && diffY === 2) console.log('YES');
else if (diffX === 2 && diffY === 1) console.log('YES');
else console.log('NO');

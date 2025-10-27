const fs = require('fs');
const [x1, y1, x2, y2] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const dx = Math.abs(x1 - x2);
const dy = Math.abs(y1 - y2);

console.log((Math.min(dx, dy) + Math.abs(dx - dy)) * 0.5);

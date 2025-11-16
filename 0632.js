const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const [x1, y1, x2, y2] = lines[i].split(' ').map(Number);
    const diffX = x1 - x2;
    const diffY = y1 - y2;

    // x2 - (x1 - x2) = x2 - x1 + x2 = 2*x2 - x1
    // y2 - (y1 - y2) = y2 - y1 + y2 = 2*y2 - y1
    console.log(x2 - diffX, y2 - diffY);
}

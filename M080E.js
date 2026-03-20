const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const num = +lines[i];
    const ab = Math.floor(num / 100);
    const cd = num % 100;

    if ((ab * ab + cd * cd) % 7 === 1) console.log('YES');
    else console.log('NO');
}

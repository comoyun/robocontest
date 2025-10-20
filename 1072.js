const fs = require('fs');
const content = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, w, h] = content[0].split(' ').map(Number);
const diag = Math.sqrt(w * w + h * h);

for (let i = 1; i < content.length; i++) {
    if (+content[i] <= diag) console.log('YES');
    else console.log('NO');
}

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const [h, d, g] = lines[i].split(' ').map(Number);
    if (h < 200 || h > 300 || d < 50 || g < 150) console.log('No');
    else console.log('Yes');
}

const fs = require('fs');
const n = fs.readFileSync(0, 'utf8').trim().split('').map(Number);

for (let i = 0; i < n.length; i++) {
    const d = n[i];
    if (d < 9) {
        n[i] = 9;
        break;
    }
}

console.log(n.join(''));

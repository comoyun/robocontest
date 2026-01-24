const fs = require('fs');
const [a, k, l, r] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

let x = -1;

for (let i = l; i <= r; i++) {
    if (i % a === k) {
        x = i;
        break;
    }
}

if (x !== -1) console.log(Math.floor((r - x) / a) + 1);
else console.log(0);

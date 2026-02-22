const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

if (k === 1) {
    console.log(0);
    return;
}

console.log(n + Math.floor((n - 1) / (k - 1)));

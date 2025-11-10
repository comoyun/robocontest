const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

if (m & 1) {
    console.log(-1);
    process.exit(0);
}

console.log(n + m / 2 + 1); // batirga raxmat

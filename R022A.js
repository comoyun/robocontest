const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const a = lines[1].split(' ').map(Number);
const b = lines[2].split(' ').map(Number);

let result = 0;

for (let i = 1; i <= 100; i++) {
    const at = a.every(x => i % x === 0);
    const bt = b.every(x => x % i === 0);

    if (at && bt) result++;
}

console.log(result);

const fs = require('fs');
const [left, right] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

let count = 0;

const isFine = n =>
    n
        .toString()
        .split('')
        .every(x => x !== 0 && n % x === 0);

for (let i = left; i <= right; i++) if (isFine(i)) count++;

console.log(count);

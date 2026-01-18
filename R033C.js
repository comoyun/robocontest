const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n').map(Number);
const [left, right, n] = lines;

const sum = n =>
    n
        .toString()
        .split('')
        .map(Number)
        .reduce((p, c) => p + c, 0);

let min = 0;
let max = 0;

for (let i = left; i <= right; i++) {
    if (sum(i) === n) {
        min = i;
        break;
    }
}

for (let i = right; i >= left; i--) {
    if (sum(i) === n) {
        max = i;
        break;
    }
}

console.log(min);
console.log(max);

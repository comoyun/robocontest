const fs = require('fs');
const n = fs.readFileSync(0, 'utf8').trim();
const arr = [6, 2, 5, 5, 4, 5, 6, 3, 7, 6];

let result = 0;

for (const digit of n) {
    const d = +digit;
    result += arr[d];
}

console.log(result);

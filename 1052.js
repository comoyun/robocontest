const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');
const overall = (n * (n + 1)) / 2;

let sum = 0;
let result = -1;
for (let i = 1; i <= n; i++) {
    sum = (i * (i + 1)) / 2;
    if (sum - i === overall - sum) {
        result = i;
        break;
    }
}

console.log(result);

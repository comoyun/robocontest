const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();

let min = Infinity;
let pairs = [];

for (let a = 1; a * a <= n; a++) {
    let b = Math.ceil(n / a);
    let sum = a + b;

    if (sum < min) {
        min = sum;
        pairs = [[a, b]];
    } else if (sum === min) {
        pairs.push([a, b]);
    }
}

for (const [a, b] of pairs) console.log(a, b);

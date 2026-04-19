const fs = require('fs');
const [a, b, m] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

let result = 0;

for (let x = 0; x <= Math.floor(m / a); x++) {
    let rem = m - x * a;
    let y = Math.floor(rem / b);
    let S = x * a + y * b;
    if (S > result) result = S;
}

console.log(result);

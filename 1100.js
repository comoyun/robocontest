const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').split(' ').map(Number);
let fives = 0;
let twos = 0;

for (let i = n; i <= m; i++) {
    let temp = i;

    while (temp % 5 === 0) {
        temp /= 5;
        fives++;
    }

    temp = i;

    while (temp % 2 === 0) {
        temp /= 2;
        twos++;
    }
}

console.log(Math.min(twos, fives));

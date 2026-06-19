const fs = require('fs');
let n = +fs.readFileSync(0, 'utf8').trim();
const queue = [1, 1, 1, 1, 1];
const names = ['Sardor', 'Rustam', 'Dilshod', 'Shoxruh', 'Shaxboz'];

let i = 0;
while (n > 0) {
    n -= queue[i];
    queue[i] *= 2;

    if (n <= 0) {
        console.log(names[i]);
        process.exit(0);
    }

    i = (i + 1) % 5;
}


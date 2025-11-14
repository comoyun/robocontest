const fs = require('fs');
const [x, y] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const formula =
    (1 / (x + 2 / Math.pow(x, 2) + 3 / Math.pow(x, 3)) +
        Math.pow(Math.E, Math.pow(x, 2) + 3 * x)) /
        (Math.atan(x + y) + Math.pow(Math.abs(5 + x), 2)) -
    Math.pow(Math.cos(Math.pow(y, 2) + Math.pow(x, 2) / 2), 2);

console.log(formula.toFixed(2));

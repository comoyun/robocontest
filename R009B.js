// MLE beradi
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const [s, t] = lines[0].split(' ').map(Number);
const [a, b] = lines[1].split(' ').map(Number);
const olma = lines[3].split(' ').map(Number);
const apelsin = lines[4].split(' ').map(Number);

const count = (arr, base) =>
    arr.reduce((acc, x) => acc + (x + base >= s && x + base <= t), 0);

console.log(count(olma, a));
console.log(count(apelsin, b));

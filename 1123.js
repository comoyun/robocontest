const fs = require('fs');
const [n, a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const dry = n * (1 - a / 100);
const newDry = 1 - b / 100;
console.log(dry / newDry);

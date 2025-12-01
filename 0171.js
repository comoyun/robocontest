const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const steps = lines[1].split(' ').map(Number);

let pos = 0;

for (const step of steps) pos += step;

console.log(Math.abs(pos));

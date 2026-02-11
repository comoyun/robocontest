const fs = require('fs');
const steps = +fs.readFileSync(0, 'utf8');

console.log(steps / 100); // (steps / 10000) * 100 = steps / 100

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const n = +lines[0];
let traffic = 0;

for (let i = 2; i < lines.length; i++) {
    const amount = +lines[i];
    traffic += n
    traffic -= amount;
}

console.log(traffic);

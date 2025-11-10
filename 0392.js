const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const nums = lines[1].split(' ').map(Number);

for (const num of nums) {
    if (num % 2 === 0) console.log(num / 2);
    else console.log((num - 1) / 2);
}

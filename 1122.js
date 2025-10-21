const fs = require('fs');
const n = fs.readFileSync(0, 'utf8').trim();
let result = 'YES';

for (const char of n) {
    if ((+char & 1) === 0) {
        result = 'NO';
        break;
    }
}

console.log(n.length & 1 ? result : 'NO');

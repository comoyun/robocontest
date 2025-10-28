const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (i > 0 && str[i - 1] === '1' && str[i] === '1') continue;
    if (str[i] === '1') count++;
    if (count > 1) break;
}

console.log(count === 1 ? 'YES' : 'NO');

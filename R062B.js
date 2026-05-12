const fs = require('fs');
const num = fs.readFileSync(0, 'utf8').trim();
const map = {
    0: 0,
    1: 1,
    8: 8,
    6: 9,
    9: 6,
};

let result = '';

for (let i = num.length - 1; i >= 0; i--) {
    if (num[i] in map) result += map[num[i]];
    else break;
}

console.log(result === num ? 'YES' : 'NO');

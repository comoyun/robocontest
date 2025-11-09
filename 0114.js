const fs = require('fs');
const [x1, v1, x2, v2] = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split(' ')
    .map(Number);

const diff1 = v1 - v2;
const diff2 = x2 - x1;

const result = diff2 / diff1;

if (result >= 0 && Number.isInteger(result)) console.log('YES');
else console.log('NO');

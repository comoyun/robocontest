const fs = require('fs');
const [x, y] = fs.readFileSync(0, 'utf8').split(' ').map(Number);
let result = 0;
let cur = 0;

while (cur < 100) {
    result++;

    cur -= y;
    cur = Math.max(cur, 0);
    cur += x;

    if (cur >= 100) break;

    cur -= 2 * y;
}

console.log(result);

/* 

Matematik usulda topish:

const fs = require('fs');
const [x, y] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

if (x >= 100) {
    console.log(1);
} else {
    const net = x - 3 * y;
    const its = Math.ceil((100 - x) / net);
    console.log(its + 1);
}

*/

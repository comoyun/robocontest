const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split('\n');

const s = input[0];
const n = +input[1];

let l = 0;
let r = s.length;

for (let i = 2; i < 2 + n; i++) {
    const [offset, length] = input[i].split(' ').map(Number);

    l = l + offset;
    r = l + length;
}

console.log(s.slice(l, r));

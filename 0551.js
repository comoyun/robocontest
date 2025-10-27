const fs = require('fs');
const s = fs.readFileSync(0, 'utf8').trim();

const set = new Set();

for (let i = 0; i < s.length; i++) {
    const pf = s.slice(0, i + 1);
    set.add(pf);
}

console.log(set.size);

/* 

chuqur o'ylab yuboribman.

console.log(s.length);

*/

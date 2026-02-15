const fs = require('fs');
let n = +fs.readFileSync(0, 'utf8');
let prev = n % 10;

while (n) {
    const digit = n % 10;
    if (digit !== prev) {
        console.log('YES');
        process.exit(0);
    }
    prev = digit;
    n = Math.floor(n / 10);
}

console.log('NO');

/*

Yana bir oddiy yechim: 

const str = fs.readFileSync(0, 'utf8').trim();
const len = str.length;
const set = new Set([...str]);
console.log(set.size === 1 ? 'NO' : 'YES');

*/

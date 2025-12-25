const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

let found = false;

/*

x * y = b (y = b / x)
x + y = a (y = a - x)

b / x = a - x

x 1-dan a-gacha boradi, chunki y = a − x,
agar x > a bo'lsa, y manfiy bo'ladi, bu masala shartiga zid 

*/

for (let x = 1; x <= a; x++) {
    if (a - x === b / x) {
        console.log(a - x, x);
        found = true;
    }
}

if (!found) console.log(-1);

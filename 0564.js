const fs = require('fs');
const [n, t, k] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const array = new Array(n).fill(t);
let i = 0,
    natija = -1,
    urinish = k;

while (true) {
    if (--array[i] === 0) {
        natija = 1;
        break;
    }

    if (--urinish === 0) break;

    i = ++i % array.length;
}

console.log(natija);

/*


O(1) geniy solution (do'stimdan):

if (Math.floor(k / n) === t || (k % n !== 0 && Math.floor(k / n) + 1 === t))
    console.log(1);
else
    console.log(-1);

*/

const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();
console.log(Array.from({ length: n }, (_, idx) => idx + 1).join('')[n - 1]);

/*

let i = 1;
let j = n;
let str = '';

while (j > 0) {
    str = (i++).toString();
    j -= str.length;
}

if (j === 0) console.log(str.at(-1));
else console.log(str.at(j - 1));


we can solve using math too, but I dont have to 
for this problem because of constraints

*/

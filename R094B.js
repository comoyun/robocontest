const fs = require('fs');
const s = fs.readFileSync(0, 'utf8').trim();

/* 

f#*? you robocontest

let i = s.length - 1;

while (i >= 0 && s[i] === 'z') i--;

if (i === -1) {
    console.log(s.join('') + 'a');
} else {
    s[i] = String.fromCharCode(s[i].charCodeAt(0) + 1);
    console.log(s.join(''));
}

*/

console.log(s + 'a');

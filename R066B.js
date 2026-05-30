const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

let result = '';
let i = 0;

while (i < str.length) {
    let j = i;

    while (j < str.length && str[j] === str[i]) j++;

    const count = j - i;

    if (count > 3) result += `${str[i]}{${count}}`;
    else result += str[i].repeat(count);

    i = j;
}

console.log(result);

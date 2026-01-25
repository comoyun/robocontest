const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

const isDigit = c => c >= '0' && c <= '9';
const result = [];
let sum = 0;
let i = 0;

while (i < str.length) {
    if (!isDigit(str[i])) {
        result.push(str[i]);
        i++;
        continue;
    }

    let j = i;
    while (j < str.length && isDigit(str[j])) j++;

    sum += Number(str.slice(i, j));
    if (sum !== 0) result.push(sum);

    i = j;
}

console.log(result.join(''));

const fs = require('fs');
console.log(
    fs
        .readFileSync(0, 'utf8')
        .trim()
        .split('')
        .reverse()
        .join('')
        .replaceAll('hs', 'sh')
        .replaceAll('hc', 'ch')
        .replaceAll('gn', 'ng')
);

/*

Tayyor kutubxonalarga tayanmay yozish kerak:

const str = fs.readFileSync(0, 'utf8').trim().split('');

const merged = [];
for (let i = 0; i < str.length; i++) {
    if (
        merged.length &&
        (merged.at(-1) === 's' || merged.at(-1) === 'c') &&
        str[i] === 'h'
    )
        merged[merged.length - 1] = merged.at(-1) + str[i];
    else if (merged.length && merged.at(-1) === 'n' && str[i] === 'g')
        merged[merged.length - 1] = merged.at(-1) + str[i];
    else merged.push(str[i]);
}

let i = 0;
let j = merged.length - 1;

while (i < j) {
    [merged[i], merged[j]] = [merged[j], merged[i]];
    i++;
    j--;
}

console.log(merged.join(''))
*/

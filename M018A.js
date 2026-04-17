const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const getCode = char => char.charCodeAt(0);

for (let i = 1; i < lines.length; i++) {
    const str = lines[i];
    const arr = [];

    for (let j = 1; j < str.length; j++) {
        const prev = str[j - 1];
        const curr = str[j];
        arr.push(Math.abs(getCode(curr) - getCode(prev)));
    }

    if (arr.join('') === arr.reverse().join('')) console.log('Ajoyib satr');
    else console.log('Oddiy satr');
}

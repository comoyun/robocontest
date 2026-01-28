const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim().split(' ');
const result = [];

const encrypt = word => {
    const left = [];
    const right = [];
    for (const char of word) {
        const code = char.charCodeAt(0);
        const a = code % 10;
        const b = Math.floor(code / 10) % 10;
        left.push(b);
        right.push(a);
    }

    right.reverse();

    return [...left, ...right].join('');
};

for (const word of str) result.push(encrypt(word));

console.log(result.join(' '));

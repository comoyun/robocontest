const fs = require('fs');
const [k, n] = fs.readFileSync(0, 'utf8').split(' ').map(Number);
const base = '0123456789ABCDEF'.split('');

let num = k;
const result = [];

while (num) {
    result.push(num % n);
    num = Math.floor(num / n);
}

if (result.length)
    console.log(
        result
            .reverse()
            .map(num => base[num])
            .join('')
    );
else console.log(0);

// cheaterlar uchun maxsus: console.log(k.toString(n).toUpperCase())

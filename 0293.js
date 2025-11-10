const fs = require('fs');
const string = fs.readFileSync(0, 'utf8').trim();

console.log(string.length);
for (const char of string) {
    const code = char.charCodeAt(0);
    console.log(code.toString(2));
}

/*

Tayyor funksiyalarga tayanmay yozishni maslahat beraman!

const fs = require('fs');
const string = fs.readFileSync(0, 'utf8').trim();

const bin = n => {
    const result = [];

    while (n) {
        result.push(n & 1);
        n >>= 1;
    }

    return result.reverse().join('');
};

const start = 97;
const chars = 'abcdefghijklmnopqrstuvwxyz';

console.log(string.length);

for (const char of string) {
    const code = chars.indexOf(char);
    console.log(bin(start + code));
}
*/

const fs = require('fs');
const satr = fs.readFileSync(0, 'utf8').trim().toLowerCase();
const unlilar = 'aeouiy';
const result = [];

for (const char of satr) {
    if (unlilar.includes(char)) continue;
    result.push('.' + char);
}

console.log(result.join(''))

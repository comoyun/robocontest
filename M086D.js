const fs = require('fs');
const passwd = fs.readFileSync(0, 'utf8').trim();
const n = passwd.length;

let result = 1n;
let next = 10n;

const isVar = char => char >= 'A' && char <= 'J';
const seen = new Set();
const firstChar = passwd[0];

if (isVar(firstChar)) {
    result *= --next;
    seen.add(firstChar);
} else if (firstChar === '?') {
    result *= 9n;
}

for (let i = 1; i < n; i++) {
    const char = passwd[i];

    if (seen.has(char)) continue;
    if (isVar(char)) {
        result *= next--;
        seen.add(char);
    }
    if (char === '?') result *= 10n;
}

console.log(result.toString());

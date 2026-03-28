const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const freq = new Array(26).fill(Infinity);

for (let i = 1; i < lines.length; i++) {
    const string = lines[i];
    const f = new Array(26).fill(0);

    for (const char of string) {
        const code = char.charCodeAt(0) - 97;
        f[code]++;
    }

    for (let i = 0; i < 26; i++) freq[i] = Math.min(freq[i], f[i]);
}

let result = '';
for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(97 + i);
    const occ = freq[i];
    result += char.repeat(occ);
}

console.log(result ? result : -1);

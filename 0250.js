const fs = require('fs');
const satr = fs.readFileSync(0, 'utf8').trim();
let result = 0;

const keyboard = ['abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];

for (const char of satr) {
    if (char === ' ') {
        result++;
        continue;
    }
    for (const chunk of keyboard) {
        const idx = chunk.indexOf(char);
        if (idx === -1) continue;
        result += idx + 1;
        break;
    }
}

console.log(result);

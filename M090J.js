// RIP JS
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = lines[1];
const result = [];

for (const char of n) {
    const seen = new Set();
    const num = +char;
    let replace = num;
    let max = replace % 10;

    while (!seen.has(replace)) {
        seen.add(replace);
        replace *= 2;
        replace %= 10;
        max = Math.max(max, replace);
    }

    result.push(max);
}

console.log(result.join(''));

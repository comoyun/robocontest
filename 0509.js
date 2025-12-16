const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
let x = 0;
let o = 0;

for (const line of lines)
    for (const char of line)
        if (char === 'X') x++;
        else if (char === 'O') o++;

if (x > o) console.log('X');
else console.log('O');

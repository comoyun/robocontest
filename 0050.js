const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const result = [];

for (let i = 1; i < lines.length; i++) {
    const [n, m] = lines[i].split(' ').map(Number);
    const out = (n * (n + 1)) / 2;
    if (out === m) result.push(1);
    else result.push(0);
}

console.log(result.join(''));

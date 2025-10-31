const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

if (n % 2 === 0) {
    console.log(-1);
    process.exit();
}

const top = [];
for (let i = 1; i <= n; i += 2)
    top.push(' '.repeat(Math.floor((n - i) / 2)) + '*'.repeat(i));
const bottom = [...top];
bottom.pop();
bottom.reverse();

const result = [...top, ...bottom];

for (const row of result) console.log(row);

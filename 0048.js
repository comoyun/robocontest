const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

let k = 1;
for (let i = 1; i <= n; i++) {
    const row = [];
    for (let j = 0; j < i; j++) row.push(k++);
    console.log(row.join(' '));
}


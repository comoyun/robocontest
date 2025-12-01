const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const [n, m] = lines[0].split(' ').map(Number);

const result = Array.from({ length: n }, () => new Array(m).fill(0));

for (let i = 1; i <= n; i++) {
    const rowA = lines[i].trim().split(' ').map(Number);
    const rowB = lines[n + i].trim().split(' ').map(Number);

    for (let j = 0; j < m; j++) result[i - 1][j] = rowA[j] + rowB[j];
}

for (const row of result) console.log(row.join(' '));

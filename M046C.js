const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const matrix = [];

for (let i = 1; i < lines.length; i++) {
    const row = lines[i].trim().split(' ').map(Number);

    if (matrix.length) {
        for (let j = 1; j < row.length; j++) {
            if (
                matrix[i - 2][j] - matrix[i - 2][j - 1] !==
                row[j] - row[j - 1]
            ) {
                console.log('NO');
                process.exit(0);
            }
        }
    }

    matrix.push(row);
}

console.log('YES');

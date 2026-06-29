const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const matrix = [];

for (let i = 1; i < lines.length; i++) {
    const row = lines[i].split('').map(char => (char === 'o' ? 1 : 0));
    matrix.push(row);
}

for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
        const curr = matrix[row][col];
        const left = matrix[row][col - 1];
        const right = matrix[row][col + 1];
        const top = matrix[row - 1][col];
        const bottom = matrix[row + 1][col];

        if (curr && left && right && top && bottom) {
            matrix[row][col] = 0;
            matrix[row][col - 1] = 0;
            matrix[row][col + 1] = 0;
            matrix[row - 1][col] = 0;
            matrix[row + 1][col] = 0;
        }
    }
}

for (const row of matrix) {
    for (const cell of row)  {
        if (cell) {
            console.log('no');
            process.exit(0);
        }
    }
}

console.log('yes');

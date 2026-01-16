const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const [n, m] = lines[0].split(' ').map(Number);
const [u, l, r, d] = lines[1].split(' ').map(Number);

const map = ['#', '.'];

const matrix = Array.from({ length: n + u + d }, (_, i) =>
    Array.from({ length: m + l + r }, (_, j) => map[(i + j) % 2])
);

let row = u;

for (let i = 2; i < lines.length; i++) {
    let col = l;
    for (const char of lines[i]) {
        matrix[row][col] = char;
        col++;
    }
    row++;
}

console.log(matrix.map(el => el.join('')).join('\n'));

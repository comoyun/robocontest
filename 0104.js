const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim().split(' ')[0];

const L = str.length;
const n = Math.sqrt(L);
let rows = Math.floor(n);
let cols = Math.ceil(n);

if (rows * cols < L) rows++;

const arr = Array.from({ length: rows }, () => new Array(cols));

const result = [];

for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const idx = row * cols + col;
        if (idx < str.length) arr[row][col] = str[idx];
    }
}

for (let col = 0; col < cols; col++) {
    for (let row = 0; row < rows; row++)
        if (arr[row][col]) result.push(arr[row][col]);
    result.push(' ');
}

console.log(result.join(''));

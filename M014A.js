const fs = require('fs');
const grid = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n')
    .map(row => row.split(' ').map(Number));

let pos = [-1, -1];
for (let row = 0; row < grid.length; row++)
    for (let col = 0; col < grid.length; col++)
        // break qilsa bo'ladi, lekin kodni chiroyini buzgim yo'q)
        if (grid[row][col]) pos = [row, col];

const distY = Math.abs(pos[0] - 3);
const distX = Math.abs(pos[1] - 3);

console.log(distX + distY);

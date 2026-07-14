const fs = require('fs');
const pic = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n')
    .map(line => line.split(' ').map(Number));

let total = 0;
let max = 0;

for (const row of pic) {
    for (const cell of row) {
        total += cell;
        max = Math.max(max, cell);
    }
}

console.log(total);

for (let row = 0; row < pic.length; row++)
    for (let col = 0; col < pic[0].length; col++)
        if (pic[row][col] === max) console.log(row, col);

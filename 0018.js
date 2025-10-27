const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split('\n');

const nonMagic = data.map(row => row.split(' ').map(Number));
const matrix = data.map(row => row.split(' ').map(Number));

const magicSquares = [];
const used = Array(10).fill(false);

const generate = (row = 0, col = 0) => {
    if (row === 3) {
        const sums = [
            matrix[0][0] + matrix[0][1] + matrix[0][2],
            matrix[1][0] + matrix[1][1] + matrix[1][2],
            matrix[2][0] + matrix[2][1] + matrix[2][2],
            matrix[0][0] + matrix[1][0] + matrix[2][0],
            matrix[0][1] + matrix[1][1] + matrix[2][1],
            matrix[0][2] + matrix[1][2] + matrix[2][2],
            matrix[0][0] + matrix[1][1] + matrix[2][2],
            matrix[0][2] + matrix[1][1] + matrix[2][0],
        ];
        if (sums.every(x => x === sums[0]))
            magicSquares.push(matrix.map(r => [...r]));
        return;
    }

    for (let k = 1; k <= 9; k++) {
        if (used[k]) continue;
        used[k] = true;
        matrix[row][col] = k;

        const [nextRow, nextCol] = col === 2 ? [row + 1, 0] : [row, col + 1];
        generate(nextRow, nextCol);

        matrix[row][col] = 0;
        used[k] = false;
    }
};

generate(0, 0);

let result = Infinity;

for (const square of magicSquares) {
    let diff = 0;
    for (let row = 0; row < nonMagic.length; row++)
        for (let col = 0; col < nonMagic[row].length; col++)
            diff += Math.abs(square[row][col] - nonMagic[row][col]);
    result = Math.min(result, diff);
}

console.log(result);

/* 

Oddiy va tezlashtirilgan variant:

const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim().split('\n');

const nonMagic = data.map(row => row.split(' ').map(Number));

const magicSquares = [
  [ [ 2, 7, 6 ], [ 9, 5, 1 ], [ 4, 3, 8 ] ],
  [ [ 2, 9, 4 ], [ 7, 5, 3 ], [ 6, 1, 8 ] ],
  [ [ 4, 3, 8 ], [ 9, 5, 1 ], [ 2, 7, 6 ] ],
  [ [ 4, 9, 2 ], [ 3, 5, 7 ], [ 8, 1, 6 ] ],
  [ [ 6, 1, 8 ], [ 7, 5, 3 ], [ 2, 9, 4 ] ],
  [ [ 6, 7, 2 ], [ 1, 5, 9 ], [ 8, 3, 4 ] ],
  [ [ 8, 1, 6 ], [ 3, 5, 7 ], [ 4, 9, 2 ] ],
  [ [ 8, 3, 4 ], [ 1, 5, 9 ], [ 6, 7, 2 ] ]
];

let result = Infinity;
for (const square of magicSquares) {
    let diff = 0;
    for (let row = 0; row < nonMagic.length; row++) 
        for (let col = 0; col < nonMagic[row].length; col++)
            diff += Math.abs(square[row][col] - nonMagic[row][col]);
    result = Math.min(result, diff);
}

console.log(result);


*/

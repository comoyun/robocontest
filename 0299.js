const fs = require('fs');
const lines = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n')
    .map(el => el.split(' ').map(Number));

const [firstN, firstM] = lines[0];
const [secondN, secondM] = lines[firstN + 1];

const firstMatrix = Array.from({ length: firstN }, () =>
    new Array(firstM).fill(0)
);

const secondMatrix = Array.from({ length: secondN }, () =>
    new Array(secondM).fill(0)
);

for (let row = 1; row <= firstN; row++)
    for (let col = 0; col < firstM; col++)
        firstMatrix[row - 1][col] = lines[row][col];

for (let row = firstN + 2; row < lines.length; row++)
    for (let col = 0; col < secondM; col++)
        secondMatrix[row - firstN - 2][col] = lines[row][col];

for (let row = 0; row < firstMatrix.length; row++) {
    const arr = [];
    for (let c = 0; c < secondMatrix[0].length; c++) {
        let sum = 0;
        for (let r = 0; r < secondMatrix.length; r++)
            sum += firstMatrix[row][r] * secondMatrix[r][c];
        arr.push(sum);
    }
    console.log(arr.join(' '));
}

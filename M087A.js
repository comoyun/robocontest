const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const xA = new Set();
const yA = new Set();
const zA = new Set();

for (let i = 1; i < lines.length; i++) {
    const [x, y, z] = lines[i].split(' ').map(Number);
    xA.add(x);
    yA.add(y);
    zA.add(z);
}

const arr = [
    [xA.size, 'Ali'],
    [yA.size, 'Vali'],
    [zA.size, "G'ani"],
];

arr.sort((a, b) => b[0] - a[0]);

console.log(arr[0][1]);

for (let i = 1; i < arr.length; i++) {
    if (arr[i][0] !== arr[0][0]) break;
    console.log(arr[i][1]);
}


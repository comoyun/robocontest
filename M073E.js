const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const A = lines[0].split(' ').map(Number);
const B = lines[1].split(' ').map(Number);

if (A.length < 2) {
    console.log('HA');
    process.exit(0);
}

let prevX = A[0],
    prevY = B[0];
let dx = A[1] - A[0];
let dy = B[1] - B[0];

for (let i = 1; i < A.length; i++) {
    let currX = A[i],
        currY = B[i];
    if ((currY - prevY) * dx !== (currX - prevX) * dy) {
        console.log("YO'Q");
        process.exit(0);
    }
    prevX = currX;
    prevY = currY;
}

console.log('HA');

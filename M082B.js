const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const bin = lines[i].trim();

    let rem = 0;
    for (const bit of bin) rem = (rem * 2 + (bit === '1')) % 7;

    console.log(rem === 0 ? 'Yes' : 'No');
}

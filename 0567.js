const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

if (lines.length === 1)
    console.log(
        lines[0]
            .split(' ')
            .map(BigInt)
            .reduce((prev, curr) => prev + curr, 0n)
            .toString()
    );
else console.log((BigInt(lines[0]) * BigInt(lines[1])).toString());

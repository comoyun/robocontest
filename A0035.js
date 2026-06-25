const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i += 2) {
    const nums = lines[i + 1].split(' ').map(Number);
    let min = Infinity;
    let max = -Infinity;
    for (const num of nums) {
        min = Math.min(min, num);
        max = Math.max(max, num);
    }
    console.log(min + max);
}



const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const colors = new Set();
let prev = -1;

for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim().split(' ').map(Number);
    const same = line.every(x => x === line[0]);

    colors.add(line[0]);

    /*
       uzoq qo'shni ranglar alohida rang sanaladi
    */
    if (!same || colors.size === prev || colors.size > 10) {
        console.log('NO');
        process.exit(0);
    }

    prev = colors.size;
}

console.log('YES');

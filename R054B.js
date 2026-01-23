const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

for (let i = 2; i < lines.length; i += 2) {
    const line = lines[i].split(' ').map(Number);
    let count = 1;
    for (let i = 1; i < line.length; i++) 
        if (line[i] < line[i - 1]) count++;

    console.log(count)
}

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const string = lines[i];
    const set = new Set();
    let count = 0;

    for (const char of string) {
        if (set.has(char)) continue;
        set.add(char);
        count++;
    }

    console.log(count);
}

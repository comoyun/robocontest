const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const a = lines[0];
const b = lines[1];
const n = a.length;

if (b.length !== n) {
    console.log('No');
    process.exit(0);
}

for (let i = 0; i < n; i++) {
    const prefix = a.slice(0, i);
    const suffix = a.slice(i);
    if (suffix + prefix === b) {
        console.log('Yes');
        process.exit(0);
    }
}

console.log('No');

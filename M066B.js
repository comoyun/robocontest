const fs = require('fs');
const bin = fs.readFileSync(0, 'utf8').trim();

for (const bit of bin) {
    if (+bit > 1) {
        console.log('No');
        process.exit(0);
    }
}

console.log('Yes');

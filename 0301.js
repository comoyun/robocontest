const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const pages = lines[1].split(' ').map(Number);

for (let i = 1; i < pages.length; i++) {
    if (pages[i - 1] > pages[i]) {
        console.log('NO');
        process.exit(0);
    }
}

console.log('YES');

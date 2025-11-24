const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const n = +lines[i];
    const result = n.toString(2).replace(/0/g, '').length;
    console.log(result);
}

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++)
    console.log((+lines[i]).toString(2).split('1').length - 1);

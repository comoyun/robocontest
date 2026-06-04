const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = +lines[0];
const first = lines[1];
const second = lines[2];

let result = 0;

// i-o'rindiq ikkala kunda ham bo'sh bo'lsagina o'tirish mumkin
for (let i = 0; i < n; i++) if (first[i] === '_' && second[i] === '_') result++;

console.log(result);

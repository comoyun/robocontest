const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const t = +lines[0];
const late = +lines[1];

console.log((t + late) % 24);

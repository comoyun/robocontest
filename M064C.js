const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const k = lines[0];
const str = lines[1];

const sliced = [];

for (let i = 0; i < k; i++) sliced.push(str[i]);

if (str.length > k) sliced.push('...');

console.log(sliced.join(''))

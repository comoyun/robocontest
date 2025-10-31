const fs = require('fs');
const number = +fs.readFileSync(0, 'utf8').trim();

const result = [];

for (let i = 10; i < 1000; i++)
    if (i + parseInt(i.toString().slice(-2)) == number) 
        result.push(i);

console.log(result.join(' '));

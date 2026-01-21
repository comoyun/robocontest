const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const nums = lines[1].trim().split(' ').map(Number);
let result = -1;

for (const num of nums)
    if (num !== 0 && num % 2 === 0) // 0 juft son emas
        result = Math.max(result, num); 

console.log(result);

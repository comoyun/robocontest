// stupid problem
const fs = require('fs');
const prices = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
let result = 0;

for (const price of prices) {
    if (price <= 0) {
        console.log('NO');
        process.exit(0);
    }
    result += price;
}

console.log(result);

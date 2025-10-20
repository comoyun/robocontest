const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

let max = 0,
    result;

for (const line of lines) {
    const coins = line.split(' ');
    const name = coins[0];
    let sum = 0;

    for (let i = 1; i < coins.length; i++) sum += Number(coins[i]);

    if (sum > max) {
        result = name;
        max = sum;
    }
}

console.log(result);

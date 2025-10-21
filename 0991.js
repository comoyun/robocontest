const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

let oddSum = 0;
let evenSum = 0;

for (let i = 0; i < str.length; i++) {
    const digit = +str[i];
    if (i & 1) oddSum += digit;
    else evenSum += digit;
}

console.log(
    oddSum - evenSum === 0 || Math.abs(oddSum - evenSum) % 11 === 0
        ? 'Yes'
        : 'No'
);

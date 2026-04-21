const fs = require('fs');

const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const isPalindrome = str => str === str.split('').reverse().join('');

for (let i = 1; i < lines.length; i++) {
    const x = +lines[i];
    let result = -1;
    let value = x;

    for (let n = 2; n <= 30; n++) {
        value *= x;

        if (isPalindrome(value.toString())) {
            result = n;
            break;
        }
    }

    console.log(result);
}

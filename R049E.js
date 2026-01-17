const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const str = lines[0];
let k = +lines[1];

const stack = [];
let result = '';

for (const char of str) {
    if (isNaN(char)) {
        stack.push(char);
    } else {
        result += stack.join('').repeat(+char);
        stack.length = 0;
    }
}

console.log(result[k - 1]);

/*

SAYQALLANGAN #1

const stack = [];

for (const char of str) {
    if (isNaN(char)) {
        stack.push(char);
    } else {
        const count = stack.length * char;

        if (k > count) {
            k -= count;
        } else {
            console.log(stack[(k - 1) % stack.length]);
            process.exit(0);
        }

        stack.length = 0;
    }
}
*/

/*

SAYQALLANGAN #2

let length = 0;

for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (isNaN(char)) {
        length++;
    } else {
        const count = length * char;

        if (k > count) {
            k -= count;
        } else {
            console.log(str[i - length + (k - 1) % length]);
            process.exit(0);
        }

        length = 0;
    }
}
*/


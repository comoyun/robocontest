const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(' ');
const n = input[0];
let k = +input[1];

const stack = [];

for (const digit of n) {
    while (k > 0 && stack.length && stack[stack.length - 1] > digit) {
        stack.pop();
        k--;
    }
    stack.push(digit);
}

while (k--) stack.pop();

while (stack.length && stack[0] === '0') stack.shift();

console.log(stack.length ? stack.join('') : '0');

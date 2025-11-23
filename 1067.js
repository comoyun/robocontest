const fs = require('fs');
const [s, p] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

let left = 0;
let right = s;
let res = -1;

while (left <= right) {
    const sum = left + right;

    if (sum > s) right--;
    else if (sum < s) left++;
    else if (sum === s && left * right === p) {
        res = left + ' ' + right;
        break;
    } else {
        left++;
        right--;
    }
}

console.log(res);

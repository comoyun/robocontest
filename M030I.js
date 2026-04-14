const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

let n = +lines[0];
const arr = [];
let str = lines[1];

while (!arr.includes(str)) {
    let newStr = '';
    let left = 0;
    let right = str.length - 1;
    while (left < right) {
        newStr += str[left++];
        newStr += str[right--];
    }
    if (str.length & 1) newStr += str[left];

    arr.push(str);
    str = newStr;
}

console.log(arr.at(-(n % arr.length)));

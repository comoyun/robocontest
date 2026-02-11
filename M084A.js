const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();

let right = 10 ** 5;
let left = 1;

/*
    binar qidiruv algoritmi yordamida
    kvadrati N dan oshmaydigan max sonni topamiz.
*/
while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid > n) right = mid - 1;
    else left = mid + 1;
}

// 1 ** 2, 2 ** 2, ... , right ** 2
console.log(Array.from({ length: right }, (_, i) => (i + 1) ** 2).join(' '));

const fs = require('fs');
const [w, h, n] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

let left = 0,
    right = 10 ** 18;
const check = len => Math.floor(len / w) * Math.floor(len / h) >= n;

while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (check(mid)) right = mid - 1;
    else left = mid + 1;
}

console.log(left);

const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

let left = 1;
let right = n;

while (left <= right) {
    const mid = left + ((right - left) >> 1);

    const sum = (mid * (mid + 1)) / 2;
    const rem = sum + mid - n;

    if (rem === k) {
        console.log(sum - k);
        break;
    }

    if (rem > k) right = mid - 1;
    if (rem < k) left = mid + 1;
}

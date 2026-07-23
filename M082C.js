const fs = require('fs');
const [aCount, aRest, bCount, bRest, trees] = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split(' ')
    .map(BigInt);

let left = 1n;
let right = 10n ** 18n;

while (left <= right) {
    const mid = left + ((right - left) >> 1n);
    const aRestDays = mid / aRest;
    const aWorkDays = mid - aRestDays;
    const bRestDays = mid / bRest;
    const bWorkDays = mid - bRestDays;

    const total = aWorkDays * aCount + bWorkDays * bCount;

    if (total >= trees) right = mid - 1n;
    else left = mid + 1n;
}

console.log(left.toString());

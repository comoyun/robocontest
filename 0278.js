// stupid me
const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());

let left = 0n;
let right = n;

while (left <= right) {
    const mid = left + (right - left) / 2n;
    const p = (2n ** (mid + 1n) - 1n) * 3n;

    if (p === n) {
        left = mid;
        break;
    } else if (p > n) {
        right = mid - 1n;
    } else {
        left = mid + 1n;
    }
}

const rp = 2n ** left * 3n;
const p = (2n ** left - 1n) * 3n + 1n;
const t = rp + p;

console.log((t - n).toString());

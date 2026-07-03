const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').split(' ');

const digs = n.split('').map(Number);
const next = num => {
    const digits = num;

    let i = digits.length - 2;
    while (i >= 0 && digits[i] >= digits[i + 1]) i--;

    if (i < 0) return -1;

    let j = digits.length - 1;
    while (digits[j] <= digits[i]) j--;

    [digits[i], digits[j]] = [digits[j], digits[i]];

    let l = i + 1,
        r = digits.length - 1;
    while (l < r) {
        [digits[l], digits[r]] = [digits[r], digits[l]];
        l++;
        r--;
    }

    return digits;
};

let result = digs;
for (let i = 0; i < k; i++) result = next(result);

console.log(result === -1 ? result : result.join(''));

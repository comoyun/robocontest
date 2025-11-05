const fs = require('fs');
const nums = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('\n')[1]
    .split(' ')
    .map(Number);
const n = nums.length;
const result = new Array(n).fill(0);

const isFine = n => {
    if (n === 0) return true;
    let left = 1;
    let right = 150000;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        const sum = (mid * (mid + 1)) / 2;
        if (sum > n) right = mid - 1;
        else if (sum < n) left = mid + 1;
        else return true;
    }

    return false;
};

for (let i = 0; i < n; i++) isFine(nums[i]) && (result[i] = 1);

console.log(result.join(''));

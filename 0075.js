// xo'rlangan js
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const nums = lines[1].split(' ').map(Number);
const sorted = [];
let result = 0;

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (arr[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};

for (let i = nums.length - 1; i >= 0; i--) {
    const num = nums[i];
    const idx = binarySearch(sorted, num);
    sorted.splice(idx, 0, num)
    result += idx;
}

console.log(result)

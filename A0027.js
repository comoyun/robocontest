const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const arr = ['A', 'B'];
const nums = lines[1].split(' ').map(BigInt);

nums.reverse();
for (let i = 1; i < nums.length; i++) nums[i] += nums[i - 1];

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        if (arr[mid] > target) right = mid - 1;
        else if (arr[mid] < target) left = mid + 1;
        else return mid;
    }

    return left;
};

for (let i = 3; i < lines.length; i++) {
    const q = binarySearch(nums, BigInt(lines[i]));
    const idx = nums.length - q - 1;
    console.log(arr[idx % 2]);
}

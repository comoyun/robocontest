const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const binarySearch = (num, arr) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] > num) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};

const insertionSortCount = arr => {
    const sorted = [];
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let idx = binarySearch(arr[i], sorted);
        sorted.splice(idx, 0, arr[i]);
        count += i - idx;
    }

    return count;
};

for (let i = 1; i < lines.length; i += 2) {
    const nums = lines[i + 1].trim().split(' ').map(Number);
    console.log(insertionSortCount(nums));
}

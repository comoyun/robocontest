// xo'rlangan js...
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const n = +lines[0];
const nums = lines[1].split(' ').map(Number);
const sorted = [];
let result = 0;

const binarySearch = x => {
    let left = 0;
    let right = sorted.length;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);

        if (x <= sorted[mid]) right = mid - 1;
        else left = mid + 1;
    }

    return Math.min(sorted.length, left);
};

for (let i = n - 1; i >= 0; i--) {
    const a = nums[i];
    result += binarySearch(a);
    const idx = binarySearch(a * 2);
    sorted.splice(idx, 0, a * 2);
}

console.log(result);

/*

brutafors

let count = 0;

for (let i = 0; i < n; i++) {
    const a = nums[i];
    for (let j = i + 1; j < n; j++) {
        const b = 2 * nums[j];
        if (a > b) count++;
    }
}

console.log(count)
*/

const fs = require('fs');
const nums = fs.readFileSync(0, 'utf8').split('\n')[1].split(' ').map(Number);
const freq = {};
let result = -1;

for (const num of nums) {
    freq[num] ??= 0;
    freq[num]++;
}

for (const key in freq) if (freq[key] === 2) result = Math.max(result, +key);

console.log(result);

// Sortirovka qilish orqali topish usuli:
// nums.sort((a, b) => a - b);
// let i = nums.length - 1;
//
// while (i >= 0) {
//     const curr = nums[i];
//     let j = i - 1;
//     let count = 1;
//     while (j >= 0 && nums[j] === curr) {
//         count++;
//         j--;
//     }
//
//     if (count === 2) {
//         console.log(curr);
//         process.exit(0);
//     }
//
//     i = j;
// }
//
// console.log(-1);

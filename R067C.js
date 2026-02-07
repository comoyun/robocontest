// DIQQAT: Bu yechim MLE beradi
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
let nums = lines[1].split(' ').map(Number);
let k = +lines[2];

while (k--) {
    let n = nums.length;
    let next = [];

    for (let i = 0; i < n; i++) {
        next.push(nums[i]);
        next.push(nums[i] + nums[(i + 1) % n]);
    }

    nums = next;
}

let sum = nums.reduce((a, b) => a + b, 0);
let result = sum / nums.length;
console.log(result.toFixed(3));

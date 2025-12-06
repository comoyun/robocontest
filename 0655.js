const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const nums = lines[1].split(' ').map(Number);

const negativeArr = [];
const positiveArr = [];

let negative = 0;
let positive = 0;

for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (num < 0) {
        negative += num;
        negativeArr.push(i + 1);
    } else if (num > 0) { // 0ni hisobga olmaymiz! 
        positive += num;
        positiveArr.push(i + 1);
    }
}

if (-1 * negative > positive) {
    console.log(negativeArr.length);
    console.log(negativeArr.join(' '));
} else {
    console.log(positiveArr.length);
    console.log(positiveArr.join(' '));
}

// o'tmadi, MLE
// readline bilan ham o'tmadi
// ko'proq xotira bersang o'lasanmi, RoboContest?

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 2; i < lines.length; i += 2) {
    const nums = lines[i].split(' ').map(Number);
    nums.sort((a, b) => a - b);
    let result = 2;
    for (const num of nums) if (num >= result) result += 2;
    console.log(result);
}

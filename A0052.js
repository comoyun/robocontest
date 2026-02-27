// doimgidek, robocontest bu yechimni readline orqali
// yozilgan versiyasini ham qabul qilmadi, cppga o'girib 
// tashlang bo'lmasa MLE xatolik beradi
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 2; i < lines.length; i += 3) {
    const nums = lines[i].trim().split(' ').map(Number);
    const k = +lines[i + 1];

    nums.sort((a, b) => a - b);
    let sum = 0;
    let result = 0;

    for (let i = 0; i < k; i++) {
        const num = nums[i];
        const count = (num - sum) * (nums.length - i);
        result += count;
        sum += num;
    }

    console.log(result);
}

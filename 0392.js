// eng katta EKUB doim N/2 dan hosil bo'ladi.
// chunki ikkala son ham biror k ga bo'linishi kerak,
// va maksimal bo'luvchi N/2 bo'ladi.

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const nums = lines[1].split(' ').map(Number);

for (const num of nums) {
    if (num % 2 === 0) console.log(num / 2);
    else console.log((num - 1) / 2);
}

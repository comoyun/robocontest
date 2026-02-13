const fs = require('fs');
const line = fs.readFileSync(0, 'utf8').trim();

// jami sahifalar soni
// agar "23-" kabi test tushib qolsa
// 23-sahifadan oxirgi sahifagacha chiqaramiz
const total = 2624;

const pages = line.split(',');

let result = 0;
for (const page of pages) {
    if (page.includes('-')) {
        let [left, right] = page.split('-');
        // left berilmagan bo'lsa, 1-sahifadan boshlaymiz
        left = left === '' ? 1 : Number(left);
        // right berilmagan bo'lsa, 2624-sahifagacha chiqaramiz
        right = right === '' ? total : Number(right);
        result += right - left + 1;
    } else {
        // yagona sahifa
        result++;
    }
}
console.log(result);

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i += 2) {
    const [_, k] = lines[i].split(' ').map(Number);
    const nums = lines[i + 1].split(' ').map(Number);
    let count = 0;

    // n < 0 -> vaqtidan avval kelganlar
    // n == 0 -> vaqtida kelganlar
    for (const num of nums) if (num <= 0) count++;

    // vaqtida va vaqtidan oldin kelganlar soni
    // k ga teng yoki katta bo'lsa musobaqa qizg'in bo'ladi
    if (count >= k) console.log("Qizg'in");
    else console.log('Zerikarli');
}

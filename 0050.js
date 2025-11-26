const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const result = [];

for (let i = 1; i < lines.length; i++) {
    // 2ta sonni qatordan chiqarib olish
    const [n, m] = lines[i].split(' ').map(Number);

    // 1dan n-gacha bo'lgan sonlar yig'indisini hisoblash
    const out = (n * (n + 1)) / 2;

    if (out === m) result.push(1);
    else result.push(0);
}

console.log(result.join(''));

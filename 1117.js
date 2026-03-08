const fs = require('fs');
const [a, b, c] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

// a-b va b–c orasidagi kattaroq bo'sh joyni chiqaradi
console.log(Math.max(b - a - 1, c - b - 1));

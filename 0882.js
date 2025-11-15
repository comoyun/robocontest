const fs = require('fs');
const n = fs.readFileSync(0, 'utf8').trim();

let sum = 0;

for (let i = 0; i < n.length; i++) sum += +n[i];

// ochko'z yo'l bilan eng kichik sonni qurish mumkin.
// masalan, n = 44
// 44 / 9 = 4 -- 9999
// 44 % 9 = 8 yoki (4 + 4) % 9 = 8
// Bu degani 4ta 9 yozsak ularning yig'indisi 36
// 44 bo'lishi uchun: 44 - 36 = 8
// shunday qilib 89999 eng kichik son
console.log(sum % 9);

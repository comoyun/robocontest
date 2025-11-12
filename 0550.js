const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

// k n-dan kichik bo'lishi mumkin
let diff = Math.abs(k - n);

// necha marta 10 ta qadam tashlashimiz mumkin?
// agar farq 12 bo'lsa: 1ta 10qadam, 1ta 2qadam tashlaymiz
// urinishlarni minimallashtirish uchun qadamlarni kattalashtirish kerak
// yuqoriga yaxlitlashimizning sababi: 12 / 10 = 1.2
// ceil(1.2) = 2; 1ta 10 qadam, 1ta 2qadam degandek matematikani o'zi hal qiladi
let count = Math.ceil(diff / 10);

console.log(count);

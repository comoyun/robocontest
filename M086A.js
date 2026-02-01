const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

// Hamdam m so'mni n so'mgacha bo'lgan tangalar bilan to'laydi.
// Eng katta tangalarni ishlatamiz, qolganini kichik tangalar bilan to'ldiramiz.
// Qoldiq bo'lsa, yana bitta tanga kerak bo'ladi, mana nega ceil kerak
console.log(Math.ceil(m / n));

const fs = require('fs');
const sides = fs.readFileSync(0, 'utf8').split(' ').map(Number);

// Ushbu masalani yechishda Pifagor teoremasidan foydalanishimiz
// mumkin:
// a^2 + b^2 = c^2

// Tomonlarni ascending tartibda saralaymiz. Shunda
// uchburchakning katetlari (eng kichik tomonlari) 0 va 1-indekslarda bo'ladi
// va uchburchakning gipotenuzasi (eng katta tomoni) 2-indeksda bo'ladi
sides.sort((a, b) => a - b);

const [a, b, c] = sides;

console.log(a * a + b * b === c * c ? 'YES' : 'NO');

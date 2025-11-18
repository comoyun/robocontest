const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

// tub son bo'lishi uchun bo'luvchilari
// soni exactly 2 ta bo'lishi kerak
// lekin dumbuljon 2tadan ko'p bo'lishi 
// mumkin deb o'ylaydi.

if (n < 2) {
    console.log('murakkab');
    process.exit(0);
}

console.log('tub');

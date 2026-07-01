const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim()) + 1n; // shohruhni ham hisobga olish kk lol
const count = (n + 2n) / 3n;

// shohruhni 3ta do'sti bo'lsa, o'zi bilan 4ta.
// ular bitta udlinitelga ulanadi
// count n ni 3ga bo'lib yuqoriga yaxlitlangani
// qoldiq 1 bo'lsa, oxirida udlinitel ulash o'rniga
// bir do'stini ulash mumkin (count - 1 ortiqcha udlinitelni o'chiradi)
// qoldiq 1dan katta bo'lsa, masalan n = 5, n % 3 = 2 
// bitta udlinitelga 4ta telefon ulanadi, keyin bizga yana bitta udlinitel kerak
// qolgan 1ta odam uchun
console.log((n % 3n === 1n ? count - 1n : count).toString());

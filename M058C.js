const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);
const set = new Set();

/*
 * 10ta idish bor, va har bir idishning qopqog'ini ostida
 * 0dan 1000gacha son yotadi. Bizda 42ta soldat bor va ular
 * 0dan 41gacha belgilangan. Har bir idish uchun, uning qopqoq
 * ostidagi sonni 42ga bo'lgandagi qoldiqni olamiz va idishni shu
 * qoldiq bilan belgilangan soldatga beramiz. Bunda bitta soldat
 * bir necha marta idish olishi mumkin, shu sababli setdan foydalanamiz.
 * Set faqat nodir sonlarni saqlaydi, natijada biz ortiqcha hisoblash
 * muommosini hal qilamiz.
 */

for (const num of lines) set.add(num % 42);

console.log(set.size);

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const nums = lines[1].split(' ').map(Number);

// birodarlar kelinglar shu masalaga 1 yulduzcha bervoraylik
// nima foydasi bor ? nima o'rgatdi!?
// vaqtim bekor ketdi, shartiga ham tupurilgan, xullas bo'g'ilib qoldim buni o'qib

// shartni faqat 1-o'yinchi bajarsa, u 2-o'yinchidan tashqari hammani chiqarib yuboradi.
// Faqat 2ta o'yinchi qolsa, keyingi o'yinchidan keyingisi o'ziga teng bo'ladi
// shunda 1-o'yinchi o'zini o'chirib yuboradi o'yindan va doim 2-o'yinchi g'alaba qozonadi
// Qanday g'alati masala-a?
console.log(nums[1]);

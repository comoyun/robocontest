const fs = require('fs');
const passwd = fs.readFileSync(0, 'utf8').trim();
const seen = new Set();

const isVar = char => char >= 'A' && char <= 'J';

let result = 1;
let curr = 10;

// birinchi belgi 0 bo'lmasligi kerak.
// u harf yoki ? belgisi bo'lsa, unga faqat 1-9 mos keladi
if (isVar(passwd[0])) {
    result *= --curr;

    // har bir harfni qiymati bir xil bo'lgani uchun
    // uni faqat birinchi uchraganida hisoblaymiz
    seen.add(passwd[0]);
} else if (passwd[0] === '?') {
    result *= 9;
}

for (let i = 1; i < passwd.length; i++) {
    const char = passwd[i];

    // bu harfga qiymat allaqachon tanlangan
    if (seen.has(char)) continue;

    if (isVar(char)) {
        // ishlatilmagan harf topildi 
        // bu ishlatilmagan raqamlardan bittasini tanlay oladi
        result *= curr--;
        seen.add(char);
    }
    if (char === '?') result *= 10;
}

console.log(result);

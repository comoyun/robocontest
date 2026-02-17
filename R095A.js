const fs = require('fs');
let k = +fs.readFileSync(0, 'utf8').trim();

let a = 1;
let b = 0;

while (k) {
    const temp = a;
    // buni tushunish uchun ruchka va
    // qogoz bilan har qadamda satr
    // o'zgarishini kuzating

    // hamma b lar ba ga o'zgaradi, ya'ni bizda b ta a paydo bo'ladi
    a = b;
    // hamma a lar b ga o'zgaradi, ya'ni eski b ga yana a ta b qo'shiladi
    b += temp;

    k--;
}

console.log(a, b);

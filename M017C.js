const fs = require('fs');
const data = fs.readFileSync(0, 'utf8').trim();

let num = +data;
const len = Math.floor(Math.log10(num)) + 1;
/* son 0 bolishi uchun necha marta 10ga bolishimiz kerak degan savolga javob beradi yuqoridagi qator, yana ham soddaroq aytsam: sonni nechta raqami bor? */

let sum = 0; // raqamlar yigindisi uchun
let pSum = 0; // raqamlar darajalari yigindisi uchun
while (num) {
    const digit = num % 10;
    sum += digit;
    pSum += digit ** len;
    num = Math.floor(num / 10);
}

if (pSum === +data) console.log(sum);
else console.log(data);

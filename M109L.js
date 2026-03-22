// satrdagi belgilar nimalardan iborat?
// kichik yoki katta harflar?
// nahot shu oddiy constraints larni ham aytmasa
// inglizchada aytadiku: I'm supposed to pull that out of my ass?
// "endi k**timdan chiqarib olaymi bularni?"

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const pass1 = lines[0];
const pass2 = lines[1];

let hash1 = 1;
let hash2 = 1;

for (const char of pass1) {
    const code = char.toLowerCase().charCodeAt(0) - 96;
    hash1 *= code;
}

for (const char of pass2) {
    const code = char.toLowerCase().charCodeAt(0) - 96;
    hash2 *= code;
}

console.log(hash1 % 47 === hash2 % 47 ? 'Welcome' : 'Try again');


// o'zim uchun feedback: 
// yuqoridagi 2ta loopni o'chirib funksiya yaratish kerak, hash nomli
// keyin toLowerCase ishlatmay charCode ni olamizda unga "OR 32" qo'llaymiz

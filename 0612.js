const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ');
const map = {};

for (let i = 0; i < 26; i++)
    map[String.fromCharCode(97 + i).toUpperCase()] = i + 1;

console.log(map[a] + map[b]);

/*

Yana bir yechim.

Ikkala harfning ASCII indekslarini qo'shamiz. 
Masalan, A + B = 97 + 98 = 195. Keyin prefiksni to'g'irlaymiz ya'ni 1-dan boshlab ketishi uchun 
yig'indini chapga siljitamiz: 

A + B = 97 + 98 = 195
195 − 96 * 2 = 3

Nega 97 * 2 ni ayrimaymiz? 

A + A = 97 + 97 = 194
194 − 97 * 2 = 0! Natija 2 chiqishi kerak edi

Bir qator kod:

console.log(a.toLowerCase().charCodeAt(0) + b.toLowerCase().charCodeAt(0) - 192);

*/

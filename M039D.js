const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

const count = Math.floor(k / n); // olamalarni n ta studentga butun bo'lamiz
const mod = k % n; // qoldiqni olamiz, ya'ni bo'lib berganimizdan so'ng savatda nechta olma ortib qoladi?

console.log(count, mod, Math.ceil(k / n) * n - k);

/*
Yana nechta olma bo'lganda savatda olma qolmas edi?

Agar k % n === 0 bo'lsa, qo'shish shart emas. Javob 0.
Aks holda, shunday eng kichik x topamizki, (k + x) % n === 0 bo'lsin.
"ceil(k / n) * n" k dan katta yoki teng bo'lgan n ga eng yaqin karrali son.
Shundan k ni ayirsak, yuqoridagi savolga javob bergan bo'lamiz.
*/

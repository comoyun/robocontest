// vazifa oddiy, harfni k-ta oldingi harfga o'zgartirish
// ASCII bilan ishlasak bo'ladi. Kichik lotin 97–122, jami 26 ta.
// masalan k = 3 va harf = 'a' bo'lsa: 97 + 3 = 100 -> 'd'.
// katta/kichikni ajratish hech gap emas: a.toLowerCase() === a -> demak kichik.
// Edge case bor. Satrda  '_' belgisi ham uchraydi. Bunda biz bu belgini
// o'zini chop etamiz, siljitmay.

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const k = +lines[0];
const str = lines[1];
const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const result = [];

for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();

    if (char === '_') {
        result.push(char);
        continue;
    }

    const idx = alphabet.indexOf(char);
    const nextIdx = (idx + k) % alphabet.length;
    let nextChar;

    if (str[i] === char) nextChar = alphabet[nextIdx];
    else nextChar = alphabet[nextIdx].toUpperCase();

    result.push(nextChar);
}

console.log(result.join(''));

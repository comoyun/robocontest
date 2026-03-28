const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

// agar chastotani quyidagidek massivda saqlasak,
// satrlar aro umumiy belgilarni aniqlash soddalashadi,
// minimumni olganimizda Infinity o'rniga 0 yoziladi va
// hammasi biz hoxlagandek amalga oshadi

// bu huddi EKUB/EKUKni topishdagi uslubga o'xshaydi to'g'rimi?
const freq = new Array(26).fill(Infinity);

for (let i = 1; i < lines.length; i++) {
    const string = lines[i];
    const f = new Array(26).fill(0);

    for (const char of string) {
        // a dan z gacha bo'lgan belgilarning ascii kodini massiv
        // indekslariga map qilyapmiz
        const idx = char.charCodeAt(0) - 97;
        f[idx]++;
    }

    for (let i = 0; i < 26; i++) freq[i] = Math.min(freq[i], f[i]);
}

let result = '';
for (let i = 0; i < 26; i++) {
    // indeksni ascii kodiga map qilyapmiz, ya'ni a dan z gacha
    const char = String.fromCharCode(97 + i);
    const occ = freq[i];
    result += char.repeat(occ);
}

// agar result bo'sh bo'lsa, ternary shart yolg'on bo'ladi
// va -1 ekranga chop etiladi
console.log(result ? result : -1);

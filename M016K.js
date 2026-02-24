const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i += 2) {
    // shunchaki str1dagi harf str2da uchraydimi yo'qmi
    // aniqlasak yetarli chunki bizda substring o'lchami
    // bo'yicha constraints yo'q

    // keyin, satrda qanday belgilar kelishini aytmagan,
    // shu sababli generic set ishlatamiz
    const str1 = new Set(lines[i]);
    const str2 = new Set(lines[i + 1]);
    let found = false;

    for (const char of str1) {
        if (str2.has(char)) {
            found = true;
            break;
        }
    }

    console.log(found ? 'YES' : 'NO');
}

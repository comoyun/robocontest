const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

const set = new Set();

for (const char of str) {
    const low = char.toLowerCase();
    const code = low.charCodeAt(0);
    if (set.has(low)) continue;

    // kichik lotin alifbosi ASCII jadvalida 97dan 122gacha (a-z)
    // agar belgi kodi bu intervalda bo'lmasa, o'tkazib yuboramiz
    if (code < 97 || code > 122) continue;
    set.add(low);

    if (set.size === 26) {
        console.log('pangram');
        process.exit(0);
    }
}

console.log('pangram emas');

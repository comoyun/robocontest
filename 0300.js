const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const n = BigInt(lines[i]);

    // agar sqrt(n) butun son bo'lsa, demak n-ning bo'luvchilari soni toq
    // nega bundayligini gptdan so'rang
    // Math.sqrt() funksiyasi BigInt bilan ishlamagani bois
    // Binary Search algoritmi orqali o'zimizning implementatsiyamizni yozamiz
    let left = 1n;
    let right = n;
    let found = false;

    while (left <= right) {
        const mid = left + (right - left) / 2n;
        const squared = mid * mid;
        if (squared === n) {
            console.log('YES');
            found = true;
            break;
        } else if (squared > n) {
            right = mid - 1n;
        } else {
            left = mid + 1n;
        }
    }

    if (!found) console.log('NO');
}

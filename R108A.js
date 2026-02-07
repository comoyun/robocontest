const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const [n, m] = lines[i].split(' ').map(Number);
    // n > m bo'lsa negativ son chiqib qoladi
    // shunga 7ni qo'shamiz. m - n + 7 > 7 bo'lmasligi
    // uchun % 7 bilan modulo olamiz, shunda har doim 0 dan 6 gacha qiymat chiqadi
    const forward = (m - n + 7) % 7;
    const backward = (n - m + 7) % 7;
    console.log(Math.min(forward, backward));
}

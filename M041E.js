const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [ax, ay] = lines[0].split(' ').map(Number);
const [bx, by] = lines[1].split(' ').map(Number);

// ax dan bx gacha bo'lgan masofa ay dan by gacha bo'lgan masofaga teng
// bo'lsa ikki nuqta bir qiyalikda yotadi
if (ax === bx || ay === by || Math.abs(ax - bx) === Math.abs(ay - by))
    console.log('YES');
else console.log('NO');

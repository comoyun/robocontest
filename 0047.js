const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    // 2lik sanoq sistemasiga o'girib, 1-larni sanaydi
    // -1, chunki split('1') length 1 ortiq bo'ladi
    console.log((+lines[i]).toString(2).split('1').length - 1);
}

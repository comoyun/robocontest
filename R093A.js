const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    let [a, b] = lines[i].split(' ').map(Number);

    // sonlar binar daraxt sifatida qaraladi (ota = floor(x/2))
    // b dan boshlab yuqoriga chiqamiz va a otaligini tekshiramiz
    while (b > a) b = Math.floor(b / 2);
    if (b === a) console.log('Yes');
    else console.log('No');
}

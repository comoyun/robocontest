const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];

if (n > 12) {
    console.log('Error');
    process.exit(0);
}

// 3ga bo'lganimizni sababi id 0 bilan boshlanadi
// 11 / 3 = 3; 0,1,2,3 -- 4ta fasl! seasons[3] = Autumn
// Lekin 12 / 3 = 4; 0,1,2,3,4 -- 5ta fasl! Mana nega modulo muhim
console.log(seasons[Math.floor((n % 12) / 3)]);

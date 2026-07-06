const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const props = lines[0].split(' ');
const [w, h] = props[0].split('X').map(Number);
const dp = +props[1];

const k = lines[1].trim();
const K = {
    GB: 8 * 1024 ** 3,
    MB: 8 * 1024 * 1024,
    KB: 8 * 1024,
    B: 8,
    b: 1,
};

// qavs ichidagi amal ma'lumotni bit xotira kattaligida
// ko'rsatadi, biz bu eng kichik birlikdan istalgan ko'rinishga
// o'tkazishimiz mumkin
// 1 B = 8 bit
// 1 KB = 1024 B
// 1 MB = 1024 KB
// 1 GB = 1024 MB
// ...
// 1 KB = 1024 * 8 b
// 1 GB = 1024 * 1024 * 1024 * 8 b
const size = (w * h * dp) / K[k];

console.log(size.toFixed(4));

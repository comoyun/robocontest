const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();
const map = {};
let result = 0;

// biz har bir substringni chastotasini
// kuzatib boramiz va 1 martdan ortiq uchragan
// substringlarni maximum uzunligi resultga ta'minlanadi
for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length; j++) {
        const sub = str.slice(i, j + 1);
        map[sub] ??= 0;
        map[sub]++;

        if (map[sub] > 1) result = Math.max(result, j - i + 1);
    }
}

console.log(result);

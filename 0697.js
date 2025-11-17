// Game the name? balki name the game?
// plase degan so'z yo'q. nima keragi bor aloqasi yo'q ma'lumotni
// tiqishtirib? bemani masala
const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();
let result = 0;

for (const char of str) result += char.charCodeAt(0);

console.log(result);

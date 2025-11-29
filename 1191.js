const fs = require('fs');
const [n, m, k, d] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

// bu ochko'z algoritm
// piyoda oxirigacha borib qo'y: n * k
// masalan n = 10 (bekatlar soni), k = 5 (har bir bekatga piyoda
// borish uchun ketadigan daqiqa) -> 10 * 5 = 50
// yoki
// avtobus kelishini d daqiqa kut va n * m daqiqa avtobusda yur
// masalan n = 10, m = 3, d = 25 -> 25 + 10 * 3 = 55, shunda piyoda tezroq.

console.log(Math.min(n * k, d + n * m));

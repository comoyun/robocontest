const fs = require('fs');
const [n, p] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

// har varoqlashda 2 bet o'tiladi (bir varoq = 2 bet)
// jami varoqlar soni: n / 2 (butun qismi)

// old tomondan p-betga yetish:
// p / 2

// oxiridan p-betga yetish:
// n / 2 - p / 2
// n / 2 -> oxirigacha nechta varoq bor
// p / 2 -> p betgacha nechta varoq bor
// ayirmasi p-betgacha oxiridan nechta varoqlash kerakligini bildiradi

// natija bosh va oxiridan kelish variantlaridan kichigi
console.log(Math.min(Math.floor(p / 2), Math.floor(n / 2) - Math.floor(p / 2)));

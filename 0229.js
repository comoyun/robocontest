const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(BigInt);

// o'rta arifmetik (a + b) / 2
// o'rta geometrik sqrt(a * b)

// son juda katta (10 ** 18), shuning uchun ildiz olish noqulay
// lekin agar ikkala tomonni ham kvadratga ko'tarsak, ildiz yo'qoladi va ishimiz ossonlashadi

const m1 = (a + b) * (a + b);
const m2 = 4n * a * b;

if (m1 === m2) console.log('=');
else if (m1 < m2) console.log('<');
else console.log('>');

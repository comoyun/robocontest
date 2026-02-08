const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

// nechta yutish variantlari bor?
// +1 chunki akalarini toshi bilan
// bir xil bo'lib qolsa ham yutadi
const have = 6 - Math.max(a, b) + 1;

// a/b ifodani soddalashtirish uchun
// gcd = ekub
const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
};

const f = gcd(have, 6);
console.log(have / f + '/' + 6 / f);

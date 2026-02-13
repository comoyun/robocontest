const fs = require('fs');
let n = +fs.readFileSync(0, 'utf8').trim();

// eng optimal yo'li shu, 2dan sqrt(n) gacha borish kerak
// eng yomon xolat: sqrt(10 ** 10) = 10 ** 5
let result = n;
for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
        result = i;
        break;
    }
}
console.log(result);

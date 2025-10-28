const fs = require('fs');
let n = BigInt(fs.readFileSync(0, 'utf8'));
let count = 0;

while (n > 1n) {
    /* bigintda yaxlitlash funksiyasi yoqda onasini emsin */
    n++;
    n /= 2n;
    count++;
}

console.log(count);

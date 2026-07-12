const fs = require('fs');
let n = BigInt(fs.readFileSync(0, 'utf8').trim());
let prev = 1n;
let curr = 2n;

while (n > 0) {
    const diff = curr - prev - 1n;

    if (diff >= n) {
        console.log((prev + n).toString());
        break;
    }

    n -= diff;
    prev = curr;
    curr *= 2n;
}

/*
1 2 4 8 16 32 64
 0 1 3
*/

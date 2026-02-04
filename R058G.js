const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

/*

m = floor(n / 2) = juft sonlar
k = ceil(n / 2) = toq sonlar

Juft sonlar yig'indisi:
2 + 4 + 6 + ... + 2 * m
= 2 * (1 + 2 + ... + m)
= 2 * (m * (m + 1) / 2)
= m * (m + 1)

Toq sonlar yig'indisi:
1 + 3 + 5 + ... + (2k - 1)
= (2 * 1 - 1) + (2 * 2 - 1) + ... + (2k - 1) 
= 2 * (1 + 2 + ... + k) - k
= 2 * (k * (k + 1) / 2) - k
= k * (k + 1) - k
= k ^ 2 
*/

const m = n / 2n;
const k = (n + 1n) / 2n;

const evenSum = m * (m + 1n);
const oddSum = k * k;

console.log((evenSum - oddSum).toString());

const fs = require('fs');
let n = BigInt(fs.readFileSync(0, 'utf8'));
const bin = [];

// n-ni 2lik sanoq sistemasiga o'giramiz
while (n) {
    bin.push(n & 1n); // oxirgi bit-ni o'qiydi
    n /= 2n;
}

// o'girilgan son teskari bo'ladi
bin.reverse();

// XOR jadvali:
// 1 ^ 1 = 0
// 1 ^ 0 = 1
// 0 ^ 1 = 1
// 0 ^ 0 = 0

// biz shunda 0ni 1ga, 1ni 0ga aylantirsak
// maksimal Xni topamiz.
// 101010 ^ 010101 = 111111 (max)

const largest = bin.map(bit => (bit ? 0 : 1)); // inverse qilamiz
let result = 0n;
let pow = 0n;

while (largest.length) {
    result |= BigInt(largest.pop()) << pow;
    pow++;
}

console.log(result.toString());

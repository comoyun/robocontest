/* 
  Bu masalaga 1% murakkablik berish nohaqlik
  1% bo'lishi uchun, men g'irrormlik qilib kutubxona 
  ishlatishim kerak, lekin bu tavsiya qilinmaydi. 
  Sonni binaryga aylantirish yetmaganidek, raqamlar 
  yig'indisini hisoblab, uni ham binary formatda chiqarish 
  kerak, N ham juda katta 10 ** 18.
  kamida 5% murakkablikdagi topshiriq bu.
*/

const fs = require('fs');
const N = BigInt(fs.readFileSync(0, 'utf8'));
const result = [];
let n = N;

if (n === 0n) {
    console.log(0, 0);
    process.exit(0);
}

while (n) {
    result.push(n & 1n);
    n >>= 1n;
}

const bin1 = result
    .reverse()
    .map(x => x.toString())
    .join('');

let sum = 0n;

for (const bit of result) sum += bit;

result.length = 0;
while (sum) {
    result.push(sum & 1n);
    sum >>= 1n;
}

const bin2 = result
    .reverse()
    .map(x => x.toString())
    .join('');

console.log(bin1, bin2);

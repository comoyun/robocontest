// massivdagi hamma elementlarni bir xil qilish
// uchun kamida nechta element o'chirish kerak?
// bu ochko'z masalalardan biri
// massivda eng kam uchraganlarni qoldirarmidingiz,
// yoki aksincha?
// 100 so'm beraymi yoki 1000 so'm?
// meni tushundingiz degan umiddaman
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const arr = lines[1].split(' ');
let max = 0;

const freq = {};

for (const num of arr) {
    freq[num] ??= 0;
    freq[num]++;
}

for (const num in freq) max = Math.max(freq[num], max);

console.log(arr.length - max);


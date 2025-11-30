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

/*

   yechimni hashmapsiz boshqa usullar bilan ham yozib ko'ring
   masalan saralash orqali yoki boshqa biron narsa (1 <= N <= 100)
   nobrainerlik qilib buni yozib jo'natsak-a? baribir 

   let max = 0;
   for (let i = 1; i <= 100; i++) {
       let count = 0;
       for (const num of arr) {
           if (i === num) count++;
       }
       max = Math.max(count, max);
   }
   console.log(arr.length - max);

   O(n * 100) -- constantlarni olib tashlaymizda baribir O(n)
   bo'ladi 

*/

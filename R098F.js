// afsuski, javascript solution o'tmaydi
// buni cppga o'girib tashlash kerak
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const nums = lines[1].split(' ').map(Number);
const sum = nums.reduce((prev, curr) => prev + curr, 0);

const isSquare = x => Math.floor(Math.sqrt(x)) === Math.sqrt(x);

// sumni o'zi kvadrat bo'lishi mumkin
if (isSquare(sum)) {
    console.log('Yes');
    process.exit(0);
}

for (const num of nums) {
    // sumdan bitta sonni o'chirib
    // kvadratlikka tekshirib ko'ramiz
    if (isSquare(sum - num)) {
        console.log('Yes');
        process.exit(0);
    }
}

// shartida 0, 1, 2tagacha element o'chirishimiz mumkin deyilgan
// biz bu yergacha keldikmi, demak 0 va 1 ta element o'chirib square
// yasay olmadik

// sumgacha bo'lgan barcha kvadratlar ustida qidiruvni qo'llaymiz
// sezgan bo'lsangiz, bu xuddi Two Sumga o'xshaydi (LeetCode 1-masala)

// maksimal ikkita elementni o'chira olamiz
// demak eng katta olib tashlash mumkin bo'lgan yig'indi:
nums.sort((a, b) => b - a);
const maxRemove = nums[0] + (nums[1] || 0);

// k^2 uchun chegaralar:
// sum - maxRemove <= k^2 <= sum
const minSquare = Math.max(0, sum - maxRemove);

const start = Math.ceil(Math.sqrt(minSquare));
const end = Math.floor(Math.sqrt(sum));

for (let i = start; i <= end; i++) {
    const square = i * i;
    const target = sum - square;

    // complement ya'ni to'ldiruvchilarni tezkor qidirish uchun
    // biroz qo'shimcha xotira berganining sababi shu
    const seen = new Set();

    for (const num of nums) {
        // target - num
        const complement = target - num;

        if (seen.has(complement)) {
            console.log('Yes');
            process.exit(0);
        }

        seen.add(num);
    }
}

console.log('No');

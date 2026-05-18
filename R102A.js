const fs = require('fs');
const nums = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);
let sum = 0;

// sum 100ga teng yoki katta bo'lgan taqdirda
// bundan avvalgi sumni 100ga farqiga taqqoslash uchun
let prev = 0;

for (const num of nums) {
    prev = sum;
    sum += num;

    if (sum >= 100) {
        const diff = sum - 100;

        // agar sum prev kabi 100dan bir xil masofada
        // joylashgan bo'lsa mario katta ballni tanlaydi
        if (diff <= Math.abs(prev - 100)) {
            console.log(sum);
            process.exit(0);
        }

        console.log(prev);
        // optimizatsiya
        // davom etishning keragi yo'q, chunki
        // negativ sonlar mavjud emas, ya'ni sum faqat
        // kattalashadi, shu bilan birga farq ham.
        // bizga minimal farqga ega sumni topish so'ralgan
        process.exit(0);
    }
}

// mario hamma qo'ziqorinlarni yig'gani bilan
// sum 100dan kichik bo'lishi mumkin, va loop 
// ichidagi shart ishga tushmaydi. 
// bu esa presentation error beradi. 
console.log(sum);

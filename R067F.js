const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

// sotuvchi har bir mijozga o'zidagi olmalarning
// yarmini va yana kta olma sotadi
// bizga nechta mijozga olma sotgani, k va qolgan
// olmalar soni beriladi
// biz topishimiz kerak: dastlab sotuvchida nechta
// olma bo'lgan.

// biz ortga hisoblashimiz kerak.
// masalan, avval olmalarning yarmi, keyin kta olma
// sotiladi.
// amallar tartibi: jami olmalarni 2ga bo'lish,
// natijadan kni ayrish
// teskari amal: qolgan olmalarga kni qo'shish, va
// natijani 2ga ko'paytirish
// yuqoridagi amal n marta bajarilsa, dastlabki olmalar
// soni kelib chiqadi

for (let i = 1; i < lines.length; i++) {
    let [k, q, n] = lines[i].split(' ').map(BigInt);
    let result = q;

    while (n--) {
        result += k;
        result *= 2n;
    }

    console.log(result.toString());
}


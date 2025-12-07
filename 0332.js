const fs = require('fs');
const [time, x] = fs.readFileSync(0, 'utf8').split('\n');
let [hour, minute] = time.split(':').map(Number);

const getSum = n => {
    let sum = 0;
    while (n) {
        sum += n % 10;
        n = Math.floor(n / 10);
    }

    return sum;
};

// Nega shunchaki raqamlar yig'indisini olib
// eng yaqin x-ga karrali sondan farqni hisoblab qo'ymaymiz?
// (Math.ceil(yigindi / x) * x) - yigindi
// chunki bu farqni minutga qo'shsak, natija 60 dan oshishi mumkin,
// bu esa soat/minutni o'zgartiradi. Bu esa yig'indini o'zgartiradi

// Shuning uchun hour:minute dan boshlab, keyingi har bir daqiqani
// alohida tekshiramiz
let diff = 0;
for (let h = hour; h < 24; h++) {
    for (let m = h === hour ? minute : 0; m < 60; m++) {
        const sum = getSum(h) + getSum(m);
        if (sum % x === 0) {
            console.log(diff);
            process.exit(0);
        }
        diff++;
    }
}

console.log(-1);

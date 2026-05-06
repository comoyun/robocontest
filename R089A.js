// RoboContest'dagi 1-testda muommo bor!
const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();
// 1dan n*n gacha bolgan sonlarning yigindisini olamiz
// keyin uni qatorlar soniga bolsak, har bir qatorning "common" yigindisi kelib chiqadi
// jami yigindi = n^2 * (n^2 + 1) / 2
// yigindi / qatorlar = common yigindi
// har bir son bir marta takrorlanganligi uchun qatorlar yigindisi hamma sonlarning yigindisiga teng
// bu yigindi diagonal va ustunlarga ham bogliq square bolgani uchun
const sum = (n * n * (n * n + 1)) / 2;
console.log(sum / n);

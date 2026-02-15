const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();
const n = +str;
const rev1 = parseInt(str.split('').reverse().join(''));
const rev2 = parseInt(rev1.toString().split('').reverse().join(''));
console.log(rev2 === n ? 1 : 0);

/*

alternativ yechim, ya'ni n > 0 va n oxirida 0 bo'lsa uni
2 marta teskari tartibda joylashtirilsa original n ga teng
bo'lmaydi, masalan:
    n = 420
    teskari 1 = 24
    teskari 2 = 42

const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

if (str.length > 1 && str.endsWith('0')) {
    console.log(0);
} else {
    const rev1 = str.split('').reverse().join('');
    const rev2 = rev1.split('').reverse().join('');
    console.log(rev2 === str ? 1 : 0);
}
*/

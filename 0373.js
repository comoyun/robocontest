const fs = require('fs');
const nStr = fs.readFileSync(0, 'utf8').trim();
let leftSum = 0;
let rightSum = 0;

for (let i = 0; i < 3; i++) leftSum += +nStr[i];
for (let i = 3; i < 6; i++) rightSum += +nStr[i];

console.log(leftSum === rightSum ? 'YES' : 'NO');

/*

Buni string xususiyatlarini suiiste'mol qilmay
oddiy matematika bilan ham yechishimiz mumkin:

const fs = require('fs');
let n = +fs.readFileSync(0, 'utf8');
let leftSum = 0;
let rightSum = 0;

while (n > 1000) {
    rightSum += n % 10;
    n = Math.floor(n / 10);
}

while (n) {
    leftSum += n % 10;
    n = Math.floor(n / 10);
}

console.log(leftSum === rightSum ? 'YES' : 'NO');

*/

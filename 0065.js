const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ');

let an = 0n;
let bn = 0n;

for (let idx = 0; idx < a.length; idx++) {
    const bit = +a[a.length - 1 - idx];
    if (bit) an += 2n ** BigInt(idx);
}

for (let idx = 0; idx < b.length; idx++) {
    const bit = +b[b.length - 1 - idx];
    if (bit) bn += 2n ** BigInt(idx);
}

console.log((an * bn).toString());

/*

yuqoridagi kod ishlagani bilan bu usuldan
foydalanishimiz noto'g'ri chunki ko'p built-in
funksiyalarga tayanyapmiz. 

quyidagi usulda biz 2lik sanoq sistemasida manual
ko'paytirib, qo'shib so'ng 10lik sanoq sistemasiga 
o'giramiz:

const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ');

const toSum = [];
for (let i = b.length - 1; i >= 0; i--) 
    if (b[i] === '1') toSum.push(a + '0'.repeat(b.length - i - 1));

const binSum = (a, b) => {
    const result = [];
    let carry = 0;
    let i = a.length - 1;
    let j = b.length - 1;

    while (i >= 0 || j >= 0) {
        const ba = i >= 0 ? +a[i] : 0;
        const bb = j >= 0 ? +b[j] : 0;

        const s = ba + bb + carry;
        result.push(s % 2);
        carry = Math.floor(s / 2);

        i--;
        j--;
    }

    if (carry) result.push(1);

    return result.reverse().join('');
};

let sum = '';

for (const bin of toSum) sum = binSum(sum, bin);

let result = 0n;
for (let i = sum.length - 1, power = 0n; i >= 0; i--, power++)
    if (sum[i] === '1') result += 2n ** power;

console.log(result.toString());

*/

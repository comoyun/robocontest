const fs = require('fs');
let [n, k] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

while (k > 0) {
    const last = n % 10;

    if (k >= last + 1) {
        n = (n - last) / 10;
        k -= last + 1;
    } else {
        n--;
        k--;
    }
}

console.log(n);

/*

yuqoridagi kod ushbu birinchi versiyadan ko'ra 
tezroq chunki biz n ni bo'laklab ayriymiz.

while (k--) {
    if (n % 10) n--;
    else n /= 10;
}


*/

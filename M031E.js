// bu yechim MLE beradi, cpp'ga o'girib tashlang
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

let a = lines[0].split('').sort();
let b = lines[1].split('').sort().reverse();

const n = a.length;

let p = new Array(n);

let x = 0;
let y = Math.floor((n + 1) / 2);
let u = 0;
let v = Math.floor(n / 2);

let l = 0;
let r = n;

for (let i = 0; i < n; i++) {
    if (i % 2 === 1) {
        if (a[x] < b[u]) {
            p[l++] = b[u++];
        } else {
            p[--r] = b[v++];
        }
    } else {
        if (a[x] < b[u]) {
            p[l++] = a[x++];
        } else {
            p[--r] = a[y++];
        }
    }
}

console.log(p.join(''));

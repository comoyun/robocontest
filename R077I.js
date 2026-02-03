// polniy matritsani birinchi yaratib olib MLE olganlar nechtamiz?
const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

if (n % 2 === 0) {
    console.log(-1);
    process.exit(0);
}

const mid = Math.floor(n / 2);

for (let i = 0; i < n; i++) {
    if (mid === i) {
        console.log(new Array(n).fill(1).join(' '));
        continue;
    }
    const arr = new Array(n).fill(0);
    arr[Math.floor(n / 2)] = 1;
    console.log(arr.join(' '));
}

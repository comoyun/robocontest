const fs = require('fs');
const [j, k, s] = fs.readFileSync(0, 'utf8').trim().split(' ');

const a = +j;
const b = +k;

const sum = a + b;
const product = a * b;

if (s === '+') {
    for (let i = 1; i <= sum; i++) {
        if (i !== a && i !== b && sum - i !== a && sum - i !== b) {
            console.log(i, sum - i);
            break;
        }
    }
}

if (s === '*') {
    for (let i = 1; i <= product; i++) {
        if (product % i === 0) {
            const j = product / i;
            if (i !== a && i !== b && j !== a && j !== b) {
                console.log(i, j);
                break;
            }
        }
    }
}

if (s === '-') {
    console.log(a + 1, b + 1);
}

if (s === '/') {
    console.log(a * 2, b * 2);
}

const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

const sum = m => {
    const k = Math.floor(n / m);
    return ((k * (k + 1)) / 2) * m;
};

const result =
    sum(3) + sum(5) + sum(7) - sum(15) - sum(21) - sum(35) + sum(105);

console.log(result);

/*

dumbullar usuli:

let sum = 0;

for (let i = 3; i <= n; i++) {
    if (i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
        sum += i;
    }
}

console.log(sum);


*/

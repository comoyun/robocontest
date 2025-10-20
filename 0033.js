const fs = require('fs');
const content = fs.readFileSync(0, 'utf8');

const primeFactors = n => {
    const factors = [];
    let num = n;

    for (let i = 2; i * i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }

    if (num > 1) factors.push(num);
    return factors;
};

const getSum = str =>
    str
        .split('')
        .map(Number)
        .reduce((pv, cv) => pv + cv, 0);

const nSum = getSum(content);
const pSum = primeFactors(+content).reduce(
    (pv, cv) => pv + getSum(cv.toString()),
    0
);

console.log(nSum === pSum ? 1 : 0);

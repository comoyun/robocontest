const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const [i, j] = lines[1].split(' ').map(Number);

// just googled the first 31 armstrong nums
const aNums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 153, 370, 371, 407, 1634, 8208, 9474, 54748,
    92727, 93084, 548834, 1741725, 4210818, 9800817, 9926315, 24678050,
    24678051, 88593477, 146511208, 472335975, 534494836, 912985153,
];

const a = aNums[i - 1];
const b = aNums[j - 1];
const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));
const lcm = (x, y) => (x / gcd(x, y)) * y;
console.log((lcm(a, b) / gcd(a, b)).toFixed(3));

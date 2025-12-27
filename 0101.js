
// lol
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const gcd = (x, y) => {
    while (y !== 0) {
        const temp = y;
        y = x % y;
        x = temp;
    }
    return x;
};

const lcm = (x, y) => (x / gcd(x, y)) * y;

for (let i = 1; i < lines.length; i++) {
    const [n, a, b, c, d] = lines[i].split(' ').map(Number);

    const ab = lcm(a, b);
    const ac = lcm(a, c);
    const ad = lcm(a, d);
    const bc = lcm(b, c);
    const bd = lcm(b, d);
    const cd = lcm(c, d);

    const abc = lcm(ab, c);
    const abd = lcm(ab, d);
    const acd = lcm(ac, d);
    const bcd = lcm(bc, d);

    const abcd = lcm(abc, d);

    const divisible =
        Math.floor(n / a) +
        Math.floor(n / b) +
        Math.floor(n / c) +
        Math.floor(n / d) -
        Math.floor(n / ab) -
        Math.floor(n / ac) -
        Math.floor(n / ad) -
        Math.floor(n / bc) -
        Math.floor(n / bd) -
        Math.floor(n / cd) +
        Math.floor(n / abc) +
        Math.floor(n / abd) +
        Math.floor(n / acd) +
        Math.floor(n / bcd) -
        Math.floor(n / abcd);

    console.log(n - divisible);
}

// what a stupid problem!
const fs = require('fs');
const mod = 5;
const n = +fs.readFileSync(0, 'utf8');

const fastExpo = n => {
    let a = 1;
    let c = 2;
    while (n) {
        let r = n % 2;
        if (r) a = (a * c) % mod;
        n = Math.floor(n / 2);
        c = (c * c) % mod;
    }
    return a;
};

if ((fastExpo(2 * n + 1) - fastExpo(n + 1) + 1) % 5 === 0) console.log('A');
else console.log('B');

const fs = require('fs');
const [l, r] = fs.readFileSync(0, 'utf8').trim().split(' ').map(BigInt);

const f = n => {
    const s = n.toString();
    let result = 0n;
    let b = 1n;
    for (let i = s.length - 1; i >= 0n; i--) {
        const rest = BigInt(s.slice(i + 1));
        const cur = BigInt(s[i]);
        const prefix = BigInt(s.slice(0, i));
        result += cur * (rest + 1n);
        result += ((cur * (cur - 1n)) / 2n) * b;
        result += 45n * prefix * b;
        b *= 10n;
    }
    return result;
};

console.log((f(r) - f(l - 1n)).toString());

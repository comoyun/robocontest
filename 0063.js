const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').split(' ').map(BigInt);

const MOD = BigInt(10 ** 9 + 7);

const factorial = x => {
    let result = 1n;
    for (let i = 2n; i <= x; i++) result = (result * i) % MOD;
    return result;
};

// modular inverse va fermat little theorem :)
const modPow = (base, exp, mod) => {
    let res = 1n;
    base %= mod;
    while (exp > 0n) {
        if (exp & 1n) res = (res * base) % mod;
        base = (base * base) % mod;
        exp >>= 1n;
    }
    return res;
};

const modInverse = x => modPow(x, MOD - 2n, MOD);

const totalMoves = n + m - 2n;
const downMoves = n - 1n;
const rightMoves = m - 1n;

const numerator = factorial(totalMoves);
const denominator = (factorial(downMoves) * factorial(rightMoves)) % MOD;

const result = (numerator * modInverse(denominator)) % MOD;

console.log(result.toString());

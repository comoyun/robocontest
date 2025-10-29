/* buni cppga ogirib tashlang */
const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(BigInt);

const memo = new Map();

const dfs = (n, mod) => {
    if (n <= 2n) return 1n << n;
    if (memo.has(n)) return memo.get(n);
    const left = dfs(n / 2n, mod);
    const right = dfs((n + 1n) / 2n, mod);
    const val = (left * right) % mod;
    memo.set(n, val);
    return val;
};

const phi = n => {
    let result = n;
    let x = n;
    for (let i = 2n; i * i <= x; i++) {
        if (x % i === 0n) {
            while (x % i === 0n) x /= i;
            result -= result / i;
        }
    }
    if (x > 1n) result -= result / x;
    return result;
};

const pb = phi(b);
let red = dfs(a, pb);
memo.clear();
console.log(dfs(red, b).toString());

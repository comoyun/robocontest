const MOD = 10n ** 9n + 7n;

const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());

const n1 = n + 1n;

const s1 = n1;
const s2 = ((3n * n * n1) / 2n) % MOD;
const s3_fixed =
    (((((n * n1) % MOD) * (2n * n + 1n)) % MOD) * 500000004n) % MOD;

const result = (s1 + s2 + s3_fixed) % MOD;

console.log(result.toString());

/* 

F(n) = 1 + 3 ∗ n + 3 ∗ n ∗ n
n (n + 1) / 2

1 2 3 4 5
3 6 9 12 15 = 45
5 (5 + 1) / 2 = 15 * 3 = 45

3 * n * n + (3 * (n - 1)^2) + (3 * (n - 2)^2)

*/

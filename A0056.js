// bu leetcodedagi coin change problemasiga o'xshash
// lekin javascriptda yozilgan kod o'tmaydi
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const primes = [2, 3, 5, 7];
const MAX = 10 ** 6;

const dp = new Array(MAX).fill(Infinity);
dp[0] = 0;

for (let i = 2; i < MAX; i++)
    for (const step of primes)
        if (i >= step) dp[i] = Math.min(dp[i], dp[i - step] + 1);

for (let i = 1; i < lines.length; i++) console.log(dp[+lines[i]]);

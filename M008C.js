const fs = require('fs');
const [l, r, s] = fs.readFileSync(0, 'utf8').trim().split(' ').map(BigInt);
const maxLen = Math.max(l.toString().length, r.toString().length);
let result = 0;

// TODO: keyinroq ishlayman
const dfs = (sum, num, len) => {
    if (num > r) return;
    if (sum > s) return;
    if (sum + 9n * BigInt(len) < s) return;

    if (!len) {
        if (sum === s && num >= l) result++;
        return;
    }

    for (let dig = 0n; dig < 10n; dig++)
        dfs(sum + dig, num * 10n + dig, len - 1);
};

dfs(0n, 0n, maxLen);
console.log(result);

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, k] = lines[0].split(' ').map(Number);
const a = lines[1].split(' ').map(Number);
const b = lines[2].split(' ').map(Number);

const memo = {};

const dfs = (idx, onA) => {
    if (idx >= n) return 0;

    const key = `${idx},${onA}`;
    if (key in memo) return memo[key];

    const choice1 = a[idx] - (onA ? 0 : k) + dfs(idx + 1, true);
    const choice2 = b[idx] - (onA ? k : 0) + dfs(idx + 1, false);

    const result = Math.max(choice1, choice2);
    memo[key] = result;

    return result;
};

console.log(Math.max(dfs(0, true), dfs(0, false)));

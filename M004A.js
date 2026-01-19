const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');
let result = 0;

// dumbullar usuli:
for (let i = 1; n > 0 ? i <= n : i >= n; n > 0 ? i++ : i--) result += i;
console.log(result);

/* 

Geniylar usuli:

const abs = Math.abs(n);
console.log(n < 0 ? -((abs * (abs + 1)) / 2 - 1) : n * (n + 1) / 2);

*/

/* 

DFS?

const dfs = n => {
    if (n === 0) return 0;
    return n + dfs(n > 0 ? n - 1 : n + 1);
};

console.log(dfs(n) + (n > 0 ? 0 : 1));

*/

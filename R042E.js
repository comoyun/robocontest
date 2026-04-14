const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();

const dfs = (open, close, result) => {
    if (open > n) return;
    if (open === close && open === n) {
        console.log(result);
        return;
    }
    if (open > close) dfs(open, close + 1, result + ')');
    dfs(open + 1, close, result + '(');
};

dfs(0, 0, '');

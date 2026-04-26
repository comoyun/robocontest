const fs = require('fs');
const [_, __, n] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
const [a, b] = [_, __].sort((a, b) => a - b);

/*
lanati robocontest
const dfs = (son, yigindi) => {
    if (yigindi === n) {
        if (natija > son) natija = son;
        return;
    }
    if (yigindi > n) return;
    if (son > natija) return;

    if (a) dfs(son * 10n + a, yigindi + a);
    if (b) dfs(son * 10n + b, yigindi + b);
};

dfs(0n, 0n);
*/

let best = null;

for (let x = 0; x * a <= n; x++) {
    const rest = n - x * a;
    if (x > 0 && rest === n) break;

    if (b !== 0 && rest % b === 0) {
        const y = rest / b;

        const str = String(a).repeat(x) + String(b).repeat(y);

        if (
            best === null ||
            str.length < best.length ||
            (str.length === best.length && str < best)
        ) {
            best = str;
        }
    }
}

console.log(best ?? -1);

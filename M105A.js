const fs = require('fs');

let [n, m, c] = fs.readFileSync(0, 'utf8').trim().split(' ');
c = +c;

const dfs = (pos, tight, target, memo, started) => {
    if (pos === target.length) return [1, 0];

    const key = `${pos},${tight},${started}`;

    if (key in memo) return memo[key];

    const lim = tight ? +target[pos] : 9;

    let ways = 0;
    let result = 0;

    for (let i = 0; i <= lim; i++) {
        const nextStarted = started || i > 0;

        const [countWays, count] = dfs(
            pos + 1,
            tight && i === lim,
            target,
            memo,
            nextStarted
        );

        if (i === c && nextStarted) result += countWays;

        result += count;
        ways += countWays;
    }

    return (memo[key] = [ways, result]);
};

console.log(dfs(0, true, n, {}, false)[1] - dfs(0, true, m, {}, false)[1]);

/*

let result = 0;

for (let i = m + 1; i <= n; i++) {
    let num = i;

    while (num) {
        if (num % 10 === c) result++;
        num = Math.floor(num / 10);
    }
}

console.log(result);
*/

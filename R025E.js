const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const count = (x, l, r, k) => {
    let result = 0;
    const dfs = (start, prev = null, count = 0) => {
        if (start >= x.length) {
            result += count === k ? 1 : 0;
            return;
        }
        if (count > k) return;
        if (count + (x.length - start) < k) return;

        let curr = 0n;
        for (let i = start; i < x.length; i++) {
            if (i > start && curr === 0n) return;

            curr = curr * 10n + BigInt(x[i]);

            if (prev !== null) {
                const diff = prev > curr ? prev - curr : curr - prev;
                if (diff < l || diff > r) continue;
            }

            dfs(i + 1, curr, count + 1);
        }
    };

    dfs(0);

    return result;
};

for (let i = 1; i < lines.length; i++) {
    const [x, l, r, k] = lines[i].split(' ').map(BigInt);
    console.log(count(x.toString(), l, r, Number(k)));
}

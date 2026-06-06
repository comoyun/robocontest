const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const specialNumbers = [];
const seen = new Set();

let max = 10 ** 18;

const dfs = num => {
    if (num > max) return;
    if (seen.has(num)) return;

    seen.add(num);
    specialNumbers.push(num);

    const str = num.toString();
    let length = str.length;

    for (let i = length; i <= 18; i++) {
        const next = num * i;
        const nextStr = next.toString();
        const nextLength = nextStr.length;

        if (nextLength === i) dfs(next);
    }
};

for (let i = 0; i <= 9; i++) dfs(i);

specialNumbers.sort((a, b) => a - b);

const count = (left, right) => {
    let low = 0,
        hi = specialNumbers.length - 1;

    while (low <= hi) {
        const mid = low + Math.floor((hi - low) / 2);
        if (specialNumbers[mid] < left) low = mid + 1;
        else hi = mid - 1;
    }
    const a = hi;

    low = 0;
    hi = specialNumbers.length - 1;

    while (low <= hi) {
        const mid = low + Math.floor((hi - low) / 2);
        if (specialNumbers[mid] <= right) low = mid + 1;
        else hi = mid - 1;
    }
    const b = hi;

    return b - a;
};

for (let i = 1; i < lines.length; i++) {
    const [left, right] = lines[i].split(' ').map(Number);
    console.log(count(left, right));
}

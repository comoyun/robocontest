const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i += 2) {
    const [nStr, kStr] = lines[i].split(' ');
    const n = +nStr;
    const k = +kStr;
    const s = lines[i + 1];

    let l = 0;
    for (let j = 1; j <= k - 1; j++) if (s[j] === 'R') l++;
    let r = 0;
    for (let j = k - 1; j <= n - 2; j++) if (s[j] === 'L') r++;

    console.log(Math.min(l, r));
}

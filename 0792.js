const fs = require('fs');
const content = fs.readFileSync(0, 'utf8').trim().split('\n');

const n = parseInt(content[0]);
const nums = content[1].trim().split(/\s+/).map(BigInt);

const seen = new Set();
const half = n / 2;
let u = 0;

for (const num of nums) {
    const s = num.toString();
    if (seen.has(s)) continue;
    seen.add(s);
    if (++u === half) break;
}

console.log(u);

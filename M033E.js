const fs = require('fs');

const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const nums = lines[1].split(' ').map(Number);

for (let i = 2; i < lines.length; i++) {
    const [left, right] = lines[i].split(' ').map(Number);

    const map = {};
    let sum = 0;

    for (let j = left - 1; j < right; j++) {
        const val = nums[j];
        sum += val;

        map[val] ??= 0;
        map[val]++;
    }

    let freqs = 0;

    for (const key in map) {
        const k = map[key];
        freqs += k * k;
    }

    console.log(sum + freqs);
}

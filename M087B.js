const fs = require('fs');

const s = fs
    .readFileSync(0, 'utf8')
    .trim()
    .split('')
    .map(c => (c === 'x' ? 1 : 0));

const n = s.length;
const player = ['Birinchi', 'Ikkinchi'];
let idx = 0;
let next = 0;

const hasThree = pos => {
    for (let start = pos - 2; start < n - 2; start++)
        if (start >= 0 && s[start] && s[start + 1] && s[start + 2]) return true;
    return false;
};

while (true) {
    while (next < n && s[next]) next++;

    if (next === n) {
        console.log('Hech kim');
        break;
    }

    s[next] = 1;

    if (hasThree(next)) {
        console.log(player[idx]);
        break;
    }

    next++;
    idx ^= 1;
}

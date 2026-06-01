const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const n = +lines[i];
    const countFives = p => {
        let result = 0;
        while (p > 0) {
            p = Math.floor(p / 5);
            result += p;
        }
        return result;
    };

    let l = 1,
        r = 5 * n;

    while (l < r) {
        let mid = Math.floor((l + r) / 2);

        if (countFives(mid) >= n) r = mid;
        else l = mid + 1;
    }

    console.log(l);
}

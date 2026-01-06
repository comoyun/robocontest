const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const T = +lines[0];

const count5s = (p) => {
    let res = 0;
    for (let x = p; x >= 5; x = Math.floor(x / 5)) {
        res += Math.floor(x / 5);
    }
    return res;
};

for (let i = 1; i <= T; i++) {
    let N = +lines[i];
    let lo = 0, hi = 5 * N, ans = -1; // upper bound safe enough

    while (lo <= hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (count5s(mid) >= N) {
            ans = mid;
            hi = mid - 1; // try smaller P
        } else {
            lo = mid + 1;
        }
    }

    console.log(ans);
}

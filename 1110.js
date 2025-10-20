const fs = require('fs');
const nums = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

for (let i = 1; i < nums.length; i++) {
    const n = nums[i];
    let odd = 0,
        even = 0;

    for (let j = 1; j * j <= n; j++) {
        if (n % j === 0) {
            const k = n / j;

            if (j & 1) odd++;
            else even++;

            if (k !== j) {
                if (k & 1) odd++;
                else even++;
            }
        }
    }

    console.log(even === odd ? 'YES' : 'NO');
}

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

// kerakmi optimize qilish? 
for (let i = 1; i < lines.length; i += 2) {
    let [n, k] = lines[i].split(' ').map(Number);
    const nums = lines[i + 1].split(' ').map(Number);

    for (let j = 0; j < n; j++) {
        if (k === 0) break;

        let lim = Math.min(n - 1, j + k);
        let max = j;

        for (let l = j + 1; l <= lim; l++) {
            if (nums[l] > nums[max]) max = l;
        }

        if (max !== j) {
            const val = nums[max];
            for (let l = max; l > j; l--) nums[l] = nums[l - 1];
            nums[j] = val;
            k -= max - j;
        }
    }

    console.log(nums.join(''));
}

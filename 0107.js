/* 

afsuski bu yechimni robocontest qabul qilmaydi MLE sababli 
shu kodni cpp-da yozsangiz o'tadi lekin

bu ahmoq robocontest node interpreter sarflaydigan 
xotirani qo'shib hisoblayapti

*/
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const [n, k] = lines[i].split(' ').map(Number);

    if (k === 0) {
        console.log(Array.from({ length: n }, (_, i) => i + 1).join(' '));
        continue;
    }

    if (n % (2 * k) !== 0) {
        console.log(-1);
        continue;
    }

    const res = [];
    let add = true;

    for (let i = 1; i <= n; i++) {
        res.push(add ? i + k : i - k);
        if (i % k === 0) add = !add;
    }

    console.log(res.join(' '));
}

/*


TLE kerakmi?

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const isOk = (arr, k) => {
    for (let i = 0; i < arr.length; i++)
        if (Math.abs(arr[i] - (i + 1)) !== k) return false;
    return true;
};

const findPermutation = (nums, used, perm, k) => {
    if (perm.length === nums.length) return isOk(perm, k) ? perm : null;

    for (let i = 0; i < nums.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        const res = findPermutation(nums, used, [...perm, nums[i]], k);
        if (res) return res;
        used[i] = false;
    }
    return null;
};

for (let i = 1; i < lines.length; i++) {
    const [n, k] = lines[i].split(' ').map(Number);
    const nums = Array.from({ length: n }, (_, i) => i + 1);
    const res = findPermutation(nums, Array(n).fill(false), [], k);
    console.log(res ? res.join(' ') : -1);
}

*/

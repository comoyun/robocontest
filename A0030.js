const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const upperBound = (target, arr) => {
    let left = 0;
    let right = arr.length;

    while (left < right) {
        const mid = left + ((right - left) >> 1);

        if (arr[mid] > target) right = mid;
        else left = mid + 1;
    }

    return left;
};

for (let i = 1; i < lines.length; i += 2) {
    const [n, k, p] = lines[i].trim().split(' ').map(Number);
    const nums = lines[i + 1].trim().split(' ').map(Number);

    nums.sort((a, b) => a - b);

    let left = 0;
    let right = n;
    let found = false;

    while (left <= right) {
        const mid = left + ((right - left) >> 1);

        // biz mid dan kichik yoki teng nechta son borligini
        // bilamiz (count), mid - count kta son o'chirilgandan keyin
        // mid nechinchi indeksda turishini ko'rsatadi.
        const count = upperBound(mid, nums);
        const res = mid - count;

        if (res === p) {
            // mid o'chirilgan sonlar ro'yhatida bo'lishi mumkin
            // shu holda, biz chapga qaraymiz chunki
            // chapga borganda count ham kamayadi (mid o'chirilgan
            // son sifatida hisoblanmaydi) va res pga teng bo'lishi mumkin
            if (nums.includes(mid)) {
                left = mid + 1;
            } else {
                found = true;
                console.log(mid);
                break;
            }
        } else if (res < p) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    if (!found) console.log(-1);
}

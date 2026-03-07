const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();
const n = +str;
const digits = str.split('').map(Number);
const used = new Array(digits.length).fill(false);
let result = Infinity;

const generate = (res = []) => {
    if (res.length === used.length) {
        const newN = +res.join('');
        if (newN > n && newN < result) result = newN;
        return;
    }
    for (let i = 0; i < digits.length; i++) {
        if (used[i]) continue;
        used[i] = true;
        generate([...res, digits[i]]);
        used[i] = false;
    }
};

generate();

console.log(result === Infinity ? -1 : result);

const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

let e = '2.7182818284590452353602875';
if (n === 0) {
    console.log(3);
} else {
    let s = e.slice(0, 2 + n).split('');
    if (e[2 + n] >= '5') {
        let i = s.length - 1;
        while (i >= 0) {
            if (s[i] === '.') {
                i--;
                continue;
            }
            if (s[i] === '9') {
                s[i] = '0';
                i--;
            } else {
                s[i] = (Number(s[i]) + 1).toString();
                break;
            }
        }
        if (i < 0) s.unshift('1');
    }
    console.log(s.join(''));
}

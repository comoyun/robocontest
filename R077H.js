const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

const result = [];
let i = 0;

while (i < str.length) {
    const three = +str.slice(i, i + 3);

    if (three >= 100 && three <= 122) {
        result.push(String.fromCharCode(three));
        i += 3;
    } else {
        const two = +str.slice(i, i + 2);
        result.push(String.fromCharCode(two));
        i += 2;
    }
}

console.log(result.join(''));

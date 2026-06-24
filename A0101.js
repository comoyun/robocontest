const fs = require('fs');

const lines = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const stack = [];
let result = 0;

for (let i = 1; i < lines.length; i++) {
    const num = lines[i];
    let count = 1;

    while (stack.length && num > stack.at(-1)[0]) result += stack.pop()[1];

    if (stack.length && num === stack.at(-1)[0]) {
        const same = stack.pop()[1];
        result += same;
        count += same;

        if (stack.length) result++;
    } else if (stack.length) {
        result++;
    }

    stack.push([num, count]);
}

console.log(result);

/*
2
4
1
2
2
5
1
*/

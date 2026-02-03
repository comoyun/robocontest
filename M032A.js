// MLE berdi, lekin bunday qilmasligi kerak edi
// CPP versiyasi ishlaydi

const fs = require('fs');
const [v1, v2] = fs.readFileSync(0, 'utf8').split(' ');
const map = 'abcdefgh';

const board = Array.from({ length: 8 }, () => new Array(8));

const v1c = map.indexOf(v1[0]);
const v1r = 8 - +v1[1];

const v2c = map.indexOf(v2[0]);
const v2r = 8 - +v2[1];

const queue = [[v1r, v1c, 0]];

while (queue.length) {
    const [r, c, steps] = queue.shift();

    if (r === v2r && c === v2c) {
        console.log(steps);
        process.exit(0);
    }

    for (let i = r - 2; i <= r + 2; i++) {
        for (let j = c - 2; j <= c + 2; j++) {
            if (i < 0 || i >= board.length || j < 0 || j >= board.length)
                continue;
            queue.push([i, j, steps + 1]);
        }
    }
}

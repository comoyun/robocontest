const fs = require('fs');

const [n, a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const need = 6 * n;
const area = a * b;

if (area >= need) {
    console.log(area);
    console.log(a, b);
} else {
    let rArea = Infinity;
    let rA = 0;
    let rB = 0;

    const limit = Math.sqrt(need);

    for (let i = a; i <= limit; i++) {
        const j = Math.max(b, Math.ceil(need / i));

        if (i * j < rArea) {
            rArea = i * j;
            rA = i;
            rB = j;
        }
    }

    for (let j = b; j <= limit; j++) {
        const i = Math.max(a, Math.ceil(need / j));

        if (i * j < rArea) {
            rArea = i * j;
            rA = i;
            rB = j;
        }
    }

    console.log(rArea);
    console.log(rA, rB);
}

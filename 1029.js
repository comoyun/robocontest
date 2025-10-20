const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').split('\n');
const [n, r, hp] = input[0].split(' ').map(Number);
const monsters = input[1].split(' ').map(Number);

let h = hp;
let won = true;

for (let i = 1; i < n; i++) {
    monsters[i] += monsters[i - 1];
}

const powers = [];
for (let i = 0; i < n; i++) {
    const power =
        monsters[Math.min(i + r, n - 1)] -
        (i - r - 1 < 0 ? 0 : monsters[i - r - 1]);
    powers.push([power, monsters[i] - (i - 1 >= 0 ? monsters[i - 1] : 0)]);
}

powers.sort((a, b) => a[0] - b[0]);

for (const [power, og] of powers) {
    if (h >= power) {
        h += og;
    } else {
        won = false;
        break;
    }
}

if (won) console.log('Next level', h);
else console.log('Game over');

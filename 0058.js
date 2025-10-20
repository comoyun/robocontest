const fs = require('fs');
const a = parseInt(fs.readFileSync(0, 'utf8'));

const dice = [
    [1, 6],
    [2, 5],
    [3, 4],
];

const map = {};

for (const [front, back] of dice) {
    map[front] = back;
    map[back] = front;
}

console.log(map[a]);

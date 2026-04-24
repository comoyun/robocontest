const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

for (let i = 1; i <= n; i++) {
    const threes = i * 3;
    const twos = i * 2;

    const threeRest = k - threes;
    const twoCount = threeRest / 2;
    const twoRest = k - twos;
    const threeCount = twoRest / 3;

    if (
        threes === k ||
        twos === k ||
        (threeRest > 0 &&
            threeCount + i <= n &&
            Math.floor(threeCount) === threeCount) ||
        (twoRest > 0 && twoCount + i <= n && Math.floor(twoCount) === twoCount)
    ) {
        console.log('YES');
        process.exit(0);
    }
}

console.log('NO');

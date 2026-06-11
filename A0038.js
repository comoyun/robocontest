// kamida ~30MB xotira bilan ishlaydi
const fs = require('fs');

const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const getWinner = (m, p, nums) => {
    nums.sort((a, b) => a - b);

    let ms = 0;
    let ps = 0;

    for (const x of nums) {
        ms += x;
        ps += x;

        const msOver = ms > m;
        const psOver = ps > p;

        if (msOver && psOver) return 'Durang';
        if (msOver) return 'Panda';
        if (psOver) return 'Meshpolvon';
    }

    return 'Durang';
};

for (let i = 1; i < lines.length; i += 2) {
    const [m, p] = lines[i].split(' ').map(Number);
    const nums = lines[i + 1].split(' ').map(Number);

    console.log(getWinner(m, p, nums));
}

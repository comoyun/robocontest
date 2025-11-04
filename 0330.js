/* jsni juda kamsitib yuboryapti bu ahmoq robocontest */
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const gnomes = [];

const n = Number(lines[0]);
const a = lines[1].split(' ').map(Number);
const b = lines[2].split(' ').map(Number);

for (let i = 0; i < n; i++) gnomes.push([a[i], b[i]]);

gnomes.sort((a, b) => b[1] - a[1]);

let got = -1;

for (const [need, get] of gnomes) {
    if (got === -1) {
        got = get;
        continue;
    }

    got -= need;
    got = Math.min(got, get);

    if (got <= 0) {
        console.log('No');
        process.exit(0);
    }
}

console.log('Yes');

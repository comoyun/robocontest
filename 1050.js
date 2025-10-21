const fs = require('fs');
const lines = fs.readFileSync('input.txt', 'utf8').split('\n');

const samples = parseInt(lines[0]);
const penalties = lines[1].split(' ');
const minutes = lines[2].split(' ').map(Number);

let penalty = 0;
let accepted = false;

for (let i = 0; i < penalties.length; i++) {
    const p = penalties[i];
    const t = minutes[i];

    if (accepted) continue;

    if (p === 'ACC') {
        penalty += t - 1;
        accepted = true;
        continue;
    }

    if (p === 'CE') continue;

    const match = p.match(/^(PE|TLE|WA|RE|MLE)#(\d+)$/);
    if (match && parseInt(match[2]) > samples) penalty += 5;
}

console.log(accepted ? penalty : 0);

/* kod yozishdan ham masalani shartini tushunishga ko'proq vaqt ketdi lol */

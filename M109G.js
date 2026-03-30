const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const beats = {
    S: ['P', 'L'], // Scissors yutadi Paper va Lizardni
    P: ['R', 'K'], // Paper yutadi Rock va Spock
    R: ['S', 'L'], // Rock yutadi Scissors va Lizard
    L: ['P', 'K'], // Lizard yutadi Paper va Spock
    K: ['S', 'R'], // Spock yutadi Scissors va Rock
};

let draw = 0;
let husanboy = 0;
let nurbaxsh = 0;

for (let i = 1; i < lines.length; i++) {
    const [a, b] = lines[i].split(' ');

    const aBeats = beats[a];

    if (a === b) {
        draw++;
        continue;
    }

    if (aBeats.indexOf(b) !== -1) {
        husanboy++;
        continue;
    }

    nurbaxsh++;
}

console.log(husanboy, nurbaxsh, draw);

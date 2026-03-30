const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const beats = {
    S: ['P', 'L'], // Scissors yutadi Paper, Lizard
    P: ['R', 'K'], // Paper yutadi Rock, Spock
    R: ['S', 'L'], // Rock yutadi Scissors, Lizard
    L: ['P', 'K'], // Lizard yutadi Paper, Spock
    K: ['S', 'R'], // Spock yutadi Scissors, Rock
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

    // agar nurbaxsh tanlagan narsa husanboy
    // yenga oladigan variantlardan biri bo'lsa
    if (aBeats.indexOf(b) !== -1) {
        husanboy++;
        continue;
    }

    // draw va husanboy yutishi holatlarni yopdik
    // qolgan barcha holatlarda nurbaxsh yutadi...
    // bu degani nurbaxsh middle finger bilan yutib ketishi mumkin)
    nurbaxsh++;
}

console.log(husanboy, nurbaxsh, draw);

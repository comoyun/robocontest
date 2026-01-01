const fs = require('fs');
const [hh, mm] = fs.readFileSync(0, 'utf8').split(':').map(Number);
const palindromes = [];

for (let h = 0; h < 24; h++) {
    for (let m = 0; m < 60; m++) {
        const ha = h % 10;
        const hb = Math.floor(h / 10);

        const ma = m % 10;
        const mb = Math.floor(m / 10);

        if (ha === mb && hb === ma) palindromes.push([h, m]);
    }
}

for (const [h, m] of palindromes) {
    if (hh < h || (hh === h && mm < m)) {
        console.log(
            h.toString().padStart(2, '0') + ':' + m.toString().padStart(2, '0')
        );
        process.exit(0);
    }
}

console.log('00:00');

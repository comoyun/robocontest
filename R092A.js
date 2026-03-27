const fs = require('fs');
const h = +fs.readFileSync(0, 'utf8');

// h toq bo'lgani uchun va indeks 0dan boshlangani
// uchun h / 2 pastga qarab yaxlitlanishi kerak

// i o'rtaga yetib kelsa bo'shliq o'rniga H belgisi
// bilan to'ldiramiz; bel qismi
for (let i = 0; i < h; i++)
    console.log(
        'H' + (i === Math.floor(h / 2) ? 'H' : ' ').repeat(h - 2) + 'H'
    );

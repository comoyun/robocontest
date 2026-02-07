const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const a = lines[0].split(' ').map(Number);
const b = lines[1].split(' ').map(Number);

// har qanday aylantirishni hisobga oladi
a.sort((a, b) => a - b);
b.sort((a, b) => a - b);

// farqlarni olamiz
//      kichik1 - kichik2
const d1 = a[0] - b[0];
const d2 = a[1] - b[1];
const d3 = a[2] - b[2];

// farqlarning hammasi 0 = qutilar teng
if (d1 + d2 + d3 === 0) console.log("Qutilar o'zaro teng");
else if (d1 >= 0 && d2 >= 0 && d3 >= 0)
    console.log('Birinchi quti ikkinchisidan katta');
else if (d1 <= 0 && d2 <= 0 && d3 <= 0)
    console.log('Birinchi quti ikkinchisidan kichik');
else console.log("Qutilarni solishtirib bo'lmaydi");

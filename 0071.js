const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8')) + 1n; // 0ni hisobiga 1 qo'shamiz

const div = n / 2n;

if (n & 1n)
    console.log((div + 1n).toString()); // n toq bo'lsa, tepaga yaxlitlaymiz
else console.log(div.toString());

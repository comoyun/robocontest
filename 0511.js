const fs = require('fs');
const n = fs.readFileSync(0, 'utf8').trim();

// 5+ ta urinishdan so'ng lol
if (n[0] === '-') {
    const a = -BigInt(n[1]);
    const b = BigInt(n.slice(2));
    console.log((a + b).toString());
} else {
    console.log(n);
}

const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8'));

// rasm juda foydali "clue" bo'libdi
if (n % 4n === 0n) console.log('Yes');
else console.log('No');

const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

// Dastlab n % 2 === 0 deb yozganlar, ruhan birgamiz
if (Math.ceil(n / 2) === Math.floor(n / 2)) console.log("G'ani");
else console.log('Ali');

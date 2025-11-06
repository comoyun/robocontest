const fs = require('fs');
const vagon = +fs.readFileSync(0, 'utf8').trim();

if (vagon >= 2 && vagon <= 7) console.log('Econom 105K');
else if (vagon === 8 || vagon === 9) console.log('Business 140K');
else console.log('VIP 210K');

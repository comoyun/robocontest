const fs = require('fs');
const [vali, ali] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

if (vali < ali) console.log('Vali');
else if (ali < vali) console.log('Ali');
else console.log('Same');

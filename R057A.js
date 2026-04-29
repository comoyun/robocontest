const fs = require('fs');
const [vazn, boy] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
const x = (10000 * vazn) / boy ** 2;
let result = '';

if (x < 16) result = 'Yuqori vazn yetishmasligi';
else if (x < 18.5) result = 'Vazn yetishmasligi';
else if (x <= 25) result = 'Ideal vazn';
else if (x <= 30) result = 'Ortiqcha vazn';
else if (x <= 35) result = 'Semizlikning I darajasi';
else if (x <= 40) result = 'Semizlikning II darajasi';
else result = 'Semizlikning III darajasi';

console.log(result);

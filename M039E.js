const fs = require('fs');

const [v, t] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const cycleLength = 109;

const totalRun = v * t;

/*

agar normalized mod negativ bo'lsa, cycleLength uni pozitiv oraliqga suradi.
agar normlized mod pozitiv bo'lsa, cycleLength uni belgilangan oraliqdan 
chiqarib yuboradi, shu sababli undan yana bir bor modulo olamiz.

*/
const mod = ((totalRun % cycleLength) + cycleLength) % cycleLength;

console.log(mod + 1);

const fs = require('fs');
const actions = fs.readFileSync(0, 'utf8').trim();

let place = 0;
let result = 0;

// haydovchi qarama-qarshi tomonga o'tsa 
// biz uni bir marta hisoblashimiz kerak
let onRight = true;

for (const action of actions) {
    if (action === 'L') place--;
    else place++;

    if (place < 0 && onRight) {
        onRight = false;
        result++;
    }

    if (place >= 0) {
        onRight = true;
    }
}

console.log(result);

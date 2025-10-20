const fs = require('fs');
let [ali, vali] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

let turn = 0;
let c = 1;
let winner = '';

while (true) {
    if (turn & 1) {
        if (c > vali) {
            winner = 'Vali';
            break;
        }
        vali -= c;
        ali += c;
    } else {
        if (c > ali) {
            winner = 'Ali';
            break;
        }
        ali -= c;
        vali += c;
    }

    c++;
    turn++;
}

console.log(winner);

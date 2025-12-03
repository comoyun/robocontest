/*

sonlar sortirovka qilinmagan! buni anglash uchun
5 marta WA oldim. aytib qo'ysa o'ladimi?

*/

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const [n, k] = lines[0].split(' ').map(Number);
const scores = lines[1].split(' ').map(Number);

scores.sort((a, b) => b - a);

const minThreshold = scores[k - 1];

let result = 0;

for (const score of scores) {
    if (score > 0 && score >= minThreshold) result++;
    // kichik optimization
    else break;
}

console.log(result);

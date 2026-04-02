// ushbu masala modulo operatori bilan yechiladi
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const answers = lines[1].trim();
let a = 0;
let b = 0;
let c = 0;

const patternA = 'ABC';
const patternB = 'BABC';
const patternC = 'CCAABB';

for (let i = 0; i < answers.length; i++) {
    const char = answers[i];

    if (char === patternA[i % patternA.length]) a++;
    if (char === patternB[i % patternB.length]) b++;
    if (char === patternC[i % patternC.length]) c++;
}

const max = Math.max(a, b, c);
const guessers = [];

console.log(max);
if (max === a) guessers.push('Azizbek');
if (max === b) guessers.push('Davlatbek');
if (max === c) guessers.push('Shohruh');
guessers.sort();
console.log(guessers.join('\n'));

const letter = require('fs').readFileSync(0, 'utf8').trim();
console.log(
    { s: 5, i: 8, n: 7, u: 2, k: 3, o: 9, t: 4, a: 0, g: 6, e: 1 }[letter]
);

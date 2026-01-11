const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');
console.log(n * n);

// Math.pow(n, 2)
// n ** 2

/*
const kvadrat = n => { 
    // L shaklidagi bloklar bilan qoplashga o'xshaydi

    let result = 0;
    for (let i = 1; i <= 2 * n - 1; i += 2) {
        result += i;
    }
    return result;
}
*/

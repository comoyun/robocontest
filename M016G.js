const fs = require('fs');
const n = BigInt(fs.readFileSync(0, 'utf8').trim());

console.log((((n + 1n) * (n + 2n)) / 2n).toString());

/*

Naqsh: 
3 0 0  -> 1

2 0 1  -> 1 
2 1 0  -> 2

1 0 2  -> 1
1 2 0  -> 2
1 1 1  -> 3

0 2 1  -> 1
0 1 2  -> 2
0 0 3  -> 3
0 3 0  -> 4
*/

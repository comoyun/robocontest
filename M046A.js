const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8').trim();

// bittasi k ta olsa (1 ≤ k ≤ n-1), ikkinchisi n-k oladi 
// jami n-1 ta usulda bo'lish mumkin
console.log(n - 1);

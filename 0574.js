const fs = require('fs');
const [n, m] = fs.readFileSync(0, 'utf8').split('\n')[0].split(' ');

// are you fucking kidding me
console.log(n * m)

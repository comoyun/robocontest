const fs = require('fs');
const [jarima, tugatganDaqiqa] = fs.readFileSync(0, 'utf8').split(' ').map(Number);

console.log(jarima * 5 + tugatganDaqiqa - 1);

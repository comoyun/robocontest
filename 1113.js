const fs = require('fs');
const [n, k] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

const converted = [];
let temp = n;

while (temp) {
    converted.push(temp % k);
    temp = Math.floor(temp / k);
}

console.log(converted.reduce((acc, curr) => acc + curr, 0));

/*

console.log(n.toString(k).split('').map(Number).reduce((acc, curr) => acc + curr, 0))

*/

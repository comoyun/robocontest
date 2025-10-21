const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

let result;

if (a > b) result = '>';
else if (a < b) result = '<';
else result = '=';

console.log(result);

/*

yoki ternary operatorlari bilan:
console.log(a > b ? '>' : a < b ? '<' : '=');

*/

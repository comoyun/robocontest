const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

const kelvin = n + 273.15;
const fahrenheit = n * 1.8 + 32;

console.log(kelvin);
console.log(fahrenheit);

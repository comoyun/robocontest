const fs = require('fs');
const name = fs.readFileSync(0, 'utf8').trim();

// slice(start, end), agar end berilmasa jimlik holatida oxirigacha deb qabul qiladi
for (let i = 0; i < name.length; i++) console.log(name.slice(i));

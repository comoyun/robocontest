const fs = require('fs');
const ball = +fs.readFileSync(0, 'utf8');
const mult = Math.ceil(ball / 5) * 5;
const diff = mult - ball;

if (ball < 38) console.log(ball);
else if (diff < 3) console.log(mult);
else console.log(ball);

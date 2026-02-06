// readFileStream bilan MLE beradi
const readline = require('readline');

let count = -1;

const rl = readline.createInterface({
    input: process.stdin,
});

rl.on('line', () => count++);
rl.on('close', () => console.log(count));

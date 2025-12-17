const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const commands = lines[1];
let left = 0;
let right = 0;

for (const command of commands) {
    if (command === 'L') left++;
    else right++;
}

console.log(left + right + 1);

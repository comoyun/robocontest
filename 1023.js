const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const commands = lines[1];

let left = 0;
let right = 0;

for (const command of commands) {
    if (command === 'L') left++;
    else right++;
}

// left va right oralig'idagi butun sonlarning soni (0ni ham hisobga olib)
console.log(left + right + 1);

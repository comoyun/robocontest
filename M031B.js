const fs = require('fs');
const skills = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
let total = skills.reduce((prev, curr) => prev + curr, 0);

if (total & 1) {
    console.log('No');
    process.exit(0);
}

const backtrack = (start = 0, sum = 0) => {
    if (sum === total / 2) {
        console.log('Yes');
        process.exit(0);
    }

    if (sum > total / 2) return;

    for (let i = start; i < skills.length; i++)
        backtrack(i + 1, sum + skills[i]);
};

backtrack();

console.log('No');

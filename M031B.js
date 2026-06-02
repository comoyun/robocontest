const fs = require('fs');
const skills = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
let total = skills.reduce((prev, curr) => prev + curr, 0);

for (let i = 0; i < 4; i++) {
    for (let j = i + 1; j < 5; j++) {
        for (let k = j + 1; k < 6; k++) {
            if (skills[i] + skills[j] + skills[k] === total / 2) {
                console.log('Yes');
                process.exit(0);
            }
        }
    }
}

console.log('No');

/*

Backtracking usuli bilan yechimni universal qilish mumkin (N ta qatnashuvchi uchun).

const fs = require('fs');
const skills = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);
let total = skills.reduce((prev, curr) => prev + curr, 0);

if (total & 1) {
    console.log('No');
    process.exit(0);
}

const backtrack = (i, sum, count) => {
    if (i >= skills.length) return;
    if (count === 3) { // yoki N / 2
        if (sum === total / 2) {
            console.log('Yes');
            process.exit(0);
        }
        return;
    }
    backtrack(i + 1, sum, count);
    backtrack(i + 1, sum + skills[i], count + 1);
};

backtrack(0, 0, 0);

console.log('No');
*/

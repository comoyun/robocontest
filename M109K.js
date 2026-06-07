const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 1; i < lines.length; i++) {
    const [fakeAge, minimumAgeRequirement] = lines[i].split(' ').map(Number);

    const age = fakeAge / 2;

    if (age >= minimumAgeRequirement) console.log('Yes');
    else console.log('No');
}

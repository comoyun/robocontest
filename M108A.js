const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const ages = lines[1].trim().split(' ').map(Number);

const groups = [0, 0, 0, 0];
const getGroup = age => {
    if (age < 19) return 0;
    else if (age < 36) return 1;
    else if (age < 61) return 2;
    return 3;
};

for (const age of ages) groups[getGroup(age)]++;

console.log(groups.join(' '));

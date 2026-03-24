const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const ages = lines[1].trim().split(' ').map(Number);

const groups = [0, 0, 0, 0];

// yoshni guruh indeksiga ajratadi
// keyin sanash oson bo'ladi
const getGroup = age => {
    if (age < 19) return 0;
    if (age < 36) return 1;
    if (age < 61) return 2;
    return 3;
};

// chastotasini hisoblaymiz
for (const age of ages) groups[getGroup(age)]++;

// massiv elementlarini orasiga bo'shliq
// qo'ygan holda ekranga chiqaradi
console.log(groups.join(' '));

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const [n, k] = lines[0].split(' ').map(Number);
const nums = lines[1].split(' ').map(Number);

nums.sort((a, b) => {
    // dastlab qoldig'iga qarab saralaymiz
    // kam qoldiqli element oldin joylashtiriladi
    const da = a % k;
    const db = b % k;

    // agar qoldiqlar teng bo'lsa
    // a va bni katta kichikligiga qarab
    // saralaymiz
    if (da === db) return a - b;
    return db - da;
});

console.log(nums.join(' '));

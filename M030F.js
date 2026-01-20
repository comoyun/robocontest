const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');

const obj = {
    A: 0,
    B: 0,
    C: 0,
};

const nums = lines[0].split(' ').map(Number);
const letters = lines[1].split('');

nums.sort((a, b) => a - b);

obj.A = nums[0];
obj.B = nums[1];
obj.C = nums[2];

console.log(letters.map(letter => obj[letter]).join(' '));

/*

matematiklar usuli: 


const [a, b, c] = lines[0].split(' ').map(Number);
const total = a + b + c;
const max = Math.max(a, b, c);
const min = Math.min(a, b, c);
const mid = total - max - min;

const result = [];
for (const letter of letters) {
    if (letter === 'A') result.push(min);
    else if (letter === 'C') result.push(max);
    else result.push(mid);
}

console.log(result.join(' '))
*/

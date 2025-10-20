const fs = require('fs');
const content = fs.readFileSync(0, 'utf8').trim().split('\n');

const salaries = content[1].split(' ').map(Number);

let sum = 0;
let max = -Infinity;
let min = Infinity;

for (const salary of salaries) {
    sum += salary;
    max = Math.max(max, salary);
    min = Math.min(min, salary);
}

console.log((sum - max - min) / (salaries.length - 2));

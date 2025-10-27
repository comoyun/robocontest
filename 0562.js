const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [m, n] = lines[0].split(' ').map(Number);
const stones = lines[1].split(' ').map(Number);

/* 

toshlarni kamayish tartibida sortirovka qilsak kamida nechta bola
tosh terishini ey yo'ge olib kelishini topamiz. basic greedy problem ;)

*/

stones.sort((a, b) => b - a);

let count = 0;
let result = -1;

for (let i = 0; i < n; i++) {
    count += stones[i];
    if (count >= m) {
        result = i + 1;
        break;
    }
}

console.log(result);

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const nums = lines[1].trim().split(' ').map(Number);
let result = 0;

// eng kop uchragan son eng kamida nechta chontak kerakligini korsatadi
// chunki ikki yoki undan kop marta uchragan sonlar bitta chontakda bola olmaydi
const map = {};

for (const num of nums) {
    map[num] ??= 0;
    map[num]++;
}

for (const key in map) result = Math.max(result, map[key]);

console.log(result)

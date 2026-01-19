/*
   La'nati robocontest yechimimni qabul qilmadi.
   Lekin xuddi shu kodni CPP-ga o'girib tashlasam o'tdi
*/

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const doors = [];
let result = 0;

for (let i = 1; i < lines.length; i++) doors.push(+lines[i]);

const n = doors.length;
const adj = Array.from({ length: n + 1 }, () => []);

for (let i = 0; i < n; i++) {
    const door = doors[i];
    const u = i + 1;
    adj[door].push(u);
    adj[u].push(door);
}

const seen = new Array(n + 1).fill(0);

for (let i = 1; i <= n; i++) {
    if (seen[i]) continue;
    result++;

    const stack = [i];
    seen[i] = 1;

    while (stack.length) {
        const curr = stack.pop();
        const list = adj[curr];

        for (let j = 0; j < list.length; j++) {
            const nei = list[j];
            if (!seen[nei]) {
                seen[nei] = 1;
                stack.push(nei);
            }
        }
    }
}

console.log(result);

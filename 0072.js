const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [ax, ay] = lines[0].split(' ').map(Number);
const [bx, by] = lines[1].split(' ').map(Number);
const [cx, cy] = lines[2].split(' ').map(Number);

const a = Math.sqrt(Math.pow(ax - bx, 2) + Math.pow(ay - by, 2));
const b = Math.sqrt(Math.pow(bx - cx, 2) + Math.pow(by - cy, 2));
const c = Math.sqrt(Math.pow(cx - ax, 2) + Math.pow(cy - ay, 2));

if (a + b > c && c + b > a && a + c > b) console.log('uchburchak');
else console.log('uchburchak emas');

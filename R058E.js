const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [hour, minute] = lines[0].split(':').map(Number);
const skip = Number(lines[1]);

const totalMinutes = hour * 60 + minute + skip;

const newHour = Math.floor(totalMinutes / 60) % 24;
const newMinute = totalMinutes % 60;

console.log(
    `${String(newHour).padStart(2, '0')}:${String(newMinute).padStart(2, '0')}`
);

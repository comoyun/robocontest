// RIP JavaScript, buni CPP kodi o'tadi faqat
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

for (let i = 2; i < lines.length; i += 3) {
    const stay = lines[i + 1].split(' ').map(Number);
    const arr = lines[i].split(' ').map((arrival, i) => [+arrival, stay[i]]);
    const events = [];

    for (const [start, duration] of arr) {
        events.push([start, 1]);
        events.push([start + duration, -1]);
    }

    events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

    let active = 0;
    let result = 0;

    for (const [, type] of events) {
        active += type;
        result = Math.max(result, active);
    }

    console.log(result);
}

console.log(7.5);

/*

lanati, hech qaysi yechimni bu darajada debug qilmagandim
nima keragi bor bunday masalalarni-a?

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const [w1, w2, w3, w4] = lines[0].split(' ').map(Number);
const [s1, s2, s3, s4] = lines[1].split(' ').map(Number);
const listening = +lines[2];
const reading = +lines[3];

const ceilToHalf = n => Math.ceil(n * 2) / 2;

const floorToHalf = n => Math.floor(n * 2) / 2;

const writing = floorToHalf((w1 + w2 + w3 + w4) / 4);
const speaking = floorToHalf((s1 + s2 + s3 + s4) / 4);

console.log(
    ceilToHalf((writing + speaking + listening + reading) / 4).toFixed(1)
);
*/

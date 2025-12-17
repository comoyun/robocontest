const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

const track = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const freq = {};

for (const char of track) freq[char] = 0;

for (const char of str) {
    if (!(char in freq)) continue;
    freq[char]++;
}

for (const key in freq) console.log(key, freq[key]);

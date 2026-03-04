const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const [_, k] = lines[0].split(' ').map(Number);
const str = lines[1].trim();

const map = {};
let left = 0;
let result = 0;

for (let right = 0; right < str.length; right++) {
    const char = str[right];

    map[char] ??= 0;
    map[char]++;

    while (map[char] > k) map[str[left++]]--;
    result = Math.max(result, right - left + 1);
}

console.log(result);

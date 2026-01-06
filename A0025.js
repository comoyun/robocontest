const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const people = lines[1].split(' ').map(Number);

people.sort((a, b) => a - b);

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (arr[mid] > target) right = mid - 1;
        else left = mid + 1;
    }

    return left;
};

for (let i = 3; i < lines.length; i++)
    console.log(binarySearch(people, +lines[i]));

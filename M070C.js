// TODO: keyinroq yechaman

/*

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const [n, m] = lines[0].split(' ').map(Number);
const grid = [];
let result = 0;

for (let i = 1; i <= n; i++) {
    const row = [];
    let streak = 0;

    for (const ch of lines[i]) {
        if (ch === '.') streak++;
        else streak = 0;

        row.push(streak);
    }

    grid.push(row);
}

for (let row = 0; row < n; row++) {
    for (let col = 0; col < m; col++) {
        if (grid[row][col] === 0) continue;

        const stack = [[row, col, 1, 1, false]];

        while (stack.length) {
            const [r, c, len, maxLen, falling] = stack.pop();

            if (grid[r][c] < len) continue;

            if (falling && c === col) {
                const radius = maxLen >> 1;
                const area = 1 + 2 * radius * (radius + 1);
                result = Math.max(result, area);
                break;
            }

            if (r === 0) continue;

            if (falling) {
                if (c - 1 >= 0)
                    stack.push([r - 1, c - 1, len - 2, maxLen, true]);
            } else {
                if (c - 1 >= 0)
                    stack.push([r - 1, c - 1, len - 2, maxLen, true]);
                if (c + 1 < m)
                    stack.push([r - 1, c + 1, len + 2, len + 2, false]);
            }
        }
    }
}

console.log(result);
*/

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

const turn = +lines[0];

const chess = [];
for (let i = 1; i < lines.length; i++) chess.push(lines[i].split(''));

const letters = 'ABCDEFGH'.split('');
const digits = '87654321'.split('');

const players = {
    K: {
        moves: [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ],
        limited: true,
    },
    Q: {
        moves: [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
            [0, 1],
            [1, -1],
            [1, 0],
            [1, 1],
        ],
        limited: false,
    },
    B: {
        moves: [
            [-1, -1],
            [-1, 1],
            [1, -1],
            [1, 1],
        ],
        limited: false,
    },
    N: {
        moves: [
            [-2, -1],
            [-2, 1],
            [-1, -2],
            [-1, 2],
            [1, -2],
            [1, 2],
            [2, -1],
            [2, 1],
        ],
        limited: true,
    },
    R: {
        moves: [
            [-1, 0],
            [1, 0],
            [0, -1],
            [0, 1],
        ],
        limited: false,
    },
    P: {
        moves: [
            [-1, 0],
            [-1, -1],
            [-1, 1],
        ],
        limited: true,
    },
};

const inbounds = (r, c) => r >= 0 && r < 8 && c >= 0 && c < 8;
const isWhite = ch => ch !== '.' && ch === ch.toUpperCase();
const isBlack = ch => ch !== '.' && ch === ch.toLowerCase();

const clone = b => b.map(row => row.slice());

/* keyinroq yozaman */

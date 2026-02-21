const fs = require('fs');
const n = +fs.readFileSync(0, 'utf8');

const heart = [
    ' @@@   @@@ ',
    '@   @ @   @',
    '@    @    @',
    '@         @',
    ' @       @ ', // darvoqe, men romantik munosabatlarga ochiqman
    '  @     @  ',
    '   @   @   ',
    '    @ @    ',
    '     @     ',
];

for (const line of heart) console.log(Array(n).fill(line).join(' '));

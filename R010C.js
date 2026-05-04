const fs = require('fs');
const [h, m] = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

const numbers = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'quarter',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
    'twenty',
    'twenty one',
    'twenty two',
    'twenty three',
    'twenty four',
    'twenty five',
    'twenty six',
    'twenty seven',
    'twenty eight',
    'twenty nine',
];

if (m < 30) {
    if (m === 0) console.log(numbers[h - 1], "o' clock");
    else if (m !== 15)
        console.log(
            numbers[m - 1],
            m === 1 ? 'minute' : 'minutes',
            'past',
            numbers[h - 1]
        );
    else console.log('quarter past', numbers[h - 1]);
} else if (m === 30) {
    console.log('half past', numbers[h - 1]);
} else if (60 - m !== 15) {
    console.log(
        numbers[59 - m],
        60 - m === 1 ? 'minute' : 'minutes',
        'to',
        numbers[h]
    );
} else {
    console.log('quarter to', numbers[h]);
}

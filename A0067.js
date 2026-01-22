const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

const isHex = str.startsWith('0x') || str.startsWith('-0x');
const isOctal = str.startsWith('0') || str.startsWith('-0');
const isNegative = str.startsWith('-');

const hex = '0123456789abcdef'.split('');
let result = 0n;

if (isHex) {
    let pow = 1n;
    for (let i = str.length - 1; i >= (isNegative ? 3 : 2); i--) {
        const char = str[i];
        result += pow * BigInt(hex.indexOf(char));
        pow *= 16n;
    }

    console.log((isNegative ? '-' : '') + result.toString());
} else if (isOctal) {
    let pow = 1n;
    for (let i = str.length - 1; i >= (isNegative ? 2 : 1); i--) {
        const char = str[i];
        result += pow * BigInt(hex.indexOf(char));
        pow *= 8n;
    }

    console.log((isNegative ? '-' : '') + result.toString());
} else {
    console.log(str);
}

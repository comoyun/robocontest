const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
});

const offset = 97;
const result = new Array(20).fill(0);

const print = found => {
    console.log(
        found ? '!' : '?',
        result
            .map(code => String.fromCharCode(offset + code))
            .join('')
            .toUpperCase()
    );
};

print(false);

rl.on('line', line => {
    const answers = line.trim().split('').map(Number);
    let found = true;

    for (let i = 0; i < answers.length; i++) {
        if (!answers[i]) {
            result[i]++;
            found = false;
        }
    }

    print(found);
});

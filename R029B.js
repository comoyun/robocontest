const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const MOD = 1234567;

for (let i = 2; i < lines.length; i += 2) {
    console.log(
        lines[i]
            .split(' ')
            .map(Number)
            .reduce((p, c) => (p * c) % MOD, 1)
    );
}

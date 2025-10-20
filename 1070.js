const fs = require('fs');
const gnomes = fs.readFileSync(0, 'utf8').trim().split('\n').map(Number);

/* fuck oppogoy */
for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
        for (let k = j + 1; k < 9; k++) {
            for (let l = k + 1; l < 9; l++) {
                for (let m = l + 1; m < 9; m++) {
                    for (let n = m + 1; n < 9; n++) {
                        for (let o = n + 1; o < 9; o++) {
                            const sum =
                                gnomes[i] +
                                gnomes[j] +
                                gnomes[k] +
                                gnomes[l] +
                                gnomes[m] +
                                gnomes[n] +
                                gnomes[o];
                            if (sum === 100) {
                                console.log(
                                    [
                                        gnomes[i],
                                        gnomes[j],
                                        gnomes[k],
                                        gnomes[l],
                                        gnomes[m],
                                        gnomes[n],
                                        gnomes[o],
                                    ].join('\n')
                                );
                                return;
                            }
                        }
                    }
                }
            }
        }
    }
}

// bitta test caseni tekshirmayapti)
// bundan avvalgi yozgan yechimimda xato bor edi, 
// ya'ni "BAC" kabi testlarga YES qaytaradi.
// robocontestda ACC bo'ldi ketdi lekin) 

// mayli to'g'ri solutionni yozib qo'yaveray)
const fs = require('fs');
const str = fs.readFileSync(0, 'utf8').trim();

const map = { A: 0, B: 0, C: 0 };

for (const char of str) {
    if (char === 'C') {
        if (map.B === 0) {
            console.log('NO');
            process.exit(0);
        }
        map.B--;
    }

    if (char === 'B') {
        if (map.A === 0) {
            console.log('NO');
            process.exit(0);
        }
        map.A--;
    }

    map[char]++;
}

console.log(map.A + map.B === 0 ? 'YES' : 'NO');

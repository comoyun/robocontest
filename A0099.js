const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const alphabet = Array.from({ length: 26 }, () => []);

for (let i = 1; i < lines.length; i++) {
    const password = lines[i];
    const seen = new Array(26).fill(false);

    for (let j = 0; j < password.length; j++) {
        const letter = password.charCodeAt(j) - 97;

        if (!seen[letter]) {
            seen[letter] = true;
            alphabet[letter].push(i);
        }
    }
}

let result = 0;
const visited = Array(26).fill(false);
const dfs = letter => {
    for (const idx of alphabet[letter]) {
        const password = lines[idx];

        for (let i = 0; i < password.length; i++) {
            const next = password.charCodeAt(i) - 97;
            if (visited[next]) continue;
            visited[next] = true;
            dfs(next);
        }
    }
};

for (let letter = 0; letter < 26; letter++) {
    if (visited[letter] || !alphabet[letter].length) continue;
    visited[letter] = true;
    result++;
    dfs(letter);
}

console.log(result);

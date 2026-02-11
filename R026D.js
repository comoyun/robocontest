const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const [n, m] = lines[0].split(' ').map(Number);

const adjList = Array.from({ length: n + 1 }, () => []);
for (let i = 1; i <= m; i++) {
    const [a, b] = lines[i].split(' ').map(Number);
    adjList[a].push(b);
    adjList[b].push(a);
}

let result = 0;
const visited = Array(n + 1).fill(false);

const dfs = (node, parent) => {
    visited[node] = true;
    let size = 1;
    for (const nei of adjList[node]) {
        if (nei === parent) continue;
        const childSize = dfs(nei, node);
        if (childSize % 2 === 0) result++;
        size += childSize;
    }
    return size;
};

for (let i = 1; i <= n; i++) if (!visited[i]) dfs(i, 0);
console.log(result);

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');
const start = lines.map(l => l.split(' ').map(Number));

const flatten = s => s.flat();
const target = 15;
const orig = flatten(start);
const queue = [orig];
const seen = new Set([orig.join(',')]);
let minCost = Infinity;
let steps = 0;

const isMagic = s =>
  s[0]+s[1]+s[2]===target &&
  s[3]+s[4]+s[5]===target &&
  s[6]+s[7]+s[8]===target &&
  s[0]+s[3]+s[6]===target &&
  s[1]+s[4]+s[7]===target &&
  s[2]+s[5]+s[8]===target &&
  s[0]+s[4]+s[8]===target &&
  s[2]+s[4]+s[6]===target;

while (queue.length && steps < 20000) { // hard cutoff
  const sq = queue.shift();
  steps++;

  if (isMagic(sq)) {
    const cost = sq.reduce((a, v, i) => a + Math.abs(v - orig[i]), 0);
    minCost = Math.min(minCost, cost);
    continue;
  }

  for (let i = 0; i < 9; i++) {
    for (let j = i + 1; j < 9; j++) {
      const next = [...sq];
      [next[i], next[j]] = [next[j], next[i]];
      const key = next.join(',');
      if (!seen.has(key)) {
        seen.add(key);
        queue.push(next);
      }
    }
  }
}

console.log(minCost === Infinity ? 'Not found' : minCost);

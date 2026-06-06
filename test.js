const fs = require('fs');

const input = fs.readFileSync(0, 'utf8').trim().split(/\s+/);
let idx = 0;
const T = Number(input[idx++]);

const LIMIT = 10n ** 18n;

const len = (x) => x.toString().length;

const q = [];
const seen = new Set();

for (let i = 0n; i <= 9n; i++) {
  q.push(i);
  seen.add(i.toString());
}

for (let i = 0; i < q.length; i++) {
  const x = q[i];
  for (let k = 1; k <= 18; k++) {
    const y = x * BigInt(k);
    if (y > LIMIT) continue;
    if (len(y) !== k) continue;
    const key = y.toString();
    if (!seen.has(key)) {
      seen.add(key);
      q.push(y);
    }
  }
}

q.sort((a, b) => (a < b ? -1 : 1));

const arr = q;

const lowerBound = (x) => {
  let l = 0, r = arr.length;
  while (l < r) {
    let m = (l + r) >> 1;
    if (arr[m] < x) l = m + 1;
    else r = m;
  }
  return l;
};

const upperBound = (x) => {
  let l = 0, r = arr.length;
  while (l < r) {
    let m = (l + r) >> 1;
    if (arr[m] <= x) l = m + 1;
    else r = m;
  }
  return l;
};

let out = [];

for (let t = 0; t < T; t++) {
  const L = BigInt(input[idx++]);
  const R = BigInt(input[idx++]);
  out.push((upperBound(R) - lowerBound(L)).toString());
}

console.log(out.join('\n'));

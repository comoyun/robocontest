const fs = require('fs');
const freqs = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

class Heap {
    constructor(compareFn = (a, b) => a - b) {
        this.heap = [];
        this.compare = compareFn;
    }

    size() {
        return this.heap.length;
    }

    peek() {
        return this.heap[0];
    }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp();
    }

    extract() {
        if (this.size() === 0) return null;
        if (this.size() === 1) return this.heap.pop();

        const root = this.heap[0];
        this.heap[0] = this.heap.pop();
        this._bubbleDown();
        return root;
    }

    _bubbleUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            let p = (i - 1) >> 1;
            if (this.compare(this.heap[i], this.heap[p]) < 0) {
                [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
                i = p;
            } else break;
        }
    }

    _bubbleDown() {
        let i = 0;
        const n = this.heap.length;

        while (true) {
            let l = 2 * i + 1;
            let r = 2 * i + 2;
            let best = i;

            if (l < n && this.compare(this.heap[l], this.heap[best]) < 0) {
                best = l;
            }
            if (r < n && this.compare(this.heap[r], this.heap[best]) < 0) {
                best = r;
            }

            if (best === i) break;
            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            i = best;
        }
    }
}

const heap = new Heap((a, b) => b[0] - a[0]);

const getChar = i => String.fromCharCode(97 + i);

let total = 0;
for (let i = 0; i < freqs.length; i++) {
    if (freqs[i]) {
        heap.insert([freqs[i], getChar(i)]);
        total += freqs[i];
    }
}

const result = [];

while (heap.size() >= 2) {
    let [f1, c1] = heap.extract();
    let [f2, c2] = heap.extract();

    result.push(c1);
    result.push(c2);

    if (--f1 > 0) heap.insert([f1, c1]);
    if (--f2 > 0) heap.insert([f2, c2]);
}

if (heap.size() === 1) {
    let [f, c] = heap.extract();
    while (f-- > 0) result.push(c);
}

console.log(result.join(''));

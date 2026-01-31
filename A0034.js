// 3-testdan negadir o'tmayapti
// lekin cpp-ga o'girib tashlasangiz o'tadi
// lanati robocontest
const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').trim().split('\n');

class Heap {
    constructor(isMin = true) {
        this.isMin = isMin;
        this.heap = [];
    }

    compare(a, b) {
        return this.isMin ? a < b : a > b;
    }

    push(x) {
        this.heap.push(x);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length < 2) return this.heap.pop();
        const top = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return top;
    }

    heapifyUp() {
        let i = this.heap.length - 1;
        while (i > 0) {
            const p = (i - 1) >> 1;
            if (!this.compare(this.heap[i], this.heap[p])) break;
            [this.heap[i], this.heap[p]] = [this.heap[p], this.heap[i]];
            i = p;
        }
    }

    heapifyDown() {
        let i = 0;
        const n = this.heap.length;
        while (true) {
            const left = 2 * i + 1;
            const right = 2 * i + 2;
            let best = i;

            if (left < n && this.compare(this.heap[left], this.heap[best]))
                best = left;
            if (right < n && this.compare(this.heap[right], this.heap[best]))
                best = right;
            if (best === i) break;

            [this.heap[i], this.heap[best]] = [this.heap[best], this.heap[i]];
            i = best;
        }
    }
}

for (let i = 1; i < lines.length; i += 2) {
    const [n, m] = lines[i].split(' ').map(Number);
    const nums = lines[i + 1].split(' ').map(Number);
    const count = n - m;

    const minHeap = new Heap(false);
    const maxHeap = new Heap(true);

    for (const num of nums) {
        minHeap.push(num);
        maxHeap.push(num);

        if (minHeap.heap.length > count) minHeap.pop();
        if (maxHeap.heap.length > count) maxHeap.pop();
    }

    let maxSum = maxHeap.heap.reduce((prev, curr) => prev + curr, 0);
    let minSum = minHeap.heap.reduce((prev, curr) => prev + curr, 0);
    console.log(maxSum - minSum);
}

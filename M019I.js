const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const scores = lines[1].split(' ').map(Number);

scores.sort((a, b) => b - a);
console.log(scores.slice(0, 3).join(' '));
/*

Heap eng efficient yechim:

class MinHeap {
    constructor() {
        this.heap = [];
    }

    heapifyUp() {
        let idx = this.heap.length - 1;
        let parent = Math.ceil(idx / 2) - 1;
        while (idx > 0 && this.heap[idx] < this.heap[parent]) {
            [this.heap[idx], this.heap[parent]] = [
                this.heap[parent],
                this.heap[idx],
            ];
            idx = parent;
            parent = Math.ceil(idx / 2) - 1;
        }
    }

    heapifyDown() {
        let curr = 0;
        let left = curr * 2 + 1;
        let right = curr * 2 + 2;

        while (left < this.heap.length) {
            let smallest = curr;
            if (this.heap[smallest] > this.heap[left]) smallest = left;
            if (
                right < this.heap.length &&
                this.heap[right] < this.heap[smallest]
            )
                smallest = right;
            if (smallest === curr) break;
            [this.heap[smallest], this.heap[curr]] = [
                this.heap[curr],
                this.heap[smallest],
            ];
            curr = smallest;
            left = curr * 2 + 1;
            right = curr * 2 + 2;
        }
    }

    push(value) {
        this.heap.push(value);
        this.heapifyUp();
    }

    pop() {
        if (this.heap.length === 1) return this.heap.pop();
        const removed = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.heapifyDown();
        return removed;
    }
}

const winners = new MinHeap();
for (const score of scores) {
    winners.push(score);
    if (winners.heap.length > 3) winners.pop();
}

console.log(winners.heap.sort((a, b) => b - a).join(' '));
*/


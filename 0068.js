const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const k = Number(lines[2]);

const nums = lines[1].split(' ').map(Number);

nums.sort((a, b) => a - b);

console.log(nums[k - 1]);

/*

lekin bu masala heap yordamida yechilgani maqulroq
chunki eng kichik n-chi sonni olish uchun har gal
butun massivni saralash samarali emas.

class Heap {
    constructor(comparator) {
        this.heap = [];
        this.compare = (a, b) => comparator(a, b) < 0;
    }

    push(num) {
        this.heap.push(num);
        this._heapifyUp(this.heap.length - 1);
    }

    _heapifyUp(idx) {
        let curr = idx;
        let parent = Math.floor((curr - 1) / 2);

        while (curr > 0 && this.compare(this.heap[curr], this.heap[parent])) {
            [this.heap[curr], this.heap[parent]] =
                [this.heap[parent], this.heap[curr]];

            curr = parent;
            parent = Math.floor((curr - 1) / 2);
        }
    }

    _heapifyDown(idx) {
        let curr = idx;

        while (true) {
            let left = curr * 2 + 1;
            let right = curr * 2 + 2;
            let chosen = curr;

            if (left < this.heap.length && this.compare(this.heap[left], this.heap[chosen]))
                chosen = left;

            if (right < this.heap.length && this.compare(this.heap[right], this.heap[chosen]))
                chosen = right;

            if (chosen === curr) break;

            [this.heap[curr], this.heap[chosen]] =
                [this.heap[chosen], this.heap[curr]];

            curr = chosen;
        }
    }

    pop() {
        if (this.heap.length <= 1) return this.heap.pop();

        const popped = this.heap[0];
        this.heap[0] = this.heap.pop();  

        this._heapifyDown(0);
        return popped;
    }
}

const fs = require('fs');
const lines = fs.readFileSync(0, 'utf8').split('\n');
const nums = lines[1].split(' ').map(Number);
const k = Number(lines[2]);
const heap = new Heap((a, b) => b - a);

for (const num of nums) {
    heap.push(num);
    if (heap.heap.length > k) heap.pop();
}

console.log(heap.pop());
*/

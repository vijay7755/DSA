class Node {
    constructor(value, priority) {
        this.val = value;
        this.priority = priority;
    }
}


// minBinary Heap
class PriorityQueue {
    constructor() {
        this.heap = []
    }

    enqueue(val, priority) {
        const node = new Node(val, priority);
        
        this.heap.push(node)
        this.bubbleUp()
    }

        bubbleUp() {
        let index = this.heap.length - 1
        const element = this.heap[index]
        
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.heap[parentIndex]
            if(element.priority >= parent.priority) break;
            
            this.heap[parentIndex] = element
            this.heap[index] = parent
            
            index = parentIndex
        }
    }

    dequeue() {
        const min = this.heap[0];
        const end = this.heap.pop();

        if(this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return min;
    }

    sinkDown() {
        let idx = 0;
        const length = this.heap.length
        const element = this.heap[0]

        while(true) {
            let leftChildIndex = (2 * idx) + 1;
            let rightChildIndex = (2 * idx) + 2;
            let leftChild, rightChild;
            let swap = null;

            if(leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex]
                if(leftChild.priority < element.priority) {
                    swap = leftChildIndex
                }
            }

            if(rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex]
                if(
                    (swap === null && rightChild.priority < element.priority) ||
                    (swap !== null && rightChild.priority < leftChild.priority)
                  ) {
                    swap = rightChildIndex
                }
            }

            if(swap === null) break;
            this.heap[idx] = this.heap[swap];
            this.heap[swap] = element;
            idx = swap;
        }
    }
}


const ER = new PriorityQueue()
ER.enqueue("common cold", 4)
ER.enqueue("gunshot wound", 1)
ER.enqueue("bone fracture", 2)
ER.enqueue("burn wound", 3)


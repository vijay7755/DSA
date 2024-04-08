class MaxBibnaryHeap {

    constructor() {
        this.heap = [41, 39, 33, 18, 27, 12]
    }

    insert(val) {
        this.heap.push(val)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1
        const element = this.heap[index]
        
        while(index > 0) {
            let parentIndex = Math.floor((index-1)/2)
            let parent = this.heap[parentIndex]
            if(element <= parent) break;
            
            this.heap[parentIndex] = element
            this.heap[index] = parent
            
            index = parentIndex
        }
    }

    extractMax() {
        const max = this.heap[0];
        const end = this.heap.pop();

        if(this.heap.length > 0) {
            this.heap[0] = end;
            this.sinkDown();
        }
        return max;
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
                if(leftChild > element) {
                    swap = leftChildIndex
                }
            }

            if(rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex]
                if(
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
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

const maxHeap = new MaxBibnaryHeap();
maxHeap.insert(55);

// [55, 41, 39, 33, 18, 27, 12]
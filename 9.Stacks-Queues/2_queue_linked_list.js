/* Queue Implementation in Singly Linked List */
// FIFO
/* Big O Notation */
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n)
// Accessing - O(n)

class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(val) {
        var newNode = new Node(val);
        if(!this.first) {
            this.first = newNode;
            this.last = newNode;
        }
        else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.size += 1;  
    }

    dequeue() {
        if(!this.first) return null;

        var temp = this.first;
        if(this.first === this.last) {
            this.last = null
        }
        this.first = this.first.next;

        this.size -= 1;
        return temp.value;
    }

    
}
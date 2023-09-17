// node:
// Piece of data - val
// reference to next node - next

class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

// var first = new Node("Hi")
// first.next = new Node("there")
// first.next.next = new Node("doing")
// first.next.next = new Node("good?")


/* Singly Linked List */
// Singly linked list contains a list of items which is formed using Node connected to the next Node
// The each Node has two property such as value and the reference to the next node
// The beginning and end of the list is marked as Head and Tail respectively
/* Big O Notation */
// Insertion at the beginning / end - O(1)
// Removal at the beginning - O(1)
// Removal at the end - O(n) // REmoval require to find one node before last node. SO itration from 1 to n-1
// Searching - O(n)
// Accessing - O(n)

class SinglyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = this.head
        } else if(this.head) {
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length++
        return this
    }

    traverse() {
        let current = this.head
        while(current) {
            console.log("current: ", current)
            console.log("current val: ", current.val)

            current = current.next
        }
    }

    pop() {
        if(!this.head) return undefined

        let current = this.head
        let newTail = current

        while(current.next) {
            newTail = current
            current = current.next
            console.log("newTail: ", newTail)
            console.log("current: ", current)
        }

        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0) {
            this.head = null
            this.tail = null
        }
        return current
        
    }

    shift() {
        if(!this.head) return undefined
        let currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0) {
            this.tail = null
        }
        return currentHead
    }

    unshift(val) {
        const newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
        return this
    }

    get(index) {
        if(typeof index !== "number" || index < 0 || index >= this.length) return null
        let counter = 0
        let current = this.head
        while(counter !== index) {
            current = current.next
            counter++
        }
        return current
    }

    set(index, val) {
        const foundNode = this.get(index)
        if(foundNode) {
            foundNode.val = val
            return true
        }
        return false
    }

    insert(index, val) {
        if(index < 0 || index > this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        
        var newNode = new Node(val);
        var prev = this.get(index - 1);
        var temp = prev.next;
        prev.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if(index < 0 || index >= this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length - 1) return this.pop();
        var previousNode = this.get(index - 1);
        var removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        let node = this.head
        this.head = this.tail
        this.tail = node
        let next
        let prev = null

        for(let i=0; i<this.length; i++) {
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

let list = new SinglyLinkedList()
list.push("hello")
list.push("everyone")
list.push("how")
list.push("you")
list.push("doing?")


// Reverse linked list recursively
var reverseList = function(node, prev = null) {
	// End of the list
    if(!node) {
        return prev;
    }
	
	// Swappity swappy
    const next = node.next;
    node.next = prev;
	
	// The node will be next, the prev will be node
    return reverseList(next, node);
};
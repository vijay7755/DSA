/* Doubly Linked List */
// Same as singly linked list having list of item formed by node.
// Each node compraises of value and reference to the next node.
// The only difference here is that each node has reference to the previous node as well.

// Node has - [val, next, prev]
// Doubly linked list has - [head, tail, length]

/* Setup Node */
class Node {
    constructor(val) {
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val) {
        let newNode = new Node(val)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        this
    }

    pop() {
        if(!this.head) return undefined

        let poppedNode = this.tail
        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else { 
            this.tail = this.tail.prev
            this.tail.next = null
            poppedNode.prev = null
        }
        this.length--
        
        return poppedNode
    }

    shift() {
        if(!this.head) return undefined
        const oldHead = this.head

        if(this.length === 1) {
            this.head = null
            this.tail = null
        } else {
            this.head = oldHead.next
            this.head.prev = null
            oldHead.next = null
        }
        this.length--
        return oldHead
    }

    unShift(val) {
        let newNode = new Node(val)
        if(this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
        return this
    }
}

const list = new DoublyLinkedList()
list.push("hello")
list.push("everyone")
list.push("how")
list.push("you")
list.push("doing?")



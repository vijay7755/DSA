/* Doubly Linked List */
// Same as singly linked list having list of item formed by node.
// Each node compraises of value and reference to the next node.
// The only difference here is that each node has reference to the previous node as well.

/* Big O Notation */
// Insertion - O(1)
// Removal - O(1)
// Searching - O(n) [Technically searching is O(n/2)]
// Accessing - O(n)

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

/* Doubly Linked List */
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

  get(index) {
      if(index < 0 || index >= this.length) return null

      if(index === 0) return this.head
      if(index === this.length-1) return this.tail
      
      if(index > Math.floor(this.length/2)) {
          let counter = this.length-1
          let current = this.tail
          while(counter > index) {
              current = current.prev
              counter--
          }
          return current
      } else {
          let counter = 1
          let current = this.head
          while(counter <= index) {
              current = current.next
              counter++
          }
          return current
      }
  }

  set(val, index) {
      const updateNode = this.get(index)
      if(updateNode) {
          updateNode.val = val
          return true
      }
      return false
  }

  insert(val, index) {
      if(index < 0 || index > this.length) return false
      
      if(index === 0) return  this.unShift(val)
      if(index === this.length) return this.push(val)
      
      const newNode = new Node(val)
      const nextNode = this.get(index)
      // const prevNode = this.get(index-1) //or
      const prevNode = nextNode.prev
      newNode.prev = prevNode
      newNode.next = nextNode
      newNode.prev.next = newNode
      newNode.next.prev = newNode
      
      this.length++

      return this
  }

  remove(index) {
      if(index < 0 || index >= this.length) return false
      
      if(index === 0) return this.shift()
      if(index === this.length-1) return this.pop()

      const removedNode = this.get(index)
      const prevNode = removedNode.prev
      const nextNode = removedNode.next
      prevNode.next = nextNode
      nextNode.prev = prevNode
      removedNode.next = null
      removedNode.prev = null
      this.length--

      return removedNode  
  }
}

const list = new DoublyLinkedList()
list.push("hello")
list.push("everyone")
list.push("how")
list.push("you")
list.push("doing?")
/* Priority Queue naive approach */
// class PriorityQueue {
//     constructor() {
//         this.values = []
//     }
//     enqueue(val, priority) {
//         this.values.push({val, priority})
//         this.sort()
//     }
//     dequeue() {
//          return this.values.shift()   
//     }
//     sort() {
//         this.values.sort((a, b) => a.priority - b.priority)
//     }
// }

/* Priority Queue optimized solution */
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

class WeightedGraph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({node: vertex2, weight})
        this.adjacencyList[vertex2].push({node: vertex1, weight})
    }  

    dijkstra(start, end) {
        const nodes = new PriorityQueue()
        const distances = {}
        const previous = {}
        let smallest;
        let path = []
        
        for(let vertex in this.adjacencyList) {
            if(vertex === start) {
                distances[vertex] = 0
                nodes.enqueue(vertex, 0)
            } else {
                distances[vertex] = Infinity
                nodes.enqueue(vertex, Infinity)
            }
            previous[vertex] = null
        }
        console.log("distances: ", distances)
        console.log("nodes: ", JSON.stringify(nodes))
        console.log("previous: ", previous)
        
        // Loop - as long as there is something to visit in the priority dequeue
        while(nodes.heap.length) {
            console.log("priority queue item: ", nodes.heap[0])
            smallest = nodes.dequeue().val;
            console.log(smallest)

            if(smallest === end) {
                // Done
                // Build up path from previous list
                while(previous[smallest]) {
                    path.push(smallest)
                    smallest = previous[smallest]
                }
                break;
            }
            
            if(smallest || distances[smallest] !== Infinity) {
                for(let neighbor in this.adjacencyList[smallest]) {
                    console.log("neighbor: ", neighbor)
                    // Find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor]
                    console.log(nextNode)

                    // Caluculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight; //neighbor smallest distance
                    let nextNeighbor = nextNode.node;

                    if(candidate < distances[nextNeighbor]) {
                        // Updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        // Updating shortest path to neighbor - How to get to neighbor
                        previous[nextNeighbor] = smallest;
                        // enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate)
                    }
                }
            }
        }

        return path.concat(smallest).reverse()
        
    }
}


const g = new WeightedGraph()
g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B", 4)
g.addEdge("A","C", 2)
g.addEdge("B","E", 3)
g.addEdge("C","D", 2)
g.addEdge("C","F", 4)
g.addEdge("D","E", 3)
g.addEdge("D","F", 1)
g.addEdge("E","F", 1)


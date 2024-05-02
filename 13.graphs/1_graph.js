class Graph {
    constructor() {
        this.adjacencyList = {}
    }

    addVertex(vertex) {
        if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    removeVertex(vertex) {
        const vertexEdges = this.adjacencyList[vertex]
        vertexEdges.forEach(v => this.removeEdge(v, vertex))
        delete this.adjacencyList[vertex]
    }

    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }

    removeEdge(vertex1, vertex2) {
        // this
        // const v1Index = this.adjacencyList[vertex1].indexOf(vertex2)
        // const v2Index = this.adjacencyList[vertex2].indexOf(vertex1)
        // if(v1Index >= 0) this.adjacencyList[vertex1].splice(v1Index, 1)
        // if(v2Index >= 0) this.adjacencyList[vertex2].splice(v2Index, 1)

        // or this
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2)
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1)        
    }

    DFSRecursive(start) {
        const result = []
        const visited = {}
        const adjacencyList = this.adjacencyList;
            
        (function dfs(vertex) {
            console.log("vertex: ", vertex)
            if(!vertex) {
                return null
            }
            
            visited[vertex] = true
            result.push(vertex)
            
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]) {
                    return dfs(neighbor)
                }
            })
        })(start)

        return result
    }

    DFSIterative(start) {
        const stack = [start]
        const result = []
        const visitedVertex = {}
        
        visitedVertex[start] = true
        
        while(stack.length > 0) {
            const vertex = stack.pop()
            result.push(vertex)
            this.adjacencyList[vertex].forEach(neighbor => {
                if(!visitedVertex[neighbor]) {
                    visitedVertex[neighbor] = true
                    stack.push(neighbor)
                    } 
                })       
        }
        return result
    }

    BFS(start) {
        const queue = [start]
        const result = []
        const visitedVertex = {}

        visitedVertex[start] = true
        while(queue.length) {
            const currentVertex = queue.shift()
            result.push(currentVertex)

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visitedVertex[neighbor]) {
                    visitedVertex[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }
        return result
    }
}

const g = new Graph()
// g.addVertex("Chennai")
// g.addVertex("Banglore")
// g.addVertex("Madhura")
// g.addVertex("Ayodhya")
// g.addVertex("Kolkatta")

// g.addEdge("Chennai", "Banglore")
// g.addEdge("Chennai", "Madhura")
// g.addEdge("Chennai", "Ayodhya")
// g.addEdge("Kolkatta", "Chennai")
// g.addEdge("Banglore", "Kolkatta")
// g.addEdge("Ayodhya", "Madhura")
// g.addEdge("Kolkatta", "Madhura")


g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A","B")
g.addEdge("A","C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")


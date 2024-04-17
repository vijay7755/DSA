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
}

const g = new Graph()
g.addVertex("Chennai")
g.addVertex("Banglore")
g.addVertex("Madhura")
g.addVertex("Ayodhya")
g.addVertex("Kolkatta")

g.addEdge("Chennai", "Banglore")
g.addEdge("Chennai", "Madhura")
g.addEdge("Chennai", "Ayodhya")
g.addEdge("Kolkatta", "Chennai")
g.addEdge("Banglore", "Kolkatta")
g.addEdge("Ayodhya", "Madhura")
g.addEdge("Kolkatta", "Madhura")
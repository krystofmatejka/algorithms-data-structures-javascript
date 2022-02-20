export class UndirectedGraph {
  constructor() {
    this.edges = {}
  }

  addVertex(vertex) {
    this.edges[vertex] = {}
  }

  removeVertex(vertex) {
    for (let adjacentVertex in this.edges[vertex]) {
      this.removeEdge(adjacentVertex, vertex)
    }

    delete this.edges[vertex]
  }

  addEdge(vertex1, vertex2, weight = 0) {
    this.edges[vertex1][vertex2] = weight
    this.edges[vertex2][vertex1] = weight
  }

  removeEdge(vertex1, vertex2) {
    if (this.edges[vertex1]) {
      delete this.edges[vertex1][vertex2]
    }
    if (this.edges[vertex2]) {
      delete this.edges[vertex2][vertex1]
    }
  }
}

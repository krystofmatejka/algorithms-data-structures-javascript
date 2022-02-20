import {UndirectedGraph} from './graph.js'

describe('UndirectedGraph', () => {
  test('add and remove vertex', () => {
    const graph = new UndirectedGraph()

    graph.addVertex(1)
    graph.addVertex(2)
    graph.addEdge(1, 2, 1)
    graph.addVertex(3)
    graph.addVertex(4)
    graph.addVertex(5)
    graph.addEdge(2, 3, 8)
    graph.addEdge(3, 4, 10)
    graph.addEdge(4, 5, 100)
    graph.addEdge(1, 5, 88)

    expect(graph.edges).toEqual({
      '1': {'2': 1, '5': 88},
      '2': {'1': 1, '3': 8},
      '3': {'2': 8, '4': 10},
      '4': {'3': 10, '5': 100},
      '5': {'1': 88, '4': 100},
    })

    graph.removeVertex(1)

    expect(graph.edges).toEqual({
      '2': {'3': 8},
      '3': {'2': 8, '4': 10},
      '4': {'3': 10, '5': 100},
      '5': {'4': 100},
    })
  })
})

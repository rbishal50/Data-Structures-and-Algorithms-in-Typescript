## Breadth-First Search (DFS)

### Description

You are provided with a `Graph` class to represent a graph using an `adjacency list`. Your task is to implement a bfsSearch method within this class. The method should perform a Breadth-First Search (BFS) on the graph, starting from a specified vertex. The function should return an array representing the order in which vertices were visited during the BFS traversal.

### Signature

```typescript
class Graph {
  private adjacencyList: Map<T, Set<T>>;

  constructor();

  addVertex(vertex: T): void;
  addEdge(vertex1: T, vertex2: T): void;
  bfs(startingVertex: T): T[];
}
```

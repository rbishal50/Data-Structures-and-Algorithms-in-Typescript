## Depth-First Search (DFS)

### Description

You are provided with a `Graph` class to represent a graph using an `adjacency list`. Your task is to implement a dfsSearch method within this class. The method should perform a Depth-First Search (DFS) on the graph, starting from a specified vertex. The function should return an array representing the order in which vertices were visited during the DFS traversal.

### Signature

```typescript
class Graph {
  private adjacencyList: Map<T, Set<T>>;

  constructor();

  addVertex(vertex: T): void;
  addEdge(vertex1: T, vertex2: T): void;
  dfs(startingVertex: T): T[];
}
```

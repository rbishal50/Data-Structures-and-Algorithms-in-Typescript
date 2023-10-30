export class Graph<T> {
  private adjacencyList = new Map<T, Set<T>>();

  // Add a vertex to adjacency list
  addVertex(vertex: T) {
    if (this.adjacencyList.has(vertex)) return;
    this.adjacencyList.set(vertex, new Set());
  }

  // Add edge between 2 vertices
  addEdge(vertex1: T, vertex2: T) {
    if (this.adjacencyList.has(vertex1) && this.adjacencyList.has(vertex2)) {
      this.adjacencyList.get(vertex1)!.add(vertex2);
      this.adjacencyList.get(vertex2)!.add(vertex1);
    }
  }

  // Recursive solution
  dfsRecursive(startingVertex: T, visited: Set<T> = new Set()): Set<T> {
    // If vertex is not present return []
    if (!this.adjacencyList.has(startingVertex)) return new Set();

    // We are using memoization, so add current vertex to visited set
    visited.add(startingVertex);

    // For each neighbors of current vertex, recursively apply the dfs
    for (const vertex of this.adjacencyList.get(startingVertex)!) {
      if (!visited.has(vertex)) {
        visited = this.dfsRecursive(vertex, visited);
      }
    }

    return visited;
  }

  // Stack based solution
  dfsStack(startingVertex: T): Set<T> {
    if (!this.adjacencyList.has(startingVertex)) return new Set();

    const stack = [startingVertex];
    const result = new Set<T>();

    while (stack.length > 0) {
      const top = stack.pop()!;

      if (result.has(top)) continue;

      result.add(top);

      const neighbors = Array.from(this.adjacencyList.get(top) ?? []);

      for (let i = neighbors.length - 1; i >= 0; i--) {
        stack.push(neighbors[i]);
      }
    }

    return result;
  }
}

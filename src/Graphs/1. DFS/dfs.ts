// O(V + E) space
// O(V + E) time, where V is the total vertices and E is the total edges in the grapsh

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
  dfsRecursive(startingVertex: T): T[] {
    // If vertex is not present return []
    if (!this.adjacencyList.has(startingVertex)) return [];

    // Use a visited set to track visited vertices and a result aray to store result
    const visited: Set<T> = new Set();
    const result: T[] = [];

    // Use a recursive function to traverse the graph
    const recursiveDfs = (vertex: T) => {
      // First add to the visited set and result[]
      visited.add(vertex);
      result.push(vertex);

      // Get all neighbors of current vertex
      const neighbors = this.adjacencyList.get(vertex) ?? new Set<T>();

      // For each neighbor, apply the recursive function
      for (const neighbor of neighbors) {
        if (visited.has(neighbor)) continue;
        recursiveDfs(neighbor);
      }
    };

    recursiveDfs(startingVertex);

    return result;
  }

  // Stack based solution
  dfsStack(startingVertex: T): T[] {
    // If vertex is not present return []
    if (!this.adjacencyList.has(startingVertex)) return [];

    // A stack to keep track of vertices
    const stack = [startingVertex];
    // A set to keep track of visited vertices
    const visited = new Set<T>();
    // A result array to store the result
    const result: T[] = [];

    while (stack.length > 0) {
      const top = stack.pop()!;

      // If already visited continue
      if (visited.has(top)) continue;

      // Else add to visited and result
      visited.add(top);
      result.push(top);

      // Get the neighbors
      const neighbors = this.adjacencyList.get(top) ?? new Set<T>();

      // For each neighbor push to the stack
      // Reverse to get the dfs from left to right
      for (const neighbor of Array.from(neighbors).reverse()) {
        if (!visited.has(neighbor)) stack.push(neighbor);
      }
    }

    return result;
  }
}

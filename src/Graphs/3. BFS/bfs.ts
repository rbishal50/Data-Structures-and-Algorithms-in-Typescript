// O(V) space
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
  bfsRecursive(startingVertex: T): T[] {
    // If vertex is not present return []
    if (!this.adjacencyList.has(startingVertex)) return [];

    // Use a visited set to track visited vertices and a result aray to store result
    const visited: Set<T> = new Set();
    const result: T[] = [];

    // Use a recursive function to traverse the graph
    const recursiveBfs = (queue: T[]) => {
      if (queue.length === 0) return;

      // Get the first item from the queue
      const front = queue.shift()!;

      // First add to the visited set and result[]
      visited.add(front);
      result.push(front);

      // Get all neighbors of current vertex
      const neighbors = this.adjacencyList.get(front) ?? new Set<T>();

      // For each neighbor, push to the queue and mark visited
      for (const neighbor of neighbors) {
        if (visited.has(neighbor)) continue;
        visited.add(neighbor);
        queue.push(neighbor);
      }
      recursiveBfs(queue);
    };

    recursiveBfs([startingVertex]);

    return result;
  }
}

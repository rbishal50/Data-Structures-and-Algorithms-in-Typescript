// O(V) space
// O(V + E) time, where V is the total vertices and E is the total edges in the grapsh

export function cycleInGraph(edges: number[][]): boolean {
  // Total edges
  const noOfEdges = edges.length;
  // Track visited vertices
  const visited = new Array(noOfEdges).fill(false);
  // Track vertices currently in stack
  const currentlyInStack = new Array(noOfEdges).fill(false);

  // Loop through the nodes (vertices) and perform a graph search (dfs)
  for (let node = 0; node < noOfEdges; node++) {
    // If already visited, continue
    if (visited[node]) continue;
    // Else check if cycle in a dfs way
    const hasCycle = checkForCycle(node, edges, visited, currentlyInStack);
    // If has cycle => true
    if (hasCycle) return true;
  }

  // If has no cycle => false
  return false;
}

// Check for cycle helper
function checkForCycle(
  node: number,
  edges: number[][],
  visited: boolean[],
  currentlyInStack: boolean[]
) {
  // Mark current node as visited and mark it as currently in stack
  visited[node] = true;
  currentlyInStack[node] = true;
  const neighbors = edges[node];

  // Loop through neighbors and check if has cycle recursively
  // A node has a cycle if it forms a back-edge, i.e. a neighbor returns back to its ancestor
  for (const neighbor of neighbors) {
    if (!visited[neighbor]) {
      const hasCycle = checkForCycle(
        neighbor,
        edges,
        visited,
        currentlyInStack
      );
      if (hasCycle) return true;
    } else if (currentlyInStack[neighbor]) {
      return true;
    }
  }

  // Else remove current node from stack
  currentlyInStack[node] = false;
  return false;
}

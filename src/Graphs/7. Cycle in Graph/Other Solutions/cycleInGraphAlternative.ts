// UNVISITED, VISITED AND IN STACK, NO BACK EDGES AND NOT IN STACK
const [WHITE, GREY, BLACK] = [0, 1, 2];

// O(V) space
// O(V + E) time, where V is the total vertices and E is the total edges in the grapsh

export function cycleInGraphAlternative(edges: number[][]): boolean {
  const noOfEdges = edges.length;

  // Intially all nodes are WHITE (unvisited)
  const colors = new Array(edges.length).fill(WHITE);

  // Loop through each node
  for (let node = 0; node < noOfEdges; node++) {
    // If not unvisited, continue
    if (colors[node] !== WHITE) continue;

    // Else check for cycle
    const hasCycle = checkForCycle(node, edges, colors);

    // If has cycle, return true
    if (hasCycle) return true;
  }
  // Else, return true
  return false;
}

function checkForCycle(node: number, edges: number[][], colors: number[]) {
  // Mark as visited and in stack
  colors[node] = GREY;
  const neighbors = edges[node];

  // Loop through each neighbor
  for (const neighbor of neighbors) {
    // If already visited and in stack, return true
    if (colors[neighbor] === GREY) return true;

    // If already visited and no back edges, continue
    if (colors[neighbor] === BLACK) continue;

    // If unvisted, check for cycle
    const hasCycle = checkForCycle(neighbor, edges, colors);

    // Return true if cycle
    if (hasCycle) return true;
  }

  // mark as no back edges asnd not in stack
  colors[node] = BLACK;
  return false;
}

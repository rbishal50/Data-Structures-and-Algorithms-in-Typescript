// O(V) space
// O(V + E) time, where V is the total vertices and E is the total edges in the graph

export function istTwoColorable(edges: number[][]): boolean {
  // Use a colors array to store each node's color
  const colors: Array<boolean | null> = edges.map((_) => null);
  // Initialize a stack with first node
  const stack = [0];

  // Loop until stack is empty
  while (stack.length > 0) {
    const top = stack.pop()!;

    // Check each node connection
    for (const connection of edges[top]) {
      // If null, add opposite color and push to stack
      // Else if has color, check node's and connection's color
      if (colors[connection] === null) {
        colors[connection] = !colors[top];
        stack.push(connection);
      } else if (colors[connection] === colors[top]) {
        return false;
      }
    }
  }
  // Return true after stack is empty
  return true;
}

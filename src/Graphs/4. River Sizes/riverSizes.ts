// O(WH) space
// O(WH) time, where W & H are the width and height of the input matrix

export function riverSizes(matrix: number[][]): number[] {
  // Resultant array
  const sizes: number[] = [];
  // To keep track of visited items in the matrix
  const visited: boolean[][] = matrix.map((row) => row.map((_value) => false));

  // Loop through the matrix
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      // If already visited, just continue
      if (visited[row][col]) continue;
      // Else tracerse the node from that item
      traverseNode(row, col, matrix, visited, sizes);
    }
  }
  return sizes;
}

// Traverse node helper
function traverseNode(
  row: number,
  col: number,
  matrix: number[][],
  visited: boolean[][],
  sizes: number[]
) {
  let currentSize = 0;
  // Use a stack-based dfs technique to traverse the nodes
  const nodesToExplore = [[row, col]];

  // Standard DFS to traverse te items
  while (nodesToExplore.length > 0) {
    const [currentRow, currentCol] = nodesToExplore.pop()!;
    // If already visited, just continue
    if (visited[currentRow][currentCol]) continue;

    // If not visited, set visited to true
    visited[currentRow][currentCol] = true;

    // If land (0), just continue
    if (matrix[currentRow][currentCol] === 0) continue;

    // Increment river size
    currentSize++;

    // Get unvisited neighbors
    const unvisitedNeighbors = getUnvisitedNeighbors(
      currentRow,
      currentCol,
      matrix,
      visited
    );

    // Push each neighbor to the stach
    for (const neighbor of unvisitedNeighbors) {
      nodesToExplore.push(neighbor);
    }
  }

  // Push the resulatant size
  if (currentSize > 0) sizes.push(currentSize);
}

// Unvisited neighbors helper
// Each node can have atmost 4 neighbors (up down right left)
function getUnvisitedNeighbors(
  row: number,
  col: number,
  matrix: number[][],
  visited: boolean[][]
) {
  // Push all unvisted neighbors
  const unvisitedNeighbors: [number, number][] = [];
  if (row > 0 && !visited[row - 1][col])
    unvisitedNeighbors.push([row - 1, col]);
  if (row < matrix.length - 1 && !visited[row + 1][col])
    unvisitedNeighbors.push([row + 1, col]);
  if (col > 0 && !visited[row][col - 1])
    unvisitedNeighbors.push([row, col - 1]);
  if (col < matrix[0].length - 1 && !visited[row][col + 1])
    unvisitedNeighbors.push([row, col + 1]);

  // Return unvisited neighbors
  return unvisitedNeighbors;
}

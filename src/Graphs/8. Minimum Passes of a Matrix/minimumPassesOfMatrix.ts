// O(W * H) space
// O(W * H) time, where W & H are the wdth and height of the matrix

export function minimumPassesOfMatrix(matrix: number[][]): number {
  // Use 2 stacks
  let currentStack: number[][] = [];
  let nextStack: number[][] = [];

  // Initially, insert all positive integer positions to the next stack
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] > 0) {
        nextStack.push([row, col]);
      }
    }
  }

  let passes = 0;

  // Loop until we have next stack items
  while (nextStack.length > 0) {
    // Add items from the next stack to current stack
    currentStack = nextStack;
    nextStack = [];

    // Loop until we have current stack items
    while (currentStack.length > 0) {
      // Pop a item
      const [row, column] = currentStack.pop()!;

      // Grab all adjacent positions (left, right, top & botton)
      const adjacentPositions = getAdjacentPositions(row, column, matrix);

      // Change all negative adjacent elements to positive and push the resultant positive position to next stack
      for (const [currRow, currCol] of adjacentPositions) {
        if (matrix[currRow][currCol] >= 0) continue;

        matrix[currRow][currCol] *= -1;
        nextStack.push([currRow, currCol]);
      }
    }
    // Increment the pass
    passes++;
  }

  // Return -1 if the matrix still has negatives
  // Else, return passes - 1 as in the last iteration we have incremented an extra pass
  return matrixContainsNegatives(matrix) ? -1 : passes - 1;
}

// Get adjacent positions helper
function getAdjacentPositions(
  row: number,
  column: number,
  matrix: number[][]
): number[][] {
  const positions: number[][] = [];

  if (row < matrix.length - 1) positions.push([row + 1, column]);
  if (row > 0) positions.push([row - 1, column]);
  if (column < matrix[0].length - 1) positions.push([row, column + 1]);
  if (column > 0) positions.push([row, column - 1]);

  return positions;
}

// Check if matrix has negatives helper
function matrixContainsNegatives(matrix: number[][]): boolean {
  for (const row of matrix) {
    for (const value of row) {
      if (value < 0) return true;
    }
  }
  return false;
}

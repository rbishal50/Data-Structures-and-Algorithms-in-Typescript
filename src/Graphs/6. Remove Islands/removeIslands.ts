// O(WH) space
// O(WH) time, where W & H are the width & height of the matrix

export function removeIslands(matrix: number[][]): number[][] {
  // Aux matrix to keep track of 1s connected to border
  // 1s connected to border will be true, other will be false
  const onesConnectedToBorder: boolean[][] = [];

  // Initialize every position as false in the beginning
  for (let row = 0; row < matrix.length; row++) {
    onesConnectedToBorder.push([]);
    for (let col = 0; col < matrix[row].length; col++) {
      onesConnectedToBorder[row].push(false);
    }
  }

  // Check each item in the borders and perform a dfs/bfs
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder || matrix[row][col] !== 1) continue;

      // dfs helper
      findOnesConnectedToBorder(row, col, matrix, onesConnectedToBorder);
    }
  }

  // Remove islands that are not touching the border
  for (let row = 1; row < matrix.length - 1; row++) {
    for (let col = 1; col < matrix[row].length - 1; col++) {
      if (!onesConnectedToBorder[row][col]) matrix[row][col] = 0;
    }
  }

  return matrix;
}

// dfs helper
// Set true to every island connected with the border
function findOnesConnectedToBorder(
  row: number,
  col: number,
  matrix: number[][],
  onesConnectedToBorder: boolean[][]
) {
  const stack = [[row, col]];

  while (stack.length > 0) {
    const current = stack.pop()!;
    const [currentRow, currentCol] = current;

    if (onesConnectedToBorder[currentRow][currentCol]) continue;

    onesConnectedToBorder[currentRow][currentCol] = true;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);

    for (const [row, col] of neighbors) {
      if (matrix[row][col] === 0 || onesConnectedToBorder[row][col]) continue;
      stack.push([row, col]);
    }
  }
}

// Get neighbors helper (up down left right)
function getNeighbors(
  matrix: number[][],
  row: number,
  col: number
): [number, number][] {
  const neighbors: [number, number][] = [];

  if (row - 1 >= 0) neighbors.push([row - 1, col]);
  if (row + 1 < matrix.length) neighbors.push([row + 1, col]);
  if (col - 1 >= 0) neighbors.push([row, col - 1]);
  if (col + 1 < matrix[row].length) neighbors.push([row, col + 1]);

  return neighbors;
}

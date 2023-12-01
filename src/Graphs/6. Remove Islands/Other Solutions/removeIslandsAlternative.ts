// O(WH) space
// O(WH) time, where W & H are the width & height of the matrix
// We don't use a aux matrix so this a bit better than previous solution, but stil in worst case stack can contain all the items in the matris. So space is O(WH)

export function removeIslandsAlternative(matrix: number[][]) {
  // Check for border items
  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      const rowIsBorder = row === 0 || row === matrix.length - 1;
      const colIsBorder = col === 0 || col === matrix[row].length - 1;
      const isBorder = rowIsBorder || colIsBorder;
      if (!isBorder || matrix[row][col] !== 1) continue;

      // DFS on the border item
      findOnesConnectedToBorder(row, col, matrix);
    }
  }

  for (let row = 0; row < matrix.length; row++) {
    for (let col = 0; col < matrix[row].length; col++) {
      if (matrix[row][col] === 2) {
        matrix[row][col] = 1;
      } else {
        matrix[row][col] = 0;
      }
    }
  }

  return matrix;
}

// dfs helper
// Set 2 to every island connected with the border
function findOnesConnectedToBorder(
  row: number,
  col: number,
  matrix: number[][]
) {
  const stack = [[row, col]];

  while (stack.length > 0) {
    const current = stack.pop()!;
    const [currentRow, currentCol] = current;

    matrix[currentRow][currentCol] = 2;

    const neighbors = getNeighbors(matrix, currentRow, currentCol);

    for (const [row, col] of neighbors) {
      if (matrix[row][col] === 0 || matrix[row][col] === 2) continue;
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

// O(N) space
// O(N) time where N is the total no. of elements in the entire sub matrixs

export function spiralTraverse(matrix: number[][]): number[] {
  // Add pointer for starting and ending rows and columns
  let startingRow = 0;
  let endingRow = matrix.length - 1;
  let startingColumn = 0;
  let endingColumn = matrix[0].length - 1;

  // Resultant array
  const result: number[] = [];

  // Start a loop
  while (startingRow <= endingRow && startingColumn <= endingColumn) {
    // Start spiral traversal column
    for (let col = startingColumn; col <= endingColumn; col++) {
      result.push(matrix[startingRow][col]);
    }

    // Start spiral traversal row
    for (let row = startingRow + 1; row <= endingRow; row++) {
      result.push(matrix[row][endingColumn]);
    }

    // Start spiral traversal reverse column
    for (let col = endingColumn - 1; col >= startingColumn; col--) {
      // For edge case (see test case)
      if (startingRow === endingRow) break;

      result.push(matrix[endingRow][col]);
    }

    // Start spiral traversal reverse row
    for (let row = endingRow - 1; row > startingRow; row--) {
      // For edge case (see test case)
      if (startingColumn === endingColumn) break;

      result.push(matrix[row][startingColumn]);
    }

    // Increment and Decrement pointers accordingly for next iteration
    startingRow++;
    endingRow--;
    startingColumn++;
    endingColumn--;
  }

  return result;
}

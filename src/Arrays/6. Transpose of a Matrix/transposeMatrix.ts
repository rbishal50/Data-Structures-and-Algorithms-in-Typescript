// O(row * col) space
// O(row * col) time

export function transposeMatrix(matrix: number[][]): number[][] {
  const transposedMatrix: number[][] = [];

  // loop through columns
  for (let col = 0; col < matrix[0].length; col++) {
    // Each column becomes a row in the transpose
    const rowToAdd: number[] = [];
    // loop through rows
    for (let row = 0; row < matrix.length; row++) {
      rowToAdd.push(matrix[row][col]);
    }
    transposedMatrix.push(rowToAdd);
  }

  // The transposed matrix
  return transposedMatrix;
}

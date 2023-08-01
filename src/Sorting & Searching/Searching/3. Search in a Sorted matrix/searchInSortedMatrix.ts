type Range = [number, number];

// O(1) space
// O(row + column) time
export function searchInSortedMatrix(
  matrix: number[][],
  target: number
): Range {
  // Start from 1st row last column
  let row = 0;
  let column = matrix[0].length - 1;

  // Loop until we can have values
  while (row < matrix.length && column >= 0) {
    // If value is greater
    if (matrix[row][column] > target) {
      column--;
      continue;
    }
    // If value is smaller
    if (matrix[row][column] < target) {
      row++;
      continue;
    }

    return [row, column];
  }
  return [-1, -1];
}

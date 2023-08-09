type Memo = Map<[number, number], number>;

// O(rows * columns) space
// O(rows * columns) time

export function uniquePathsAlternative(rows: number, columns: number): number {
  // Base case
  if (rows === 1 || columns === 1) return 1;

  const dp: number[][] = [];

  // Fill the dp with initial values
  // First row will have 1 unique paths for all
  // First column will have 1 unique paths for all
  for (let i = 0; i < rows; i++) {
    const col: number[] = [];
    for (let j = 0; j < columns; j++) {
      if (i === 0 || j === 0) {
        col.push(1);
        continue;
      }
      col.push(0);
    }
    dp.push(col);
  }

  // Now fill the remaining positions in the dp (same logic as recursion)
  for (let i = 1; i < rows; i++) {
    for (let j = 1; j < columns; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[rows - 1][columns - 1];
}

type Memo = Map<[number, number], number>;

// O(rows * columns) space
// O(rows * columns) time

export function uniquePaths(
  rows: number,
  columns: number,
  memo: Memo = new Map<[number, number], number>()
): number {
  // Base case
  if (rows === 1 || columns === 1) return 1;

  const key: [number, number] = [rows, columns];

  // Check if value is already calculated, if not then set the value
  if (!memo.has(key)) {
    memo.set(
      key,
      uniquePaths(rows - 1, columns, memo) +
        uniquePaths(rows, columns - 1, memo)
    );
  }

  // Return tha value
  return memo.get(key) ?? 0;
}

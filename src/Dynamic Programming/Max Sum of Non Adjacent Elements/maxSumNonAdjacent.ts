// O(N) space
// O(N) time, where N is the no. of items in the array

export function maxSumNonAdjacent(array: number[]): number {
  // Base cases
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  // Array to store consecutive max sums calculated so far
  const maxSum = [...array];

  // Maximum sum at index 1
  maxSum[1] = Math.max(array[0], array[1]);

  // Calculate proceeding max sums
  for (let i = 2; i < array.length; i++) {
    maxSum[i] = Math.max(maxSum[i - 1], array[i] + maxSum[i - 2]);
  }

  // The last item would be the resulting max sum of non-adjacent elements
  return maxSum[maxSum.length - 1];
}

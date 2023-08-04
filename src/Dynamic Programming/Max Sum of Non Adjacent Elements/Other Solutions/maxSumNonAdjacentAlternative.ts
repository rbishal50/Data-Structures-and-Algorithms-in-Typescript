// O(1) space
// O(N) time, where N is the no. of items in the array

export function maxSumNonAdjacentAlternative(array: number[]): number {
  // Base cases
  if (array.length === 0) return 0;
  if (array.length === 1) return array[0];

  // For storing the 2 maximum sums
  let first = array[0];
  let second = Math.max(first, array[1]);

  // Calculate proceeding max sums
  for (let i = 2; i < array.length; i++) {
    const current = Math.max(second, array[i] + first);
    first = second;
    second = current;
  }

  // The second item would be the resulting max sum of non-adjacent elements
  return second;
}

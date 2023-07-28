// O(1) space
// O(N) time to go through the array once

export function isMonotonic(array: number[]): boolean {
  // Arrays of length less than or equal to 2 are by default monotonic
  if (array.length <= 2) return true;

  // Initially set both nonIncreasing and nonDecreasing flags to true
  let isNonIncreasing = true;
  let isNonDecreasing = true;

  // Falsify based on the iteration
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] > array[i]) isNonIncreasing = false;
    if (array[i + 1] < array[i]) isNonDecreasing = false;
  }

  // if any one is still true, the array is monotonic
  return isNonIncreasing || isNonDecreasing;
}

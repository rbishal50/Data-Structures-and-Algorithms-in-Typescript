// O(1) space
// O(N) time for going through each item in the array

export function firstDuplicateValue(array: number[]): number {
  // Loop through the array
  for (const item of array) {
    // The absolute value of the item
    const value = Math.abs(item);

    // If current item's index value is already negative, we have found the first duplicate and can return
    if (array[value - 1] < 0) return value;

    // Since the array is from 1 to n, we can negate the current item's index value
    array[value - 1] *= -1;
  }

  return -1;
}

// O(1) space in all cases
// O(N^2) time for average and worst case (array sorted randomly or array sorted in descending order)
// O(N) time for best case (array already sorted)

export function bubbleSort(array: number[]): number[] {
  // Outer loop iterates n - 1 times
  for (let i = 0; i < array.length - 1; i++) {
    // For each outer loop iteration, sorted element will be in the rightmost part
    // And each iteration will skip the rightmost item (except 0 item skip for first outer loop iteration)
    for (let j = 0; j < array.length - 1 - i; j++) {
      // Swapping shorthand
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  // Sorted array
  return array;
}

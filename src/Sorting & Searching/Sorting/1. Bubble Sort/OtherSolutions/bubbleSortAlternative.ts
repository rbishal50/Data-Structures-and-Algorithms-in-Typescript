// O(1) space in all cases
// O(N^2) time for average and worst case (array sorted randomly or array sorted in descending order)
// O(N) time for best case (array already sorted)

export function bubbleSortAlternative(array: number[]): number[] {
  // Consider array is not sorted
  let isSorted = false;
  let length = array.length;

  // Outer loop until array is not sorted
  do {
    // Assume array is sorted
    isSorted = true;
    for (let i = 0; i < length - 1; i++) {
      // If we need at least one swap, then array is not sorted
      if (array[i] > array[i + 1]) {
        isSorted = false;
        [array[i], array[i + 1]] = [array[i + 1], array[i]];
      }
    }
    // Decrement one item per iteration for next loop as right most item gets sorted in each outer loop iteration
    length--;
  } while (!isSorted);

  return array;
}

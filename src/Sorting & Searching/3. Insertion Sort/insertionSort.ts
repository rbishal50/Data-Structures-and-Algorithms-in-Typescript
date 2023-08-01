// O(1) space in all cases
// O(N^2) time for average and worst case (array sorted randomly or array sorted in descending order)
// O(N) time for best case (array already sorted)

export function insertionSort(array: number[]): number[] {
  // Outer loop from second item
  for (let i = 1; i < array.length; i++) {
    // Second item is the current pivot
    const pivot = array[i];

    // Inner loop each left items of the pivot
    let j = i - 1;
    for (j; j >= 0; j--) {
      // if item less than or equal to pivot, break
      if (array[j] <= pivot) break;
      // Else move item to right
      array[j + 1] = array[j];
    }

    // Set the pivot in correct position
    array[j + 1] = pivot;
  }
  return array;
}

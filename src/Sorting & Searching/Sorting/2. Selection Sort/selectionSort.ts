// O(1) space in all cases
// O(N^2) time for average and worst case (array sorted randomly or array sorted in descending order)
// O(N) time for best case (array already sorted)

export function selectionSort(array: number[]): number[] {
  // Outer loop until array.len - 1 items
  for (let i = 0; i < array.length - 1; i++) {
    // Assume current item is the lowest item
    let lowestItemIndexSoFar = i;

    // Check the lowest item until the last index
    for (let j = i + 1; j < array.length; j++) {
      if (array[lowestItemIndexSoFar] > array[j]) {
        lowestItemIndexSoFar = j;
      }
    }

    // Swap if lowest item found other than current item
    if (i !== lowestItemIndexSoFar) {
      [array[i], array[lowestItemIndexSoFar]] = [
        array[lowestItemIndexSoFar],
        array[i],
      ];
    }
  }

  return array;
}

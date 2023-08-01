// O(1) space
// O(logN) time where N is the length of the array

export function binarySearch(array: number[], target: number): number {
  // Two pointers
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  // Loop until
  while (leftPointer <= rightPointer) {
    // Set mid element as the pivot
    const pivotPointer = Math.floor((leftPointer + rightPointer) / 2);
    const pivotElement = array[pivotPointer];

    // Found the target
    if (pivotElement === target) return pivotPointer;

    // Target is the 2nd half of the array
    if (pivotElement < target) leftPointer = pivotPointer + 1;

    // Target is the 1st half of the array
    if (pivotElement > target) rightPointer = pivotPointer - 1;
  }

  return -1;
}

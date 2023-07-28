// O(1) space
// O(N) time to go through the array once

export function moveElementsToTheEnd(
  array: number[],
  numToMove: number
): number[] {
  // Use 2 pointers
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  // Loop until left < right pointer
  while (leftPointer < rightPointer) {
    // Check if value in right pointer is equal to number to move, if it is continuously move the right pointer
    if (array[rightPointer] === numToMove) {
      rightPointer--;
      continue;
    }

    // Now right pointer is pointing to a value other than number to move
    // Check if value at left pointer is the value to move, if so swap the 2 values
    if (array[leftPointer] === numToMove) {
      // swapping shorthand
      [array[leftPointer], array[rightPointer]] = [
        array[rightPointer],
        array[leftPointer],
      ];
      // If swapped then decrement right pointer
      rightPointer--;
    }

    // Increment left pointer to check new value in next iteration
    leftPointer++;
  }

  // Return the array
  return array;
}

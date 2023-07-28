// O(1) space
// O(N) time to go through the array once

export function smallestDifference(array1: number[], array2: number[]) {
  // Sort both arrays
  array1.sort((a, b) => a - b);
  array2.sort((a, b) => a - b);

  // Pointers
  let array1Pointer = 0;
  let array2Pointer = 0;

  // Track smallest difference so far and the corresponding pair
  let smallestDifferenceSoFar = Infinity;
  let smallestDifferencePair: number[] = [];

  // Loop through each element
  while (array1Pointer < array1.length && array2Pointer < array2.length) {
    const firstNumber = array1[array1Pointer];
    const secondNumber = array2[array2Pointer];

    // The current abs difference
    const difference = Math.abs(firstNumber - secondNumber);

    // Best case with difference 0
    if (difference === 0) return [firstNumber, secondNumber];

    // Update smallest difference and pair
    if (difference < smallestDifferenceSoFar) {
      smallestDifferenceSoFar = difference;
      smallestDifferencePair = [firstNumber, secondNumber];
    }

    // Update pointer to find even smaller difference and pair
    if (firstNumber < secondNumber) array1Pointer++;

    if (secondNumber < firstNumber) array2Pointer++;
  }

  return smallestDifferencePair;
}

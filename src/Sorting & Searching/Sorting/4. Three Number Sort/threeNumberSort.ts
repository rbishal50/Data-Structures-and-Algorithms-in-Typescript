// O(1) space
// O(N) time where N is the length of the array

export function threeNumberSort(array: number[], order: number[]): number[] {
  // Three pointers for three items
  let firstPointer = 0;
  let secondPointer = 0;
  let thirdPointer = array.length - 1;
  const [firstValue, secondValue] = order;

  // Loop until second pointer equals third pointer
  while (secondPointer <= thirdPointer) {
    // Second pointer value is our pivot check value
    const value = array[secondPointer];

    // First pointer value will be in correct position
    if (value === firstValue) {
      swap(array, firstPointer, secondPointer);
      firstPointer++;
      secondPointer++;
      continue;
    }

    // Second pointer value is already in correct position
    if (value === secondValue) {
      secondPointer++;
      continue;
    }

    // Third pointer value will be in correct position
    swap(array, secondPointer, thirdPointer);
    thirdPointer--;
  }

  return array;
}

function swap(array: number[], i: number, j: number) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

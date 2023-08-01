// O(1) space
// O(N) time where N is the no. of items in the array

export function threeLargestNumbers(array: number[]): number[] {
  const largestNumbers: Array<number | null> = [null, null, null];

  // For each item in the array, run the function
  for (const num of array) {
    updateLargest(largestNumbers, num);
  }

  // There are at least 3 integers so it will definitely be a number[] in the end
  return largestNumbers as number[];
}

const updateLargest = (array: Array<number | null>, numToUpdate: number) => {
  // Destructure
  const [first, second, third] = array;

  // Check and update for each of the 3 values
  if (third === null || numToUpdate > third) {
    shiftAndUpdate(array, numToUpdate, 2);
  } else if (second === null || numToUpdate > second) {
    shiftAndUpdate(array, numToUpdate, 1);
  } else if (first === null || numToUpdate > first) {
    shiftAndUpdate(array, numToUpdate, 0);
  }
};

// Shift and update
const shiftAndUpdate = (
  array: Array<number | null>,
  numToUpdate: number,
  indexToUpdate: number
) => {
  for (let i = 0; i <= indexToUpdate; i++) {
    if (i === indexToUpdate) {
      array[i] = numToUpdate;
      return;
    }
    array[i] = array[i + 1];
  }
};

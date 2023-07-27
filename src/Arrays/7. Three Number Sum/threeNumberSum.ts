// O(N) space
// O(N^2) time

export type Triplets = [number, number, number];

export function threeNumberSum(array: number[], targetSum: number) {
  // Sort the array
  array.sort((a, b) => a - b);

  const triplets: Triplets[] = [];

  // Loop until 3 elements are remaining in the last
  for (let i = 0; i < array.length - 2; i++) {
    // Current value, left pointer and right pointer
    const currentValue = array[i];
    let leftPointer = i + 1;
    let rightPointer = array.length - 1;

    // Change left and right value for the current value
    // And ge pointer accordingly
    while (leftPointer < rightPointer) {
      const leftValue = array[leftPointer];
      const rightValue = array[rightPointer];
      const currentSum = currentValue + leftValue + rightValue;

      if (currentSum === targetSum) {
        triplets.push([currentValue, leftValue, rightValue]);
        leftPointer++;
        rightPointer--;
        continue;
      }

      if (currentSum > targetSum) {
        rightPointer--;
        continue;
      }

      leftPointer++;
    }
  }

  return triplets;
}

// O(1) space
// O(NLogN) time (sort + go through the array once)

export function twoNumberSum(array: number[], targetSum: number) {
  // Sort the array
  array.sort((a, b) => a - b);

  // We are using a two pointer based technique
  let leftPointer = 0;
  let rightPointer = array.length - 1;

  // Loop until leftPointer < rightPointer
  while (leftPointer < rightPointer) {
    // Current sum
    const currentSum = array[leftPointer] + array[rightPointer];

    // If currentSum === targetSum, we have found our solution
    if (currentSum === targetSum) {
      return [array[leftPointer], array[rightPointer]];
    }

    // If currentSum is greater, we have to reduce the sum for next iteration
    if (currentSum > targetSum) rightPointer--;

    // If currentSum is greater, we have to reduce the sum for next iteration

    if (currentSum < targetSum) leftPointer++;
  }
  // Return [] if no items found
  return [];
}

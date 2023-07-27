// O(N) space for storing the squares
// O(N) time for going through the array

export function sortedSquares(array: number[]) {
  // Squared array to hold the squares
  const squared: number[] = new Array(array.length).fill(0);

  // We will use a 2 pointer technique
  let leftPointer = 0;
  let rightPointer = squared.length - 1;

  // We will populate the squared array from the right as the input array is sorted and can contain negative numbers
  for (let i = squared.length - 1; i >= 0; i--) {
    const leftValue = Math.abs(array[leftPointer]);
    const rightValue = Math.abs(array[rightPointer]);

    // If left value is greater we insert it in the position in the squared array. otherwise we insert the right value
    if (leftValue > rightValue) {
      squared[i] = leftValue * leftValue;
      leftPointer++;
    } else {
      squared[i] = rightValue * rightValue;
      rightPointer--;
    }
  }

  // Return squared
  return squared;
}

// O(N) space
// O(N) time where N is the no. of items

export function hasZeroSumSubArray(array: number[]): boolean {
  // Keep log of updating sums
  const sumLog: Set<number> = new Set();

  // Add 0 which to the log
  sumLog.add(0);

  // Initialize the cumulative sum to 0
  let sum = 0;

  // Loop through the array
  for (const num of array) {
    // Update the sum
    sum += num;

    // If the sumLog has the sum, that means it has a zero sum subArray
    if (sumLog.has(sum)) return true;
    sumLog.add(sum);
  }

  return false;
}

// The reason this approach works is that if there is a zero-sum subarray in the array, it means there exists a point in the cumulative sum where it repeats. This repetition in the cumulative sum indicates that there is a subarray whose elements sum up to zero. By keeping track of the cumulative sums seen so far in the sumLog set, the function can efficiently check for this repetition and determine the existence of a zero-sum subarray without explicitly computing all possible sub arrays/

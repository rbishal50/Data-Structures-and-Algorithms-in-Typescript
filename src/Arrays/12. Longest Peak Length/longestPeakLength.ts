// O(1) space
// O(N) time for going through each item once

export function longestPeakLength(array: number[]): number {
  // Initialize longest peak length
  let longestPeakLength = 0;

  // We wil iterate from teh 2nd item in the array
  let i = 1;

  while (i < array.length - 1) {
    // Check if 2nd item forms a min 3 elements peak
    const isPeak = array[i] > array[i - 1] && array[i] > array[i + 1];

    // If not, increment and continue next iteration
    if (!isPeak) {
      i++;
      continue;
    }

    // If yes, keep on going left to find how far the peak goes to the left
    let leftIndex = i - 2;
    while (leftIndex >= 0 && array[leftIndex] < array[leftIndex + 1]) {
      leftIndex--;
    }

    // If yes, keep on going right to find how far the peak goes to the right
    let rightIndex = i + 2;
    while (
      rightIndex < array.length &&
      array[rightIndex - 1] > array[rightIndex]
    ) {
      rightIndex++;
    }

    // Current peak length
    const currentPeakLength = rightIndex - leftIndex - 1;

    // Update longest peak length
    longestPeakLength = Math.max(longestPeakLength, currentPeakLength);

    // Update iterating item to rightIndex
    i = rightIndex;
  }

  return longestPeakLength;
}

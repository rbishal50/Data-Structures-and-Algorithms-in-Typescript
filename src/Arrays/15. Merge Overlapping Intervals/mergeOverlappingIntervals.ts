export function mergeOverlappingIntervals(array: number[][]): number[][] {
  // Sort the array by the starting value of the intervals
  array.sort((a, b) => a[0] - b[0]);

  // Add the first interval to the result array
  const result: number[][] = [array[0]];

  // Loop from the second interval
  for (let i = 1; i < array.length; i++) {
    // First range is the current last item in result
    const firstRange = result[result.length - 1];

    // Second range is the current iterating interval
    const secondRange = array[i];

    // For Independent intervals
    if (firstRange[1] < secondRange[0]) {
      result.push(secondRange);
      continue;
    }

    // For Overlapping intervals
    firstRange[1] = Math.max(firstRange[1], secondRange[1]);
  }

  return result;
}

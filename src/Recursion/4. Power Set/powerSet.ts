// O(2^N) space
// O(2^N) time where N is the length of the array

export function powerSet(array: number[]): number[][] {
  // Base cases
  if (array.length === 0) return [[]];
  if (array.length === 1) return [[], array];

  // The power set of subset
  // For [1, 2, 3], get the power set of [1, 2]
  // power set of [1, 2] is [[], [1], [2], [1, 2]]
  const powerSetOfSubArray = powerSet(array.slice(0, -1));

  // We just need to add the removed item to every item of the subarray power set
  return [
    ...powerSetOfSubArray,
    ...powerSetOfSubArray.map((arr) => [...arr, array[array.length - 1]]),
  ];
}

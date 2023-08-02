// O(N!) space
// O(N!) time where N is the length of the array

export function permutations(array: number[]): number[][] {
  // Base cases
  if (array.length === 0) return [];
  if (array.length === 1) return [array];

  // Get permutations of subarray
  // If [1, 2, 3] is input array, get permutations of [2, 3] which would be [[2, 3], [3, 2]]
  const permutationsOfSubArray = permutations(array.slice(1));

  const result: number[][] = [];

  // Loop for each item of permutationsOfSubArray
  permutationsOfSubArray.forEach((arr) => {
    // Insert the sliced item in each position
    for (let i = 0; i <= arr.length; i++) {
      const copy = [...arr];
      copy.splice(i, 0, array[0]);
      result.push(copy);
    }
  });

  return result;
}

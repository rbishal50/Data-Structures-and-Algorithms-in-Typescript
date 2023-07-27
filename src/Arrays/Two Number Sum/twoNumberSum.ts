// O(N) space for creating and populating the set (Worst case)
// O(N) time for going through the array (Worst case)

export function twoNumberSum(array: number[], targetSum: number) {
  const set: Set<Number> = new Set();

  for (const num of array) {
    const potentialMatch = targetSum - num;

    if (set.has(potentialMatch)) return [num, potentialMatch];

    set.add(num);
  }

  return [];
}

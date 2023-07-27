// O(N) space for creating and populating the set (Worst case)
// O(N) time for going through the array (Worst case)

export function twoNumberSum(array: number[], targetSum: number) {
  // Create a set for storing seen items
  const set: Set<Number> = new Set();

  // Loop through the array
  for (const num of array) {
    // Check if another number is in the set
    const potentialMatch = targetSum - num;

    // If it exists return the items
    if (set.has(potentialMatch)) return [num, potentialMatch];

    // Else add the number to the set
    set.add(num);
  }

  // Return [] if no items found
  return [];
}

export type SpecialArray = Array<number | SpecialArray>;

// O(D) space where D is the greatest depth in the array
// O(N) time where N is the total elements in the array, including elements in all sub arrays

export function productSum(
  array: SpecialArray,
  multiplier: number = 1
): number {
  let sum = 0;
  // Loop through items
  for (const item of array) {
    // If number, simply add to the sum
    if (!Array.isArray(item)) {
      sum += item;
      continue;
    }

    // Else recursively call the function with multiplier incremented
    sum += productSum(item, multiplier + 1);
  }

  // Return sum * the depth
  return sum * multiplier;
}

// O(1) space
// O(N) time where N is the no. of items

export function majorityElement(array: number[]): number | null {
  // Assume majority element as null and its count as 0
  let majorityElement: null | number = null;
  let count = 0;

  // Loop through the array
  for (const num of array) {
    // If count is 0, num is the current majority element
    if (count === 0) majorityElement = num;

    // If num === current majority element increment the count
    if (num === majorityElement) {
      count++;
      continue;
    }

    // Else decrement the count
    count--;
  }

  // After the loop, the majority element will be correctly set as it appears in over half of the array
  // as the problem assumes that there will always be a majority element
  return majorityElement;
}

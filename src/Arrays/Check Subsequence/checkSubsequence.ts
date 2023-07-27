// O(1) space
// O(N) time for going through the array

export function isSubsequence(array: number[], sequence: number[]) {
  // Init seq index to 0
  let sequenceIndex = 0;

  // loop through the array
  for (const num of array) {
    // If seq index is already equal to seq length, we can return true
    if (sequenceIndex === sequence.length) return true;

    // Else if num found, increment seq index
    if (num === sequence[sequenceIndex]) sequenceIndex++;
  }

  // After the loop, return if seq index is equal to seq length
  return sequenceIndex === sequence.length;
}

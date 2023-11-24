// O(min(N or M)) space
// O(NM) time, where N & M are the lengths of the 2 strings

export function minEditOperationsAlternative(
  str1: string,
  str2: string
): number {
  // No edits required
  if (str1 === str2) return 0;

  // We will have columns equal to smaller length string
  // And nd we will work with 2 rows because that is only what we need at ay given time
  const smallerString = str1.length < str2.length ? str1 : str2;
  const biggerString = str1.length >= str2.length ? str1 : str2;

  // The 2 rows we would use
  let prevRow: number[] = [];
  let currRow: number[] = new Array(smallerString.length + 1);

  // Fill the first row as our first row is even
  for (let i = 0; i <= smallerString.length; i++) {
    prevRow.push(i);
  }

  // Now we will fill the rows, we will be using only 2 rows
  for (let i = 1; i <= biggerString.length; i++) {
    currRow[0] = i;

    for (let j = 1; j <= smallerString.length; j++) {
      if (biggerString[i - 1] === smallerString[j - 1]) {
        currRow[j] = prevRow[j - 1];
        continue;
      }
      currRow[j] = 1 + Math.min(currRow[j - 1], prevRow[j], prevRow[j - 1]);
    }

    // For next iteration
    prevRow = [...currRow];
  }
  return currRow[smallerString.length];
}

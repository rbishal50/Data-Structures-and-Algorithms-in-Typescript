// O(NM) space
// O(NM) time, where N & M are the lengths of the 2 strings

export function minEditOperations(str1: string, str2: string): number {
  // No edits required
  if (str1 === str2) return 0;

  // Make a 2d array
  const editsTable: number[][] = [];

  // Populate the 1st row and 1st column correctly
  // Other row column values will change after this iteration
  for (let row = 0; row <= str1.length; row++) {
    const rowValues: number[] = [];
    for (let col = 0; col <= str2.length; col++) {
      rowValues.push(col);
    }
    rowValues[0] = row;
    editsTable.push(rowValues);
  }

  // Change each value based on prev values (dynamic programming)
  for (let row = 1; row <= str1.length; row++) {
    for (let col = 1; col <= str2.length; col++) {
      if (str1[row - 1] === str2[col - 1]) {
        editsTable[row][col] = editsTable[row - 1][col - 1];
        continue;
      }
      editsTable[row][col] =
        1 +
        Math.min(
          editsTable[row - 1][col - 1],
          editsTable[row][col - 1],
          editsTable[row - 1][col]
        );
    }
  }

  return editsTable[str1.length][str2.length];
}

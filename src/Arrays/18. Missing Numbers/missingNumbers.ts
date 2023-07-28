// O(1) space
// O(N) time where N is the no. of items

export function missingNumbers(array: number[]): number[] {
  // Total from 1 to n
  let total = sumOfArray(arrayFromAToB(1, array.length + 3));

  // Total of 2 missing numbers
  for (const num of array) {
    total -= num;
  }

  // Avg of 2 missing numbers
  const averageOfMissingNumbers = Math.floor(total / 2);

  let firstHalfSum = 0;
  let secondHalfSum = 0;

  // First half sum and second half sum for the given array
  for (const num of array) {
    if (num <= averageOfMissingNumbers) {
      firstHalfSum += num;
      continue;
    }
    secondHalfSum += num;
  }

  // Expected first half sum and second half sum for the given array
  const expectedFirstHalfSum = sumOfArray(
    arrayFromAToB(1, averageOfMissingNumbers + 1)
  );
  const expectedSecondHalfSum = sumOfArray(
    arrayFromAToB(averageOfMissingNumbers + 1, array.length + 3)
  );

  // Resultant diff are the missing numbers
  return [
    expectedFirstHalfSum - firstHalfSum,
    expectedSecondHalfSum - secondHalfSum,
  ];
}

// Calculate array sum
function sumOfArray(array: number[]) {
  return array.reduce((acc, curr) => acc + curr, 0);
}

// Return array from a to b (excluding b)
function arrayFromAToB(a: number, b: number) {
  const result: number[] = [];
  for (let i = a; i < b; i++) {
    result.push(i);
  }

  return result;
}

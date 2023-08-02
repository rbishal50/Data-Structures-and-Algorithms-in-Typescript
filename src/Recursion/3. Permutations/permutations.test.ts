import { permutations } from "./permutations";

// Custom matcher to check 2 two-dimensional arrays equality ignoring the order
function are2DArraysEqual(arr1: number[][], arr2: number[][]): boolean {
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Helper function to check if two sub arrays are equal in length and order
  function isSubArrayEqual(subArr1: number[], subArr2: number[]) {
    if (subArr1.length !== subArr2.length) {
      return false;
    }
    return subArr1.every((elem, index) => elem === subArr2[index]);
  }

  // Check if all sub arrays from arr1 are found in arr2
  const allSubArraysEqualInArr2 = arr1.every((subArr1) =>
    arr2.some((subArr2) => isSubArrayEqual(subArr1, subArr2))
  );

  // Check if all sub arrays from arr2 are found in arr1
  const allSubArraysEqualInArr1 = arr2.every((subArr2) =>
    arr1.some((subArr1) => isSubArrayEqual(subArr1, subArr2))
  );

  return allSubArraysEqualInArr1 && allSubArraysEqualInArr2;
}

test("Test case 1 - Non-empty array small", () => {
  const array = [1, 2];
  const expected = [
    [1, 2],
    [2, 1],
  ];

  const result = permutations(array);
  expect(are2DArraysEqual(expected, result)).toBe(true);
});

test("Test case 2 - Non-empty array of length 3", () => {
  const array = [1, 2, 3];
  const expected = [
    [1, 2, 3],
    [1, 3, 2],
    [2, 1, 3],
    [2, 3, 1],
    [3, 1, 2],
    [3, 2, 1],
  ];

  const result = permutations(array);
  expect(are2DArraysEqual(expected, result)).toBe(true);
});

test("Test case 3 - Non-empty array of length 4", () => {
  const array = [1, 2, 3, 4];
  const expected = [
    [1, 2, 3, 4],
    [1, 2, 4, 3],
    [1, 3, 2, 4],
    [1, 3, 4, 2],
    [1, 4, 2, 3],
    [1, 4, 3, 2],
    [2, 1, 3, 4],
    [2, 1, 4, 3],
    [2, 3, 1, 4],
    [2, 3, 4, 1],
    [2, 4, 1, 3],
    [2, 4, 3, 1],
    [3, 1, 2, 4],
    [3, 1, 4, 2],
    [3, 2, 1, 4],
    [3, 2, 4, 1],
    [3, 4, 1, 2],
    [3, 4, 2, 1],
    [4, 1, 2, 3],
    [4, 1, 3, 2],
    [4, 2, 1, 3],
    [4, 2, 3, 1],
    [4, 3, 1, 2],
    [4, 3, 2, 1],
  ];
  const result = permutations(array);
  expect(are2DArraysEqual(expected, result)).toBe(true);
});

test("Test case 4 - Empty array", () => {
  const array: number[] = [];
  const result = permutations(array);
  expect(result).toEqual([]);
});

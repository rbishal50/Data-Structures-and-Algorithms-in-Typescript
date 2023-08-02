import { powerSet } from "./powerSet";

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

describe("powerSet", () => {
  it("should return the powerSet of the empty input array", () => {
    const array: number[] = [];
    const expected = [[]];

    const result = powerSet(array);
    expect(are2DArraysEqual(expected, result)).toBe(true);
  });

  it("should return the powerSet of an input array of length 1", () => {
    const array = [1];
    const expected = [[], [1]];

    const result = powerSet(array);
    expect(are2DArraysEqual(expected, result)).toBe(true);
  });

  it("should return the powerSet of an input array of length 2", () => {
    const array = [1, 2];
    const expected = [[], [1], [2], [1, 2]];

    const result = powerSet(array);
    expect(are2DArraysEqual(expected, result)).toBe(true);

    expect(
      are2DArraysEqual(
        [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]],
        powerSet([1, 2, 3])
      )
    ).toBe(true);
  });

  it("should return the powerSet of an input array of length 3", () => {
    const array = [1, 2, 3];
    const expected = [[], [1], [2], [3], [1, 2], [1, 3], [2, 3], [1, 2, 3]];

    const result = powerSet(array);
    expect(are2DArraysEqual(expected, result)).toBe(true);
  });

  it("should return an empty array for input array of length 5", () => {
    const array = [1, 2, 3, 4, 5];
    const expected = [
      [],
      [1],
      [2],
      [1, 2],
      [3],
      [1, 3],
      [2, 3],
      [1, 2, 3],
      [4],
      [1, 4],
      [2, 4],
      [1, 2, 4],
      [3, 4],
      [1, 3, 4],
      [2, 3, 4],
      [1, 2, 3, 4],
      [5],
      [1, 5],
      [2, 5],
      [1, 2, 5],
      [3, 5],
      [1, 3, 5],
      [2, 3, 5],
      [1, 2, 3, 5],
      [4, 5],
      [1, 4, 5],
      [2, 4, 5],
      [1, 2, 4, 5],
      [3, 4, 5],
      [1, 3, 4, 5],
      [2, 3, 4, 5],
      [1, 2, 3, 4, 5],
    ];

    const result = powerSet(array);
    expect(are2DArraysEqual(expected, result)).toBe(true);
  });
});

import { threeNumberSum } from "./threeNumberSum";

describe("threeNumberSum", () => {
  describe("Cases with triplets summing to the target", () => {
    test("should return triplets in ascending order", () => {
      const array1 = [12, 3, 1, 2, -6, 5, -8, 6];
      const targetSum1 = 0;
      expect(threeNumberSum(array1, targetSum1)).toEqual([
        [-8, 2, 6],
        [-8, 3, 5],
        [-6, 1, 5],
      ]);

      const array2 = [8, 10, -2, 49, 14];
      const targetSum2 = 57;
      expect(threeNumberSum(array2, targetSum2)).toEqual([[-2, 10, 49]]);
    });
  });

  describe("Cases with no triplets summing to the target", () => {
    test("should return an empty array when no triplets are found", () => {
      const array3 = [10, 20, 30, 40, 50];
      const targetSum3 = 15;
      expect(threeNumberSum(array3, targetSum3)).toEqual([]);

      const array4 = [-1, -2, -3, -4, -5];
      const targetSum4 = -20;
      expect(threeNumberSum(array4, targetSum4)).toEqual([]);
    });
  });

  describe("Cases with duplicate values in the array", () => {
    test("should handle arrays with duplicate values", () => {
      const array5 = [1, 2, 3, 4, 2, 5, 6, 2];
      const targetSum5 = 8;
      expect(threeNumberSum(array5, targetSum5)).toEqual([
        [1, 2, 5],
        [1, 3, 4],
        [2, 2, 4],
        [2, 2, 4],
      ]);
    });
  });

  describe("Cases with negative and positive integers", () => {
    test("should handle arrays with negative and positive integers", () => {
      const array6 = [-10, 8, 9, 15, -4, -1];
      const targetSum6 = 13;
      expect(threeNumberSum(array6, targetSum6)).toEqual([
        [-10, 8, 15],
        [-4, 8, 9],
      ]);
    });
  });
});

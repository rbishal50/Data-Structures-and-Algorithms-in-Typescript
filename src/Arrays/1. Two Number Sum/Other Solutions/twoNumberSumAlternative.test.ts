// Import the function to test
import { twoNumberSum } from "./twoNumberSumAlternative"; // Replace 'your-file' with the correct file path

describe("twoNumberSum", () => {
  describe("Cases with valid solutions", () => {
    test("should find the correct pair that sums to the target", () => {
      // Test case with a valid solution
      expect(twoNumberSum([3, 5, 2, 8, 11], 11).sort((a, b) => a - b)).toEqual([
        3, 8,
      ]);

      // Test case with a valid solution (repeated numbers)
      expect(twoNumberSum([4, 4, 6, 2, 1, 5], 9).sort((a, b) => a - b)).toEqual(
        [4, 5]
      );
    });
  });

  describe("Cases without a solution", () => {
    test("should return an empty array when no solution exists", () => {
      // Test case without a solution
      expect(twoNumberSum([1, 2, 3, 4, 5], 100)).toEqual([]);
    });
  });

  describe("Cases with an empty array", () => {
    test("should return an empty array when the input array is empty", () => {
      // Test case with an empty array
      expect(twoNumberSum([], 10)).toEqual([]);
    });
  });

  describe("Cases with negative numbers", () => {
    test("should handle negative numbers", () => {
      // Test case with negative numbers
      expect(
        twoNumberSum([-1, -2, -3, -4, -5], -9).sort((a, b) => a - b)
      ).toEqual([-5, -4]);

      // Test case with a mix of positive and negative numbers
      expect(
        twoNumberSum([-10, 30, -30, 40, -50], -10).sort((a, b) => a - b)
      ).toEqual([-50, 40]);
    });
  });

  describe("Edge cases", () => {
    test("should handle edge cases", () => {
      // Test case with two elements that sum to the target
      expect(twoNumberSum([10, 20], 30).sort((a, b) => a - b)).toEqual([
        10, 20,
      ]);

      // Test case with two elements that sum to zero
      expect(twoNumberSum([1, -1], 0).sort((a, b) => a - b)).toEqual([-1, 1]);
    });
  });
});

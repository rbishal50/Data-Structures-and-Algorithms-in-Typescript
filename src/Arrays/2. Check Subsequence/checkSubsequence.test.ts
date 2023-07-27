import { isSubsequence } from "./checkSubsequence";

describe("isSubsequence", () => {
  describe("Cases with valid subsequences", () => {
    test("should return true when the second array is a subsequence of the first", () => {
      expect(isSubsequence([1, 2, 3, 4], [1, 3, 4])).toBe(true);
      expect(isSubsequence([10, 20, 30, 40, 50], [10, 40])).toBe(true);
      expect(isSubsequence([5, 10, 15, 20, 25], [10, 20, 25])).toBe(true);
      expect(isSubsequence([1, 2, 3, 4], [1, 2, 3, 4])).toBe(true);
      expect(isSubsequence([100], [100])).toBe(true);
    });
  });

  describe("Cases without valid subsequences", () => {
    test("should return false when the second array is not a subsequence of the first", () => {
      expect(isSubsequence([1, 2, 3, 4], [4, 3, 2, 1])).toBe(false);
      expect(isSubsequence([5, 10, 15, 20, 25], [5, 15, 20, 30])).toBe(false);
      expect(isSubsequence([100, 200, 300], [200, 100])).toBe(false);
      expect(isSubsequence([1, 2, 3], [3, 2, 1])).toBe(false);
      expect(isSubsequence([1, 2, 3, 4], [5, 6])).toBe(false);
    });
  });

  describe("Cases with arrays containing duplicate elements", () => {
    test("should handle arrays with duplicate elements", () => {
      expect(isSubsequence([1, 1, 2, 3, 3, 4], [1, 2, 3, 4])).toBe(true);
      expect(isSubsequence([5, 10, 15, 20, 20, 25], [10, 20, 25])).toBe(true);
      expect(isSubsequence([100, 100, 200, 300], [100, 200])).toBe(true);
      expect(isSubsequence([1, 1, 2, 2, 3], [1, 2, 3])).toBe(true);
      expect(isSubsequence([1, 1, 2, 2, 3], [1, 3])).toBe(true);
    });
  });

  describe("Cases with negative integers", () => {
    test("should handle negative integers", () => {
      expect(isSubsequence([-5, -4, -3, -2, -1], [-5, -3, -1])).toBe(true);
      expect(isSubsequence([-10, -5, 0, 5, 10], [-10, 0])).toBe(true);
      expect(isSubsequence([-100, -50, 0, 50], [-50, 50])).toBe(true);
      expect(isSubsequence([-3, -2, -1], [-1, -2, -3])).toBe(false);
      expect(isSubsequence([-10, -5, 0, 5, 10], [-1, 1])).toBe(false);
    });
  });
});

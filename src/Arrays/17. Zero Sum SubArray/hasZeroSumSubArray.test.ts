import { hasZeroSumSubArray } from "./hasZeroSumSubArray";

describe("hasZeroSumSubArray", () => {
  test("should return true if there exists a zero-sum subarray", () => {
    const nums1 = [4, 2, -3, 1, 6];
    expect(hasZeroSumSubArray(nums1)).toBe(true);

    const nums2 = [3, 1, -4, -7, 2];
    expect(hasZeroSumSubArray(nums2)).toBe(true);

    const nums3 = [1, -1, 2, -2, 3, -3];
    expect(hasZeroSumSubArray(nums3)).toBe(true);
  });

  test("should return false if there is no zero-sum subarray", () => {
    const nums4 = [1, 2, 3, 4, 5];
    expect(hasZeroSumSubArray(nums4)).toBe(false);

    const nums5 = [-1, -2, -3, -4, -5];
    expect(hasZeroSumSubArray(nums5)).toBe(false);

    const nums6 = [-5, -5, 11, 11, 15];
    expect(hasZeroSumSubArray(nums6)).toBe(false);
  });

  test("should handle arrays with one element", () => {
    const nums7 = [0];
    expect(hasZeroSumSubArray(nums7)).toBe(true);

    const nums8 = [5];
    expect(hasZeroSumSubArray(nums8)).toBe(false);
  });

  test("should handle arrays with multiple zero-sum subarrays", () => {
    const nums9 = [1, -1, 1, -1];
    expect(hasZeroSumSubArray(nums9)).toBe(true);

    const nums10 = [0, 0, 0, 0];
    expect(hasZeroSumSubArray(nums10)).toBe(true);
  });
});

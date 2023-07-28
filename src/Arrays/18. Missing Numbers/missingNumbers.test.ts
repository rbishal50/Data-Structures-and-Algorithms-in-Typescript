import { missingNumbers } from "./missingNumbers";

describe("missingNumbers", () => {
  test("should return an array with two missing numbers", () => {
    const nums1 = [1, 2, 4, 5, 7];
    expect(missingNumbers(nums1)).toEqual([3, 6]);

    const nums2 = [3, 1, 2, 5];
    expect(missingNumbers(nums2)).toEqual([4, 6]);

    const nums3 = [1, 2, 3];
    expect(missingNumbers(nums3)).toEqual([4, 5]);
  });

  test("should handle missing numbers at the beginning or end", () => {
    const nums4 = [2, 3, 4, 5];
    expect(missingNumbers(nums4)).toEqual([1, 6]);

    const nums5 = [1, 2, 3, 4];
    expect(missingNumbers(nums5)).toEqual([5, 6]);
  });

  test("should handle missing numbers in the middle", () => {
    const nums6 = [1, 2, 6, 5];
    expect(missingNumbers(nums6)).toEqual([3, 4]);

    const nums7 = [1, 5, 4];
    expect(missingNumbers(nums7)).toEqual([2, 3]);
  });

  test("should handle edge case with empty list", () => {
    const nums8: number[] = [];
    expect(missingNumbers(nums8)).toEqual([1, 2]);
  });
});

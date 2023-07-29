import { majorityElement } from "./majorityElement";

describe("majorityElement", () => {
  test("should return the majority element when it exists", () => {
    const arr1 = [3, 2, 2, 1, 2];
    expect(majorityElement(arr1)).toBe(2);

    const arr2 = [3, 4, 2, 2, 1, 2, 2];
    expect(majorityElement(arr2)).toBe(2);

    const arr3 = [7, 5, 7, 10, 7];
    expect(majorityElement(arr3)).toBe(7);
  });

  test("should handle majority elements where some have multiple instances but are not majority element", () => {
    const arr4 = [1, 2, 2, 1, 2, 1, 2];
    expect(majorityElement(arr4)).toBe(2);

    const arr5 = [2, 2, 1, 2, 1, 2, 1, 2];
    expect(majorityElement(arr5)).toBe(2);
  });

  test("should handle single-element array", () => {
    const arr6 = [5];
    expect(majorityElement(arr6)).toBe(5);
  });

  test("should handle majority element at the beginning", () => {
    const arr7 = [10, 10, 10, 5, 5];
    expect(majorityElement(arr7)).toBe(10);
  });

  test("should handle majority element at the end", () => {
    const arr8 = [5, 5, 10, 10, 10];
    expect(majorityElement(arr8)).toBe(10);
  });
});

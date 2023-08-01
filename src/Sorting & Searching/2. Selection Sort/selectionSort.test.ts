import { selectionSort } from "./selectionSort";

describe("selectionSort", () => {
  test("should return an empty array when given an empty array", () => {
    expect(selectionSort([])).toEqual([]);
  });

  test("should return the sorted array in ascending order", () => {
    expect(selectionSort([5, 3, 8, 1, 2, 7, 4, 6])).toEqual([
      1, 2, 3, 4, 5, 6, 7, 8,
    ]);
    expect(selectionSort([10, 5, 2, 8, 3, 6])).toEqual([2, 3, 5, 6, 8, 10]);
  });

  test("should return the input array if it is already sorted", () => {
    expect(selectionSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
    expect(selectionSort([2, 4, 6, 8, 10])).toEqual([2, 4, 6, 8, 10]);
  });

  test("should correctly sort arrays with negative numbers", () => {
    expect(selectionSort([-5, -2, -8, -1, -3])).toEqual([-8, -5, -3, -2, -1]);
    expect(selectionSort([-10, -5, -2, -8, -3, -6])).toEqual([
      -10, -8, -6, -5, -3, -2,
    ]);
  });
});

import { Sorter } from "./quickSort";

describe("Sorter class - get sortedData method", () => {
  test("Case 1 - get sortedData should return the sorted array in ascending order", () => {
    const arr1 = [9, 8, 10, 1, 5, 12];
    const sorter = new Sorter(arr1);
    sorter.quickSort(0, arr1.length - 1);
    expect(sorter.sortedData).toEqual([1, 5, 8, 9, 10, 12]);
  });

  test("Case 2 - get sortedData should handle an already sorted array", () => {
    const arr2 = [1, 2, 3, 4, 5];
    const sorter = new Sorter(arr2);
    sorter.quickSort(0, arr2.length - 1);
    expect(sorter.sortedData).toEqual([1, 2, 3, 4, 5]);
  });

  test("Case 3 - get sortedData should handle an array with duplicate elements", () => {
    const arr3 = [3, 2, 1, 2, 3, 1];
    const sorter = new Sorter(arr3);
    sorter.quickSort(0, arr3.length - 1);
    expect(sorter.sortedData).toEqual([1, 1, 2, 2, 3, 3]);
  });

  test("Case 4 - get sortedData should handle an array with negative elements", () => {
    const arr4 = [-5, -2, -8, -1, -3];
    const sorter = new Sorter(arr4);
    sorter.quickSort(0, arr4.length - 1);
    expect(sorter.sortedData).toEqual([-8, -5, -3, -2, -1]);
  });

  test("Case 5 - get sortedData should handle an array with only one element", () => {
    const arr5 = [42];
    const sorter = new Sorter(arr5);
    sorter.quickSort(0, arr5.length - 1);
    expect(sorter.sortedData).toEqual([42]);
  });

  test("Case 6 - get sortedData should handle an empty array", () => {
    const arr6: number[] = [];
    const sorter = new Sorter(arr6);
    sorter.quickSort(0, arr6.length - 1);
    expect(sorter.sortedData).toEqual([]);
  });
});

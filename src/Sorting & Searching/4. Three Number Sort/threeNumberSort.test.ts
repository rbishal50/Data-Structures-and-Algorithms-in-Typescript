import { threeNumberSort } from "./threeNumberSort";

describe("Sort Array by Desired Order", () => {
  test("Case 1", () => {
    const array = [2, 2, 3, 1, 3, 2, 1];
    const desiredOrder = [1, 2, 3];
    threeNumberSort(array, desiredOrder);
    expect(array).toEqual([1, 1, 2, 2, 2, 3, 3]);
  });

  test("Case 2", () => {
    const array = [3, 3, 3, 2, 1, 2];
    const desiredOrder = [3, 2, 1];
    threeNumberSort(array, desiredOrder);
    expect(array).toEqual([3, 3, 3, 2, 2, 1]);
  });

  test("Case 3", () => {
    const array = [1, 0, 0, -1, -1, 0, 1, 1];
    const desiredOrder = [0, 1, -1];
    threeNumberSort(array, desiredOrder);
    expect(array).toEqual([0, 0, 0, 1, 1, 1, -1, -1]);
  });

  test("Case 4", () => {
    const array = [9, 9, 9, 7, 9, 7, 9, 9, 7, 9];
    const desiredOrder = [7, 11, 9];
    threeNumberSort(array, desiredOrder);
    expect(array).toEqual([7, 7, 7, 9, 9, 9, 9, 9, 9, 9]);
  });

  test("Case 5", () => {
    const array = [6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    const desiredOrder = [4, 5, 6];
    threeNumberSort(array, desiredOrder);
    expect(array).toEqual([6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
  });

  test("Case 6", () => {
    const array: number[] = [];
    const desiredOrder = [0, 7, 9];
    threeNumberSort(array, desiredOrder);
    expect(array).toEqual([]);
  });
});

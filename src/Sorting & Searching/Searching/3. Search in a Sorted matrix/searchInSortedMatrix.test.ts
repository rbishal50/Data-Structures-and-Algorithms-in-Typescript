import { searchInSortedMatrix } from "./searchInSortedMatrix";

describe("searchInSortedMatrix", () => {
  const matrix = [
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30],
  ];

  test("should return the row and column indices of the target integer in the matrix", () => {
    expect(searchInSortedMatrix(matrix, 1)).toEqual([0, 0]);
    expect(searchInSortedMatrix(matrix, 9)).toEqual([2, 2]);
    expect(searchInSortedMatrix(matrix, 10)).toEqual([3, 0]);
    expect(searchInSortedMatrix(matrix, 23)).toEqual([4, 2]);
    expect(searchInSortedMatrix(matrix, 30)).toEqual([4, 4]);
  });

  test("should return [-1, -1] if the target integer is not found in the matrix", () => {
    expect(searchInSortedMatrix(matrix, 20)).toEqual([-1, -1]);
    expect(searchInSortedMatrix(matrix, 27)).toEqual([-1, -1]);
    expect(searchInSortedMatrix(matrix, 0)).toEqual([-1, -1]);
  });
});

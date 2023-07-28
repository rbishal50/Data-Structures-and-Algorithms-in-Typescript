import { spiralTraverse } from "./spiralTraverse";

describe("spiralTraverse", () => {
  test("should return one-dimensional array of elements in spiral order", () => {
    const matrix1 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(spiralTraverse(matrix1)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);

    const matrix2 = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    expect(spiralTraverse(matrix2)).toEqual([
      1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10,
    ]);

    const matrix3 = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [10, 11, 12],
    ];
    expect(spiralTraverse(matrix3)).toEqual([
      1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8,
    ]);
  });

  test("should return one-dimensional array for square-shaped matrix", () => {
    const squareMatrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    expect(spiralTraverse(squareMatrix)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test("should handle single row matrix (edge case)", () => {
    const singleRowMatrix = [[1, 2, 3, 4, 5]];
    expect(spiralTraverse(singleRowMatrix)).toEqual([1, 2, 3, 4, 5]);
  });

  test("should handle single column matrix (edge case)", () => {
    const singleColumnMatrix = [[1], [2], [3], [4], [5]];
    expect(spiralTraverse(singleColumnMatrix)).toEqual([1, 2, 3, 4, 5]);
  });
});

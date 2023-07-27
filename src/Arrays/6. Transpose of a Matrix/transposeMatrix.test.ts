import { transposeMatrix } from "./transposeMatrix";

describe("transposeMatrix", () => {
  describe("Cases with square matrices", () => {
    test("should correctly transpose square matrices", () => {
      const matrix1 = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ];
      expect(transposeMatrix(matrix1)).toEqual([
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
      ]);

      const matrix2 = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90],
      ];
      expect(transposeMatrix(matrix2)).toEqual([
        [10, 40, 70],
        [20, 50, 80],
        [30, 60, 90],
      ]);
    });
  });

  describe("Cases with non-square matrices", () => {
    test("should correctly transpose non-square matrices", () => {
      const matrix3 = [
        [1, 2],
        [3, 4],
        [5, 6],
      ];
      expect(transposeMatrix(matrix3)).toEqual([
        [1, 3, 5],
        [2, 4, 6],
      ]);

      const matrix4 = [
        [11, 12, 13],
        [14, 15, 16],
      ];
      expect(transposeMatrix(matrix4)).toEqual([
        [11, 14],
        [12, 15],
        [13, 16],
      ]);
    });
  });

  describe("Cases with matrices containing negative integers", () => {
    test("should handle matrices with negative integers", () => {
      const matrix5 = [
        [1, 2, -3],
        [-4, 5, 6],
        [7, -8, 9],
      ];
      expect(transposeMatrix(matrix5)).toEqual([
        [1, -4, 7],
        [2, 5, -8],
        [-3, 6, 9],
      ]);
    });
  });

  describe("Cases with matrices containing duplicate values", () => {
    test("should handle matrices with duplicate values", () => {
      const matrix6 = [
        [1, 2, 1],
        [2, 3, 2],
        [1, 2, 1],
      ];
      expect(transposeMatrix(matrix6)).toEqual([
        [1, 2, 1],
        [2, 3, 2],
        [1, 2, 1],
      ]);
    });
  });
});

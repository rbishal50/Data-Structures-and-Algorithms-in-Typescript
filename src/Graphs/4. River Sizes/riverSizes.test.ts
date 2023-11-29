import { riverSizes } from "./riverSizes";

describe("riverSizes", () => {
  test("returns an empty array for an empty matrix", () => {
    const matrix: number[][] = [];
    const result = riverSizes(matrix);
    expect(result).toEqual([]);
  });

  test("returns river sizes for a matrix with single item", () => {
    const matrix = [[1]];
    const result = riverSizes(matrix);
    expect(result).toEqual([1]);
  });

  test("returns river sizes for a simple matrix", () => {
    const matrix = [
      [1, 0, 0, 1, 0],
      [1, 0, 1, 0, 0],
      [0, 0, 1, 0, 1],
      [1, 0, 1, 0, 1],
      [1, 0, 1, 1, 0],
    ];
    const result = riverSizes(matrix);
    expect(result).toEqual([2, 1, 5, 2, 2]);
  });

  test("returns river sizes for a larger matrix", () => {
    const matrix = [
      [1, 0, 0, 0, 0, 0, 1],
      [0, 1, 0, 0, 0, 1, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 0, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0],
      [1, 0, 0, 0, 0, 0, 1],
    ];
    const result = riverSizes(matrix);
    expect(result).toEqual([1, 1, 1, 1, 7, 1, 1, 1, 1]);
  });

  test("returns river sizes for a matrix with isolated rivers", () => {
    const matrix = [
      [1, 0, 0, 0, 1],
      [0, 0, 1, 0, 0],
      [0, 1, 0, 1, 0],
    ];
    const result = riverSizes(matrix);
    expect(result).toEqual([1, 1, 1, 1, 1]);
  });

  test("returns river sizes for a matrix with single row", () => {
    const matrix = [[1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0]];
    const result = riverSizes(matrix);
    expect(result).toEqual([3, 2, 1]);
  });
});

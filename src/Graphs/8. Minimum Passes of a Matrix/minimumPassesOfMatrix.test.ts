import { minimumPassesOfMatrix } from "./minimumPassesOfMatrix";

describe("minimumPassesOfMatrix", () => {
  it("should return correct passes for a normal matrix", () => {
    const matrix = [
      [0, -1, -3, 2, 0],
      [1, -2, -5, -1, -3],
      [3, 0, 0, -4, -1],
    ];
    expect(minimumPassesOfMatrix(matrix)).toBe(3);
  });

  it("should return -1 for a matrix that can not be converted", () => {
    const matrix = [
      [-1, 0, 3],
      [0, -5, -6],
    ];
    expect(minimumPassesOfMatrix(matrix)).toBe(-1);
  });

  it("should handle a sigle row-column matrix", () => {
    const matrix = [[2]];
    expect(minimumPassesOfMatrix(matrix)).toBe(0);
  });

  it("should handle a complex matrix", () => {
    const matrix = [
      [-2, -3, -4, -1, -9],
      [-4, -3, -4, -1, -2],
      [-6, -7, -2, -1, -1],
      [0, 0, 0, 0, -3],
      [1, -2, -3, -6, -1],
    ];
    expect(minimumPassesOfMatrix(matrix)).toBe(12);
  });
});

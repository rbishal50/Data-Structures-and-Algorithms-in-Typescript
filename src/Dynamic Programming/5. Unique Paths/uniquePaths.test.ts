import { uniquePaths } from "./uniquePaths";

describe("uniquePaths", () => {
  test("1x5 grid should return 1", () => {
    expect(uniquePaths(1, 5)).toBe(1);
  });

  test("5x1 grid should return 1", () => {
    expect(uniquePaths(5, 1)).toBe(1);
  });

  test("3x2 grid should return 3", () => {
    expect(uniquePaths(3, 2)).toBe(3);
  });

  test("4x4 grid should return 20", () => {
    expect(uniquePaths(4, 4)).toBe(20);
  });

  test("2x3 grid should return 3", () => {
    expect(uniquePaths(2, 3)).toBe(3);
  });

  test("6x6 grid should return 252", () => {
    expect(uniquePaths(6, 6)).toBe(252);
  });
});

import { uniquePathsAlternative } from "./uniquePathsAlternative";

describe("uniquePathsAlternative", () => {
  test("1x5 grid should return 1", () => {
    expect(uniquePathsAlternative(1, 5)).toBe(1);
  });

  test("5x1 grid should return 1", () => {
    expect(uniquePathsAlternative(5, 1)).toBe(1);
  });

  test("3x2 grid should return 3", () => {
    expect(uniquePathsAlternative(3, 2)).toBe(3);
  });

  test("4x4 grid should return 20", () => {
    expect(uniquePathsAlternative(4, 4)).toBe(20);
  });

  test("2x3 grid should return 3", () => {
    expect(uniquePathsAlternative(2, 3)).toBe(3);
  });

  test("6x6 grid should return 252", () => {
    expect(uniquePathsAlternative(6, 6)).toBe(252);
  });
});

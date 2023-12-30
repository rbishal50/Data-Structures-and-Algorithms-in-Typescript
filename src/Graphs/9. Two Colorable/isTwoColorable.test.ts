import { istTwoColorable } from "./isTwoColorable";

describe("istTwoColorable", () => {
  it("should return true for edges with two-colorable nodes", () => {
    const edges = [
      [1, 3],
      [0, 2],
      [1, 3],
      [0, 2],
    ];
    expect(istTwoColorable(edges)).toBe(true);
  });

  it("should return false for edges with atleast no two-colorable nodes", () => {
    const edges = [
      [1, 2],
      [0, 2],
      [0, 1],
    ];
    expect(istTwoColorable(edges)).toBe(false);
  });

  it("should return false for nodes with loops", () => {
    const edges = [
      [1, 2],
      [1, 2],
    ];
    expect(istTwoColorable(edges)).toBe(false);
  });

  it("should handle single node", () => {
    const edges = [[1]];
    expect(istTwoColorable(edges)).toBe(true);
  });
});

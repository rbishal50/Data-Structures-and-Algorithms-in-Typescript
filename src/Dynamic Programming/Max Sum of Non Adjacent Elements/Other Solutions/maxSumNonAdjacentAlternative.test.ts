import { maxSumNonAdjacentAlternative } from "./maxSumNonAdjacentAlternative";

describe("maxSumNonAdjacent", () => {
  it("should return 0 for an empty array", () => {
    expect(maxSumNonAdjacentAlternative([])).toBe(0);
  });

  it("should return the single element for an array with only one element", () => {
    expect(maxSumNonAdjacentAlternative([5])).toBe(5);
  });

  it("should return the maximum of two non-adjacent elements for an array with two elements", () => {
    expect(maxSumNonAdjacentAlternative([4, 9])).toBe(9);
  });

  it("should return the maximum sum of non-adjacent elements for a larger array", () => {
    expect(maxSumNonAdjacentAlternative([1, 2, 3, 4, 5])).toBe(9);
    expect(maxSumNonAdjacentAlternative([5, 1, 1, 5])).toBe(10);
    expect(maxSumNonAdjacentAlternative([2, 7, 9, 3, 1])).toBe(12);
    expect(maxSumNonAdjacentAlternative([5, 1, 2, 6, 20, 2])).toBe(27);
  });
});

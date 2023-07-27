import { smallestDifference } from "./smallestDifference";

describe("smallestDifference", () => {
  it("should return the pair of elements with smallest difference", () => {
    expect(smallestDifference([1, 2, 3], [11, 5, 16])).toEqual([3, 5]);
  });

  it("should handle arrays of different lengths", () => {
    expect(smallestDifference([1, 2], [13, 4, 5])).toEqual([2, 4]);
  });

  it("should handle arrays with negative numbers", () => {
    expect(smallestDifference([-1, 0, 1], [-2, 0, 2])).toEqual([0, 0]);
  });

  it("should handle arrays with duplicate elements", () => {
    expect(smallestDifference([1, 2, 2], [3, 4, 4])).toEqual([2, 3]);
  });
});

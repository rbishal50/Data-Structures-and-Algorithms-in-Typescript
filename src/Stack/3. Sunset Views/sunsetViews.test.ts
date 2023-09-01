import { sunsetViews, Direction } from "./sunsetViews";

describe("sunsetViews", () => {
  it("should return indices of buildings that can see the sunset from the East", () => {
    expect(sunsetViews([10, 11], Direction.East)).toEqual([1]);
    expect(sunsetViews([11, 10], Direction.East)).toEqual([0, 1]);
    expect(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.East)).toEqual([
      1, 3, 6, 7,
    ]);
    expect(sunsetViews([1, 2, 3, 4, 5, 6], Direction.East)).toEqual([5]);
  });

  it("should return indices of buildings that can see the sunset from the West", () => {
    expect(sunsetViews([10, 11], Direction.West)).toEqual([0, 1]);
    expect(sunsetViews([11, 10], Direction.West)).toEqual([0]);
    expect(sunsetViews([3, 5, 4, 4, 3, 1, 3, 2], Direction.West)).toEqual([
      0, 1,
    ]);
    expect(sunsetViews([1, 2, 3, 4, 5, 6], Direction.West)).toEqual([
      0, 1, 2, 3, 4, 5,
    ]);
  });

  it("should handle an empty array", () => {
    expect(sunsetViews([], Direction.East)).toEqual([]);
    expect(sunsetViews([], Direction.West)).toEqual([]);
  });

  it("should handle a single building", () => {
    expect(sunsetViews([5], Direction.East)).toEqual([0]);
    expect(sunsetViews([5], Direction.West)).toEqual([0]);
  });

  it("should handle buildings with the same height", () => {
    expect(sunsetViews([1, 1, 1, 1], Direction.East)).toEqual([3]);
    expect(sunsetViews([1, 1, 1, 1], Direction.West)).toEqual([0]);
  });
});

import { hasSingleCycle } from "./hasSingleCycle";

describe("hasSingleCycle", () => {
  it("should return true for a single cycle", () => {
    expect(hasSingleCycle([2, 2, -1])).toBe(true);
    expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).toBe(true);
    expect(hasSingleCycle([1, 1, 1, 1, 1])).toBe(true);
    expect(hasSingleCycle([2, 3, 1, -4, -4, 2])).toBe(true);
    expect(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 908, -26])).toBe(true);
  });

  it("should return false for a non-single cycle", () => {
    expect(hasSingleCycle([0, 1, 1, 1, 1])).toBe(false);
    expect(hasSingleCycle([2, 2, -1, 2])).toBe(false);
    expect(hasSingleCycle([1, 1, 0, 1, 1])).toBe(false);
    expect(hasSingleCycle([1, 1, 1, 1, 2])).toBe(false);
    expect(hasSingleCycle([10, 11, -6, -23, -2, 3, 88, 909, -26])).toBe(false);
  });
});

import { nextGreaterElement } from "./nextGreaterElement";

describe("nextGreaterElement", () => {
  it("should return the next greater element for each element in the array", () => {
    expect(nextGreaterElement([4, 2, 5, 7])).toEqual([5, 5, 7, -1]);
    expect(nextGreaterElement([3, 8, 4, 1])).toEqual([8, -1, 8, 3]);
    expect(nextGreaterElement([1, 2, 3, 4])).toEqual([2, 3, 4, -1]);
    expect(nextGreaterElement([7, 6, 4, 5])).toEqual([-1, 7, 5, 7]);
  });

  it("should handle empty input array", () => {
    expect(nextGreaterElement([])).toEqual([]);
  });

  it("should handle arrays with a single element", () => {
    expect(nextGreaterElement([42])).toEqual([-1]);
    expect(nextGreaterElement([0])).toEqual([-1]);
  });

  it("should handle arrays with repeated elements", () => {
    expect(nextGreaterElement([1, 1, 1, 2, 2])).toEqual([2, 2, 2, -1, -1]);
    expect(nextGreaterElement([5, 5, 5, 5, 5])).toEqual([-1, -1, -1, -1, -1]);
  });
});

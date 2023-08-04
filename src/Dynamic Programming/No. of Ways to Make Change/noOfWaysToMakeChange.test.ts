import { noOfWaysToMakeChange } from "./noOfWaysToMakeChange";

describe("noOfWaysToMakeChange", () => {
  it("should return the correct number of ways to make change for the given amount", () => {
    expect(noOfWaysToMakeChange(6, [1, 5])).toBe(2);
    expect(noOfWaysToMakeChange(0, [1, 2, 3])).toBe(1);
    expect(noOfWaysToMakeChange(5, [1, 2, 3])).toBe(5); // 1+1+1+1+1, 1+1+1+2, 1+2+2, 1+1+3, 2+3
    expect(noOfWaysToMakeChange(4, [1, 2, 3])).toBe(4); // 1+1+1+1, 1+1+2, 2+2, 1+3
    expect(noOfWaysToMakeChange(10, [1, 2, 5])).toBe(10); // 1+1+1+1+1+1+1+1+1+1, 1+1+1+1+1+1+1+1+2, 1+1+1+1+2+2+2, 2+2+2+2+2, 1+1+1+1+1+1+1+5, 1+1+2+2+2+2, 5+5, 1+1+1+1+1+5, 1+1+1+2+5
    expect(noOfWaysToMakeChange(25, [1, 5, 10, 25])).toBe(13); // Various combinations
  });

  it("should return 0 if the input array is empty", () => {
    expect(noOfWaysToMakeChange(10, [])).toBe(0);
  });
});

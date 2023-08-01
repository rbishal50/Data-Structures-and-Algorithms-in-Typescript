import { threeLargestNumbers } from "./threeLargestNumbers";

describe("threeLargestNumbers", () => {
  it("should return the three largest integers in sorted order", () => {
    const input1 = [10, 5, 9, 11, 12];
    expect(threeLargestNumbers(input1)).toEqual([10, 11, 12]);

    const input2 = [7, 1, 4, 2, 9];
    expect(threeLargestNumbers(input2)).toEqual([4, 7, 9]);

    const input3 = [20, 100, 101, 50];
    expect(threeLargestNumbers(input3)).toEqual([50, 100, 101]);

    const input4 = [1, 2, 3, 4, 5];
    expect(threeLargestNumbers(input4)).toEqual([3, 4, 5]);

    const input5 = [500, 900, 200, 2000];
    expect(threeLargestNumbers(input5)).toEqual([500, 900, 2000]);
  });

  it("should handle negative integers", () => {
    const input1 = [-10, -5, -9, -10, -12];
    expect(threeLargestNumbers(input1)).toEqual([-10, -9, -5]);

    const input2 = [-7, -1, -4, -2, -9];
    expect(threeLargestNumbers(input2)).toEqual([-4, -2, -1]);

    const input3 = [-5, -6, -7, -8];
    expect(threeLargestNumbers(input3)).toEqual([-7, -6, -5]);

    const input4 = [-100, 50, -150, 200];
    expect(threeLargestNumbers(input4)).toEqual([-100, 50, 200]);
  });

  it("should return the three largest integers for multiple instances", () => {
    const input1 = [5, 4, 1, 5, 6];
    expect(threeLargestNumbers(input1)).toEqual([5, 5, 6]);

    const input2 = [100, 200, 50, 200, 25];
    expect(threeLargestNumbers(input2)).toEqual([100, 200, 200]);
  });

  it("should handle large arrays", () => {
    const largeArray = Array.from({ length: 10 ** 5 }, (_, index) => index + 1);
    expect(threeLargestNumbers(largeArray)).toEqual([
      10 ** 5 - 2,
      10 ** 5 - 1,
      10 ** 5,
    ]);
  });
});

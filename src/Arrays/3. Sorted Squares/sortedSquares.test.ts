import { sortedSquares } from "./sortedSquares";

describe("sortedSquares", () => {
  describe("Cases with positive integers", () => {
    test("should return the squares of sorted positive integers in ascending order", () => {
      expect(sortedSquares([1, 2, 3, 4, 5])).toEqual([1, 4, 9, 16, 25]);
      expect(sortedSquares([2, 4, 6, 8, 10])).toEqual([4, 16, 36, 64, 100]);
    });
  });

  describe("Cases with negative integers", () => {
    test("should return the squares of sorted negative integers in ascending order", () => {
      expect(sortedSquares([-10, -5, -2, -1])).toEqual([1, 4, 25, 100]);
      expect(sortedSquares([-7, -4, -1, 0, 3, 8])).toEqual([
        0, 1, 9, 16, 49, 64,
      ]);
    });
  });

  describe("Cases with a mix of positive and negative integers", () => {
    test("should return the squares of sorted mixed integers in ascending order", () => {
      expect(sortedSquares([-5, -3, -1, 2, 4, 6])).toEqual([
        1, 4, 9, 16, 25, 36,
      ]);
      expect(sortedSquares([-7, -5, 0, 3, 8])).toEqual([0, 9, 25, 49, 64]);
    });
  });

  describe("Cases with a single element", () => {
    test("should return the square of the single element in ascending order", () => {
      expect(sortedSquares([0])).toEqual([0]);
      expect(sortedSquares([5])).toEqual([25]);
      expect(sortedSquares([-3])).toEqual([9]);
    });
  });
});

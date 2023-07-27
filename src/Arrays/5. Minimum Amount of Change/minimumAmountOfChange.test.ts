import { minimumAmountOfChange } from "./minimumAmountOfChange"; // Replace 'your-file' with the correct file path

describe("minimumAmountOfChange", () => {
  describe("Cases with non-empty coin arrays", () => {
    test("should return the minimum amount of change that cannot be created", () => {
      expect(minimumAmountOfChange([5, 2, 1])).toBe(4);
      expect(minimumAmountOfChange([10, 25, 50])).toBe(1);
      expect(minimumAmountOfChange([6, 3, 4, 1])).toBe(2);
      expect(minimumAmountOfChange([5, 5, 20, 10])).toBe(1);
    });
  });

  describe("Cases with an empty coin array", () => {
    test("should return 1 when no coins are available", () => {
      expect(minimumAmountOfChange([])).toBe(1);
    });
  });

  describe("Cases with a single coin value", () => {
    test("should return the next consecutive number when only one coin is available", () => {
      expect(minimumAmountOfChange([1])).toBe(2);
      expect(minimumAmountOfChange([10])).toBe(1);
      expect(minimumAmountOfChange([100])).toBe(1);
    });
  });

  describe("Cases with duplicate coin values", () => {
    test("should handle coins with duplicate values", () => {
      expect(minimumAmountOfChange([2, 2, 2, 2])).toBe(1);
      expect(minimumAmountOfChange([10, 10, 10, 10])).toBe(1);
      expect(minimumAmountOfChange([1, 1, 1, 1, 1, 1, 1, 1])).toBe(9);
    });
  });
});

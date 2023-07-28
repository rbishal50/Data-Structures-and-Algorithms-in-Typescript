import { isMonotonic } from "./isMonotonic"; // Replace 'your-file' with the correct file path

describe("isMonotonic", () => {
  describe("Cases with empty arrays and single elements", () => {
    test("should return true for empty arrays", () => {
      expect(isMonotonic([])).toBe(true);
    });

    test("should return true for arrays with a single element", () => {
      expect(isMonotonic([5])).toBe(true);
      expect(isMonotonic([-10])).toBe(true);
    });
  });

  describe("Cases with non-increasing arrays", () => {
    test("should return true for arrays with non-increasing elements", () => {
      const array1 = [5, 4, 3, 3, 2, 1];
      expect(isMonotonic(array1)).toBe(true);

      const array2 = [20, 15, 10, 10, 8, 5];
      expect(isMonotonic(array2)).toBe(true);
    });

    test("should return true for arrays with all elements equal", () => {
      const array3 = [7, 7, 7, 7];
      expect(isMonotonic(array3)).toBe(true);

      const array4 = [0, 0, 0, 0, 0];
      expect(isMonotonic(array4)).toBe(true);
    });
  });

  describe("Cases with non-decreasing arrays", () => {
    test("should return true for arrays with non-decreasing elements", () => {
      const array5 = [-3, 0, 4, 4, 7, 10];
      expect(isMonotonic(array5)).toBe(true);

      const array6 = [-2, -2, -1, 0, 0, 5, 5, 8, 8];
      expect(isMonotonic(array6)).toBe(true);
    });
  });

  describe("Cases with mixed monotonicity", () => {
    test("should return false for arrays with both increasing and decreasing elements", () => {
      const array7 = [3, 1, 4, 6, 2];
      expect(isMonotonic(array7)).toBe(false);

      const array8 = [9, 5, 2, 2, 7];
      expect(isMonotonic(array8)).toBe(false);
    });
  });
});

import { firstDuplicateValue } from "./firstDuplicateValue";

describe("firstDuplicateValue", () => {
  test("should return the first integer that appears more than once", () => {
    const array1 = [2, 3, 1, 4, 3, 2];
    expect(firstDuplicateValue(array1)).toBe(3);

    const array2 = [1, 2, 3, 4, 5, 6];
    expect(firstDuplicateValue(array2)).toBe(-1);

    const array3 = [1, 2, 3, 1, 4, 5, 3];
    expect(firstDuplicateValue(array3)).toBe(1);

    const array4 = [5, 3, 7, 8, 1, 4, 7];
    expect(firstDuplicateValue(array4)).toBe(7);
  });

  test("should return -1 if no integer appears more than once", () => {
    const array5 = [1, 2, 3, 4, 5];
    expect(firstDuplicateValue(array5)).toBe(-1);

    const array6 = [6, 7, 8, 9, 10];
    expect(firstDuplicateValue(array6)).toBe(-1);
  });

  test("should handle arrays with repeated elements", () => {
    const array7 = [2, 4, 2, 4];
    expect(firstDuplicateValue(array7)).toBe(2);

    const array8 = [3, 5, 1, 3, 5, 1];
    expect(firstDuplicateValue(array8)).toBe(3);
  });

  test("should handle arrays with only one element", () => {
    const array9 = [5];
    expect(firstDuplicateValue(array9)).toBe(-1);

    const array10 = [3];
    expect(firstDuplicateValue(array10)).toBe(-1);
  });
});

import { longestPeakLength } from "./longestPeakLength";

describe("longestPeakLength", () => {
  test("should return the length of the longest peak", () => {
    const array1 = [1, 4, 10, 2];
    expect(longestPeakLength(array1)).toBe(4);

    const array2 = [4, 11, 10];
    expect(longestPeakLength(array2)).toBe(3);

    const array3 = [1, 2, 3, 0];
    expect(longestPeakLength(array3)).toBe(4);

    const array4 = [1, 2, -5];
    expect(longestPeakLength(array4)).toBe(3);

    const array5 = [1, 3, 20, 4, 1, 0, 10, 2, 4, 3, 2, 1];
    expect(longestPeakLength(array5)).toBe(6);

    const array6 = [1, 2, 3, 3, 4, 0, 10, 9, 8, 7, 6, 5];
    expect(longestPeakLength(array6)).toBe(7);

    const array7 = [1, 2, 3, 4, 5, 6, 1];
    expect(longestPeakLength(array7)).toBe(7);

    const array8 = [1, 3, 2, 1];
    expect(longestPeakLength(array8)).toBe(4);
  });

  test("should return 0 if there are no peaks in the array", () => {
    const array9 = [1, 2, 3, 4, 5, 6];
    expect(longestPeakLength(array9)).toBe(0);

    const array10 = [6, 5, 4, 3, 2, 1];
    expect(longestPeakLength(array10)).toBe(0);

    const array11 = [1, 2, 3, 3, 4, 5, 6];
    expect(longestPeakLength(array11)).toBe(0);
  });
});

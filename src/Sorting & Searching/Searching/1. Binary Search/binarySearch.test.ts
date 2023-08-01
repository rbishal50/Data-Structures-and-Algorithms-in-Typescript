import { binarySearch } from "./binarySearch";

describe("Binary Search", () => {
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];

  test("Case 1 - Search for an existing element in the array", () => {
    expect(binarySearch(sortedArray, 7)).toBe(3);
  });

  test("Case 2 - Search for the first element in the array", () => {
    expect(binarySearch(sortedArray, 1)).toBe(0);
  });

  test("Case 3 - Search for the last element in the array", () => {
    expect(binarySearch(sortedArray, 15)).toBe(7);
  });

  test("Case 4 - Search for a non-existing element in the array", () => {
    expect(binarySearch(sortedArray, 6)).toBe(-1);
  });

  test("Case 5 - Search for an element in an empty array", () => {
    expect(binarySearch([], 3)).toBe(-1);
  });
});

import { arrayOfProducts } from "./arrayOfProducts";

describe("arrayOfProducts", () => {
  test("should return the array of products of every other number", () => {
    const array1 = [1, 2, 3, 4];
    expect(arrayOfProducts(array1)).toEqual([24, 12, 8, 6]);

    const array2 = [5, 2, 7, 3];
    expect(arrayOfProducts(array2)).toEqual([42, 105, 30, 70]);

    const array3 = [1, 1, 1, 1, 1];
    expect(arrayOfProducts(array3)).toEqual([1, 1, 1, 1, 1]);

    const array4 = [2, 3, 4, 5, 6];
    expect(arrayOfProducts(array4)).toEqual([360, 240, 180, 144, 120]);
  });

  test("should handle negative numbers", () => {
    const array5 = [-1, 2, -3, 4, -5];
    expect(arrayOfProducts(array5)).toEqual([120, -60, 40, -30, 24]);

    const array6 = [5, -4, 3, -2, 1];
    expect(arrayOfProducts(array6)).toEqual([24, -30, 40, -60, 120]);
  });

  test("should handle arrays with repeated elements", () => {
    const array7 = [3, 3, 3, 3];
    expect(arrayOfProducts(array7)).toEqual([27, 27, 27, 27]);

    const array8 = [2, 4, 2, 4];
    expect(arrayOfProducts(array8)).toEqual([32, 16, 32, 16]);
  });

  test("should handle arrays with zeros", () => {
    const array9 = [1, 0, 2, 0, 3];
    expect(arrayOfProducts(array9)).toEqual([0, 0, 0, 0, 0]);

    const array10 = [0, 4, 5, 0];
    expect(arrayOfProducts(array10)).toEqual([0, 0, 0, 0]);
  });
});

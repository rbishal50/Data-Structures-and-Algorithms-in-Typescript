import { bestDishPair } from "./bestDishPair";

describe("bestDishPair", () => {
  test("should return the best possible pairing of sweet and savory dishes", () => {
    const dishes1 = [2, 4, -6, -8, 12];
    const targetFlavorProfile1 = 0;
    expect(bestDishPair(dishes1, targetFlavorProfile1)).toEqual([-6, 4]);

    const dishes2 = [3, -5, 8, -2, -9];
    const targetFlavorProfile2 = 2;
    expect(bestDishPair(dishes2, targetFlavorProfile2)).toEqual([-2, 3]);

    const dishes3 = [1, -3, 5, -7, 9];
    const targetFlavorProfile3 = 4;
    expect(bestDishPair(dishes3, targetFlavorProfile3)).toEqual([-3, 5]);
  });

  test("should handle edge case with no valid solution", () => {
    const dishes4 = [3, 5, 8, 2, 9];
    const targetFlavorProfile4 = 0;
    expect(bestDishPair(dishes4, targetFlavorProfile4)).toEqual([0, 0]);

    const dishes5 = [-1, -2, -3, -4, -5];
    const targetFlavorProfile5 = 7;
    expect(bestDishPair(dishes5, targetFlavorProfile5)).toEqual([0, 0]);
  });

  test("should handle edge case with only one dish", () => {
    const dishes6 = [2];
    const targetFlavorProfile6 = 2;
    expect(bestDishPair(dishes6, targetFlavorProfile6)).toEqual([0, 0]);
  });

  test("should handle edge case with two dishes", () => {
    const dishes7 = [3, -5];
    const targetFlavorProfile7 = 0;
    expect(bestDishPair(dishes7, targetFlavorProfile7)).toEqual([-5, 3]);

    const dishes8 = [-2, 1];
    const targetFlavorProfile8 = 0;
    expect(bestDishPair(dishes8, targetFlavorProfile8)).toEqual([-2, 1]);
  });
});

import { minNoOfCoinsToMakeChange } from "./minNoOfCoinsToMakeChange";

describe("minNoOfCoinsToMakeChange", () => {
  it("should return the smallest number of coins needed to make change for the target amount", () => {
    expect(minNoOfCoinsToMakeChange(0, [1, 5, 10])).toBe(0); // No change needed
    expect(minNoOfCoinsToMakeChange(5, [1, 5, 10])).toBe(1); // 1 coin of 5 needed
    expect(minNoOfCoinsToMakeChange(6, [1, 5, 10])).toBe(2); // 1 coin of 5 + 1 coin of 1 needed
    expect(minNoOfCoinsToMakeChange(11, [1, 5, 10])).toBe(2); // 1 coin of 10 + 1 coin of 1 needed
    expect(minNoOfCoinsToMakeChange(25, [1, 5, 10])).toBe(3); // 2 coins of 10 + 1 coin of 5 needed
    expect(minNoOfCoinsToMakeChange(25, [1, 7, 10])).toBe(4); // 3 coins of 7 + 1 coin of 1 needed
    expect(minNoOfCoinsToMakeChange(7, [2, 4])).toBe(-1); // Impossible to make change
    expect(minNoOfCoinsToMakeChange(30, [5, 10])).toBe(3); // 3 coins of 10 needed
  });
});

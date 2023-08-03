import { blackjackProbability } from "./blackjackProbability";

describe("blackjackProbability", () => {
  it("should return the correct probability of busting", () => {
    expect(blackjackProbability(21, 16)).toBe(0.5);
    expect(blackjackProbability(21, 17)).toBe(0.0);
    expect(blackjackProbability(21, 20)).toBe(0.0);
    expect(blackjackProbability(21, 15)).toBe(0.45);
    expect(blackjackProbability(21, 12)).toBe(0.268);
    expect(blackjackProbability(30, 7)).toBe(0.276);
    expect(blackjackProbability(30, 15)).toBe(0.314);
  });
});

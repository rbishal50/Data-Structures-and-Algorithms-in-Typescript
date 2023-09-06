import { reversePolishNotation } from "./reversePolishNotation";

describe("reversePolishNotation", () => {
  it("should evaluate simple expressions correctly", () => {
    expect(reversePolishNotation(["2", "3", "+"])).toEqual(5);
    expect(reversePolishNotation(["4", "2", "-"])).toEqual(2);
    expect(reversePolishNotation(["3", "4", "*"])).toEqual(12);
    expect(reversePolishNotation(["6", "3", "/"])).toEqual(2);
  });

  it("should handle expressions with multiple operators correctly", () => {
    expect(reversePolishNotation(["2", "3", "4", "+", "*"])).toEqual(14);
    expect(reversePolishNotation(["4", "2", "3", "*", "+"])).toEqual(10);
    expect(reversePolishNotation(["3", "4", "+", "2", "/", "4", "-"])).toEqual(
      -1
    );
  });

  it("should handle expressions with negative numbers correctly", () => {
    expect(reversePolishNotation(["-2", "3", "+"])).toEqual(1);
    expect(reversePolishNotation(["2", "-3", "-"])).toEqual(5);
  });

  it("should handle expressions with zero correctly", () => {
    expect(reversePolishNotation(["0", "3", "+"])).toEqual(3);
    expect(reversePolishNotation(["0", "3", "-"])).toEqual(-3);
    expect(reversePolishNotation(["0", "3", "*"])).toEqual(0);
  });
});

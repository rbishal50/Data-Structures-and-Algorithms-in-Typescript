import { bestDigits } from "./bestDigits";

describe("bestDigits", () => {
  it("should return the largest possible number by removing 0 digits", () => {
    expect(bestDigits("12345", 0)).toBe("12345");
  });

  it("should return the largest possible number by removing 1 digit", () => {
    expect(bestDigits("1432219", 1)).toBe("432219");
  });

  it("should return the largest possible number by removing 2 digits", () => {
    expect(bestDigits("102001", 3)).toBe("201");
  });

  it("should return an empty string when all digits are removed", () => {
    expect(bestDigits("54321", 5)).toBe("");
  });
});

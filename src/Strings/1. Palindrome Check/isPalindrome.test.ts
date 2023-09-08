import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  it("should return true for a palindrome string", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single-character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  it("should return true for a case-insensitive palindrome string", () => {
    expect(isPalindrome("Aa")).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
  });
});

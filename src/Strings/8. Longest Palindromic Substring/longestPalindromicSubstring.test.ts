import { longestPalindromicSubstring } from "./longestPalindromicSubstring";

describe("longestPalindromicSubstring", () => {
  it("should return an empty string for an empty input string", () => {
    const result = longestPalindromicSubstring("");
    expect(result).toBe("");
  });

  it("should return the input string itself if it is a palindrome", () => {
    const result = longestPalindromicSubstring("racecar");
    expect(result).toBe("racecar");
  });

  it("should return the longest palindrome within the input string", () => {
    const result = longestPalindromicSubstring("abccbait's highnoon");
    expect(result).toBe("abccba");
  });

  it("should handle palindromes with even length", () => {
    const result = longestPalindromicSubstring("cbbd");
    expect(result).toBe("bb");
  });

  it("should handle palindromes with odd length", () => {
    const result = longestPalindromicSubstring("abcba");
    expect(result).toBe("abcba");
  });

  it("should handle a single character input string", () => {
    const result = longestPalindromicSubstring("x");
    expect(result).toBe("x");
  });
});

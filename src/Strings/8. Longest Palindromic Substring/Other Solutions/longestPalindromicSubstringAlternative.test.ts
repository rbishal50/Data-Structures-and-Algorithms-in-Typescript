import { longestPalindromicSubstringAlternative } from "./longestPalindromicSubstringAlternative";

describe("longestPalindromicSubstringAlternative", () => {
  it("should return an empty string for an empty input string", () => {
    const result = longestPalindromicSubstringAlternative("");
    expect(result).toBe("");
  });

  it("should return the input string itself if it is a palindrome", () => {
    const result = longestPalindromicSubstringAlternative("racecar");
    expect(result).toBe("racecar");
  });

  it("should return the longest palindrome within the input string", () => {
    const result = longestPalindromicSubstringAlternative(
      "abccbait's highnoon"
    );
    expect(result).toBe("abccba");
  });

  it("should handle palindromes with even length", () => {
    const result = longestPalindromicSubstringAlternative("cbbd");
    expect(result).toBe("bb");
  });

  it("should handle palindromes with odd length", () => {
    const result = longestPalindromicSubstringAlternative("abcba");
    expect(result).toBe("abcba");
  });

  it("should handle a single character input string", () => {
    const result = longestPalindromicSubstringAlternative("x");
    expect(result).toBe("x");
  });
});

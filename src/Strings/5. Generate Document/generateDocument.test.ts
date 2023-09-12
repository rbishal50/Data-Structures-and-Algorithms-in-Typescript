import { generateDocument } from "./generateDocument";

describe("generateDocument", () => {
  it("should return true when the document can be generated", () => {
    expect(generateDocument("abc", "abc")).toBe(true);
    expect(generateDocument("aabbcc", "abccba")).toBe(true);
    expect(generateDocument("aabbcc", "abcabc")).toBe(true);
    expect(generateDocument("a", "a")).toBe(true);
  });

  it("should return false when the document cannot be generated", () => {
    expect(generateDocument("abc", "abcd")).toBe(false);
    expect(generateDocument("aabb", "abc")).toBe(false);
    expect(generateDocument("aabbcc", "abcabcabc")).toBe(false);
    expect(generateDocument("", "abc")).toBe(false);
  });

  it("should handle special characters and spaces", () => {
    expect(generateDocument("a b c", "a c b")).toBe(true);
    expect(generateDocument("a@b#c", "cba@")).toBe(true);
    expect(generateDocument("a!b#c", "cba@")).toBe(false);
  });

  it("should handle duplicate characters in the document", () => {
    expect(generateDocument("abcad", "aabc")).toBe(true);
    expect(generateDocument("aaabbcc", "aabbcca")).toBe(true);
    expect(generateDocument("a", "aa")).toBe(false);
  });

  it("should handle edge cases", () => {
    expect(generateDocument("", "")).toBe(true);
    expect(generateDocument("abc", "")).toBe(true);
    expect(generateDocument("", "abc")).toBe(false);
  });
});

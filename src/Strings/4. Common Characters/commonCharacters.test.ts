import { commonCharacters } from "./commonCharacters";

describe("commonCharacters", () => {
  it("should return an array of characters common to all strings", () => {
    const strings = ["abcdef", "acdfgh", "abefgh"];
    expect(commonCharacters(strings)).toEqual(["a", "f"]);

    const strings3 = ["apple", "banana", "dragonfruit"];
    expect(commonCharacters(strings3)).toEqual(["a"]);

    const strings4 = ["hello", "world"];
    expect(commonCharacters(strings4)).toEqual(["l", "o"]);
  });

  it("should return an empty array for no unique characters", () => {
    const strings = ["abcdef", "ghij", "klmnop"];
    expect(commonCharacters(strings)).toEqual([]);

    const strings2 = ["123", "456", "789"];
    expect(commonCharacters(strings2)).toEqual([]);
  });

  it("should handle strings with spaces", () => {
    const strings = ["a b c", "d e f", "g h i"];
    expect(commonCharacters(strings)).toEqual([" "]);

    const strings2 = ["a b c", "d e f", "ghi"];
    expect(commonCharacters(strings2)).toEqual([]);
  });

  it("should handle special characters", () => {
    const strings = ["@#$%", "%^&*", "*&%^@"];
    expect(commonCharacters(strings)).toEqual(["%"]);

    const strings2 = ["a1bc", "123", "1!@#"];
    expect(commonCharacters(strings2)).toEqual(["1"]);
  });
});

import { reverseWordsInString } from "./reverseWordsInString";

describe("reverseWordsInString", () => {
  it("should reverse words in a string with spaces", () => {
    const input = "Hello World";
    const expected = "World Hello";
    const result = reverseWordsInString(input);
    expect(result).toBe(expected);
  });

  it("should handle a single word", () => {
    const input = "Hello";
    const expected = "Hello";
    const result = reverseWordsInString(input);
    expect(result).toBe(expected);
  });

  it("should handle a string with leading spaces", () => {
    const input = "   Hello   World   ";
    const expected = "   World   Hello   ";
    const result = reverseWordsInString(input);
    expect(result).toBe(expected);
  });

  it("should handle a string with multiple spaces between words", () => {
    const input = "Hello     World";
    const expected = "World     Hello";
    const result = reverseWordsInString(input);
    expect(result).toBe(expected);
  });

  it("should handle an input string with many white spaces", () => {
    const input = "this      string     has a     lot of   whitespace";
    const expected = "whitespace   of lot     a has     string      this";
    const result = reverseWordsInString(input);
    expect(result).toBe(expected);
  });

  it("should handle an empty input string", () => {
    const input = "";
    const expected = "";
    const result = reverseWordsInString(input);
    expect(result).toBe(expected);
  });
});

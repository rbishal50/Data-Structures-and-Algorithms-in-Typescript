import { oneEdit } from "./oneEdit";

describe("oneEdit", () => {
  it("should return true for strings that require at most one edit", () => {
    expect(oneEdit("pale", "ple")).toBe(true); // Remove 'a'
    expect(oneEdit("pales", "pale")).toBe(true); // Remove 's'
    expect(oneEdit("pale", "bale")).toBe(true); // Replace 'p' with 'b'
    expect(oneEdit("pale", "pales")).toBe(true); // Add 's'
  });

  it("should return false for strings that require more than one edit", () => {
    expect(oneEdit("pale", "bake")).toBe(false); // Requires more than one edit
    expect(oneEdit("abcd", "aebf")).toBe(false); // Requires more than one edit
  });

  it("should return true for identical strings", () => {
    expect(oneEdit("hello", "hello")).toBe(true); // Both strings are identical
  });

  it("should handle empty strings", () => {
    expect(oneEdit("", "")).toBe(true); // Both strings are empty
    expect(oneEdit("", "a")).toBe(true); // Add 'a' to an empty string
    expect(oneEdit("a", "")).toBe(true); // Remove 'a' from a string
  });

  it("should handle strings of different lengths", () => {
    expect(oneEdit("abc", "abcdef")).toBe(false); // Requires more than one edit
    expect(oneEdit("abcdef", "abc")).toBe(false); // Requires more than one edit
  });
});

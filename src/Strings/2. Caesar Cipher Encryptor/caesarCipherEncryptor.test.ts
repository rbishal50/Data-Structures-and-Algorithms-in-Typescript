import { caesarCipherEncryptor } from "./caesarCipherEncryptor";

describe("caesarCipherEncryptor", () => {
  it("should encrypt a string with a positive key", () => {
    expect(caesarCipherEncryptor("abc", 3)).toBe("def");
  });

  it("should encrypt a string with a negative key", () => {
    expect(caesarCipherEncryptor("def", -3)).toBe("abc");
  });

  it("should wrap around the alphabet when reaching the end", () => {
    expect(caesarCipherEncryptor("xyz", 3)).toBe("abc");
  });

  it("should return an empty string when the input is empty", () => {
    expect(caesarCipherEncryptor("", 5)).toBe("");
  });

  it("should handle a key of 0 (no encryption)", () => {
    expect(caesarCipherEncryptor("abc", 0)).toBe("abc");
  });

  it("should handle a key greater than 26", () => {
    expect(caesarCipherEncryptor("abc", 30)).toBe("efg");
  });

  it("should handle large strings", () => {
    expect(
      caesarCipherEncryptor(
        "kjwmntauvjjnmsagwgawkagfuaugjhawgnawgjhawjgawbfawghesh",
        15
      )
    ).toBe("zylbcipjkyycbhpvlvplzpvujpjvywplvcplvywplyvplquplvwthw");
  });
});

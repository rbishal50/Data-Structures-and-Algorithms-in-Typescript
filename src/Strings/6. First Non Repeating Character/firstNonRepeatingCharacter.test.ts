import { firstNonRepeatingCharacter } from "./firstNonRepeatingCharacter";

describe("firstNonRepeatingCharacter", () => {
  it("should return the index of the first non-repeating character", () => {
    expect(firstNonRepeatingCharacter("abcdef")).toBe(0);
    expect(firstNonRepeatingCharacter("abacde")).toBe(1);
    expect(firstNonRepeatingCharacter("aaabbbccc")).toBe(-1);
    expect(firstNonRepeatingCharacter("faadabcbbebdf")).toBe(6);
    expect(
      firstNonRepeatingCharacter(
        "aaaaaaaaaaaaaaaaaaaabbbbbbbbbbcccccccccccdddddddddddeeeeeeeeffghgh"
      )
    ).toBe(-1);
    expect(firstNonRepeatingCharacter("")).toBe(-1);
  });

  it("should handle special characters and spaces", () => {
    expect(firstNonRepeatingCharacter("a b c d e")).toBe(0);
    expect(firstNonRepeatingCharacter("a!b@c#d$e")).toBe(0);
    expect(firstNonRepeatingCharacter("@#@$#@$!")).toBe(7);
  });
});

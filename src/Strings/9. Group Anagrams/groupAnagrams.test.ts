import { groupAnagrams } from "./groupAnagrams";

describe("groupAnagrams", () => {
  it("should group anagrams correctly", () => {
    const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
    const expected = [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]];
    const result = groupAnagrams(words);
    expect(result).toEqual(expect.arrayContaining(expected));
  });

  it("should handle an empty input array", () => {
    const words: string[] = [];
    const result = groupAnagrams(words);
    expect(result).toEqual([]);
  });

  it("should handle an input array with a single word", () => {
    const words = ["hello"];
    const expected = [["hello"]];
    const result = groupAnagrams(words);
    expect(result).toEqual(expected);
  });

  it("should handle an input array with no anagrams", () => {
    const words = ["apple", "banana", "cherry"];
    const expected = [["apple"], ["banana"], ["cherry"]];
    const result = groupAnagrams(words);
    expect(result).toEqual(expected);
  });

  it("should handle an input array with repeated words", () => {
    const words = ["apple", "banana", "cherry", "banana", "apple"];
    const expected = [["apple", "apple"], ["banana", "banana"], ["cherry"]];
    const result = groupAnagrams(words);
    expect(result).toEqual(expected);
  });
});

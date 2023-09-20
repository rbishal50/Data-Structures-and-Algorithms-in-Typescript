import { semordnilap } from "./semordnilap";

describe("semordnilap", () => {
  it("should return an array of semordnilap pairs", () => {
    expect(semordnilap(["desserts", "stressed", "apple", "elppa"])).toEqual([
      ["desserts", "stressed"],
      ["apple", "elppa"],
    ]);
    expect(semordnilap(["word", "drow", "hello", "olleh"])).toEqual([
      ["word", "drow"],
      ["hello", "olleh"],
    ]);
    expect(
      semordnilap([
        "liver",
        "dog",
        "hello",
        "desserts",
        "evil",
        "test",
        "god",
        "stressed",
        "racecar",
        "palindromes",
        "semordnilap",
        "abcd",
        "live",
      ])
    ).toEqual([
      ["dog", "god"],
      ["desserts", "stressed"],
      ["evil", "live"],
      ["palindromes", "semordnilap"],
    ]);
  });

  it("should return an empty array if no semordnilap pairs are found", () => {
    expect(semordnilap(["hello", "world", "apple", "banana"])).toEqual([]);
  });

  it("should handle special characters and spaces", () => {
    expect(semordnilap(["m adam", "mada m", "noon", "no on"])).toEqual([
      ["m adam", "mada m"],
    ]);
  });

  it("should handle an empty input array", () => {
    expect(semordnilap([])).toEqual([]);
  });
});

import { minimumCharactersForWords } from "./minCharactersForWords";

describe("minimumCharactersForWords", () => {
  it("should return an array of minimum characters required to form the input words", () => {
    expect(minimumCharactersForWords(["hello", "world"])).toEqual([
      "h",
      "e",
      "l",
      "l",
      "o",
      "w",
      "r",
      "d",
    ]);

    expect(
      minimumCharactersForWords(["this", "that", "did", "deed", "them!", "a"])
    ).toEqual(["t", "t", "h", "i", "s", "a", "d", "d", "e", "e", "m", "!"]);

    expect(minimumCharactersForWords(["!!!2", "234", "222", "432"])).toEqual([
      "2",
      "2",
      "2",
      "3",
      "4",
      "!",
      "!",
      "!",
    ]);

    expect(minimumCharactersForWords(["ds", "algo", "ch"])).toEqual([
      "d",
      "s",
      "a",
      "l",
      "g",
      "o",
      "c",
      "h",
    ]);
  });

  it("should handle empty input", () => {
    expect(minimumCharactersForWords([])).toEqual([]);
  });

  it("should handle input with duplicate characters", () => {
    expect(minimumCharactersForWords(["hello", "world", "hello"])).toEqual([
      "h",
      "e",
      "l",
      "l",
      "o",
      "w",
      "r",
      "d",
    ]);
  });
});

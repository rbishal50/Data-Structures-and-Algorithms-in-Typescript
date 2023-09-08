import { runLengthEncoding } from "./runLengthEncoding";

describe("runLengthEncoding", () => {
  it("should encode a simple string with no repeating characters", () => {
    expect(runLengthEncoding("abcdefg")).toBe("1a1b1c1d1e1f1g");
  });

  it("should encode a string with repeated characters", () => {
    expect(runLengthEncoding("aaabbbccc")).toBe("3a3b3c");
  });

  it("should encode a string with a single character", () => {
    expect(runLengthEncoding("aaaa")).toBe("4a");
  });

  it("should encode a string with mixed characters", () => {
    expect(runLengthEncoding("aabccdddd")).toBe("2a1b2c4d");
  });

  it("should encode a string with digits and special characters", () => {
    expect(runLengthEncoding("112233!!")).toBe("2122232!");
  });

  it("should handle a long string with many repeating characters", () => {
    expect(
      runLengthEncoding(
        ";;;;;;;;;;;;''''''''''''''''''''1233333332222211112222111s"
      )
    ).toBe("9;3;9'9'2'111273524142311s");
  });
});

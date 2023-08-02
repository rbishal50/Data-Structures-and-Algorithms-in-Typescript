import { phoneNumberMnemonics } from "./phoneNumberMnemonics";

describe("phoneNumberMnemonics", () => {
  it("should return an empty array for an empty phone number", () => {
    expect(phoneNumberMnemonics("")).toEqual([]);
  });

  it("should return mnemonics for the single digit phone number", () => {
    expect(phoneNumberMnemonics("0")).toEqual(["0"]);
    expect(phoneNumberMnemonics("1")).toEqual(["1"]);
    expect(phoneNumberMnemonics("2")).toEqual(["a", "b", "c"]);
    expect(phoneNumberMnemonics("9")).toEqual(["w", "x", "y", "z"]);
  });

  it("should return mnemonics for the two digit phone number", () => {
    expect(phoneNumberMnemonics("23")).toEqual([
      "ad",
      "ae",
      "af",
      "bd",
      "be",
      "bf",
      "cd",
      "ce",
      "cf",
    ]);
  });

  it("should return mnemonics for the four digit phone number", () => {
    expect(phoneNumberMnemonics("1905")).toEqual([
      "1w0j",
      "1w0k",
      "1w0l",
      "1x0j",
      "1x0k",
      "1x0l",
      "1y0j",
      "1y0k",
      "1y0l",
      "1z0j",
      "1z0k",
      "1z0l",
    ]);
  });

  it("should return mnemonics for the four digit phone number with repeating characters", () => {
    expect(phoneNumberMnemonics("1212")).toEqual([
      "1a1a",
      "1a1b",
      "1a1c",
      "1b1a",
      "1b1b",
      "1b1c",
      "1c1a",
      "1c1b",
      "1c1c",
    ]);
  });
});

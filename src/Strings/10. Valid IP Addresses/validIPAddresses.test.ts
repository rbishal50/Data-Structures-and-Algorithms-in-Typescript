import { validIPAddresses } from "./validIPAddresses";

describe("validIPAddresses", () => {
  it("should return valid IP addresses", () => {
    const input = "1921680";
    const expected = [
      "1.9.216.80",
      "1.92.16.80",
      "1.92.168.0",
      "19.2.16.80",
      "19.2.168.0",
      "19.21.6.80",
      "19.21.68.0",
      "19.216.8.0",
      "192.1.6.80",
      "192.1.68.0",
      "192.16.8.0",
    ];

    const result = validIPAddresses(input);
    expect(result).toEqual(expected);
  });

  it("should handle an empty input string", () => {
    const input = "";
    const result = validIPAddresses(input);
    expect(result).toEqual([]);
  });

  it("should handle input with no valid IP addresses", () => {
    const input = "256256256256";
    const result = validIPAddresses(input);
    expect(result).toEqual([]);
  });

  it("should handle input with valid IP addresses and leading zeros", () => {
    const input = "3700100";
    const expected = ["3.70.0.100", "37.0.0.100"];
    const result = validIPAddresses(input);
    expect(result).toEqual(expected);
  });

  it("should handle repeated characters", () => {
    const input = "255255255255";
    const expected = ["255.255.255.255"];

    const result = validIPAddresses(input);
    expect(result).toEqual(expected);
  });
});

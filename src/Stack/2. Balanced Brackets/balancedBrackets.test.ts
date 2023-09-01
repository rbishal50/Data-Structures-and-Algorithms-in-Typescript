import { balancedBrackets } from "./balancedBrackets";

describe("balancedBrackets", () => {
  it("should return true for balanced brackets", () => {
    expect(balancedBrackets("()")).toBe(true);
    expect(balancedBrackets("[]")).toBe(true);
    expect(balancedBrackets("{}")).toBe(true);
    expect(balancedBrackets("[()]")).toBe(true);
    expect(balancedBrackets("{[()]}")).toBe(true);
  });

  it("should return false for unbalanced brackets", () => {
    expect(balancedBrackets("(")).toBe(false);
    expect(balancedBrackets(")")).toBe(false);
    expect(balancedBrackets("[}")).toBe(false);
    expect(balancedBrackets("[()](")).toBe(false);
    expect(balancedBrackets("{[()]}}")).toBe(false);
  });

  it("should handle other characters in the string", () => {
    expect(balancedBrackets("abc")).toBe(true);
    expect(balancedBrackets("a(b)c")).toBe(true);
    expect(balancedBrackets("a{b}c")).toBe(true);
    expect(balancedBrackets("a[b]c")).toBe(true);
  });

  it("should handle nested brackets", () => {
    expect(balancedBrackets("a[b(c)]d")).toBe(true);
    expect(balancedBrackets("a[b{c}]d")).toBe(true);
    expect(balancedBrackets("a{b(c]d}")).toBe(false);
  });

  it("should handle empty string", () => {
    expect(balancedBrackets("")).toBe(true);
  });
});

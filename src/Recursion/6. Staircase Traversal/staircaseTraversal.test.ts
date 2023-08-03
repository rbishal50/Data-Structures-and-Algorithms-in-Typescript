import { staircaseTraversal } from "./staircaseTraversal";

describe("staircaseTraversal", () => {
  it("should return the correct number of ways for simple cases", () => {
    expect(staircaseTraversal(3, 2)).toBe(3); // (1, 1, 1), (1, 2), and (2, 1)
    expect(staircaseTraversal(4, 3)).toBe(7); // (1, 1, 1, 1), (1, 1, 2), (1, 2, 1), (1, 3), (2, 1, 1), (2, 2), and (3, 1)
    expect(staircaseTraversal(5, 2)).toBe(8); // (1, 1, 1, 1, 1), (1, 1, 1, 2), (1, 1, 2, 1), (1, 2, 1, 1), (1, 2, 2), (2, 1, 1, 1), (2, 1, 2), and (2, 2, 1)
  });

  it("should handle cases where height and maxSteps are equal", () => {
    expect(staircaseTraversal(3, 3)).toBe(4); // (1, 1, 1), (1, 2), (2, 1), and (3)
    expect(staircaseTraversal(2, 2)).toBe(2); // (1, 1) and (2)
  });

  it("should return 1 when height is 0", () => {
    expect(staircaseTraversal(0, 2)).toBe(1); // There is only one way to climb 0 steps (doing nothing).
  });

  it("should return 0 when maxSteps is 0", () => {
    expect(staircaseTraversal(5, 0)).toBe(0); // There is no way to climb when maxSteps is 0.
  });
});

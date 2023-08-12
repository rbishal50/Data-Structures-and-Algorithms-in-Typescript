import { binaryTreeDiameter } from "./binaryTreeDiameter";

describe("binaryTreeDiameter", () => {
  test("Calculates diameter for a simple binary tree", () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: null,
        right: null,
      },
      right: {
        value: 3,
        left: null,
        right: null,
      },
    };

    expect(binaryTreeDiameter(tree)).toBe(2); // Longest path: 2 -> 1 -> 3
  });

  test("Calculates diameter for a more complex binary tree", () => {
    const tree = {
      value: 1,
      left: {
        value: 2,
        left: {
          value: 4,
          left: null,
          right: null,
        },
        right: {
          value: 5,
          left: null,
          right: null,
        },
      },
      right: {
        value: 3,
        left: null,
        right: {
          value: 6,
          left: null,
          right: {
            value: 7,
            left: null,
            right: null,
          },
        },
      },
    };

    expect(binaryTreeDiameter(tree)).toBe(5); // Longest path: 4 -> 2 -> 1 -> 3 -> 6 -> 7
  });
});

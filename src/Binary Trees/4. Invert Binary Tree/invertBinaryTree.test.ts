import { invertBinaryTree } from "./invertBinaryTree";

describe("invertBinaryTree", () => {
  test("Inverts a simple binary tree", () => {
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

    invertBinaryTree(tree);

    expect(tree.value).toBe(1);
    expect(tree.left.value).toBe(3);
    expect(tree.right.value).toBe(2);
    expect(tree.left.left).toBe(null);
    expect(tree.left.right).toBe(null);
    expect(tree.right.left).toBe(null);
    expect(tree.right.right).toBe(null);
  });

  test("Inverts a more complex binary tree", () => {
    const tree = {
      value: 4,
      left: {
        value: 2,
        left: {
          value: 1,
          left: null,
          right: null,
        },
        right: {
          value: 3,
          left: null,
          right: null,
        },
      },
      right: {
        value: 7,
        left: {
          value: 6,
          left: null,
          right: null,
        },
        right: {
          value: 9,
          left: null,
          right: null,
        },
      },
    };

    invertBinaryTree(tree);

    // Validate the inverted structure
    expect(tree.value).toBe(4);
    expect(tree.left.value).toBe(7);
    expect(tree.right.value).toBe(2);
    expect(tree.left.left.value).toBe(9);
    expect(tree.left.right.value).toBe(6);
    expect(tree.right.left.value).toBe(3);
    expect(tree.right.right.value).toBe(1);
  });

  test("Handles an empty tree", () => {
    const tree = null;
    invertBinaryTree(tree);

    expect(tree).toBe(null);
  });
});

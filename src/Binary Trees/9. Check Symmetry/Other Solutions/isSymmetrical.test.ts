import {
  BinaryTree,
  isSymmetricalAlternative,
} from "./isSymmetricalAlternative";

describe("isSymmetricalAlternative", () => {
  it("should return true for a symmetrical tree", () => {
    /*
            1
           / \
          2   2
         / \ / \
        3  4 4  3
    */
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(2);
    root.left.left = new BinaryTree(3);
    root.left.right = new BinaryTree(4);
    root.right.left = new BinaryTree(4);
    root.right.right = new BinaryTree(3);

    expect(isSymmetricalAlternative(root)).toBe(true);
  });

  it("should return false for a non-symmetrical tree", () => {
    /*
            1
           / \
          2   2
           \   \
           3    3
    */
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(2);
    root.left.right = new BinaryTree(3);
    root.right.right = new BinaryTree(3);

    expect(isSymmetricalAlternative(root)).toBe(false);
  });

  it("should return true for a tree with a single node", () => {
    const root = new BinaryTree(1);
    expect(isSymmetricalAlternative(root)).toBe(true);
  });
});

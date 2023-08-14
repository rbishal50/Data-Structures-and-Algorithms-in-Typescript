import {
  BinaryTree,
  heightBalancedBinaryTree,
} from "./heightBalancedBinaryTree";

describe("heightBalancedBinaryTree", () => {
  it("should return true for a balanced tree", () => {
    /*
          1
         / \
        2   3
       /
      4
    */
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);

    expect(heightBalancedBinaryTree(root)).toBe(true);
  });

  it("should return false for an unbalanced tree", () => {
    /*
          1
         / \
        2   3
       /
      4
     /
    5
    */
    const root = new BinaryTree(1);
    root.left = new BinaryTree(2);
    root.right = new BinaryTree(3);
    root.left.left = new BinaryTree(4);
    root.left.left.left = new BinaryTree(5);

    expect(heightBalancedBinaryTree(root)).toBe(false);
  });

  it("should return true for a tree with a single node", () => {
    const root = new BinaryTree(1);
    expect(heightBalancedBinaryTree(root)).toBe(true);
  });
});

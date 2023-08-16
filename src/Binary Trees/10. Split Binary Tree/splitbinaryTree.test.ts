import { BinaryTree, splitBinaryTree } from "./splitBinaryTree";

describe("splitBinaryTree", () => {
  it("should return 0 when no split is possible", () => {
    const tree = new BinaryTree(1);
    tree.left = new BinaryTree(2);
    tree.right = new BinaryTree(5);

    expect(splitBinaryTree(tree)).toBe(0);
  });

  it("should return the correct split sum", () => {
    const tree = new BinaryTree(1);
    tree.left = new BinaryTree(3);
    tree.right = new BinaryTree(-2);
    tree.left.left = new BinaryTree(6);
    tree.left.right = new BinaryTree(-5);
    tree.right.left = new BinaryTree(5);
    tree.right.right = new BinaryTree(2);
    tree.left.left.left = new BinaryTree(2);

    expect(splitBinaryTree(tree)).toBe(6);
  });

  it("should return the correct split sum for larger trees", () => {
    const tree = new BinaryTree(1);
    tree.left = new BinaryTree(9);
    tree.right = new BinaryTree(20);
    tree.left.left = new BinaryTree(5);
    tree.left.right = new BinaryTree(2);
    tree.right.left = new BinaryTree(30);
    tree.right.right = new BinaryTree(10);
    tree.left.left.left = new BinaryTree(102);
    tree.right.left.left = new BinaryTree(35);
    tree.right.left.right = new BinaryTree(25);
    tree.left.right.left = new BinaryTree(3);

    expect(splitBinaryTree(tree)).toBe(121);
  });
});

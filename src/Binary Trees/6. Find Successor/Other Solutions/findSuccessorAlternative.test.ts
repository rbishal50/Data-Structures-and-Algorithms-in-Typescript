import {
  findSuccessorAlternative,
  BinaryTree,
} from "./findSuccessorAlternative";

describe("findSuccessorAlternative", () => {
  it("should return the correct successor for a given node", () => {
    /*
    Construct a binary tree:
            5
           / \
          3   8
         / \   \
        2   4   9
    */

    const root = new BinaryTree(5);
    root.left = new BinaryTree(3);
    root.left.parent = root;
    root.left.left = new BinaryTree(2);
    root.left.left.parent = root.left;
    root.left.right = new BinaryTree(4);
    root.left.right.parent = root.left;

    root.right = new BinaryTree(8);
    root.right.parent = root;
    root.right.right = new BinaryTree(9);
    root.right.right.parent = root.right;

    const result1 = findSuccessorAlternative(root, root.left.right); // Node 4's successor is 5
    expect(result1).toBe(root);

    const result2 = findSuccessorAlternative(root, root.left.left); // Node 2's successor is 3
    expect(result2).toBe(root.left);

    const result3 = findSuccessorAlternative(root, root); // Root node's successor is 8
    expect(result3).toBe(root.right);

    const result4 = findSuccessorAlternative(root, root.right.right); // Node 9 has no successor
    expect(result4).toBe(null);
  });

  it("should return null for a node with no successor", () => {
    /*
    Construct a binary tree:
        1
         \
          2
    */

    const root = new BinaryTree(1);
    root.right = new BinaryTree(2);
    root.right.parent = root;

    const result = findSuccessorAlternative(root, root.right); // Node 2 has no successor
    expect(result).toBe(null);
  });
});

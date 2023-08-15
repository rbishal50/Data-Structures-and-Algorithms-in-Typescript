import { BinaryTree, mergeBinaryTrees } from "./mergeBinaryTrees";

describe("mergeBinaryTrees", () => {
  it("should merge two balanced trees with overlapping nodes", () => {
    /*
      Tree 1           Tree 2        Merged Tree
         1               2               3
        / \             / \             / \
       3   2           1   3           4   3
      /                 \   \             \
     5                   4   7             7
    */
    const tree1 = new BinaryTree(1);
    tree1.left = new BinaryTree(3);
    tree1.right = new BinaryTree(2);
    tree1.left.left = new BinaryTree(5);

    const tree2 = new BinaryTree(2);
    tree2.left = new BinaryTree(1);
    tree2.right = new BinaryTree(3);
    tree2.left.right = new BinaryTree(4);
    tree2.right.right = new BinaryTree(7);

    const mergedTree = mergeBinaryTrees(tree1, tree2);

    expect(mergedTree!.value).toBe(3);
    expect(mergedTree!.left!.value).toBe(4);
    expect(mergedTree!.right!.value).toBe(5);
    expect(mergedTree!.left!.left!.value).toBe(5);
    expect(mergedTree!.right!.right!.value).toBe(7);
  });

  it("should merge when one tree is empty", () => {
    const tree1 = new BinaryTree(1);
    tree1.left = new BinaryTree(3);

    const tree2 = null;

    const mergedTree = mergeBinaryTrees(tree1, tree2);

    expect(mergedTree!.value).toBe(1);
    expect(mergedTree!.left!.value).toBe(3);
    expect(mergedTree!.right).toBeNull();
  });

  it("should merge when both trees are empty", () => {
    const tree1 = null;
    const tree2 = null;

    const mergedTree = mergeBinaryTrees(tree1, tree2);

    expect(mergedTree).toBeNull();
  });
});

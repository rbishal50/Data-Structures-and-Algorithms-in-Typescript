export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
// O(H) space
// O(N) time, where N is the no. of nodes & H is the height of the tree

export function mergeBinaryTrees(
  tree1: BinaryTree | null,
  tree2: BinaryTree | null
): BinaryTree | null {
  // Base cases
  if (tree1 === null) return tree2;
  if (tree2 === null) return tree1;

  // Merge (sum) the values for current node
  tree1.value += tree2.value;

  // Recursively merge other nodes
  tree1.left = mergeBinaryTrees(tree1.left, tree2.left);
  tree1.right = mergeBinaryTrees(tree1.right, tree2.right);

  return tree1;
}

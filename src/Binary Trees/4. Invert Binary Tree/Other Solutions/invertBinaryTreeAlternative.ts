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

// O(D) space
// O(N) time, where N is the no. of nodes & D is the depth in the binary tree

export function invertBinaryTreeAlternative(tree: BinaryTree | null): void {
  // Base case => leaf node's children
  if (tree === null) return;

  // Swap nodes if exists
  swapNodes(tree);

  // Invert children of current left and right child recursively
  invertBinaryTreeAlternative(tree.left);
  invertBinaryTreeAlternative(tree.right);
}

// Swap nodes helper
function swapNodes(tree: BinaryTree) {
  const left = tree.left;
  tree.left = tree.right;
  tree.right = left;
}

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
// O(N) time, where N is the no. of nodes and H is the height (depth) of the binary tree

export function sumOfNodeDepthsAlternative(
  root: BinaryTree | null,
  depth = 0
): number {
  if (root === null) return 0;

  return (
    depth +
    sumOfNodeDepthsAlternative(root.left, depth + 1) +
    sumOfNodeDepthsAlternative(root.right, depth + 1)
  );
}

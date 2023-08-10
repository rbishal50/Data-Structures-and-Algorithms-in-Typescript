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

export function evaluateExpressionTree(tree: BinaryTree): number {
  // Base case operand (leaf node)
  if (tree.value >= 0) return tree.value;

  // Recursively get the values if operator
  const leftValue = evaluateExpressionTree(tree.left!);
  const rightValue = evaluateExpressionTree(tree.right!);

  // Calculate based on operator
  if (tree.value === -4) return leftValue * rightValue;
  if (tree.value === -3) return Math.trunc(leftValue / rightValue);
  if (tree.value === -2) return leftValue - rightValue;

  return leftValue + rightValue;
}

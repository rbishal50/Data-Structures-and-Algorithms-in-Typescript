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

// O(N) space
// O(N) time, where N is the no. of nodes in the binary tree

export function branchSums(root: BinaryTree): number[] {
  const sums: number[] = [];
  calculateBranchSum(root, sums);
  return sums;
}

function calculateBranchSum(node: BinaryTree | null, sums: number[], sum = 0) {
  if (!node) return;

  // Add the node's value to the sum
  sum += node.value;

  // If we are at the leaf node
  if (!node.left && !node.right) {
    sums.push(sum);
    return;
  }

  // Else calculate branch sum for first left, then right sub tree
  calculateBranchSum(node.left, sums, sum);
  calculateBranchSum(node.right, sums, sum);
}

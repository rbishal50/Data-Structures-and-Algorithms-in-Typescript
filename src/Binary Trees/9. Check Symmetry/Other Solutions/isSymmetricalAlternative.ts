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

export function isSymmetricalAlternative(tree: BinaryTree): boolean {
  return checkSymmetry(tree.left, tree.right);
}

function checkSymmetry(
  left: BinaryTree | null,
  right: BinaryTree | null
): boolean {
  // Recursive case
  if (left && right && left.value === right.value) {
    return (
      checkSymmetry(left.left, right.right) &&
      checkSymmetry(left.right, right.left)
    );
  }

  // Base case
  return left?.value === right?.value;
}

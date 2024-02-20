class BST {
  value: number;
  left: BST | null;
  right: BST | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// O(D) space & O(N) time
// where N is the no. of nodes & D is the depth in the binary search tree

export function validateBst(tree: BST): boolean {
  return validateBstHelper(tree, -Infinity, Infinity);
}

function validateBstHelper(
  tree: BST | null,
  min: number,
  max: number
): boolean {
  // Base cases
  if (tree === null) return true;
  if (tree.value < min || tree.value >= max) return false;

  // Check for right and left tree validity
  const isLeftValid = validateBstHelper(tree.left, min, tree.value);
  return isLeftValid && validateBstHelper(tree.right, tree.value, max);
}

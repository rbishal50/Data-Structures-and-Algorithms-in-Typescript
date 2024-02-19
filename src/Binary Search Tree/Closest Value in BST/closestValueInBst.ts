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

// O(1) space & O(logN) time in average
// O(1) space & O(N) time in worst
// where N is the no. of nodes in the binary search tree

export function closestValueInBst(tree: BST, target: number) {
  return closestValueInBstHelper(tree, tree.value, target);
}

// Closest value in BST helper
function closestValueInBstHelper(
  tree: BST | null,
  closest: number,
  target: number
): number {
  // Base case
  if (tree === null) return closest;

  // Update the closest value
  if (Math.abs(target - tree.value) < Math.abs(target - closest)) {
    closest = tree.value;
  }

  // Traverse left or right tree based on the target
  if (target < tree.value) {
    return closestValueInBstHelper(tree.left, closest, target);
  } else if (target > tree.value) {
    return closestValueInBstHelper(tree.right, closest, target);
  }
  return closest;
}

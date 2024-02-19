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

export function findClosestValueInBst(tree: BST, target: number) {
  let currentNode: BST | null = tree;
  let closest = tree.value;

  while (currentNode !== null) {
    // Update the closest value
    if (Math.abs(target - currentNode.value) < Math.abs(target - closest)) {
      closest = currentNode.value;
    }

    // Traverse left or right tree based on the target; break if equal to the target
    if (target < currentNode.value) {
      currentNode = currentNode.left;
      continue;
    }
    if (target > currentNode.value) {
      currentNode = currentNode.right;
      continue;
    }
    break;
  }
  return closest;
}

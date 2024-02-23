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

// O(N) space & O(N) time
// where N is the no. of nodes in the binary search tree

export function minHeightBst(array: number[]): BST | null {
  return constructMinHeightBst(array, 0, array.length - 1);
}

// Construct mikn-height BST helper
function constructMinHeightBst(
  array: number[],
  startIndex: number,
  endIndex: number
): BST | null {
  if (endIndex < startIndex) return null;

  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const bst = new BST(array[midIndex]);
  bst.left = constructMinHeightBst(array, startIndex, midIndex - 1);
  bst.right = constructMinHeightBst(array, midIndex + 1, endIndex);
  return bst;
}

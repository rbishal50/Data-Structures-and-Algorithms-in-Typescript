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
export function inOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    inOrderTraverse(tree.left, array);
    array.push(tree.value);
    inOrderTraverse(tree.right, array);
  }

  return array;
}

// O(N) space & O(N) time
// where N is the no. of nodes in the binary search tree
export function preOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    array.push(tree.value);
    preOrderTraverse(tree.left, array);
    preOrderTraverse(tree.right, array);
  }
  return array;
}

// O(N) space & O(N) time
// where N is the no. of nodes in the binary search tree
export function postOrderTraverse(tree: BST | null, array: number[]) {
  if (tree !== null) {
    postOrderTraverse(tree.left, array);
    postOrderTraverse(tree.right, array);
    array.push(tree.value);
  }
  return array;
}

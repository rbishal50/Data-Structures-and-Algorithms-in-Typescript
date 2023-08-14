export class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;
  parent: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}
// O(1) space
// O(H) time, where H is the height of the binary tree

export function findSuccessorAlternative(
  tree: BinaryTree,
  node: BinaryTree
): BinaryTree | null {
  // If node has a right child, the successor would be the leftmost child in the right subtree
  if (node.right !== null) {
    return getLeftMostChild(node.right);
  }

  // Else the successor is the immediate left parent (going up)
  // The parent that generated the left node going up
  return getImmediateParent(node);
}

// Leftmost child finder helper
function getLeftMostChild(node: BinaryTree): BinaryTree | null {
  let currentNode = node;

  while (currentNode.left !== null) {
    currentNode = currentNode.left;
  }

  return currentNode;
}

// Immediate parent finder helper
function getImmediateParent(node: BinaryTree): BinaryTree | null {
  let currentNode = node;
  while (currentNode?.parent?.right === currentNode) {
    currentNode = currentNode.parent;
  }

  return currentNode.parent;
}

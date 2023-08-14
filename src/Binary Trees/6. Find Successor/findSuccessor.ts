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
// O(N) space
// O(N) time, where N are the no. of nodes

export function findSuccessor(
  tree: BinaryTree,
  node: BinaryTree
): BinaryTree | null {
  // get in order traversed nodes
  const inOrderTraversedNodes = getInOrderTraversedNodes(tree);

  // Loop to find the node
  for (let i = 0; i < inOrderTraversedNodes.length; i++) {
    const currentNode = inOrderTraversedNodes[i];
    // Last item traversed won't have a successor node
    if (i === inOrderTraversedNodes.length - 1) continue;

    // Return successor for other nodes
    if (currentNode === node) return inOrderTraversedNodes[i + 1];
  }

  return null;
}

// In-order traversal helper
function getInOrderTraversedNodes(
  node: BinaryTree | null,
  order: BinaryTree[] = []
) {
  if (node === null) return order;

  getInOrderTraversedNodes(node.left, order);
  order.push(node);
  getInOrderTraversedNodes(node.right, order);

  return order;
}

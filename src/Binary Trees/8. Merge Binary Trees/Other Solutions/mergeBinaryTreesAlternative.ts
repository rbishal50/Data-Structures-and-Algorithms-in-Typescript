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

export function mergeBinaryTreesAlternative(
  tree1: BinaryTree | null,
  tree2: BinaryTree | null
): BinaryTree | null {
  // Base cases
  // We will mutate tree1 in the loop
  if (tree1 === null) return tree2;

  const tree1Stack: Array<BinaryTree> = [tree1];
  const tree2Stack: Array<BinaryTree | null> = [tree2];

  while (tree1Stack.length > 0) {
    // Pop the nodes from the stack
    const node1 = tree1Stack.pop()!;
    const node2 = tree2Stack.pop();

    // If no node2 then continue, node1 is already in our tree as we will mutate tree1 for output
    if (!node2) continue;

    node1.value += node2.value;

    if (!node1.left) {
      node1.left = node2.left;
    } else {
      tree1Stack.push(node1.left);
      tree2Stack.push(node2.left);
    }

    if (!node1.right) {
      node1.right = node2.right;
    } else {
      tree1Stack.push(node1.right);
      tree2Stack.push(node2.right);
    }
  }

  return tree1;
}

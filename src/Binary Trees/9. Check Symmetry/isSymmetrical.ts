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

export function isSymmetrical(tree: BinaryTree): boolean {
  // Create 2 stacks for left and right sub trees
  const stackLeft: Array<BinaryTree | null> = [tree.left];
  const stackRight: Array<BinaryTree | null> = [tree.right];

  while (stackLeft.length > 0) {
    // Pop from stacks
    const left = stackLeft.pop() ?? null;
    const right = stackRight.pop() ?? null;

    // If both nodes are absent, no need to check
    if (!left && !right) continue;

    // Asymmetry logic
    if (!left || !right || left.value !== right.value) return false;

    // Push mirror nodes to left and right stacks
    stackLeft.push(left.left);
    stackLeft.push(left.right);

    stackRight.push(right.right);
    stackRight.push(right.left);
  }

  return true;
}

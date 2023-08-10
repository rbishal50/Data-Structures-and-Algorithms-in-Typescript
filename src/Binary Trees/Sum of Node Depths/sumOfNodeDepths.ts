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
// O(N) time, where N is the no. of nodes and H is the height (depth) of the binary tree

export function sumOfNodeDepths(root: BinaryTree): number {
  // The resulting running sum
  let sum = 0;

  // The stack, initially with the root
  const stack: { node: BinaryTree | null; depth: number }[] = [
    { node: root, depth: 0 },
  ];

  while (stack.length > 0) {
    const { node, depth } = stack.pop()!;

    // Handle cases with node being null
    if (node === null) continue;

    // Add the current depth (pooped element is the parent)
    sum += depth;

    stack.push({ node: node.left, depth: depth + 1 });
    stack.push({ node: node.right, depth: depth + 1 });
  }

  return sum;
}
